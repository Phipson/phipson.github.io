import React from 'react';
import "../style.css";
import PhipsonSVG from './portfolioSVG/PhipsonSVG';

import $ from 'jquery';
import { TweenMax } from 'gsap/all';

import DelayLink from 'react-delay-link';

const pageIDStyle = ["Mixed-Reality Developer","Design Technologist","Software Engineer"]
const LinkNames = ["mixed_reality", "ux_design", "software_development"]

const ButtonInfo = [{name: "Mixed Reality", baseColor: "#AB1FAD", hoverColor: "#BD40BF"},
                    {name: "UX Design", baseColor: "#1F8BAD", hoverColor: "#33A7CC"},
                    {name: "Software", baseColor: "#5C9119", hoverColor: "#76AF2C"}]


class LandingPage extends React.Component {
    constructor(props) {
        super(props);

        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseExit = this.handleMouseExit.bind(this);
    }

    // When the component mounts, we use jQuery to access the different buttons and to add hover animations with GSAP
    componentDidMount() {
        this.props.onRef(this);

        $(".LandingInteractionButton").on("mouseenter", function(e) {
            TweenMax.to($(e.target), {css: {opacity: 1}, duration: 0.25})
        })

        $(".LandingInteractionButton").on("mouseleave", function(e) {
            TweenMax.to($(e.target), {css: {opacity: 0.5}, duration: 0.25})
        })

        this.props.onChangeNavMenu();
        this.props.changeBodyCSS(this.props.pageID);
    }

    // We make sure to unmount this from App.js so that ReactJS won't give an error when it can't access an unmounted child
    componentWillUnmount() {
        this.props.onRef(null);
    }

    handleMouseEnter(pageID) {
        TweenMax.to($(".LandingButtonBG"), {css: 
            {boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            backgroundColor: ButtonInfo[pageID].hoverColor}, 
            duration: 0.25})
    }

    handleMouseExit(pageID) {
        TweenMax.to($(".LandingButtonBG"), {css: 
            {boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 5px 0 rgba(0, 0, 0, 0.19)",
            backgroundColor: ButtonInfo[pageID].baseColor}, 
            duration: 0.25})
    }

    // Uses the onStateChange function passed from App.js to change pages
    render() { 
        let subtitleClass = "ProjectSubtitleXR";

        return (
                <div className="LandingWrapper">
                    <div className="LandingText">
                        <h1 className="ProjectWhiteText">Hello, I'm Phipson</h1>
                        <div className="LandingInteractionWrapper">
                            <p className={"LandingInteractionText " + subtitleClass}>I'm a </p>
                            <div>
                                <button className={"LandingInteractionButton " + subtitleClass}
                                        onClick={() => this.props.onChange(this.props.pageID-1)}>&#8592;</button>
                                <p className={"LandingInteractionText " + subtitleClass}>{pageIDStyle[this.props.pageID]}</p>
                                <button className={"LandingInteractionButton " + subtitleClass}
                                        onClick={() => this.props.onChange(this.props.pageID+1)}>&#8594;</button>
                            </div>
                        </div>
                        <DelayLink delay={250} 
                                    to={`/${LinkNames[this.props.pageID]}`}
                                    replace={false}
                                    clickAction={this.props.onViewProject}>
                        <div className="LandingButtonBG"
                                onMouseEnter={() => this.handleMouseEnter(this.props.pageID)}
                                onMouseLeave={() => this.handleMouseExit(this.props.pageID)}>
                            <button className={"LandingNavigationButton " + subtitleClass}>
                                    Browse {ButtonInfo[this.props.pageID].name} Work
                            </button>
                        </div>
                        </DelayLink>
                    </div>
                    <div className="LandingSVG">
                        <PhipsonSVG pageID={this.props.pageID} 
                                    onRef={ref => (this.child = ref)}
                                    onInit={this.props.onInit}/>
                    </div>
                </div>
            );
        }
}

export default LandingPage;
