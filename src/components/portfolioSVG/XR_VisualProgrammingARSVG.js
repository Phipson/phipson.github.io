import {React, Component} from 'react';
import './SVGStyle.css';
import $ from 'jquery';
import { TimelineMax, Elastic } from 'gsap/all';
import gsap from 'gsap/gsap-core';

gsap.registerPlugin(Elastic);

export default class XR_VisualProgrammingARSVG extends Component {
    constructor(props) {
        super(props);

        this.helloworldTL = new TimelineMax({paused: true});
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseExit = this.handleMouseExit.bind(this);
    }

    componentDidMount() {
        this.helloworldTL
            .to($("#Hello"), {y: '+=35', duration: 0.25, ease: Elastic.easeIn.config(0.5, 0.3)})
            .to($("#World"), {y: '-=35', duration: 0.25, ease: Elastic.easeIn.config(0.5, 0.3)}, '-=0.25');
    }

    // Helper function to play the specified animation timeline when the mouse hovers over the svg
    handleMouseOver() {
        this.helloworldTL.play();
    }

    // Helper function to play the specified animation timeline when the mouse leaves the svg
    handleMouseExit() {
        this.helloworldTL.reverse();
    }

    render() {
        return (
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -20 350 450"
                onMouseEnter={this.handleMouseOver}
                onMouseLeave={this.handleMouseExit}>
               <defs><style></style></defs><g id="World"><path className="lego-1" d="M124 191.65h81v48h-81z"/><rect className="lego-1" y="222.65" width="332" height="139" rx="12" ry="12"/><path className="lego-2" d="M131.28 392l-12.91-49.8h9.94c4.39 20.63 7.63 34.36 8.33 39.91h.07c1.69-8.21 7.2-27.65 10.22-39.91h8.56c2.71 10.09 8.35 31.46 9.8 39.49h.07c1.64-10.16 7.23-30.9 9.33-39.49h9.11L170 392h-9.76c-2.76-11.17-7.83-29.89-9.4-37.54h-.08c-1.7 8.37-6.85 27-9.69 37.54zM235.7 366.89c0 13.81-8.1 25.83-24.11 25.83-15.29 0-23.47-11.35-23.47-25.62s8.8-25.62 24.13-25.62c14.38 0 23.45 10.32 23.45 25.41zm-37.91 0c0 10.11 4.7 18.11 14.21 18.11 10.26 0 14.06-8.54 14.06-18 0-9.86-4.32-17.84-14.17-17.84s-14.1 7.71-14.1 17.72zM254.58 371.38V392h-9.16v-49.8h21.05c10.65 0 16.36 5.84 16.36 13.55 0 6.61-3.67 10.34-7.67 11.76 3 1 6.67 3.7 6.67 12.52v2.35c0 3.38 0 7.37.7 9.62h-8.9c-.89-2.16-1-5.94-1-11v-.84c0-6-1.59-8.76-9.92-8.76zm0-7.54h9.65c6.48 0 9.12-2.45 9.12-7.11 0-4.47-2.92-7-8.7-7h-10.07zM293 342.2h9.34v42.06h25.2l-1.15 7.74H293zM334.2 342.2h19.07c14.33 0 23.81 9.55 23.81 24.32 0 14.59-9.21 25.48-24.18 25.48h-18.7zm9.34 42.16h8.88c10.3 0 15-7.54 15-17.78 0-8.71-4.34-16.74-14.92-16.74h-8.94z" transform="translate(-84 -75.35)"/></g><g id="Hello"><path d="M404 233.65L288 234v-36h-77v36l-114-.35a12 12 0 01-12-12V87.35a12 12 0 0112-12h307a12 12 0 0112 12v134.3a12 12 0 01-12 12z" transform="translate(-84 -75.35)" fill="#c1272d"/><path className="lego-2" d="M144.15 123.2h9.34v19.89h22.06V123.2h9.34V173h-9.34v-22.17h-22.06V173h-9.34zM230.63 150.91h-24.14v14.35h26.59L232 173h-34.6v-49.8h34.32v7.74h-25.23v12.23h24.14zM241.25 123.2h9.34v42.06h25.21l-1.13 7.74h-33.42zM282.48 123.2h9.34v42.06H317l-1.1 7.74h-33.42zM367.72 147.89c0 13.81-8.1 25.83-24.11 25.83-15.3 0-23.48-11.35-23.48-25.62s8.8-25.62 24.13-25.62c14.39 0 23.46 10.32 23.46 25.41zm-37.91 0C329.81 158 334.5 166 344 166c10.25 0 14.06-8.54 14.06-18 0-9.86-4.33-17.84-14.17-17.84s-14.08 7.71-14.08 17.72z" transform="translate(-84 -75.35)"/></g>
            </svg>
        )
    }
}