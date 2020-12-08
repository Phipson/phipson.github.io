import React, {Component} from 'react';
import '../style.css';
import $ from 'jquery';

import ProjectPreviewElement from './ProjectPreviewElement';
import SideCarousel from './SideCarousel';

import gsap from "gsap";
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// Holds all the projects that will be displayed based on the pageID that we are currently at
export default class ProjectCatalogue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollTopPosition: 0, // Keep track of where we are in the screen so we can return to it if we hit back
            scrollChange: true // Updating SideCarousel based on scroll changes and not click changes
        }

        this.handleScrollChange = this.handleScrollChange.bind(this);
    }

    // Add fade in fade out that are triggered by scroll for each element when the page is mounted onto the screen
    // The elements are fetched by class name using JQuery and are animated with GSAP
    componentDidMount() {
        $(".ProjectElementWrapper").toArray().forEach((element, i) => {
            // Scroll animation to fade in the div element
            gsap.timeline({
                scrollTrigger: {
                    trigger: element,
                    start: "50% bottom",
                    end: "70% center",
                    //markers: true, // For debug only
                    scrub: true,

                    // Update the state of our SideCarousel object based on where we are scrolling
                    // Use this.state.scrollChange to disable changes when scrolling occurs from clicking on sidecarousel
                    onEnter: () => {if (this.child && this.state.scrollChange) this.child.updateScrollState(i)},
                    onEnterBack: () => {if (this.child && this.state.scrollChange) this.child.updateScrollState(i)}
                }
            })
            .to($(element), {css: {opacity: 1}, duration: 0.35, ease: "Power2.easeInOut"});


            // Scroll Animation to fade out the div element
            gsap.timeline({
                scrollTrigger: {
                    trigger: element,
                    start: "60% center",
                    end: "50% top",
                    //markers: true, // For debug only
                    scrub: true,
                }
            })
            .to($(element), {css: {opacity: 0}, duration: 0.35, ease: "Power2.easeInOut"});
        })

        this.props.changeBodyCSS(this.props.pageID);
        this.props.onChangeNavMenu();
    }

    // This sets a boolean that is used to disable any intermmediate changes to the side carousel white circles when we click on it
    // Ensures that scrolling feedback and clicking feedback are separate
    handleScrollChange(isClick) {
        this.setState(() => ({
            scrollChange: isClick
        }));
    }

    render() {
        console.log(this.props.projectList);

        return(
        <div className="ProjectCatalogueWrapper">
            <SideCarousel   projectList={this.props.projectList} 
                            onRef={(ref) => this.child = ref}
                            handleScrollChange={this.handleScrollChange}/>
            {Object.values(this.props.projectList).map((proj, i) => <ProjectPreviewElement 
                                                    key={i}
                                                    index={i}
                                                    name={proj.name} 
                                                    desc={proj.desc} 
                                                    img={proj.img} 
                                                    page={proj.page}
                                                    link={proj.link}
                                                    pageID={this.props.pageID}
                                                    viewDetails={this.props.viewDetails}/>)}
        </div>)
    }
}