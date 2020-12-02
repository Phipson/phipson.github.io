import {React, Component} from 'react';
import './SVGStyle.css';
import $ from 'jquery';
import { TimelineMax, TweenMax, Elastic } from 'gsap/all';
import gsap from 'gsap/gsap-core';

gsap.registerPlugin(Elastic);

export default class XR_PokemonVRSVG extends Component {
    constructor(props) {
        super(props);

        this.pkmTL = new TimelineMax({paused: true});
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseExit = this.handleMouseExit.bind(this);
    }

    componentDidMount() {
        TweenMax.set($("#XR_PokemonCollision"), {scale: 0, transformOrigin: "50% 50%"});
        this.pkmTL.to($("#XR_PokeballL"), {x: "+=35", y: "+=25", ease: Elastic.easeIn.config(0.5, 0.3),
                                            duration: 0.2})
                    .to($("#XR_PokeballR"), {x: "-=35", y: "-=25", ease: Elastic.easeIn.config(0.5, 0.3),
                                            duration: 0.2}, "-=0.2")
                    .to($("#XR_PokemonCollision"), {scale: 1.3, transformOrigin: "50% 50%", 
                                                    ease: Elastic.easeOut.config(0.5, 0.3)}, "-=0.1")

    }

    // Helper function to play the specified animation timeline when the mouse hovers over the svg
    handleMouseEnter() {
        this.pkmTL.play();
    }

    // Helper function to play the specified animation timeline when the mouse leaves the svg
    handleMouseExit() {
        this.pkmTL.reverse();
    }

    render() {
        return (
            <svg id="XR_4_PokemonVR" xmlns="http://www.w3.org/2000/svg" viewBox="0 -100 400 400"
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseExit}>
                <defs><style></style></defs><title>XR_PokemonVR</title><g id="XR_PokeballL"><circle className="xr-pokemonvr-ballwhite" cx="90" cy="90" r="90"/><path className="xr-pokemonvr-ballpurple" d="M240,191.33a90,90,0,0,0-180,0Z" transform="translate(-60 -101.33)"/><rect y="81" width="180" height="18"/><circle className="xr-pokemonvr-ballbelt" cx="90" cy="90" r="19.5"/></g><g id="XR_PokemonCollision"><polygon className="xr-pokemonvr-collision1" points="148.49 8.7 205.67 76.78 288.1 43.44 241.01 118.86 298.2 186.95 211.91 165.48 164.83 240.91 158.59 152.21 72.3 130.74 154.73 97.39 148.49 8.7"/><polygon className="xr-pokemonvr-collision2" points="169.23 59.97 200.26 96.92 245 78.82 219.44 119.76 250.48 156.71 203.65 145.06 178.1 185.99 174.71 137.85 127.88 126.2 172.62 108.1 169.23 59.97"/><polygon className="xr-pokemonvr-collision3" points="182.98 98.42 195.07 112.82 212.5 105.77 202.55 121.72 214.64 136.12 196.39 131.58 186.43 147.53 185.11 128.78 166.87 124.23 184.3 117.18 182.98 98.42"/></g><g id="XR_PokeballR"><circle className="xr-pokemonvr-ballwhite" cx="272.67" cy="206" r="90"/><path className="xr-pokemonvr-ballred" d="M422.67,307.33a90,90,0,1,0-180,0Z" transform="translate(-60 -101.33)"/><rect x="182.67" y="197" width="180" height="18"/><circle className="xr-pokemonvr-ballbelt" cx="272.67" cy="206" r="19.5"/></g>
            </svg>
        )
    }
}