import React, {Component} from 'react';
import '../style.css';
import $ from 'jquery';
import gsap from "gsap";
import { TweenMax, ScrollToPlugin } from 'gsap/all';
import DelayLink from 'react-delay-link';

const LinkNames = ["mixed_reality", "ux_design", "software_development"]

const ButtonInfo = [{name: "Mixed Reality", baseColor: "#AB1FAD", hoverColor: "#BD40BF"},
                    {name: "UX Design", baseColor: "#1F8BAD", hoverColor: "#33A7CC"},
                    {name: "Software", baseColor: "#5C9119", hoverColor: "#76AF2C"}]

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
    // Once we have positioned our page to be on this specific page, we then change the DOM display to view the details
    // Of the corresponding project
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
        let pageID = this.props.pageID;
        $(".LandingButtonBG").on("mouseenter", function() {
            TweenMax.to($(".LandingButtonBG"), {css: {backgroundColor: ButtonInfo[pageID].hoverColor,
                                                        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}, duration: 0.25})
        })

        $(".LandingButtonBG").on("mouseleave", function() {
            TweenMax.to($(".LandingButtonBG"), {css: {backgroundColor: ButtonInfo[pageID].baseColor,
                                                     boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 5px 0 rgba(0, 0, 0, 0.19)"}, duration: 0.25})
        })
    }

    render() {
        // The color of the text changes based on the pageID from App.js
        let subtitleClass = "ProjectSubtitleXR";

        return(<div className="ProjectElementWrapper">
                <div className="ProjectElementText">
                    <h2 className="ProjectWhiteText">{this.state.name}</h2>
                    <p className={subtitleClass + " ProjectSubtitle"}>{this.state.desc}</p>
                    {this.state.page ?
                    <DelayLink delay={250} 
                                to={`/${LinkNames[this.props.pageID]}/${this.state.link}`}
                                replace={false}
                                clickAction={() => {this.props.viewDetails(this.state)}}>

                            <button className={subtitleClass + " ProjectButtonText LandingButtonBG"}>
                                        View Project
                            </button>
                    </DelayLink>
                    :
                    <button className={subtitleClass + " ProjectButtonText"}
                            style={{cursor: "unset", opacity: 0.5}}>Coming Soon</button>
                    }
                </div>
                <div className="ProjectElementSVG">
                    {this.state.img}
                </div>
            </div>);
    }
}