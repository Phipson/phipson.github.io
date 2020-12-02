import React from 'react';
import "../style.css";

import $ from 'jquery';
import resume from './media/resumev3.pdf';

class AboutPage extends React.Component {
    // Uses the onStateChange function passed from App.js to change pages
    // this.props.transitionComplete helps us determine whether the page has finished transitioning from 
    // black and white to a colored page, and if so, it will set the text to be white
    render() { 
        let headerClass = ""
        if (this.props.transitionComplete) {
            headerClass = "ProjectWhiteText"
        }

        return (
                <div className="AboutWrapper">
                    <div className="AboutText">
                        <h2 className={headerClass}>Nice to meet you!</h2>
                        <p className={`ProjDet-p ${this.props.transitionComplete ? "ProjectWhiteText" : ""}`}>
                            I was born and raised in Hong Kong, and came to the U.S. in 2016 to further my studies. After graduating from University of California, Los Angeles with a Bachelor's in Cognitive Science and Computer Science, I am currently completing my Master's in Human-Computer Interaction at Carnegie Mellon University.
                        </p>
                        <p className={`ProjDet-p ${this.props.transitionComplete ? "ProjectWhiteText" : ""}`}>
                            My current interests lie in designing mixed-reality interfaces and developing human-cenetered AI systems and services. I have previously interned at Apple as an AR applications engineer for their ARKit team, where I was responsible for designing and prototyping new interactions and user experiences using AR across different disciplines. In addition, I am a graduate researcher who has worked at several labs focused on AI and HCI, including UCLA's Lab for Vision, Learning, Cognition and Autonomy, UCLA's HCI Lab, and CMU's Human-AI Lab. 
                        </p>

                        <p className={`ProjDet-p ${this.props.transitionComplete ? "ProjectWhiteText" : ""}`}>
                            In my spare time, I enjoy working out, sketching, and playing the saxophone. I also dabble in game design and personal VR projects!
                        </p>
                    </div>
                    <div className="AboutResume">
                        <iframe src={resume} className="AboutIFrame">
                            <a className="ProjectWhiteText" href={resume}>Download Resume</a>
                        </iframe>
                    </div>
                </div>
            );
        }
}

export default AboutPage;
