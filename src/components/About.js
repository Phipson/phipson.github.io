import React from 'react';
import "../style.css";

import $ from 'jquery';
import resume from './media/resumev3.pdf';
import SocialLinkBar from './SocialLinkBar';

class AboutPage extends React.Component {
    componentDidMount() {
        this.props.changeBodyCSS(this.props.pageID);
        this.props.onChangeNavMenu();
    }

    // Uses the onStateChange function passed from App.js to change pages
    // this.props.transitionComplete helps us determine whether the page has finished transitioning from 
    // black and white to a colored page, and if so, it will set the text to be white
    render() { 
        return (
                <div className="AboutWrapper">
                    <div className="AboutText">
                        <h2 className="ProjectWhiteText">Nice to meet you!</h2>
                        <p className="ProjDet-p ProjectWhiteText">
                            I am currently completing my Master's in Human-Computer Interaction at Carnegie Mellon University, with a focus on designing user experiences for mixed-reality. My goal is to empowering people through AR and VR technology, driving the vision for the future of 3D interfaces and multimodal interactions. After I graduate, I will be working at Apple as an AR Applications Engineer for their ARKit team.
                        </p>
                        <p className="ProjDet-p ProjectWhiteText">
                            If you are interested in working with me, or would like to reach out and speak with me, feel free to connect with me on LinkedIn or send me an email!
                        </p>
                        <br/>
                        <SocialLinkBar/>
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
