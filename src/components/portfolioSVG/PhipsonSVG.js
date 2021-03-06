import {React, Component} from 'react';
import './SVGStyle.css';
import $ from 'jquery';
import { TimelineMax, TweenMax } from 'gsap/all';
import {dissolveFlashIn, dissolveFadeFromWhite, setElementTransform, transformComponent} from './SVGAnimatorUtility';

const pivotDictionary = {
    "#ArmL": "65% 8%",
    "#ArmR": "72% 5%",
    "#LegL": "52% 0%",
    "#LegR": "72% 8%",
    '#Phipson': "62% 52%",
    '#Oculus': '50% 50%'
}

export default class PhipsonSVG extends Component {
    constructor (props) {
        super(props);

        // Create timelines
        // Move eyes + arms
        this.swe_loop_tl = new TimelineMax({paused: true, delay: 0.5,
                                            onReverseComplete: () => {this.swe_init_tl.reverse()}});

        // Spawn Standing Desk
        this.swe_init_tl = new TimelineMax({paused: true, delay: 0, 
                                            onComplete: () => {this.swe_loop_tl.restart(true, false); this.swe_loop_tl.play()}, 
                                            onReverseComplete: () => {this.playTimeline()}});

        // Stick Notes on Affinity Diagram
        this.aff_loop_tl = new TimelineMax({paused: true, delay: 0.5, //repeat: -1, repeatDelay: 1, 
                                            onReverseComplete: () => {this.aff_init_tl.reverse()}});
                                            //onComplete: () => {this.aff_loop_tl.restart(true); this.aff_loop_tl.play()}});

        // Affinity Diagram Fade In
        this.aff_init_tl = new TimelineMax({paused: true, delay: 0,
                                            onComplete: () => {this.aff_loop_tl.restart(true, false); this.aff_loop_tl.play()}, 
                                            onReverseComplete: () => {this.playTimeline()}});

        // Timeline animation to throw the ball
        this.xr_loop_tl = new TimelineMax({paused: true, delay: 0.5, //repeat: -1, repeatDelay: 1, 
                                            //onReverseComplete: () => {this.xr_init_tl.reverse()},
                                            onComplete: () => {this.xr_loop_tl.restart(true); this.xr_loop_tl.play()}});

        // Timeline animation to spawn the XR Objects
        this.xr_init_tl = new TimelineMax({paused: true, 
                                            onComplete: () => {this.xr_loop_tl.restart(true, false); this.xr_loop_tl.play()}, 
                                            onReverseComplete: () => {this.playTimeline()}});
        

        // pageID: 0 = XR; 1 = UX; 2 = SWE
        this.state =  {
            transitionComplete: false,
            pageID: this.props.pageID,
            pageInitialized: false,
            timelineEntryPoints: [this.xr_init_tl, this.aff_init_tl, this.swe_init_tl]
        }

        // Add all the elements into the timelines
        this.initializeSVGElements = this.initializeSVGElements.bind(this);
        this.initializeTimelines = this.initializeTimelines.bind(this);
        this.playTimeline = this.playTimeline.bind(this);

        this.init_tl = new TimelineMax({paused: true, delay: 0.5, onComplete: () => {this.playTimeline()}});
    }

    /**
     * Helper function to fetch the SVG elements and initialize them when the component is mounted
     */
    initializeSVGElements() {
        let classList = $('[class|="landing"]').toArray();
        console.log("Classes for SVG: ", classList);
        classList.forEach(element => {
            $(element).data('og_fill', $(element).css("fill"));
            $(element).data('og_stroke', $(element).css('stroke'));
            $(element).data('og_opacity', $(element).css("opacity"));

            // Edge case for shadows
            if ($(element).css('opacity') > 0.8) {
                $(element).css({
                    stroke: "white",
                    fill: "white",
                });
            }

            $(element).css({ 
                opacity: 0 
            })
        });

        //Set the initial position of the body as though it was popping out from the sky
        setElementTransform($('#ArmL'), '-=50', pivotDictionary["#ArmL"]);
        setElementTransform($("#ArmR"), '+=60', pivotDictionary["#ArmR"]);
        setElementTransform($("#LegL"), '+=25', pivotDictionary["#LegL"]);
        setElementTransform($("#LegR"), '+=35', pivotDictionary["#LegR"]);
        setElementTransform($("#Phipson"), '+=10', pivotDictionary["#Phipson"], {x: "+=0", y: "-=50"});

        setElementTransform($("#Oculus"), '-=25', pivotDictionary["#Oculus"], {x: "-=250", y: "+=0"});
        setElementTransform($("#PhipsonCrown"), '+=10', pivotDictionary["#Oculus"], {x: "+=0", y: "-=50"});
    }

