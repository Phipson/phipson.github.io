import React, {Component} from 'react';
import '../../style.css';
import $ from 'jquery';

import gsap from "gsap";
import { ScrollTrigger } from 'gsap/all';

import covid_proto from '../media/COVIDDashboardPrototype.png'
import covid_arch from '../media/COVIDDashboardArch.png'

gsap.registerPlugin(ScrollTrigger);

// Holds a component for a project that will be clicked on to show the actual project page
export default class COVIDDashboard extends Component {
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
                        Machine learning models are typically complex and challenging to interpret, especially for designers and stakeholders with little programming or machine learning experience. The introduction of interpretable machine learning algorithms have made it possible to understand what data the algorithm is using to make predictions, how features are weighted, and communicate it in a meaningful way to non-programmers. This is particularly an issue with COVID, where local and international travelers want to assess where to travel based on COVID cases and deaths. I decided to build a dashboard that would use machine learning to predict the COVID cases across different states in America for the day after the dashboard was accessed. Through a combination of data visualization and interpretability features, the goal of this dashboard was to help users identify trends in COVID cases that can help them plan potential travel plans, while also offering explanations that can aid their understanding of how the algorithm is making these predictions.                    
                        </p>
                    </div>
                    <div className="ProjDet-OverviewInfo">
                        <div>
                            <h5 className="ProjectWhiteText">ROLE</h5>
                            <p className="ProjDet-p ProjectWhiteText">
                                Designer<br/>
                                Machine Learning Engineer (Python, ReactJS)
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
                <h4 className="ProjDet-Header ProjectWhiteText">PROTOTYPES</h4>
                <div className="ProjDet-SectionDesc">
                    <p className="ProjDet-p ProjectWhiteText">
                    When examining a user-centered dashboard that would help travelers plan their trips, my initial focus was on map displays, which would sort data based on geographical location. To help users focus on states of interest, I added interactions for users to zoom in on specific geographic regions by clicking on the state of interest, causing the dashboard to display state-specific data. This was later actualized using ReactJS, which had a combination of free open-source dashbaord templates like Google Material UI's dashboard template; and free libraries for developing interactive charts and maps using D3.js and React Simple Maps.
                    </p>
                </div>
                <div className="ProjDet-ImgFrame">
                    <img src={covid_proto}/>
                    <div className="ProjDet-ImgCaption">
                        <p className="ProjDet-p-mini ProjectWhiteText">Initial Paper Prototype of Dashboard Interface</p>
                    </div>
                </div>
            </div>
            <div className="ProjDet-Section">
            <div className="ProjDet-Table">
                    <div className="ProjDet-TableRow">
                        <p className="ProjDet-p-sub ProjectWhiteText">
                            USER STORY 01
                        </p>
                        <p className="ProjDet-p ProjectWhiteText">
                            CHRISTY
                        </p>
                        <p className="ProjDet-p-mini ProjectWhiteText">
                            Christy is an international student who recently flew back to China to take remote classes from home. She is currently attending school in California remotely, but wants to fly to America after the Christmas break. Her parents are worried that the COVID cases will increase, and Christy wants to provide them with data of trend forecasts to reassure them of this move.                        
                        </p>
                    </div>
                    <div className="ProjDet-TableRow">
                        <p className="ProjDet-p-sub ProjectWhiteText">
                            USER STORY 02
                        </p>
                        <p className="ProjDet-p ProjectWhiteText">
                            TREVOR
                        </p>
                        <p className="ProjDet-p-mini ProjectWhiteText">
                            Trevor is a local traveler who has been working in San Francisco throughout the pandemic. He wants to return to Florida over Thanksgiving to meet with family, but he is unsure whether cases will increase during that time frame. His parents and siblings are also concerned about the COVID cases in California, but are inexperienced reading and understanding data online.                        
                        </p>
                    </div>
                </div>
            </div>
            <div className="ProjDet-Section">
                <h4 className="ProjDet-Header ProjectWhiteText">TRAINING THE NEURAL NETWORK</h4>
                <div className="ProjDet-SectionDesc">
                    <p className="ProjDet-p ProjectWhiteText">
                    To provide users with trend forecasts, I used a Long-Short Term Memory (LSTM) model that took data from Carnegie Mellon University’s COVIDCast dataset as input and predicted the COVID cases per state for the following day. Referencing an existing model designed by [], I trained and tested the neural network on Jupyter Notebook.                    
                    </p>
                </div>
                <div className="ProjDet-ImgFrame">
                    <img src={covid_arch}/>
                    <div className="ProjDet-ImgCaption">
                        <p className="ProjDet-p-mini ProjectWhiteText">
                            Design of Long-Short Term Memory (LSTM) model for predicting COVID Cases
                        </p>
                    </div>
                </div>
            </div>
            <div className="ProjDet-Section">
                <h4 className="ProjDet-Header ProjectWhiteText">DESIGNING THE SOFTWARE ARCHITECTURE</h4>
                <div className="ProjDet-SectionDesc">
                    <p className="ProjDet-p ProjectWhiteText">
                        To integrate my design with the machine learning algorithm, I had to consider how to query from the trained model and update the view. To do so, I used ReactJS and its Model-View-Controller (MVC) design pattern, which allowed me to manage the underlying data as states that can be rendered onto graphs. I then ran the model on a Python Flask server, which the ReactJS app would query to fetch a prediction based on an array of COVID Cases for the past 3 consecutive days.
                    </p>
                </div>
                <div className="ProjDet-ImgFrame">
                    <img src=""/>
                    <div className="ProjDet-ImgCaption">
                        <p className="ProjDet-p-mini ProjectWhiteText">Software Architecture of the COVID-19 Dashboard</p>
                    </div>
                </div>
            </div>
            
