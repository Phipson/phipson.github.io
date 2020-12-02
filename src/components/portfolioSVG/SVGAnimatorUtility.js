import $ from 'jquery';
import gsap from 'gsap';
import { TimelineLite, CSSPlugin } from 'gsap/all';
const plugins = [ CSSPlugin ]; 

gsap.registerPlugin(plugins);

// Helper function to Fade in the specified elements in the SVG Group and then return the object as a timeline element
export function dissolveFlashIn (SVGGroup, duration, timestamp=0) {
    //console.log("Dissolving in...");
    let appearTL = new TimelineLite();
    SVGGroup.forEach(element => {
        appearTL.add(gsap.to($(element), duration, {css: {opacity: $(element).data('og_opacity')}}), timestamp);
    })

    return appearTL;
}

// Helper function to Fade the colors of each svg elements from white
export function dissolveFadeFromWhite(SVGGroup, duration, timestamp=0) {
    //console.log("Fadeing from white...");
    let fadeTL = new TimelineLite();
    SVGGroup.forEach(element => {
        fadeTL.add(gsap.to($(element), duration, {css: {fill: $(element).data('og_fill'),
                                                        stroke: $(element).data('og_stroke')}}), timestamp);
    })

    return fadeTL;
}

// Helper function to change the rotation and position of the svg element specified by SVGObj
export function transformComponent(SVGObj, duration, rotation, pivot="50% 50%", translation={x: "+=0", y: "+= 0"}, easeType="bounce.easeInOut") {
    //console.log("Moving body part...");
    return gsap.to(SVGObj, duration, {rotation: rotation,
                                                transformOrigin: pivot,
                                                x: translation.x,
                                                y: translation.y,
                                                ease: easeType});

}

// Helper function to Fade in the specified elements in the SVG Group and then return the object as a timeline element
export function setElementTransform(element, rotation, pivot="50% 50%", translation={x: "+=0", y: "+=0"}) {
    gsap.set(element, {
        rotation: rotation,
        transformOrigin: pivot,
        x: translation.x,
        y: translation.y
    })
}

