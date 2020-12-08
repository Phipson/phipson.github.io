import React, {Component} from 'react';
import '../../style.css';
import $ from 'jquery';

import gsap from "gsap";
import { ScrollTrigger } from 'gsap/all';
import sketch_1 from '../media/IS_Phone_Awareness_Cursor.jpg';
import sketch_2 from '../media/IS_Voice_Memo_Prototype.jpg';

gsap.registerPlugin(ScrollTrigger);

// Holds a component for a project that will be clicked on to show the actual project page
export default class A11YCollabAR extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
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
        return(<div>
            <div className="ProjDet-Section">
                <h3 className="ProjDet-Header ProjectWhiteText">PROJECT OVERVIEW</h3>
                <div className="ProjDet-OverviewWrapper">
                    <div className="ProjDet-OverviewDesc">
                        <p className="ProjDet-p ProjectWhiteText">
                        The emergence of mobile augmented reality (AR) has inspired the development of new interactions and collaborative tools for bringing virtual content into physical space. From measuring tools to multiplayer AR games such as Pokemon GO, mobile AR has offered new utilities for 3D interactions. However, such features are often inaccessible to visually impaired end users, who are unable to see or visualize their physical surroundings. Consequently, it has become a challenge to maximize the capabilities of AR while also leveraging its technology to introduce new forms of interaction for visually impaired users with their surroundings. As part of a self-initiated independent study at CMU, I explored ways to enhance accessible collaboration among blind and visually impaired (BVI) users through AR. Over the course of 15 weeks, I reviewed relevant literature and designed a prototype for accessible collaborative document editing that uses 3D spatial audio to enhance collaborative awareness.                        
                        </p>
                    </div>
                    <div className="ProjDet-OverviewInfo">
                        <div>
                            <h5 className="ProjectWhiteText">ROLE</h5>
                            <p className="ProjDet-p ProjectWhiteText">
                                Designer<br/>
                                User Researcher<br/>
                                Software Developer (Python, Javascript, Swift)
                            </p>
                        </div>
                        <div>
                            <h5 className="ProjectWhiteText">CLIENT</h5>
                            <p className="ProjDet-p ProjectWhiteText">
                                Self-Initiated
                            </p>
                        </div>
                        <div>
                            <h5 className="ProjectWhiteText">DURATION</h5>
                            <p className="ProjDet-p ProjectWhiteText">
                                2020 September - Present
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ProjDet-Section">
                <h4 className="ProjDet-Header ProjectWhiteText">DESIGN PROBLEM</h4>
                <div className="ProjDet-SectionDesc">
                    <p className="ProjDet-p ProjectWhiteText">
                    Before examining interface designs, I drafted several possible use cases for Reality Composer, based on existing work and ideas coalesced by the rest of the Applied Research Team. For this project, we identified the following user stories:
                    </p>
                </div>
                <div className="ProjDet-Table">
                    <div className="ProjDet-TableRow">
                        <p className="ProjDet-p-sub ProjectWhiteText" style={{gridColumn: "1/3", justifySelf: "start"}}>
                            Document editors lack collaborative awareness features for BVI users
                        </p>
                        <p className="ProjDet-p-mini ProjectWhiteText" style={{gridColumnStart: 3}}>
                            Despite tools such as screenreaders, BVI users have expressed struggles understanding what their peers are doing as they edit the document. In a synchronous environment, updates are not shared regularly, and in an asynchronous environment, BVI users have to manually identify changes collaborators have made.                        
                        </p>
                    </div>
                    <div className="ProjDet-TableRow">
                        <p className="ProjDet-p-sub ProjectWhiteText" style={{gridColumn: "1/3", justifySelf: "start"}}>
                            Version controlling remain inaccessible for BVI users
                        </p>
                        <p className="ProjDet-p-mini ProjectWhiteText" style={{gridColumnStart: 3}}>
                            Screenreaders and existing accessibility tools do not offer methods of comparing document edits and changes from previous saved versions, preventing BVI users from reverting changes or referencing edit history when editing documents with collaborators.                       
                        </p>
                    </div>
                    <div className="ProjDet-TableRow">
                        <p className="ProjDet-p-sub ProjectWhiteText" style={{gridColumn: "1/3", justifySelf: "start"}}>
                            Accessibility tools do not convey contextual information efficiently
                        </p>
                        <p className="ProjDet-p-mini ProjectWhiteText" style={{gridColumnStart: 3}}>
                            Because screenreaders and other accessibility tools perform basic text-to-speech audio feedback, they fail to communicate contextual information about document changes and what other users are doing. Hence, BVI users have no efficient and digestible medium of getting summaries of changes and collaborator activities.                      
                        </p>
                    </div>
                </div>
            </div>
            <div className="ProjDet-Section">
                <h4 className="ProjDet-Header ProjectWhiteText">RELATED WORK</h4>
                <div className="ProjDet-TextImg">
                    <p className="ProjDet-p ProjectWhiteText">
                        Examining literature related to collaboration, accessibility, augmented reality, and the intersection between these 3 domains, my subsequent research was inspired and motivated by these key papers. Not only did these findings propose new solutions that can be used in mixed reality, but also highlight areas for enhancing collaborative awareness through an audio-driven interface that is accessible for both BVI and visually capable users.
                    </p>
                    {/* TODO: Make this a carousel */}
                    <img src=""/>
                </div>
            </div>
            <div className="ProjDet-Section">
                <h4 className="ProjDet-Header ProjectWhiteText">INITIAL PROTOTYPES</h4>
                <div className="ProjDet-TableRow">
                    <p className="ProjDet-p-sub ProjectWhiteText" style={{gridColumn: "1/3", justifySelf: "start"}}>
                        3D Spatial Audio as a method of enhancing collaborative awareness
                    </p>
                    <p className="ProjDet-p-mini ProjectWhiteText" style={{gridColumnStart: 3}}>
                        By treating documents as a 2D object in 3D space, 3D spatial audio could be used to distinguish where collaborators were editing in the document by positioning audio feedback based on their cursor position, which would help filter and prioritize changes that BVI users care about.                    
                    </p>
                </div>
                <div className="ProjDet-ImgFrame">
                    <img src=""/>
                    <div className="ProjDet-ImgCaption">
                        <p className="ProjDet-p-mini ProjectWhiteText">
                            The volume of accessible audio feedback changes based on relative positions between the collaborator’s cursor and the user’s cursor
                        </p>
                    </div>
                </div>
            </div>
            <div className="ProjDet-Section">
                <div className="ProjDet-TableRow">
                    <p className="ProjDet-p-sub ProjectWhiteText" style={{gridColumn: "1/3", justifySelf: "start"}}>
                    Sonification as a technique to communicate contextual information
                    </p>
                    <p className="ProjDet-p-mini ProjectWhiteText" style={{gridColumnStart: 3}}>
                    Using different sonification techniques, based on prior research, we mapped different audio feedback to distinguish between collaborators, and also varied the frequency, tone, pitch and volume of the audio feedback based on the action the user was performing, based on input such as cursor position, and idleness, etc.                    
                    </p>
                </div>
                <div className="ProjDet-ImgFrame">
                    <img src={sketch_1}/>
                    <div className="ProjDet-ImgCaption">
                        <p className="ProjDet-p-mini ProjectWhiteText">
                            Extending Google Doc’s metaphors of mapping collaborators to animal avatars, we sonified changes for collaborators based on these animals.
                        </p>
                    </div>
                </div>
            </div>
            <div className="ProjDet-Section">
                <div className="ProjDet-TableRow">
                    <p className="ProjDet-p-sub ProjectWhiteText" style={{gridColumn: "1/3", justifySelf: "start"}}>
                    Voice memos can be used with  comments for version controlling
                    </p>
                    <p className="ProjDet-p-mini ProjectWhiteText" style={{gridColumnStart: 3}}>
                    Inspired by collaborative programming environments such as GitHub, where users are expected to push changes with associated summaries and comments, our proposed prototype also requires collaborators to add personalized voice-driven comments and explanations of document edits, which would convey meaningful summaries of changes and edits made across the whole document, making version controlling accessible.                    
                    </p>
                </div>
                <div className="ProjDet-ImgFrame">
                    <img src={sketch_2}/>
                    <div className="ProjDet-ImgCaption">
                        <p className="ProjDet-p-mini ProjectWhiteText">
                            Initial sketches and code-based implementation of creating and generating voice memos using a specified template to encourage meaningful comments.
                        </p>
                    </div>
                </div>
            </div>
            <div className="ProjDet-Section">
                <h4 className="ProjDet-Header ProjectWhiteText">MY KEY TAKEAWAYS</h4>
                <div className="ProjDet-Table">
                    <div className="ProjDet-TableRow">
                        <p className="ProjDet-p-sub ProjectWhiteText" style={{gridColumn: "1/3", justifySelf: "start"}}>
                            Accessibility remains a significant problem even in 2D interfaces
                        </p>
                        <p className="ProjDet-p-mini ProjectWhiteText" style={{gridColumnStart: 3}}>
                            Despite advances in tools for both audio and haptic feedback, it appears that these features still remain inaccessible when used in collaborative environment.                      
                        </p>
                    </div>
                    <div className="ProjDet-TableRow">
                        <p className="ProjDet-p-sub ProjectWhiteText" style={{gridColumn: "1/3", justifySelf: "start"}}>
                            Design for audio and haptic feedback should work for sighted users as well
                        </p>
                        <p className="ProjDet-p-mini ProjectWhiteText" style={{gridColumnStart: 3}}>
                            When interviewing and speaking with BVI users, I realized that there is a misconception that BVI users have exceptional hearing capabilities allowing them to receive and discern audio feedback very well. To surmount this, researchers should design these audio-driven interfaces as though sighted users would be using them as well.                      
                        </p>
                    </div>
                    <div className="ProjDet-TableRow">
                        <p className="ProjDet-p-sub ProjectWhiteText" style={{gridColumn: "1/3", justifySelf: "start"}}>
                            Collaborative Awareness extends beyond multiple dimensions
                        </p>
                        <p className="ProjDet-p-mini ProjectWhiteText" style={{gridColumnStart: 3}}>
                            Beyond just in-person and remote collaboration, collaborative awareness also differs depending on whether collaborators are working synchronously or asynchronously, and whether collaborators are sighted or also visually impaired. These different dimensions further add a level of complexity to accessibility.                       
                        </p>
                    </div>
                </div>
            </div>
        </div>);
    }
}