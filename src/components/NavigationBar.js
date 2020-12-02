import React from 'react';
import "../style.css";
import $ from 'jquery';

import gsap from "gsap";
import { TweenMax } from 'gsap/all';
import {Link} from 'react-router-dom';

// JSX Element for the hamburger menu
const HamburgerMenu = (open) => {return(<div className="PortfolioHamburger">
                        <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"
                                style={{display: !open ? "block" : "none"}}>
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.75 10V7.5H26.25V10H3.75ZM3.75 16.25H26.25V13.75H3.75V16.25ZM3.75 22.5H26.25V20H3.75V22.5Z" fill="white"/>
                        </svg>
                        <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" 
                              style={{display: open ? "block" : "none"}}>
                        <path d="M23.75 8.0125L21.9875 6.25L15 13.2375L8.0125 6.25L6.25 8.0125L13.2375 15L6.25 21.9875L8.0125 23.75L15 16.7625L21.9875 23.75L23.75 21.9875L16.7625 15L23.75 8.0125Z" fill="white"/>
                        </svg>
                      </div>)}

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: this.props.title,
            logo: "Phipson",
            nav: "About",
            onChange: this.props.onChange,
            link: "/"
        }

        this.changeTitleText = this.changeTitleText.bind(this);
        this.changeLogoButton = this.changeLogoButton.bind(this);
        this.changeHamburger = this.changeHamburger.bind(this);
    }


    componentDidMount() {
        this.props.onRef(this);

        $(".PortfolioLogo").on("mouseenter", function() {
            gsap.to($(".PortfolioLogo"), {css: {letterSpacing: "0.1em"}})
        })

        $(".PortfolioLogo").on("mouseleave", function() {
            gsap.to($(".PortfolioLogo"), {css: {letterSpacing: "0em"}})
        })

        $(".PortfolioNav").on("mouseenter", function() {
            gsap.to($(".PortfolioNav"), {css: {letterSpacing: "0.1em"}})
        })

        $(".PortfolioNav").on("mouseleave", function() {
            gsap.to($(".PortfolioNav"), {css: {letterSpacing: "0em"}})
        })
    }

    componentWillUnmount() {
        this.props.onRef(null);
    }

    changeLogoButton(newButtonText, newOnChange, newLink) {
        TweenMax.to($(".PortfolioLogo"), {css: {opacity: 0}, duration: 0.2,
                    onComplete: () => {
                        this.setState(() => ({
                            logo: newButtonText,
                            onChange: newOnChange,
                            link: newLink
                        }), () => {
                            TweenMax.to($(".PortfolioLogo"), {css: {opacity: 1}, duration: 0.2});
                        })
                    }})
    }

    changeTitleText(newText) {
        TweenMax.to($(".PortfolioTitle"), {css: {opacity: 0}, duration: 0.2,
                    onComplete: () => {
                        this.setState(() => ({
                            title: newText,
                        }), () => {
                            TweenMax.to($(".PortfolioTitle"), {css: {opacity: 0.5}, duration: 0.2});
                        })
                    }})
    }

    changeHamburger(newDiv) {
        TweenMax.to($(".PortfolioNav"), {css: {opacity: 0}, duration: 0.2,
                    onComplete: () => {
                        this.setState(() => ({
                            nav: newDiv,
                        }), () => {
                            TweenMax.to($(".PortfolioNav"), {css: {opacity: 1}, duration: 0.2});
                        })
                    }})
    }

    // Uses the onStateChange function passed from App.js to change pages
    render() { 
        return (
                <div className="PortfolioMenuWrapper">
                    <Link to={this.state.link} onClick={this.state.onChange}>
                    <div className="PortfolioLogo">
                        {this.state.logo}
                    </div>
                    </Link>
                    <div className="PortfolioTitle">
                        {this.state.title}
                    </div>
                    <div className="PortfolioNav"
                        onClick={() => {this.props.navClick(!this.props.open)}}>
                        {HamburgerMenu(this.props.open)}
                    </div>
                </div>
            );
        }
}

export default NavigationBar;