    /**
     * Initialize all timelines (used once)
     */
    initializeTimelines() {
        let bodyQuery = $('#Head')
        .add('#Ear')
        .add('#Body')
        .add('#ArmL')
        .add('#ArmR')
        .add('#LegL')
        .add('#LowerLegL')
        .add('#LegR')
        .add('#LowerLegR')
        .add('#PhipsonShadow')
        .children().toArray();

        let oculusQuery = $('#Oculus').children().toArray();
        let brushQuery = $('#BrushHandR').children().toArray();
        let pokeballQuery = $('#PokeballHandL').children().toArray();
        let crownQuery = $('#PhipsonCrown').toArray();
        let affinityQuery = $('#Affinity_Diagram').children().toArray();
        let stickyQuery = $("#HandheldStickyR").add("#HandheldStickyL").children().toArray();
        let deskQuery = $("#StandingDeskTop")
        .add("#StandingDeskBottomLegs")
        .add("#StandingDeskLegTop")
        .add("#Monitor")
        .add("#Laptop")
        .add("#Keyboard")
        .add("#DeskShadow")
        .children().toArray();

        this.swe_loop_tl.add(transformComponent($('#ArmR'), 0.25, '+=60', pivotDictionary["#ArmR"]), 0);
        this.swe_loop_tl.add(transformComponent($('#ArmL'), 0.25, '+=55', pivotDictionary["#ArmL"]), "-=0.25");

        // Spawn Standing Desk
        this.swe_init_tl.add(transformComponent($('#Phipson').add('#PhipsonShadow'), 0.25, 
                            '+=0', pivotDictionary["#Phipson"], {x: "-=95", y: "+=0"}), 0);
        this.swe_init_tl.add(dissolveFlashIn(deskQuery, 0.01, 0.1));
        this.swe_init_tl.add(dissolveFadeFromWhite(deskQuery, 0.05, 0.1));

        // Stick sticky note
        this.aff_loop_tl.add(transformComponent($('#ArmR'), 0.45, '+=50', pivotDictionary["#ArmR"]), 0);
        this.aff_loop_tl.add(transformComponent($('#ArmR'), 0.45, '-=50', pivotDictionary["#ArmR"]), "+=0");
        this.aff_loop_tl.add(transformComponent($("#HandheldStickyR"), 0.45, '+=95', pivotDictionary["#HandheldStickyR"], 
                    {x: "-=95", y: "-=54"}), "-=0.45");
        //this.aff_loop_tl.add(transformComponent($('#ArmR'), 0.45, '+=50', pivotDictionary["#ArmR"]), "+=0.5");
        //this.aff_loop_tl.add(transformComponent($("#HandheldStickyR"), 0.45, '-=95', pivotDictionary["#HandheldStickyR"], 
        //            {x: "+=95", y: "+=54"}), "-=0.45");
        //this.aff_loop_tl.add(transformComponent($('#ArmR'), 0.45, '-=50', pivotDictionary["#ArmR"]), "+=0");

        // Show affinity diagram
        this.aff_init_tl.add(dissolveFlashIn(affinityQuery, 0.01, 0));
        this.aff_init_tl.add(dissolveFadeFromWhite(affinityQuery, 0.05, 0.05));
        this.aff_init_tl.add(dissolveFlashIn(stickyQuery, 0.01, 0.05));
        this.aff_init_tl.add(dissolveFadeFromWhite(stickyQuery, 0.05, 0.1));

        // Throw pokeball
        this.xr_loop_tl.add(transformComponent($('#ArmL'), 0.3, '-=5', pivotDictionary["#ArmL"]), 0);
        this.xr_loop_tl.add(transformComponent($('#ArmL'), 0.45, '+=50', pivotDictionary["#ArmL"]), "+=0");
        this.xr_loop_tl.add(transformComponent($("#PokeballHandL"), 0.35, "+=0", pivotDictionary["#PokeballHandL"],{x: "-=50", y: "-=50"}), 0.5);
        this.xr_loop_tl.add(transformComponent($("#PokeballHandL"), 0.35, "+=0", pivotDictionary["#PokeballHandL"],{x: "+=50", y: "+=50"}), "+=0.1")
        this.xr_loop_tl.add(transformComponent($("#ArmL"), 0.5, "-=45", pivotDictionary["#ArmL"], {x: "-=2", y: "+=4"}), "-=0.2");

        // Oculus Quest Fade In and Attach to Head
        this.xr_init_tl.add(dissolveFlashIn(oculusQuery, 0.01, 0));
        this.xr_init_tl.add(dissolveFadeFromWhite(oculusQuery, 0.05, 0.05));
        this.xr_init_tl.add(transformComponent($('#Oculus'), 0.05, '-=5', pivotDictionary["#Oculus"]), 0.08);
        this.xr_init_tl.add(transformComponent($('#Oculus'), 0.45, '+=30', pivotDictionary["#Oculus"], {x: "+=250", y: "+=0"}), "+=0");

        // Brush and Pokeball blink in
        this.xr_init_tl.add(dissolveFlashIn(brushQuery, 0.01, 0));
        this.xr_init_tl.add(dissolveFadeFromWhite(brushQuery, 0.05, 0.05));
        this.xr_init_tl.add(dissolveFlashIn(pokeballQuery, 0.01, 0.08));
        this.xr_init_tl.add(dissolveFadeFromWhite(pokeballQuery, 0.05, 0.13));
        this.xr_init_tl.add(dissolveFlashIn(crownQuery, 0.01, 0));
        this.xr_init_tl.add(dissolveFadeFromWhite(crownQuery, 0.05, 0.05));
        this.xr_init_tl.add(transformComponent(crownQuery, 0.05, '+=5', pivotDictionary["#Oculus"], {x: "+=0", y: "-=5"}), "-=0.65");
        this.xr_init_tl.add(transformComponent(crownQuery, 0.25, '-=15', pivotDictionary["#Oculus"], {x: "+=0", y: "+=55"}), "+=0");

        // Blink fade in
        this.init_tl.add(dissolveFlashIn(bodyQuery, 0.01, 0));
        this.init_tl.add(dissolveFadeFromWhite(bodyQuery, 0.05, 0.05));

        // After blinking in, add a bit of bounce to fall back to the ground
        this.init_tl.add(transformComponent($('#ArmL'), 0.2, '-=5', pivotDictionary["#ArmL"]), 0.08);
        this.init_tl.add(transformComponent($('#ArmR'), 0.2, '+=5', pivotDictionary["#ArmR"]), 0.08);
        this.init_tl.add(transformComponent($('#LegL'), 0.2, '+=5', pivotDictionary["#LegL"]),0.08);
        this.init_tl.add(transformComponent($('#LegR'), 0.2, '+=5', pivotDictionary["#LegR"]), 0.08);
        this.init_tl.add(transformComponent($('#Phipson'), 0.2, '-=0', pivotDictionary["#Phipson"], {x: "+=0", y: "-=5"}), 0.08);
        this.init_tl.add(transformComponent($('#ArmL'), .25, '+=50', pivotDictionary["#ArmL"]), 0.3);
        this.init_tl.add(transformComponent($('#ArmR'), .25, '-=60', pivotDictionary["#ArmR"]), 0.3);
        this.init_tl.add(transformComponent($('#LegL'), .25, '-=25', pivotDictionary["#LegL"]),0.3);
        this.init_tl.add(transformComponent($('#LegR'), .25, '-=35', pivotDictionary["#LegR"]), 0.3);
        this.init_tl.add(transformComponent($('#Phipson'), .25, '-=10', pivotDictionary["#Phipson"], {x: "+=0", y: "+=55"}), 0.3);
    }

    /**
     * Helper function called by App.js that will be used to play the timeline when the page loads
     */
    playTimeline() {
        this.state.timelineEntryPoints[this.state.pageID].timeScale(1).play();
    }

    /**
     * Changes the CSS and animation routine of the avatar on the Landing Page based on the App.js arrow buttons
     * @param {Number} newID The new pageID that is set by App.js that will change the type of animation that will be played
     */
    swapTimeline(newID) {
        let oldID = this.state.pageID;
        this.setState((state, props) => ({
            pageID: newID,
          }), () => {
              switch(oldID) {
                    case 0:
                        this.xr_loop_tl.reverse();
                        TweenMax.delayedCall(0.5, () => {this.xr_init_tl.reverse()})
                        break;
                    case 1:
                        this.aff_loop_tl.reverse();
                        break;
                    case 2:
                        this.swe_loop_tl.reverse();
                        break;

              }

              TweenMax.delayedCall(2, () => {this.playTimeline()});
        });
    }


    componentDidMount() {
        this.setState(() => ({
            pageID: this.props.pageID
        }), () => {
            this.props.onRef(this);
            this.initializeSVGElements();
            if (!this.state.pageInitialized) {
                this.initializeTimelines();
                this.setState((state, props) => ({
                    pageInitialized: true,
                  }));
            } else {
                this.init_tl.restart();
            }
            this.init_tl.play();
            console.log("Playing...");
        });
    }

    componentWillUnmount() {
        this.props.onRef(null);
    }