            <div className="ProjDet-Section">
                <div className="ProjDet-SectionDesc">
                    <p className="ProjDet-p ProjectWhiteText">
                    To make this model interpretable, I used LIME, which is a surrogate model that interprets a given model by describing features and inputs from the dataset that is weighted more importantly in the neural network. This data can be visualized and communicated in textual form, helping users understand how the model made a certain forecast.                    
                    </p>
                </div>
                <div className="ProjDet-ImgFrame">
                    <img src=""/>
                    <div className="ProjDet-ImgCaption">
                        <p className="ProjDet-p-mini ProjectWhiteText">
                            Integration of LIME with LSTM for textual explanations of COVID cases predictions
                        </p>
                    </div>
                </div>
            </div>
            <div className="ProjDet-Section">
                <h4 className="ProjDet-Header ProjectWhiteText">ONGOING WORK AND NEXT STEPS</h4>
                <div className="ProjDet-SectionDesc">
                    <p className="ProjDet-p ProjectWhiteText">
                    As I finalize my work for this project, here are the next steps that I am planning on completing in the coming weeks.                    
                    </p>
                </div>
                <div className="ProjDet-Table">
                    <div className="ProjDet-TableRow">
                        <p className="ProjDet-p-sub ProjectWhiteText" style={{gridColumn: "1/3", justifySelf: "start"}}>
                            Iterate and define a high-fidelity prototype(s) for the dashboard
                        </p>
                        <p className="ProjDet-p-mini ProjectWhiteText" style={{gridColumnStart: 3}}>
                            Using Figma, I will iterate through the design based on preliminary user feedback and use that information to improve the dashboard interface I had designed.                 
                        </p>
                    </div>
                    <div className="ProjDet-TableRow">
                        <p className="ProjDet-p-sub ProjectWhiteText" style={{gridColumn: "1/3", justifySelf: "start"}}>
                            Defining a system architecture to interface the design with the model
                        </p>
                        <p className="ProjDet-p-mini ProjectWhiteText" style={{gridColumnStart: 3}}>
                            Combining my machine learning model with ReactJS, my goal is to host this dashboard on GitHub pages, so that end-users can access it and use it through the interface I have designed.                     
                        </p>
                    </div>
                    <div className="ProjDet-TableRow">
                        <p className="ProjDet-p-sub ProjectWhiteText" style={{gridColumn: "1/3", justifySelf: "start"}}>
                            Integrating the data with the design and conduct user testing
                        </p>
                        <p className="ProjDet-p-mini ProjectWhiteText" style={{gridColumnStart: 3}}>
                            Once the dashboard has been created, I will also speak and reach out to travelers and trip planners and get their feedback through user testing. This feedback will be helpful in determining bugs and also potential improvements to the dashboard.               
                        </p>
                    </div>
                </div>
            </div>
        </div>);
    }
}