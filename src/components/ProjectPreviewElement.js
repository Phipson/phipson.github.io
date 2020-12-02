import { HashRouter } from 'react-router-dom';
import React, {Component} from 'react';
import '../style.css';
import $ from 'jquery';
import gsap from "gsap";
import { TweenMax, ScrollToPlugin } from 'gsap/all';
import {Link} from 'react-router-dom';

const LinkNames = ["mixed_reality", "ux_design", "software_development"]

gsap.registerPlugin(ScrollToPlugin);

// Holds a component for a project that will be clicked on to show the actual project page
export default class ProjectPreviewElement extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: this.props.name,
            desc: this.props.desc,
            page: this.props.page,
            img: this.props.img,
            link: this.props.link
        }

        this.handleScrollLocation = this.handleScrollLocation.bind(this);
    }

    // This is called by the SideCarousel element to set the specific scroll position we want to navigate to on the page, 
    // corresponding to the project that we want to view
    // while this is playing, we prevent any scroll trigger animations with the side carousel
    handleScrollLocation(index) {
        console.log("Scrolling and switching pages: ", index);
        this.setState(() => ({
            scrollTop: window.innerHeight*index,
            activeElement: index
        }), () => {
            TweenMax.to($(window), {scrollTo: {y: window.innerHeight*index}, duration: 0.5, ease: "Power2.easeInOut"});
            TweenMax.to($(".ProjectSubtitle,.ProjectButtonText,.ProjectElementSVG"), {css: {opacity: 0}, duration: 0.5,
            onComplete: () => {
                TweenMax.set($(".ProjectSubtitle,.ProjectButtonText,.ProjectElementSVG"), {css: {display: "none"}})
                this.props.viewDetails(this.state)
            }})
        });
    }

    // Add fade in fade out that are triggered by mouse hover for each element when the page is mounted onto the screen
    // The elements are fetched by class name using JQuery and are animated with GSAP
    componentDidMount() {
        $(".ProjectButtonText").on("mouseenter", function() {
            TweenMax.to($(".ProjectButtonText"), {css: {opacity: 1}, duration: 0.25})
        })

        $(".ProjectButtonText").on("mouseleave", function() {
            TweenMax.to($(".ProjectButtonText"), {css: {opacity: 0.5}, duration: 0.25})
        })
    }

    render() {
        // The color of the text changes based on the pageID from App.js
        let subtitleClass = "ProjectSubtitleXR";
        switch (this.props.pageID) {
            case 1:
                subtitleClass = "ProjectSubtitleUX";
                break;

            case 2:
                subtitleClass = "ProjectSubtitleSWE";
                break;

            default:
                break;
        }

        return(<div className="ProjectElementWrapper">
                <div className="ProjectElementText">
                    <h2 className="ProjectWhiteText">{this.state.name}</h2>
                    <p className={subtitleClass + " ProjectSubtitle"}>{this.state.desc}</p>
                    {this.state.page ?
                    <Link to={`/${LinkNames[this.props.pageID]}/${this.state.link}`}>
                    <button className={subtitleClass + " ProjectButtonText"} 
                            onClick={() => {this.handleScrollLocation(this.props.index)}}>
                                View Project &#8594;
                    </button>
                    </Link>
                    :
                    <button className={subtitleClass + " ProjectButtonText"}
                            style={{cursor: "unset"}}>Coming Soon</button>
                    }
                </div>
                <div className="ProjectElementSVG">
                    {this.state.img}
                </div>
            </div>);
    }
}