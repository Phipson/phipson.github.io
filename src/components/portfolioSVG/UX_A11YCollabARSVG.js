import {React, Component} from 'react';
import './SVGStyle.css';
import $ from 'jquery';
import { TimelineMax, TweenMax, Elastic } from 'gsap/all';
import gsap from 'gsap/gsap-core';

gsap.registerPlugin(Elastic);

export default class UX_A11YCollabARSVG extends Component {
    constructor (props) {
        super(props);

        this.a11y_TL = new TimelineMax({paused: true});
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseExit = this.handleMouseExit.bind(this);
    }

    componentDidMount() {
        TweenMax.set($(".ux-a11y-speech1,.ux-a11y-speech2"), {scale: 0, transformOrigin: "50% 50%"});
        this.a11y_TL.to($(".ux-a11y-speech1"), {scale: 1, transformOrigin: "50% 50%", ease: Elastic.easeInOut.config(0.3, 0.3),
                                                duration: 0.25})
                    .to($(".ux-a11y-speech2"), {scale: 1, transformOrigin: "50% 50%", ease: Elastic.easeInOut.config(0.3, 0.3),
                                                duration: 0.25}, "-=0.1")
    }

    // Helper function to play the specified animation timeline when the mouse hovers over the svg
    handleMouseEnter() {
        this.a11y_TL.play();
    }

    // Helper function to reverse the specified animation timeline when the mouse leaves the svg
    handleMouseExit() {
        this.a11y_TL.reverse();
    }

    render() {
        return(
            <svg id="UX_1_A11Y" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 447.44 276.06"
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseExit}>
                <defs><style></style></defs><title>UX_A11YCollab</title>
                <g id="UX_Body"><ellipse className="ux-a11y-avatar" cx="221.67" cy="88.73" rx="54.33" ry="66"/><rect className="ux-a11y-avatar" x="215.33" y="139.73" width="18" height="50.67" rx="9" ry="9"/><path className="ux-a11y-avatar" d="M252,253.67l-97,40.66L132.33,361h234L342.5,294Z" transform="translate(-27.67 -84.94)"/><rect className="ux-a11y-speech1" x="25.83" y="22.73" width="125.5" height="6.83"/><rect className="ux-a11y-speech1" x="25.83" y="34.23" width="125.5" height="6.83"/><rect className="ux-a11y-speech2" x="329.33" y="165.31" width="103" height="11.75"/><path className="ux-a11y-speech1" d="M27.67,107.67c1.47-7.83,4.22-17.89,6-22.17l3.58-.56a182.13,182.13,0,0,0-3.78,21.79Zm9.54,0A140.31,140.31,0,0,1,43.16,85.5l3.59-.56A180.15,180.15,0,0,0,43,106.73Z" transform="translate(-27.67 -84.94)"/><path className="ux-a11y-speech2" d="M330.32,251c1.47-7.82,4.23-17.88,6-22.17l3.59-.56a180,180,0,0,0-3.78,21.8Zm9.54,0a143.15,143.15,0,0,1,5.95-22.17l3.59-.56a182,182,0,0,0-3.78,21.8Z" transform="translate(-27.67 -84.94)"/><path className="ux-a11y-speech1" d="M192.16,110.47a117.55,117.55,0,0,0-2.45-14.17l2.33.37A90,90,0,0,1,196,111.08Zm-6.16,0a117.55,117.55,0,0,0-2.45-14.17l2.33.37a92.69,92.69,0,0,1,3.87,14.41Z" transform="translate(-27.67 -84.94)"/><path className="ux-a11y-speech2" d="M471.32,253.83a117.31,117.31,0,0,0-2.46-14.16l2.33.36a90.3,90.3,0,0,1,3.91,14.41Zm-6.17,0a115.44,115.44,0,0,0-2.45-14.16L465,240a91.89,91.89,0,0,1,3.87,14.41Z" transform="translate(-27.67 -84.94)"/></g><g id="UX_AirpodsL"><rect className="ux-a11y-airpods" x="162.08" y="95.48" width="9" height="21" rx="4.5" ry="4.5"/><ellipse className="ux-a11y-airpods" cx="170.83" cy="95.48" rx="8.75" ry="6.75"/></g><g id="UX_AirpodsR"><rect className="ux-a11y-airpods" x="299" y="180.04" width="9" height="21" rx="4.5" ry="4.5" transform="translate(579.33 296.14) rotate(180)"/><ellipse className="ux-a11y-airpods" cx="271.58" cy="95.1" rx="8.75" ry="6.75"/></g>
            </svg>
        )
    }
}