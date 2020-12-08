import React, {Component} from 'react';
import '../style.css';

import $ from 'jquery';
import gsap from "gsap"; 

// This is the default template for how the project page will be displayed
// proj.page holds the JSX component that will be rendered for the project
export default class ProjectDetailPage extends Component {
    // Sets the background color and header color based on the ID of the page
    componentDidMount() {
        this.props.changeBodyCSS(this.props.pageID);
        this.props.onChangeNavMenu();

        gsap.to($(".ProjectDetailWrapper"), {css: {opacity: 1}, duration: 0.25});
        gsap.to($(".ScrollArrowDown"), {css: {opacity: 1}, duration: 0.25});

        gsap.timeline({
          scrollTrigger: {
            trigger: ".ProjDet-TitleWrapper",
            start: "10% top",
            end: "20% top",
            scrub: true
          }}
        ).to($(".ScrollArrowDown"), {css: {opacity: 0}, duration: 0.25});

        gsap.timeline({yoyo: true, repeat: -1}).to($(".ScrollArrowDown"), {css: {y: "-=10"}, duration: 1, ease: "Power1.easeInOut"})
    }

    render() {
        return(
            <div className="ProjectDetailWrapper">
            <div className="ProjDet-TitleWrapper">
                <div className="ProjectElementText">
                    <h2 className="ProjectWhiteText">{this.props.proj.name}</h2>
                    <p className="ProjectSubtitle"/>
                    <button className="ProjectButtonText" style={{cursor: "unset"}}/>
                </div>
                <div className="ProjectElementSVG">
                </div>
            </div>
            <p className="ProjectWhiteText ScrollArrowDown">&#8595;</p>
            {this.props.proj.page}
          </div>)
    }
}