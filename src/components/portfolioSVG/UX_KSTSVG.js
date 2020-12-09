import {React, Component} from 'react';
import './SVGStyle.css';
import $ from 'jquery';
import { TimelineMax, TweenMax, Elastic } from 'gsap/all';
import gsap from 'gsap/gsap-core';

gsap.registerPlugin(Elastic);

export default class UX_KSTSVG extends Component {
    constructor (props) {
        super(props);

        this.kst_TL = new TimelineMax({paused: true});
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseExit = this.handleMouseExit.bind(this);
    }

    componentDidMount() {
        gsap.set($("#KST_Computer,#KST_Overlay"), {css: {opacity: 0}});
        this.kst_TL.to($("#KST_Masks"), {duration: 0.25, ease: Elastic.easeOut.config(0.5, 0.3), scale: 0.5, transformOrigin: "50% 50%"})
        .to($("#KST_Computer,#KST_Overlay"), {css: {opacity: 1}, duration: 0.25}, "-=0.2");
    }

    // Helper function to play the specified animation timeline when the mouse hovers over the svg
    handleMouseEnter() {
        this.kst_TL.play();
    }

    // Helper function to reverse the specified animation timeline when the mouse leaves the svg
    handleMouseExit() {
        this.kst_TL.reverse();
    }

    render() {
        return(
            <svg id="UX_2_KST" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 464 325.722"
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseExit}
            ><title>UX_KST</title><g id="KST_Computer"><rect class="ux-kst-1" x="50.162" y="28.859" width="363.676" height="257.081" rx="9" ry="9"/><rect class="ux-kst-2" x="72.108" y="50.178" width="319.784" height="214.443"/><rect class="ux-kst-3" y="277.789" width="464" height="21.319"/><path class="ux-kst-4" d="M206.944,369.283s2.257,6.9,5.016,6.9h76.08c2.759,0,5.016-3.1,5.016-6.9H206.944Z" transform="translate(-18 -91.494)"/></g><g id="KST_Masks"><path class="ux-kst-5" d="M37.382,152.855c8.248,3.414,33.436,12.579,63.509,4.079a95.777,95.777,0,0,0,39.264-22.292,89.924,89.924,0,0,0,42.688-3.724c29.18-10.029,43.941-32.362,48.22-39.424a241.282,241.282,0,0,1,19.845,58.7c4.934,24.766,15.771,79.168-13.16,131.023-6.7,12.016-19.372,30.76-42.687,48.344a154.523,154.523,0,0,1-61.45-18.3c-44.84-24.685-64.284-65.92-75.39-89.471A247.71,247.71,0,0,1,37.382,152.855Z" transform="translate(-18 -91.494)"/><path class="ux-kst-6" d="M92.536,221.745a38.487,38.487,0,0,1,50.011-22.771,72.817,72.817,0,0,0-50.011,22.771Z" transform="translate(-18 -91.494)"/><path class="ux-kst-6" d="M181.993,185.774a38.488,38.488,0,0,1,53.325-13.269,72.828,72.828,0,0,0-53.325,13.269Z" transform="translate(-18 -91.494)"/><path class="ux-kst-6" d="M123.928,264.974a100.861,100.861,0,0,0,105.716-33.04,57.33,57.33,0,0,1-105.716,33.04Z" transform="translate(-18 -91.494)"/><path class="ux-kst-7" d="M222.621,286.256c4.638-10.091,21.221-48.529,16.476-99.97a203,203,0,0,0-22.806-76.193l14.772-18.6a241.282,241.282,0,0,1,19.845,58.7c4.934,24.766,15.771,79.168-13.16,131.023-6.7,12.016-19.372,30.76-42.687,48.344A190.3,190.3,0,0,0,222.621,286.256Z" transform="translate(-18 -91.494)"/><path class="ux-kst-8" d="M251.816,181.232c4.546,7.683,19.186,30.134,48.338,41.393a95.788,95.788,0,0,0,44.784,5.748,89.917,89.917,0,0,0,36.373,22.652c29.357,9.5,54.57.5,62.232-2.575a241.233,241.233,0,0,1-19.375,58.858c-10.924,22.768-34.921,72.779-89.191,96.877-12.576,5.585-33.961,12.967-63.163,13.031a154.542,154.542,0,0,1-38.153-51.531c-21.036-46.663-11.828-91.313-6.569-116.815A247.688,247.688,0,0,1,251.816,181.232Z" transform="translate(-18 -91.494)"/><path class="ux-kst-6" d="M302.437,277.4a38.49,38.49,0,0,1-52.683-15.628A72.829,72.829,0,0,0,302.437,277.4Z" transform="translate(-18 -91.494)"/><path class="ux-kst-6" d="M399.5,314.853a38.488,38.488,0,0,1-50.611-21.406A72.834,72.834,0,0,0,399.5,314.853Z" transform="translate(-18 -91.494)"/><path class="ux-kst-9" d="M319.855,399.13c9.768-5.285,46.108-26.066,73.2-70.053a202.976,202.976,0,0,0,27.509-74.623l22.98-6a241.233,241.233,0,0,1-19.375,58.858c-10.924,22.768-34.921,72.779-89.191,96.877-12.576,5.585-33.961,12.967-63.163,13.031A190.231,190.231,0,0,0,319.855,399.13Z" transform="translate(-18 -91.494)"/><path class="ux-kst-6" d="M342.973,392.957a100.859,100.859,0,0,0-102.756-41.336,57.33,57.33,0,0,1,102.756,41.336Z" transform="translate(-18 -91.494)"/></g><g id="KST_Overlay"><rect class="ux-kst-10" x="72.108" y="50.178" width="319.784" height="214.443"/><circle class="ux-kst-9" cx="90.292" cy="65.854" r="3.919"/><path d="M122.067,152.966h2.057v8.847h3v1.962h-5.055Z" transform="translate(-18 -91.494)"/><path d="M128.54,152.966h2.043v10.809H128.54Z" transform="translate(-18 -91.494)"/><path d="M132.079,152.966h2.114l2.72,7.678,2.76-7.678h2.112l-3.894,10.809h-1.984Z" transform="translate(-18 -91.494)"/><path d="M143.442,152.966h5.9v2.013h-3.858v1.955h3.858v1.976h-3.858v2.844h3.858v2.021h-5.9Z" transform="translate(-18 -91.494)"/></g></svg>
        )
    }
}