    render() {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 -80 675 720"><g id="DeskShadow"><path id="RectangleShadow" className="landing-shadow" d="M555.12 559.88l-415.48-7.24-98.74 45.92 415.48 7.24 98.74-45.92z"/></g><g id="PhipsonShadow"><ellipse id="Eclipse" className="landing-shadow" cx="429.85" cy="575.15" rx="89.88" ry="10.58"/></g><g id="Phipson"><g id="ArmR"><rect id="BicepR" className="landing-body" x="407.51" y="295.82" width="26" height="85.44" rx="12" ry="12" transform="rotate(4.68 1369.117 -180.839)"/><rect id="ForeArmR" className="landing-body" x="408.23" y="359.65" width="26" height="69.66" rx="12" ry="12" transform="rotate(-6.58 -286.712 695.97)"/><path id="HandR" className="landing-skin" d="M433.25 436.3c2.16 8.3 3.85 9.86 2.59 12.1-2.24 4-11 5.09-16.06 1.45-3.37-2.43-4.08-6.35-5.52-14.2-.77-4.23-.62-6.79.08-9.15.51-1.73 1.24-4.17 3.43-5.74a9.81 9.81 0 0111 .38c3.01 2.34 1.87 5.13 4.48 15.16z" transform="translate(-39.21 -79.13)"/><path className="landing-table-side" d="M424.19 451.67a4 4 0 001.65-1.71 2.31 2.31 0 00-.2-2.21 17.57 17.57 0 00-2.91-3.85 18.54 18.54 0 01-1.7-1.82 6.67 6.67 0 01-1.09-2.26 11.41 11.41 0 01-.13-4.93 13.59 13.59 0 00.5 4.81 7.17 7.17 0 001.09 2.11 17.23 17.23 0 001.69 1.74 16.27 16.27 0 011.59 1.91 12 12 0 011.3 2.12 3.89 3.89 0 01.36 1.23 2.29 2.29 0 01-.28 1.26 3.88 3.88 0 01-1.87 1.6zM429.71 451.88a4.38 4.38 0 001.37-1.57 2.58 2.58 0 00.25-1 1.9 1.9 0 00-.28-.94 33.24 33.24 0 00-2.49-3.44l-1.32-1.68a7.36 7.36 0 01-1.1-1.9 9.57 9.57 0 01-.64-4.25 11.69 11.69 0 001 4.1 17.1 17.1 0 002.47 3.43l1.27 1.73a12 12 0 011.17 1.84 2.38 2.38 0 01.24 1.12 2.85 2.85 0 01-.34 1.08 4.1 4.1 0 01-1.6 1.48zM433.69 450.49a5.59 5.59 0 001.34-1.41 1.28 1.28 0 00-.07-1.64c-.42-.44-1-.86-1.44-1.33a13.67 13.67 0 01-1.31-1.54 14.69 14.69 0 01-1.87-3.55 11.26 11.26 0 01-.59-3.94 15.31 15.31 0 00.95 3.81 15.57 15.57 0 001.92 3.39 11.09 11.09 0 001.22 1.5c.45.48 1 .86 1.42 1.42a1.52 1.52 0 01.35 1 1.88 1.88 0 01-.38 1 5.09 5.09 0 01-1.54 1.29z" transform="translate(-39.21 -79.13)"/><path className="landing-table-side" d="M419.78 449.85a9.5 9.5 0 01-3.31-4.24 31.85 31.85 0 01-1.5-5.23c-.4-1.77-.72-3.55-1-5.33a24.25 24.25 0 01-.4-5.45 18 18 0 011.32-5.32 7.84 7.84 0 013.56-4.13 9.85 9.85 0 0110.36 1 9.56 9.56 0 00-5-1.72 9.24 9.24 0 00-5.15 1.06 7.64 7.64 0 00-3.32 4 17.27 17.27 0 00-1.24 5.18c-.23 3.57.71 7.12 1.31 10.67a32 32 0 001.36 5.22 9.36 9.36 0 003.01 4.29z" transform="translate(-39.21 -79.13)" id="HandR-2" data-name="HandR"/><g id="HandheldStickyR"><path id="StickyNoteR" className="landing-sticky-yellow-1" d="M394.96 353.75l5.68 17.46-22.52 4.05-5.68-17.46 22.52-4.05z"/></g><g id="BrushHandR"><rect id="BrushHandleHandR" className="landing-brush-handle" x="270.06" y="447.01" width="225.65" height="15.66" rx="7.83" ry="7.83" transform="rotate(-18.87 125.107 533.216)"/><path id="BrushTipHandR" className="landing-table-leg-side" d="M287 489c-5.73-10.31-18.68-11.6-26.5-10-13.11 2.69-22.15 15.63-22.5 26-.16 5 1.77 7.7 1.5 16.5a58.49 58.49 0 01-2 13.5c3-5.87 7.91-13 16-16 11.3-4.17 18.94 3.38 27-1.5 7.58-4.59 12.22-18.2 6.5-28.5z" transform="translate(-39.21 -79.13)"/><path id="BrushTipHandR-2" className="landing-brush-paint" data-name="BrushTipHandR" d="M238 505c-.16 5 1.77 7.7 1.5 16.5a58.49 58.49 0 01-2 13.5c3-5.87 7.91-13 16-16l8.5-4.25-10.25-1.54 1.75-8.46-9.75 4L243 500z" transform="translate(-39.21 -79.13)"/></g><path className="landing-skin" d="M420.42 429.11a4 4 0 012.41 2.59 3.82 3.82 0 01-.25 2.51 11.5 11.5 0 002.92 2.92c.78.53 1.46.84 1.71 1.61a2 2 0 01-.6 2.19c-.2.13-.59.27-2.85-.59a14.55 14.55 0 01-3.38-1.56 9.39 9.39 0 01-2.23-1.94 8.77 8.77 0 01-1.49-2.62" transform="translate(-39.21 -79.13)"/><path className="landing-table-side" d="M420.42 429.11a4.05 4.05 0 012.33 2 3.77 3.77 0 010 3.15v-.18a13.31 13.31 0 001.79 2 21.44 21.44 0 002.18 1.59 2 2 0 01.81 1.24 2.42 2.42 0 01-.14 1.48 2 2 0 01-.46.63.93.93 0 01-.38.22 1.24 1.24 0 01-.42 0 6.53 6.53 0 01-1.37-.33 16.77 16.77 0 01-4.92-2.35 8.56 8.56 0 01-3.15-4.36 9 9 0 003.33 4.1 18.94 18.94 0 004.88 2.17 6 6 0 001.26.29.47.47 0 00.45-.14 1.16 1.16 0 00.32-.46 1.78 1.78 0 00-.5-2.16 21.16 21.16 0 01-2.18-1.62 11.91 11.91 0 01-1.79-2.09l-.06-.09.05-.09a3.7 3.7 0 00.38-1.43 3.61 3.61 0 00-.25-1.48 4 4 0 00-2.16-2.09z" transform="translate(-39.21 -79.13)"/></g><g id="LegR"><g id="LowerLegR"><path className="landing-shoe" d="M432.53 634l-5.36 4.68a16.59 16.59 0 00-10.07 2.18 15.86 15.86 0 00-4.34 3.82l-.08 7.37a44.69 44.69 0 007.63 2.37 41.05 41.05 0 0016.12.5 39.43 39.43 0 0017.76-8.13l.12-12.24z" transform="translate(-39.21 -79.13)"/><path className="landing-shoe-outline" d="M454.31 634.48q-2.73.15-5.46.18h-5.44c-1.81 0-3.63-.06-5.45-.12s-3.62-.13-5.44-.25l.26-.09c-1.84 1.5-3.69 3-5.61 4.39 1.65-1.71 3.38-3.35 5.11-5l.1-.09h5.61c1.82 0 3.63.09 5.44.15s3.63.17 5.44.3 3.62.34 5.44.53z" transform="translate(-39.21 -79.13)"/><path className="landing-pants" d="M455.93 635.2a32.1 32.1 0 01-27.12 0c-3.21-38-6.42-73.67-9.63-111.67l39 1.79z" transform="translate(-39.21 -79.13)"/><path className="landing-pants-outline" d="M455.88 635.2l.79-55 .19-13.73.28-13.74c.28-9.15.54-18.31 1-27.46h.1c.1 9.17 0 18.32-.11 27.48l-.29 13.74-.38 13.73L456 635.2z" transform="translate(-39.21 -79.13)"/><path className="landing-shoe-outline" d="M430.76 639.54a15.9 15.9 0 00-4.88-.77 16.14 16.14 0 00-4.84.74 15.65 15.65 0 00-4.4 2.1 15.9 15.9 0 00-3.49 3.36l.09-.25-.05 7.36-.28-.43a48.65 48.65 0 0010.47 2.88 39.31 39.31 0 0010.83.31 38.39 38.39 0 0010.53-2.64 42.55 42.55 0 009.51-5.38 38.62 38.62 0 01-9.29 5.9 37.45 37.45 0 01-10.65 3 43.56 43.56 0 01-21.75-3.2l-.29-.12v-.31l.12-7.36v-.15l.08-.1a16.75 16.75 0 013.77-3.41 16.35 16.35 0 014.63-2 15.71 15.71 0 019.89.47z" transform="translate(-39.21 -79.13)"/></g><path className="landing-pants" d="M418.79 447.07l-38.82-2.67 4.2-124.33 59.8 18.72-25.18 108.28z"/><path className="landing-pants-outline" d="M456.38 532.38l8.08-36c1.35-6 2.65-12 4.11-18s3-11.94 4.65-17.87h.1c-1.13 6.05-2.46 12.05-3.77 18.06s-2.85 12-4.31 17.94l-8.76 35.85z" transform="translate(-39.21 -79.13)"/></g><g id="LegL"><path id="ThighL" className="landing-pants" d="M489.08 440.21L448.13 450l-23.77-119.01 60.38-5.44 4.34 114.66z"/><path className="landing-pants-outline" d="M487.34 529.13c-1.69-7.4-3.27-14.83-4.83-22.26l-4.57-22.3-4.34-22.36-2.09-11.21-2-11.21 2.49 11.13 2.36 11.14 4.57 22.31 4.34 22.35c1.39 7.46 2.78 14.93 4.07 22.41zM528.46 523.53c-.54-8.66-1-17.33-1.37-26l-1.1-26-.87-26-.35-13-.25-13 .74 13 .63 13 1.1 26 .87 26c.24 8.65.47 17.32.6 26z" transform="translate(-39.21 -79.13)"/><g id="LowerLegL"><path className="landing-shoe" d="M518.32 627l1.92 9.49-3.69 7.35a11.66 11.66 0 00-6.29 7.06c-.36 1.3-1 3.51.13 5.11 2.77 4 13.79.18 14.5-.07a26.08 26.08 0 0010.47-6.69 28.19 28.19 0 007.32-17.25l-5.24-11.16z" transform="translate(-39.21 -79.13)"/><path className="landing-shoe-outline" d="M518.45 626.78c.28.77.49 1.55.73 2.32s.43 1.56.63 2.35c.38 1.57.73 3.14 1 4.73v.17l-.08.14a65 65 0 01-4.13 7.13 69.53 69.53 0 013.25-7.57v.32c-.33-1.58-.62-3.17-.87-4.76-.13-.8-.24-1.6-.34-2.4s-.15-1.61-.19-2.43z" transform="translate(-39.21 -79.13)"/><path className="landing-pants" d="M541.87 619.9a17.48 17.48 0 01-12.66 12.52c-8.57 2.08-15.05-3.47-15.63-4Q500.29 577.88 487 527.33l41.1-9.62c4.18 33.45 9.58 68.74 13.77 102.19z" transform="translate(-39.21 -79.13)"/><path className="landing-pants-outline" d="M529.5 632.26a17 17 0 01-4.15.53 16.31 16.31 0 01-4.16-.53 19.92 19.92 0 01-3.94-1.48 18.58 18.58 0 01-3.55-2.3l-.06-.05v-.08c-2.28-8.41-4.61-16.81-6.82-25.23s-4.51-16.83-6.68-25.27-4.41-16.86-6.52-25.31-4.27-16.9-6.32-25.37q3.59 12.58 7 25.19c2.31 8.4 4.52 16.83 6.77 25.25s4.42 16.85 6.62 25.28 4.32 16.88 6.47 25.33l-.08-.13a19.46 19.46 0 007.21 3.9 16.69 16.69 0 004.1.64 17 17 0 004.11-.37zM541.87 619.9c-1-5.68-1.85-11.37-2.71-17.07s-1.62-11.41-2.44-17.11-1.52-11.42-2.21-17.14l-1-8.58c-.3-2.86-.64-5.72-.92-8.59.5 2.84.94 5.68 1.41 8.53l1.3 8.54c.85 5.7 1.63 11.4 2.44 17.11s1.52 11.42 2.21 17.14 1.35 11.44 1.92 17.17z" transform="translate(-39.21 -79.13)"/><path className="landing-body-outline" d="M524.68 642.37a14.7 14.7 0 00-11.46 4.23 10 10 0 00-2.77 5.4 5.91 5.91 0 000 2.92 3 3 0 001.89 1.89 12.33 12.33 0 006.06.28 42.27 42.27 0 006.15-1.46 30.49 30.49 0 0010.85-6.42 28.64 28.64 0 01-4.85 4.2 27.84 27.84 0 01-5.75 2.94 34.53 34.53 0 01-6.3 1.65 20.79 20.79 0 01-3.26.29 9.14 9.14 0 01-3.32-.54 4 4 0 01-2.42-2.54 6.73 6.73 0 01.06-3.4 12.35 12.35 0 011.1-3.12 10.31 10.31 0 012-2.62 15.29 15.29 0 015.61-3.27 14.13 14.13 0 016.41-.43z" transform="translate(-39.21 -79.13)"/></g></g><g id="Body"><path id="Body-2" data-name="Body" className="landing-body" d="M474.18 277.2l-55 19-2 115.48a190.26 190.26 0 0038 9.51 193.24 193.24 0 0074.24-4l-2.78-121.31z" transform="translate(-39.21 -79.13)"/><path className="landing-body-outline" d="M418.71 321.37q0 11.29-.08 22.6t-.25 22.6c-.12 7.53-.2 15.07-.37 22.6l-.48 22.59-.26-.37a200.39 200.39 0 0037.91 9.88 181.4 181.4 0 01-19.33-3.54 190.33 190.33 0 01-18.85-5.61l-.26-.09v-.28l.3-22.6c.09-7.53.27-15.06.42-22.6s.32-15.06.53-22.59.44-15.06.72-22.59z" transform="translate(-39.21 -79.13)" id="Body-3" data-name="Body"/><path className="landing-body-outline" d="M455.16 421.2a198.7 198.7 0 0037.29 1.28 203.79 203.79 0 0036.84-5.74l-.35.45-.73-30.33-.63-30.32-.58-30.33-.41-30.34 1 30.32.85 30.33.75 30.32.66 30.33v.37l-.35.08q-9.1 2.25-18.38 3.66c-6.18.92-12.4 1.52-18.64 1.84a187.93 187.93 0 01-37.32-1.92z" transform="translate(-39.21 -79.13)" id="Body-4" data-name="Body"/></g><path id="PhipsonCrown" className="landing-body-crown" d="M503.52 79.13l4.71 23 15.24-18.5v21L539 91.88a87.91 87.91 0 00-7.63 32.75 39.33 39.33 0 00-38-9.5 86.52 86.52 0 0010.18-36z" transform="translate(-39.21 -79.13)"/><g id="Head"><rect id="Neck" className="landing-skin" x="423.97" y="179.07" width="22" height="34" rx="11" ry="11"/><rect id="Neck-2" className="landing-neck-shadow" data-name="Neck" x="423.07" y="176.7" width="22" height="22" rx="11" ry="11"/><path id="Face" className="landing-skin" d="M427 271.2a79.41 79.41 0 01-30-10c-7.73-4.44-10.4-7.75-11.95-11-4.72-9.81-.23-21 .92-23.66v-41.67c0-24.57 18.48-44.67 41.07-44.67h86.12c22.59 0 41.07 20.1 41.07 44.67v41.67a148.72 148.72 0 01-46 33.66c-34.57 16.03-66.11 12.65-81.23 11z" transform="translate(-39.21 -79.13)"/><rect className="landing-head-eyes" x="367.97" y="110.07" width="6" height="34" rx="3" ry="3"/><rect className="landing-head-eyes" x="417.97" y="110.07" width="6" height="34" rx="3" ry="3"/><ellipse className="landing-oculus-body" cx="372.47" cy="120.07" rx="1.5" ry="3"/><ellipse className="landing-oculus-body" cx="422.47" cy="120.07" rx="1.5" ry="3"/><path className="landing-head-hair" d="M471.18 164.2c-14 9.3-26.66 12.79-42 17a232.67 232.67 0 01-50 8v-41.35c0-3 .78-22.09 24-33.6 2.89-1.43 12.34-7.29 32-7.75 30.44-.71 55.38 11.56 70 20.7a108.72 108.72 0 01-34 37z" transform="translate(-39.21 -79.13)"/><path className="landing-head-hair" d="M435.18 157.49c38.65 26.59 61.89 33.08 76.28 33.68 5.47.23 23.07.18 35.75 16.84a55.83 55.83 0 016.36 10.86c2.39-10.43 6.76-34.64 0-61.38-1.6-6.33-3.7-14.28-8.74-22.46-16-25.91-44.28-25.84-51.72-25.83-9.25 0-35.59.08-50 24.71a66.46 66.46 0 00-7.93 23.58z" transform="translate(-39.21 -79.13)"/><path className="landing-table-top" d="M554.18 226.54a157.5 157.5 0 01-15.56 14.89c-2.78 2.28-5.64 4.45-8.57 6.55s-5.94 4.06-9 5.89a131.73 131.73 0 01-39.94 16 147.25 147.25 0 01-43 2.77c-3.58-.27-7.16-.64-10.73-1.06a70.56 70.56 0 01-10.6-2A81.58 81.58 0 01397 261.2a81.19 81.19 0 0019.95 7.86c6.93 1.83 14.12 2.25 21.26 2.79a169 169 0 0021.47.06 140.18 140.18 0 0041.73-9.26c3.29-1.4 6.61-2.75 9.81-4.36 1.61-.77 3.18-1.63 4.77-2.45s3.15-1.7 4.68-2.63c3.11-1.78 6.1-3.75 9.07-5.75s5.82-4.18 8.62-6.41a155.74 155.74 0 0015.82-14.51z" transform="translate(-39.21 -79.13)" id="Face-2" data-name="Face"/></g><g id="ArmL"><g id="HandheldStickyL"><path id="StickyNoteL" className="landing-sticky-yellow-2" d="M512.59 445.06a16.3 16.3 0 01-6.23 10.38 15.36 15.36 0 01-6.57 2.68L484 447.61a24.23 24.23 0 0010.89-14.28z" transform="translate(-39.21 -79.13)"/></g><g id="PokeballHandL"><path className="landing-pokeball-top" d="M505.69 435.66h-24.81a12.41 12.41 0 0124.81 0z" transform="translate(-39.21 -79.13)"/><path className="landing-oculus-body" d="M480.88 435.66h24.81a12.41 12.41 0 01-24.81 0z" transform="translate(-39.21 -79.13)"/><path className="landing-pokeball-strip" d="M441.67 355.75h24.79v2.07h-24.79z"/><circle className="landing-pokeball-center" cx="454.07" cy="356.79" r="2.66" strokeMiterlimit="10"/></g><path id="HandL" className="landing-skin" d="M514.52 424.25c4.63 5.23-1.91 17-3.45 19.8-2.66 4.8-5 9-9.77 10.32-5.88 1.66-13.12-1.55-13.67-5-.39-2.4 2.68-3.6 5.71-9.61a31.55 31.55 0 002.5-6.83 8.56 8.56 0 00-3-.22c-2 .21-2.8 1.11-4.06.71a2.57 2.57 0 01-1.85-2.14c0-1.33 2-2.23 3.21-2.78 4.24-1.93 8.4-1.55 11-3.08s2.21-3 4.5-3.81c2.89-1.04 6.81.3 8.88 2.64z" transform="translate(-39.21 -79.13)"/><rect id="BicepL" className="landing-body" x="513.76" y="294.91" width="26" height="85.44" rx="12" ry="12" transform="matrix(.99 -.17 .17 .99 -88.78 14.96)"/><path className="landing-body-outline" d="M479.7 291.7l-10.03-61.32 11.02 61.16-.99.16z" id="BicepL-2" data-name="BicepL"/><path className="landing-body-outline" d="M534.28 304.45l7.27 41.24c1.2 6.88 2.47 13.73 3.54 20.65a22.11 22.11 0 01-1.35 10.38 9.87 9.87 0 01-3.12 4.21 6.87 6.87 0 01-2.39 1.11c-.86.19-1.72.29-2.58.43v-.05c.85-.17 1.72-.29 2.56-.51a6.61 6.61 0 002.29-1.16 9.71 9.71 0 003-4.15 21.61 21.61 0 001.16-10.21l-3.46-20.63-6.92-41.3z" transform="translate(-39.21 -79.13)" id="BicepL-3" data-name="BicepL"/><rect id="ForeArmL" className="landing-body" x="508.01" y="356.05" width="26" height="79.5" rx="12" ry="12" transform="rotate(23.63 690.54 262.482)"/><path className="landing-table-front" d="M498.75 443.91a18.06 18.06 0 01-1.85 3.18 24.67 24.67 0 01-2.4 2.82 6.81 6.81 0 01-1.51 1.14 4.81 4.81 0 01-1.83.53 4.29 4.29 0 01-1.88-.25 3.55 3.55 0 01-1.47-1.12 3.83 3.83 0 003.3 1 5.29 5.29 0 003-1.64c.85-.84 1.66-1.77 2.44-2.69s1.52-1.95 2.2-2.97zM502.11 446.22a24.6 24.6 0 01-4.35 5.76 7 7 0 01-3.12 1.9 4.45 4.45 0 01-1.85.12 3.47 3.47 0 01-1.63-.8 3.8 3.8 0 003.37.31 7.52 7.52 0 002.89-1.89 52.78 52.78 0 004.69-5.4zM505.45 446.77A14.26 14.26 0 01504 450a15.79 15.79 0 01-2.12 2.84 7.41 7.41 0 01-3 1.88 4.85 4.85 0 01-3.5-.18 5.38 5.38 0 003.37-.18 8 8 0 002.81-1.87 21.77 21.77 0 002.15-2.7 23.68 23.68 0 001.74-3.02z" transform="translate(-39.21 -79.13)"/><g id="HandL-2" data-name="HandL"><path className="landing-skin" d="M496.3 433a8.49 8.49 0 00-3.52-.15c-1.93.33-2.84 1.22-4 .83-.55-.18-1.27-.68-1.85-2.14" transform="translate(-39.21 -79.13)"/><path className="landing-table-front" d="M496.3 433a11.51 11.51 0 00-2.62-.06 10 10 0 00-2.51.61 8.58 8.58 0 01-1.3.41 2.14 2.14 0 01-1.43-.2 3.47 3.47 0 01-1.52-2.22 3.92 3.92 0 001.69 1.87A3.09 3.09 0 00491 433a8 8 0 012.66-.52 7.15 7.15 0 012.64.52z" transform="translate(-39.21 -79.13)"/></g><path className="landing-body-outline" d="M504.11 431.72a12.17 12.17 0 01-6.48-15.72l7.3-17.09c2.43-5.7 4.81-11.42 7.35-17.07s5.12-11.28 7.86-16.84h.1c-2.22 5.79-4.64 11.49-7 17.2s-5 11.33-7.54 17l-7.57 17a11.75 11.75 0 00-.12 8.91 11.89 11.89 0 006.18 6.52z" transform="translate(-39.21 -79.13)" id="ForeArmL-2" data-name="ForeArmL"/><path className="landing-body-outline" d="M544.06 375.57l-3.71 8.79-3.78 8.76-7.57 17.52-3.86 8.72-1.93 4.37a38.81 38.81 0 01-2.07 4.32 12.18 12.18 0 01-7.71 5.37 12 12 0 01-4.77 0 19.87 19.87 0 01-4.47-1.66 19.71 19.71 0 004.49 1.54 12.12 12.12 0 0012.18-5.47 39.09 39.09 0 002-4.29l1.89-4.38 3.79-8.76 7.72-17.4 3.87-8.73z" transform="translate(-39.21 -79.13)" id="ForeArmL-3" data-name="ForeArmL"/></g><g id="Oculus"><path className="landing-oculus-main" d="M489 238.35l-99-10a13.67 13.67 0 01-14-14v-29a15 15 0 0112-10l101-2c21.42-1.79 38.82 12.12 41 27 2.53 17.3-15.06 38.85-41 38z" transform="translate(-39.21 -79.13)"/><path className="landing-oculus-outline" d="M489 238.4l-99-9.8a14.45 14.45 0 01-6.31-1.35 13.56 13.56 0 01-5-4 13.89 13.89 0 01-2.66-5.89 14.08 14.08 0 01-.29-3.23v-28.81A15.46 15.46 0 01387.93 175h.07l54.41-1.18 27.2-.57 13.59-.25c2.27-.06 4.52-.07 6.8-.16 1.15 0 2.28-.13 3.43-.09l3.44.17a43 43 0 0113.26 3.48 39.32 39.32 0 0111.35 7.6 30.11 30.11 0 017.52 11.4 19.22 19.22 0 011 3.31c.11.57.25 1.13.34 1.69s.13 1.15.17 1.72A25.79 25.79 0 01530 209a33.06 33.06 0 01-5.55 12.43 39.5 39.5 0 01-9.69 9.57 42.08 42.08 0 01-25.76 7.4zm0-.1a41.78 41.78 0 0025.55-7.62 39 39 0 009.5-9.54 32.49 32.49 0 005.36-12.29 25.4 25.4 0 00.44-6.68c0-.56-.12-1.11-.18-1.67s-.23-1.09-.35-1.64a20 20 0 00-.95-3.21 29.49 29.49 0 00-7.47-11 41 41 0 00-24.12-10.76l-3.36-.17c-1.12 0-2.25.07-3.37.1-2.25.08-4.53.1-6.79.15l-13.61.27-27.22.5-54.43 1a14.74 14.74 0 00-11.74 9.76v-.11V214.15a13.44 13.44 0 0013.71 14z" transform="translate(-39.21 -79.13)"/><path className="landing-oculus-body" d="M465 235.35l-76-8a12 12 0 01-12-11v-29a12 12 0 0112-11l69-1a32.56 32.56 0 0111 1c3.7 1 7.15 1.91 10 5a16 16 0 014 10v35a11 11 0 01-4 7c-1.81 1.33-3.66 1.62-6 2a25.56 25.56 0 01-8 0z" transform="translate(-39.21 -79.13)"/><path id="OculusStrap" className="landing-oculus-strap" d="M555.09 204c-26.12 2.62-45.18 4.29-48.11 4.33a8.71 8.71 0 01-4-1 10.7 10.7 0 01-2.75-1.88c-.08-3.71-.16-7.41-.25-11.12a7.67 7.67 0 013-4 7.24 7.24 0 014-1c3.79 0 22.45-.39 48.16-.94a3.42 3.42 0 011.81.88 3.72 3.72 0 011 3.06l-.7 8a4.16 4.16 0 01-2.19 3.71z" transform="translate(-39.21 -79.13)"/><circle className="landing-oculus-outline" cx="410.02" cy="100.15" r="1.7"/><circle className="landing-oculus-outline" cx="354.33" cy="100.72" r="1.12"/><circle className="landing-oculus-outline" cx="354.33" cy="146.16" r="1.12"/><circle className="landing-oculus-outline" cx="410.02" cy="151.59" r="1.7"/></g><g id="Ear"><path id="Ear-2" data-name="Ear" className="landing-skin" d="M533.18 207.2c1.76-7.12 7.23-11.47 12-11 6.08.61 8.63 8.81 9 10 2.53 8.05-.27 20.06-8 22-6.22 1.57-12.24-4.25-13-5z" transform="translate(-39.21 -79.13)"/><path className="landing-table-front" d="M554.18 206.64a21 21 0 011.11 4.93 27 27 0 01-.11 5.08 22.66 22.66 0 01-1.26 5 16.22 16.22 0 01-2.69 4.42 9.46 9.46 0 01-9.55 3 17.87 17.87 0 01-8.5-5.38 24.43 24.43 0 004.09 2.86 14.91 14.91 0 004.58 1.77 9 9 0 008.64-2.9 15.39 15.39 0 002.55-4.11 26.39 26.39 0 001.39-4.72 25 25 0 00-.25-9.95z" transform="translate(-39.21 -79.13)" id="Ear-3" data-name="Ear"/></g></g><g id="Affinity_Diagram" data-name="Affinity Diagram"><path className="landing-sticky-green" d="M48.02 189.39l-22.67 3.13V164l22.67-3.12v28.51zM207.18 189.39l-22.67 3.13V164l22.67-3.12v28.51zM175.31 387.93l-22.67 3.13v-28.52l22.67-3.12v28.51z"/><path className="landing-sticky-pink-1" d="M22.78 227.21L.12 230.34v-28.52l22.66-3.12v28.51zM175.12 236.85l-22.67 3.13v-28.52l22.67-3.12v28.51zM154.88 425.37l-22.66 3.13v-28.52l22.66-3.12v28.51z"/><path className="landing-sticky-pink-2" d="M77.11 231.94l-22.66 3.13v-28.52l22.66-3.12v28.51zM247.91 221.03l-22.67 3.13v-28.52l22.67-3.12v28.51z"/><path className="landing-sticky-blue" d="M83.97 266.02l-18.19 2.51v-22.88l18.19-2.51v22.88z"/><path className="landing-sticky-yellow-1" d="M93.07 302.49L74.88 305v-22.88l18.19-2.51v22.88zM149.35 302.49L131.16 305v-22.88l18.19-2.51v22.88zM63.97 309.3l-18.19 2.51v-22.89l18.19-2.5v22.88zM93.07 335.74l-18.19 2.51v-22.88l18.19-2.51v22.88zM29.64 307.17l-18.19 2.51V286.8l18.19-2.51v22.88zM61.3 358.77l-18.18 2.51V338.4l18.18-2.51v22.88zM97.88 368.99l-18.19 2.51v-22.88l18.19-2.51v22.88zM185.8 508.77l-18.19 2.51V488.4l18.19-2.51v22.88zM238.61 441.83l-18.19 2.51v-22.88l18.19-2.51v22.88zM267.23 271.26l-18.19 2.51v-22.88l18.19-2.51v22.88zM182.17 471.49L163.98 474v-22.89l18.19-2.5v22.88zM107.03 485.86l-18.19 2.51v-22.89l18.19-2.5v22.88zM231.58 310.95l-18.19 2.51v-22.88l18.19-2.51v22.88zM211.92 291.52l-18.19 2.5v-22.88l18.19-2.51v22.89z"/><path className="landing-sticky-yellow-2" d="M73.07 323.05l-18.19 2.5v-22.88l18.19-2.51v22.89zM119.03 504.15l-18.19 2.51v-22.88l18.19-2.51v22.88zM257.18 467.23l-18.19 2.5v-22.88l18.19-2.51v22.89zM229.95 489.5l-18.19 2.51v-22.88l18.19-2.51v22.88zM211.76 458.79l-18.19 2.51v-22.88l18.19-2.51v22.88zM20.54 342.95l-18.19 2.51v-22.88l18.19-2.51v22.88zM167.54 304.81l-18.19 2.51v-22.88l18.19-2.51v22.88zM232.51 280.96l-18.19 2.51v-22.88l18.19-2.51v22.88zM173.07 485.86l-18.19 2.51v-22.89l18.19-2.5v22.88zM102.16 289.8l-18.19 2.5v-22.88l18.19-2.51v22.89z"/><path className="landing-sticky-blue" d="M25.78 261.9l-18.19 2.51v-22.88l18.19-2.51v22.88zM220.86 422.89l-18.19 2.51v-22.89l18.19-2.5v22.88zM119.03 454.53l-18.19 2.51v-22.89l18.19-2.5v22.88zM178.7 441.83l-18.19 2.51v-22.88l18.19-2.51v22.88zM276.33 251.45l-18.19 2.51v-22.88l18.19-2.51v22.88zM223.42 251.45l-18.19 2.51v-22.88l18.19-2.51v22.88zM163.91 274.09l-18.19 2.51v-22.88l18.19-2.51v22.88z"/></g><g id="StandingDesk"><g id="StandingDeskLegTop"><path className="landing-table-leg-side" d="M99.24 402.82l-14.27 4.13V299.17l14.27-4.14v107.79z"/><path className="landing-table-leg-front" d="M69.38 299.17h15.58v107.78H69.38z"/><path className="landing-table-leg-side" d="M514.71 410.06l-14.27 4.13V306.41l14.27-4.14v107.79z"/><path className="landing-table-leg-front" d="M484.85 306.41h15.58v107.78h-15.58z"/></g><g id="StandingDeskBottomLegs"><path className="landing-table-leg-top" d="M139.64 543.89l-98.21 43.09H12.34l106.47-42.83 20.83-.26z"/><path className="landing-table-leg-side" d="M106.9 558.21l-21.93 9.81V408.5l21.93-6.38v156.09z"/><path className="landing-table-leg-top" d="M106.9 402.12l-21.93 6.38H59.35l10.03-1.96v.41h15.59l14.24-4.23.03-.6h7.66z"/><path className="landing-table-leg-front" d="M59.35 408.5h25.61v159.51H59.35z"/><path className="landing-table-leg-side" d="M139.64 552.64L40.9 598.56v-11.59l98.74-43.08v8.75z"/><path className="landing-table-leg-front" d="M12.34 586.98H40.9v11.57H12.34z"/><path className="landing-table-leg-top" d="M555.12 551.14l-98.21 43.08h-29.1l106.48-42.83 20.83-.25z"/><path className="landing-table-leg-side" d="M522.38 565.45l-21.94 9.81V415.75l21.94-6.39v156.09z"/><path className="landing-table-leg-top" d="M522.38 409.36l-21.94 6.39-25.62-.01 10.03-2.33v.78h15.59l14.27-4.13v-.56l7.67-.14z"/><path className="landing-table-leg-front" d="M474.82 415.74h25.61v159.51h-25.61z"/><path className="landing-table-leg-side" d="M555.12 559.88l-98.74 45.92v-11.59l98.74-43.07v8.74z"/><path className="landing-table-leg-front" d="M427.81 594.22h28.56v11.57h-28.56z"/></g><g id="StandingDeskTop"><path className="landing-table-top" d="M107.28 284.17h439.19l-54.66 16.2-462.45-.54 77.92-15.66z"/><path className="landing-table-front" d="M29.36 299.81h462.17v12.56H29.36z"/><path className="landing-table-side" d="M546.47 296.67l-54.94 15.69v-12.5l54.94-15.69v12.5z"/><g id="DeskItems"><g id="Keyboard"><g id="Key"><path className="landing-keyboard-key-side" d="M92.85 282.03h-5.2l1.02-3.15 2.68.49 1.5 2.66z"/><path className="landing-computer-body" d="M89.7 282.03h-6.73l1.03-3.15h4.67l1.03 3.15z"/><path className="landing-keyboard-key-side" d="M99.85 282.03h-5.2l1.02-3.15 2.68.49 1.5 2.66z"/><path className="landing-computer-body" d="M96.7 282.03h-6.73l1.03-3.15h4.67l1.03 3.15z"/><path className="landing-keyboard-key-side" d="M102.65 282.03l1.02-3.15 2.68.49 1.5 2.66"/><path className="landing-computer-body" d="M97.97 282.03l1.03-3.15h4.67l1.03 3.15"/><path className="landing-keyboard-key-side" d="M225.65 283.26l1.03-3.15 2.67.49 1.5 2.66"/><path className="landing-computer-body" d="M220.97 283.26l1.03-3.15h4.68l1.02 3.15"/><path className="landing-keyboard-key-side" d="M109.65 282.03l1.02-3.15 2.68.49"/><path className="landing-computer-body" d="M104.97 282.03l1.03-3.15h4.67l1.03 3.15"/><path className="landing-keyboard-key-side" d="M127.85 282.03h-5.2l1.02-3.15 2.68.49 1.5 2.66z"/><path className="landing-computer-body" d="M124.7 282.03h-6.73l1.03-3.15h4.67l1.03 3.15z"/><path className="landing-keyboard-key-side" d="M134.85 282.03h-5.2l1.03-3.15 2.67.49 1.5 2.66z"/><path className="landing-computer-body" d="M131.7 282.03h-6.73l1.03-3.15h4.68l1.02 3.15z"/><path className="landing-keyboard-key-side" d="M137.65 282.03l1.03-3.15 2.67.49 1.5 2.66"/><path className="landing-computer-body" d="M132.97 282.03l1.03-3.15h4.68l1.02 3.15"/><path className="landing-keyboard-key-side" d="M151.85 282.03h-5.2l1.03-3.15 2.67.49 1.5 2.66z"/><path className="landing-computer-body" d="M148.7 282.03h-6.73l1.03-3.15h4.68l1.02 3.15z"/><path className="landing-keyboard-key-side" d="M158.85 282.03h-5.2l1.03-3.15 2.67.49 1.5 2.66z"/><path className="landing-computer-body" d="M155.7 282.03h-6.73l1.03-3.15h4.68l1.02 3.15z"/><path className="landing-keyboard-key-side" d="M161.65 282.03l1.03-3.15 2.67.49 1.5 2.66M217.65 282.7l1.03-3.15 2.67.49 1.5 2.66"/><path className="landing-computer-body" d="M212.97 282.7l1.03-3.15h4.68l1.02 3.15M156.97 282.03l1.03-3.15h4.68l1.02 3.15"/><path className="landing-keyboard-key-side" d="M175.85 282.03h-5.2l1.03-3.15 2.67.49 1.5 2.66z"/><path className="landing-computer-body" d="M172.7 282.03h-6.73l1.03-3.15h4.68l1.02 3.15z"/><path className="landing-keyboard-key-side" d="M182.85 282.03h-5.2l1.03-3.15 2.67.49 1.5 2.66z"/><path className="landing-computer-body" d="M179.7 282.03h-6.73l1.03-3.15h4.68l1.02 3.15z"/><path className="landing-keyboard-key-side" d="M185.65 282.03l1.03-3.15 2.67.49 1.5 2.66"/><path className="landing-computer-body" d="M180.97 282.03l1.03-3.15h4.68l1.02 3.15"/><path className="landing-keyboard-key-side" d="M199.85 282.03h-5.2l1.03-3.15 2.67.49 1.5 2.66z"/><path className="landing-computer-body" d="M196.7 282.03h-6.73l1.03-3.15h4.68l1.02 3.15z"/><path className="landing-keyboard-key-side" d="M206.85 282.03h-5.2l1.03-3.15 2.67.49 1.5 2.66z"/><path className="landing-computer-body" d="M203.7 282.03h-6.73l1.03-3.15h4.68l1.02 3.15z"/><path className="landing-keyboard-key-side" d="M209.65 282.03l1.03-3.15 2.67.49 1.5 2.66"/><path className="landing-computer-body" d="M204.97 282.03l1.03-3.15h4.68l1.02 3.15"/></g><path className="landing-keyboard-side" d="M233.53 286.51l-22.46 4.94v-9.87h22.46v4.93z"/><path className="landing-computer-front" d="M77.57 281.58h133.5v9.86H77.57z"/></g><g id="Laptop"><path className="landing-computer-body" d="M332.68 376.12l-5.81-6.46-47.38-10.42v4.95a.83.83 0 00.66.8z" transform="translate(-39.21 -79.13)"/><path className="landing-table-leg-side" d="M426.12 283.94l-139.04 6.59-46.8-10.42 127-5.58 58.84 9.41z"/><path className="landing-laptop-cover" d="M460.59 370.17l-127 6.09a7.3 7.3 0 01-7.31-7.3V286.3a7.31 7.31 0 017.32-7.3l127-6.1c4 0 6.4 3 6.4 7.07v82.66c0 4.03-2.38 7.54-6.41 7.54z" transform="translate(-39.21 -79.13)"/></g><g id="Monitor"><ellipse className="landing-monitor-stand" cx="112.72" cy="295.74" rx="35.8" ry="4.63"/><path className="landing-computer-body" d="M0 111.43h236.7v139.92H0z"/><rect className="landing-monitor-stand" x="106.24" y="195.95" width="12.97" height="103.12" rx="6.48" ry="6.48"/><path className="landing-monitor-stand" d="M82.97 169.46h59.5v44.17h-59.5z"/></g></g></g></g></svg>
      )
    }
}