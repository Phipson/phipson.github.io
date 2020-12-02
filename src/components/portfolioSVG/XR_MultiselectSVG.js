import {React, Component} from 'react';
import './SVGStyle.css';
import $ from 'jquery';
import { TimelineMax, TweenMax, Elastic } from 'gsap/all';
import gsap from 'gsap/gsap-core';

gsap.registerPlugin(Elastic);

export default class XR_MultiselectSVG extends Component {
    constructor(props) {
        super(props);

        this.multiselect_TL = new TimelineMax({paused: true});
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseExit = this.handleMouseExit.bind(this);
    }

    componentDidMount() {
        TweenMax.set($("#XR_SphereBubble,#XR_PyramidBubble,#XR_CubeBubble"), {scale: 0, transformOrigin: "50% 50%"})
        this.multiselect_TL.to($("#XR_SphereBubble,#XR_PyramidBubble,#XR_CubeBubble"), {scale: 1, transformOrigin: "50% 50%",
                                                                                        ease: Elastic.easeOut.config(0.3, 0.3),
                                                                                        duration: 0.2,
                                                                                        stagger: {
                                                                                            from: "end",
                                                                                            each: 0.08,
                                                                                        }})
    }

    // Helper function to play the specified animation timeline when the mouse hovers over the svg
    handleMouseEnter() {
        this.multiselect_TL.play();
    }

    // Helper function to play the specified animation timeline when the mouse leaves the svg
    handleMouseExit() {
        this.multiselect_TL.reverse();
    }

    render() {
        return (
           <svg id="XR_3_Multiselect" xmlns="http://www.w3.org/2000/svg" viewBox="0 -20 460 460"
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseExit}>
                <defs><style></style></defs><title>XR_Multiselect</title><g id="XR_3_Sphere"><circle className="xr-multiselect-sphere1" cx="358.51" cy="236.21" r="74"/><ellipse className="xr-multiselect-sphere2" cx="358.67" cy="196.49" rx="6.73" ry="4.33" transform="matrix(0.8, -0.59, 0.59, 0.8, -72.02, 232.03)"/><path className="xr-multiselect-sphere3" d="M362.33,296c8.7-2.13,31.59-9.1,49-31,22.54-28.35,19.24-60.74,18.45-67.14a75.18,75.18,0,0,1,21.89,28.47c14,32.29-1.11,62.12-2.22,64.22A74.45,74.45,0,0,1,384,330c-38.73,0-60.26-30.75-62-33.33A92.07,92.07,0,0,0,362.33,296Z" transform="translate(-25.49 -19.79)"/><g id="XR_SphereBubble"><circle className="xr-multiselect-bubble1" cx="358.51" cy="236.21" r="90"/><ellipse className="xr-multiselect-bubble2" cx="334.35" cy="207.77" rx="18.4" ry="9.41" transform="translate(-38.25 373.65) rotate(-60)"/></g></g><g id="XR_3_Pyramid"><polygon className="xr-multiselect-pyramid1" points="191.51 252.99 97.51 358.99 208.51 410.99 191.51 252.99"/><polygon className="xr-multiselect-pyramid2" points="191.51 252.99 208.51 410.99 265.51 349.99 191.51 252.99"/><g id="XR_PyramidBubble"><path className="xr-multiselect-bubble1" d="M210.83,266.61,108.06,372.34a12.74,12.74,0,0,0-4.37,12.13,13.17,13.17,0,0,0,6.81,8.81l113,51.5a18.12,18.12,0,0,0,18.5-2.5l57-68.5a19.86,19.86,0,0,0,.33-6.5,20.89,20.89,0,0,0-5.33-11.5Q261.28,313,228.58,270.2c-.23-.42-3.48-5.92-9.75-6.25A12,12,0,0,0,210.83,266.61Z" transform="translate(-25.49 -19.79)"/><ellipse className="xr-multiselect-bubble2" cx="211.23" cy="290.05" rx="8.81" ry="4.3" transform="translate(-171.06 308.17) rotate(-60)"/><ellipse className="xr-multiselect-bubble2" cx="191.56" cy="308.99" rx="10.7" ry="6" transform="translate(-183.69 388.4) rotate(-74.04)"/></g></g><g id="XR_3_Cube"><rect className="xr-multiselect-cube1" x="64" y="82" width="136" height="136" transform="translate(-69.78 36.16) rotate(-20.57)"/><polygon className="xr-multiselect-cube2" points="146.26 42.67 18.93 90.45 62.27 63.65 189.6 15.86 146.26 42.67"/><polygon className="xr-multiselect-cube3" points="237.38 143.19 194.05 169.98 146.27 42.65 189.6 15.86 237.38 143.19"/><g id="XR_CubeBubble"><path className="xr-multiselect-bubble1" d="M32,104.67a22.16,22.16,0,0,0-1.37,10.72c26.13,71.73,45.72,123.86,49.21,131.1a13.63,13.63,0,0,0,6.2,6.73,11.54,11.54,0,0,0,9,.39l122.52-46a149.08,149.08,0,0,0,18.14-8.87A122.7,122.7,0,0,0,260.79,180c10.68-10.45,12.41-16.14,12.87-20.17a24.25,24.25,0,0,0-.46-8L228.47,32.63a11.89,11.89,0,0,0-15.19-7.11C195.68,32.12,184,32.46,149.43,48c-20,9-20.71,7.22-56.77,22.63C63.72,83,80.32,77.29,63.52,84.46S36,94.86,32,104.67Z" transform="translate(-25.49 -19.79)"/><ellipse className="xr-multiselect-bubble2" cx="45.51" cy="82.92" rx="6" ry="10"/><ellipse className="xr-multiselect-bubble2" cx="73.07" cy="154.38" rx="5" ry="18.73" transform="translate(-75.07 15.73) rotate(-20.57)"/></g></g>
            </svg>
        )
    }
}