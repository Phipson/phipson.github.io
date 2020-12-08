import React, {Component} from 'react';
import '../../style.css';
import $ from 'jquery';

import gsap from "gsap";
import { ScrollTrigger } from 'gsap/all';

import scratch_prog from '../media/ScratchProgramming.png';

gsap.registerPlugin(ScrollTrigger);

// Holds a component for a project that will be clicked on to show the actual project page
export default class AppleLogic extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        $(window).scrollTop(0);

        let classList = $(".ProjDet-Section").toArray();

        classList.forEach((element, i) => {
            gsap.set($(element), {css: {opacity: 0}});

            // Scroll animation to fade in the div element
            gsap.timeline({
                scrollTrigger: {
                    trigger: element,
                    start: "60% bottom",
                    end: "40% center",
                    //markers: true, // For debug only
                    scrub: true,
                }
            })
            .to($(element), {css: {opacity: 1}, duration: 0.35, ease: "Power2.easeInOut"});


            // Scroll Animation to fade out the div element
            gsap.timeline({
                scrollTrigger: {
                    trigger: element,
                    start: "90% center",
                    end: "90% top",
                    //markers: true, // For debug only
                    scrub: true,
                }
            })
            .to($(element), {css: {opacity: 0}, duration: 0.35, ease: "Power2.easeInOut"});
        })
    }

    render() {
        // TODO: OnClick switch to target site
        return(<div>
            <div className="ProjDet-Section">
                <h3 className="ProjDet-Header ProjectWhiteText">PROJECT OVERVIEW</h3>
                <div className="ProjDet-OverviewWrapper">
                    <div className="ProjDet-OverviewDesc">
                        <p className="ProjDet-p ProjectWhiteText">
                        As part of my summer internship at Apple's Applied Research Team, I investigated ways casual end-users could program logic for their virtual content using Reality Composer- Apple's tool for creating content in augmented reality. The motivation for this is to introduce a programming environment directly in AR, so that users can avoid the tedium of jumping back and forth between their 2D programming interface and 3D AR environment, thus making logic programming in 3D space more efficient and streamlined. As part of this project, I used the Apple iPad as a primary instrument for interacting in AR. I also experimented with 3D Hand Gestures using the LeapMotion Camera, which was attached to the iPad and integrated into the ARKit environment. (As my work is under Apple's NDA, I am not allowed to describe the project in detail. However, my work was demoed live at internal Open House events, and videos of my work have been showcased across different teams at Apple)
                        </p>
                    </div>
                    <div className="ProjDet-OverviewInfo">
                        <div>
                            <h5 className="ProjectWhiteText">ROLE</h5>
                            <p className="ProjDet-p ProjectWhiteText">
                                Designer<br/>
                                User Researcher<br/>
                                Software Developer (Unity, C#, Swift)
                            </p>
                        </div>
                        <div>
                            <h5 className="ProjectWhiteText">CLIENT</h5>
                            <p className="ProjDet-p ProjectWhiteText">
                                Apple (Applied Research Team)
                            </p>
                        </div>
                        <div>
                            <h5 className="ProjectWhiteText">DURATION</h5>
                            <p className="ProjDet-p ProjectWhiteText">
                                2019 June - 2019 September
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ProjDet-Section">
                <h4 className="ProjDet-Header ProjectWhiteText">INITIAL BRAINSTORMING</h4>
                <div className="ProjDet-SectionDesc">
                    <p className="ProjDet-p ProjectWhiteText">
                    Before examining interface designs, I drafted several possible use cases for Reality Composer, based on existing work and ideas coalesced by the rest of the Applied Research Team. For this project, we identified the following user stories:
                    </p>
                </div>
                <div className="ProjDet-Table">
                    <div className="ProjDet-TableRow">
                        <p className="ProjDet-p-sub ProjectWhiteText">
                            USER STORY 01
                        </p>
                        <p className="ProjDet-p ProjectWhiteText">
                            JARED
                        </p>
                        <p className="ProjDet-p-mini ProjectWhiteText">
                            Jared is a 3D graphics artist who has been working in the game design industry for 5 years. He has been using Apple software for years, but now wants to explore prototypes for games in AR. Unfortunately, because he has no prior programming experience, he finds it difficult to understand how to integrate logic into his existing designs and debug them without switching back and forth between his AR environment and code.
                        </p>
                    </div>
                    <div className="ProjDet-TableRow">
                        <p className="ProjDet-p-sub ProjectWhiteText">
                            USER STORY 02
                        </p>
                        <p className="ProjDet-p ProjectWhiteText">
                            CINDY
                        </p>
                        <p className="ProjDet-p-mini ProjectWhiteText">
                            Cindy is an AR developer who is working at a mixed reality startup. She recently was tasked with designing and prototyping certain AR features for her company, but the rest of her team is unfamiliar with this space and wants to give input on the logic and interactions for the project.
                        </p>
                    </div>
                </div>
            </div>
            <div className="ProjDet-Section">
                <div className="ProjDet-TextImg">
                    <p className="ProjDet-p ProjectWhiteText">
                        When sketching, I decided to represent the programming logic as lego blocks, where each lego block is classified based on its shape and color, and corresponds to a component of the English parts of speech, such as subjects, adjectives, and verbs. The goal was to conceal the underlying complexity of the program itself, and thus make the visual interface familiar and accessible. <br/><br/>
                        Drawing from real-world scenarios where users would interact with puzzles, legos, and blocks in real life, I decided to use a cubby as a menu, where users could reach into the cubby drawers and grab blocks out, thus generating the knowledge they wanted. The cubbies were also categorized by English parts of speech, to further abstract the underlying logical program.<br/><br/>
                        The following were some existing work and projects I referenced as inspiration for this project.
                    </p>
                    {/* FUTURE TODO: Make this a carousel */}
                    <img src={scratch_prog}/>
                </div>
            </div>
            <div className="ProjDet-Section">
                <h4 className="ProjDet-Header ProjectWhiteText">DESIGNING INTERACTIONS</h4>
                <div className="ProjDet-TextImg">
                    <p className="ProjDet-p ProjectWhiteText">
                        Consistent with our analogy of programming logic using legos, I decided to use hand gestures as a primary method of input for interacting with lego blocks. To do so, I created a library for the LeapMotion cameras to map 3D hand gestures with specific logic blocks, offering visual feedback to help users ‘code’.<br/><br/>
                        Due to the variable scale of the virtual environment, it may be difficult to directly attach logic into the virtual objects in the scene, as users may be limited by their physical surroundings. Hence, I also designed a 2D interface that was attached to the users's virtual hands, and enabled users to select, modify, and add logic to virtual objects while standing in one location.
                    </p>
                </div>
            </div>
            <div className="ProjDet-Section">
                <h4 className="ProjDet-Header ProjectWhiteText">USER TESTING AND EVALUATION</h4>
                <div className="ProjDet-SectionDesc">
                    <p className="ProjDet-p ProjectWhiteText">
                    After finishing the prototype, I started running informal user studies asking people within the team with and without AR experience to use the system and perform some programming tasks. Although users did praise the intuitiveness, immersiveness, and accessibility of the interface, when analyzing the data, there were still many pain points left unsolved.                    
                    </p>
                </div>
                <div className="ProjDet-Table">
                    <div className="ProjDet-TableRow">
                        <p className="ProjDet-p-sub ProjectWhiteText" style={{gridColumn: "1/3", justifySelf: "start"}}>
                            Limitations with 3D Hand Input
                        </p>
                        <p className="ProjDet-p-mini ProjectWhiteText" style={{gridColumnStart: 3}}>
                            Particularly with a constrained physical environment, end users would find challenges navigating the scene to obtain and combine logical blocks together. In future, it would be helpful to consider methods of selecting and interacting with logic in a stationary position.
                        </p>
                    </div>
                    <div className="ProjDet-TableRow">
                        <p className="ProjDet-p-sub ProjectWhiteText" style={{gridColumn: "1/3", justifySelf: "start"}}>
                            Learning Curve remains a problem
                        </p>
                        <p className="ProjDet-p-mini ProjectWhiteText" style={{gridColumnStart: 3}}>
                            There were a lack of presets or guides within the current interface for novice end-users to learn how to program in AR. As a result, it would be useful to offer visual guides that aid end-users when combining logic, and also to define presets for common logical statements users would want to generate.
                        </p>
                    </div>
                </div>
            </div>
            <div className="ProjDet-Section">
                <h4 className="ProjDet-Header ProjectWhiteText">MY KEY TAKEAWAYS</h4>
                <div className="ProjDet-SectionDesc">
                    <p className="ProjDet-p ProjectWhiteText">
                        As my first, self-initiated research project at Apple, I found this experience very rewarding and insightful. Not only did I gain first-hand experience in multiple stages of the design and research process, but I also received knowledgeable feedback that helped me look at visual programming in 3D space differently. If I could offer any advice for aspiring Apple interns looking to get involved in AR, here they are.                    
                    </p>
                </div>
                <div className="ProjDet-Table">
                    <div className="ProjDet-TableRow">
                        <p className="ProjDet-p-sub ProjectWhiteText" style={{gridColumn: "1/3", justifySelf: "start"}}>
                        Embrace ambiguity and uncertainty
                        </p>
                        <p className="ProjDet-p-mini ProjectWhiteText" style={{gridColumnStart: 3}}>
                            AR is still an emerging field, and as a result, there are no rules or heuristics for how to design for these environments. As a designer, it is your job to extrapolate from existing experiences in real life and with physical interactions to drive this field.                        
                        </p>
                    </div>
                    <div className="ProjDet-TableRow">
                        <p className="ProjDet-p-sub ProjectWhiteText" style={{gridColumn: "1/3", justifySelf: "start"}}>
                            There is more to AR than 3D hand interactions
                        </p>
                        <p className="ProjDet-p-mini ProjectWhiteText" style={{gridColumnStart: 3}}>
                            As a designer, I had been obsessed with the powers and expressiveness of 3D hand gestures that I neglected other methods of interaction such as voice, eye gaze, or even 2D gestures. AR supports multimodal interactions, and it is essential to explore and leverage all of them in meaningful ways.                        
                        </p>
                    </div>
                    <div className="ProjDet-TableRow">
                        <p className="ProjDet-p-sub ProjectWhiteText" style={{gridColumn: "1/3", justifySelf: "start"}}>
                            Good design always begins with a compelling story
                        </p>
                        <p className="ProjDet-p-mini ProjectWhiteText" style={{gridColumnStart: 3}}>
                            Throughout my internship, I had the opportunity to present my work and prototypes to other teams and executives in the company. Beyond designing the prototype and making it work, I realized much of my work also involved communicating my vision and pitching it to other teams. The story is important, and helps drive your design.                        
                        </p>
                    </div>
                </div>
            </div>
        </div>);
    }
}