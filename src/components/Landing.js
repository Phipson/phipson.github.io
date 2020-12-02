import React from 'react';
import "../style.css";
import PhipsonSVG from './portfolioSVG/PhipsonSVG';

import $ from 'jquery';
import {Link} from 'react-router-dom'
import { TweenMax } from 'gsap/all';

const pageIDStyle = ["Mixed-Reality Developer","Design Technologist","Software Engineer"]
const LinkNames = ["mixed_reality", "ux_design", "software_development"]


class LandingPage extends React.Component {
    componentDidMount() {
        this.props.onRef(this);
        console.log(this.props.transitionComplete);

        $(".LandingNavigationButton").on("mouseenter", function() {
            TweenMax.to($(".LandingNavigationButton"), {css: {opacity: 1}, duration: 0.25})
        })

        $(".LandingNavigationButton").on("mouseleave", function() {
            TweenMax.to($(".LandingNavigationButton"), {css: {opacity: 0.5}, duration: 0.25})
        })

        $(".LandingInteractionButton").on("mouseenter", function(e) {
            TweenMax.to($(e.target), {css: {opacity: 1}, duration: 0.25})
        })

        $(".LandingInteractionButton").on("mouseleave", function(e) {
            TweenMax.to($(e.target), {css: {opacity: 0.5}, duration: 0.25})
        })
    }

    componentWillUnmount() {
        this.props.onRef(null);
    }

    // Uses the onStateChange function passed from App.js to change pages
    render() { 
        let subtitleClass = "";
        let headerClass = ""
        if (this.props.transitionComplete) {
            switch (this.props.pageID) {
                case 0:
                    subtitleClass = "ProjectSubtitleXR";
                    break;

                case 1:
                    subtitleClass = "ProjectSubtitleUX";
                    break;

                case 2:
                    subtitleClass = "ProjectSubtitleSWE";
                    break;

                default:
                    break;
            }
            headerClass = "ProjectWhiteText"
        }

        return (
                <div className="LandingWrapper">
                    <div className="LandingText">
                        <h1 className={headerClass}>Hello, I'm Phipson</h1>
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
                        <Link to={`/${LinkNames[this.props.pageID]}`}>
                        <button className={"LandingNavigationButton " + subtitleClass} 
                                onClick={this.props.onViewProject}>
                                    Browse Work &#8594;
                        </button>
                        </Link>
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
