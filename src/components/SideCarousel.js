import { HashRouter } from 'react-router-dom';
import React, {Component} from 'react';
import '../style.css';
import $ from 'jquery';
import gsap from "gsap";
import { TimelineMax, TweenMax, ScrollToPlugin } from 'gsap/all';

gsap.registerPlugin(ScrollToPlugin);

export default class SideCarousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scrollTop: 0,
            activeElement: 0,
        }

        this.handleCircleHoverEnter = this.handleCircleHoverEnter.bind(this);
        this.handleCircleHoverExit = this.handleCircleHoverExit.bind(this);
        this.handleCarouselHoverEnter = this.handleCarouselHoverEnter.bind(this);
        this.handleCarouselHoverExit = this.handleCarouselHoverExit.bind(this);
        this.handleScrollLocation = this.handleScrollLocation.bind(this);
        this.updateScrollState = this.updateScrollState.bind(this);

        this.hoverCarouselTL = new TimelineMax({paused: true});
    }

    // When we mount the component, we set all the text that are aligned next to the elements to be invisible and take up no space (to 
    // avoid occluding the text or images behind it)
    // We also set the dots for the carousel to trigger based on which project we are looking at
    componentDidMount() {
        this.props.onRef(this);

        this.hoverCarouselTL.to($(".ProjectElementSVG,.ProjectElementText"), {css: {opacity: 0.25},
                                                            duration: 0.2})
                            .to($(".SideCarouselHoverText"), {css: {opacity: 1, marginRight: "-=10px"},
                                                                duration: 0.2,
                                                                stagger: {
                                                                    each: 0.08,
                                                                    from: "start",
                                                                    ease: "power1.inOut"
                                                                }}, "-=0.2");

        this.hoverCarouselTL.eventCallback("onReverseComplete", function() {
            TweenMax.set($(".SideCarouselHoverText"), {css: {display: "none"}});
        });

        this.hoverCarouselTL.eventCallback("onStart", function() {
            TweenMax.set($(".SideCarouselHoverText"), {css: {display: "block"}});
        });
    }

    // Unsubscribe on unmount to avoid memory leak errors
    componentWillUnmount() {
        this.props.onRef(null);
    }

    /**
     * Function to handle when we have hovered over a dot on the carousel menu
     * @param {Event} e Event object corresponding to the dot that we just hovered over.
     */
    handleCircleHoverEnter(e) {
        TweenMax.to($(e.target).find("circle"), {css: {fill: "white"}, duration: 0.2});
        TweenMax.to($(e.target).siblings("p"), {css: {color: "white"}, duration: 0.2});
    }

    /**
     * Function to handle when our mouse leaves a dot on the carousel menu
     * @param {Event} e Event object corresponding to the dot our mouse just left
     */
    handleCircleHoverExit(e, index) {
        if (this.state.activeElement !== index)
            TweenMax.to($(e.target).find("circle"), {css: {fill: "none"}, duration: 0.2});
    
        TweenMax.to($(e.target).siblings("p"), {css: {color: "rgba(255, 255, 255, 0.5)"}, duration: 0.2});
    }

    /**
     * Helper function to play the carousel fade in animation that we have saved as a timeline when we mounted the component
     */
    handleCarouselHoverEnter() {
        this.hoverCarouselTL.play();
    }

    /**
     * Helper function to reverse the carousel fade in animation that we have saved as a timeline when we mounted the component
     */
    handleCarouselHoverExit() {
        this.hoverCarouselTL.reverse();
    }

    /**
     * Helper function to set the scroll location of our window based on which dot we have clicked on
     * @param {Number} index The index of the carousel that we want to scroll to (while we are scrolling, we disable scroll triggers
     * via this.props.handleScrollChange(true))
     */
    handleScrollLocation(index) {
        this.setState(() => ({
            scrollTop: window.innerHeight*index,
            activeElement: index
        }), () => {
            TweenMax.to($(window), {scrollTo: {y: window.innerHeight*index}, duration: 0.5, ease: "Power2.easeInOut",
            onStart: () => {this.props.handleScrollChange(false)}, onComplete: () => {this.props.handleScrollChange(true)}});
        });
    }

    // Called by ProjectCatalogue based on scroll location
    // Update the scroll state index based on the where we have scrolled to on the Project Catalogue
    updateScrollState(index) {
        this.setState(() => ({
            scrollTop: window.innerHeight * index,
            activeElement: index,
        }));
    }

    // Change element based on scrollTrigger (use button click to change scrollTop location, but keep all logic within scrollTrigger)
    render() {
        return(
            <div className="SideCarouselWrapper"
                onMouseEnter={(e) => this.handleCarouselHoverEnter()}
                onMouseLeave={(e) => this.handleCarouselHoverExit()}>
                {Object.values(this.props.projectList).map((element, i) => 
                    <div key={i} className="SideCarouselElement">
                        <p className="SideCarouselHoverText">{element.name}</p>
                        <svg className="SideCarouselHoverSVG" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"
                            onMouseEnter={(e) => this.handleCircleHoverEnter(e)}
                            onMouseLeave={(e) => this.handleCircleHoverExit(e, i)}
                            onClick={() => this.handleScrollLocation(i)}>
                            <circle r="3" transform="matrix(-1 0 0 1 8 8)" 
                                    className={"SideCarouselCircle"}
                                    style={{fill: `${this.state.activeElement === i ? "white" : "none"}`}}/>
                        </svg>
                    </div>
                )}
            </div>
        )
    }
}