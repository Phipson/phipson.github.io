import React, {Component} from 'react';
import '../../style.css';

import donation_map from '../media/UCREDonationMap.jpg'
import aff_diagram from '../media/UCRE_Affinity.jpg'
import storyboard from '../media/UCRE_Storyboards.png'
import thinkaloud from '../media/UCRE_ThinkAloud.jpg'
import lowfi_1 from '../media/UCRE_LoFi_1.jpg'
import highfi_1 from '../media/UCRE_HiFi_1.jpg'

// Holds a component for a project that will be clicked on to show the actual project page
export default class KSTUXResearch extends Component {

    render() {
        return(<div>
            <div className="ProjDet-Section">
                <h3 className="ProjDet-Header ProjectWhiteText">PROJECT OVERVIEW</h3>
                <div className="ProjDet-OverviewWrapper">
                    <div className="ProjDet-OverviewDesc">
                        <p className="ProjDet-p ProjectWhiteText">
                        Kelly Strayhorn Theater is a local theater in Pittsburgh that values innovative and diverse artistry within the local Pittsburgh community. Identifying the challenges that the theater has faced due to the pandemic, my team and I identified a need to improve the theater’s donor acquisition. To examine how existing users engage with online content and how they interface with content creators through social media platforms, we conducted 4 contextual inquiries with content creators and young adults who frequent digital content. Using these insights, we designed and prototyped a Member Hub that the online community could pay to access premium theater content and participate in exclusive educational workshops and social events. This experience prototype was refined following 4 think-aloud sessions, to better integrate this feature with the theater’s existing content.
                        </p>
                    </div>
                    <div className="ProjDet-OverviewInfo">
                        <div>
                            <h5 className="ProjectWhiteText">ROLE</h5>
                            <p className="ProjDet-p ProjectWhiteText">
                                Designer<br/>
                                User Researcher<br/>
                            </p>
                        </div>
                        <div>
                            <h5 className="ProjectWhiteText">CLIENT</h5>
                            <p className="ProjDet-p ProjectWhiteText">
                                Kelly-Strayhorn Theater
                            </p>
                        </div>
                        <div>
                            <h5 className="ProjectWhiteText">TEAM</h5>
                            <p className="ProjDet-p ProjectWhiteText">
                                Phipson Lee (Me),
                                Brady Baldwin,
                                Alex Tsai,
                                Shalini Rao
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
                <div className="ProjDet-TextImg">
                    <p className="ProjDet-p ProjectWhiteText">
                    Due to the pandemic, KST is forced to undergo a transition from traditional brick-and-mortar artistry and physical performances to a platform that’s more dependent on web content and indirect creative expression. Data from their web analytics and theater show attendances have indicated that the majority of their past donors and attendees were recruited through word of mouth. However, due to the pandemic, such means of promoting their theater content on an online platform has been insufficient. Consequently, they have offered less workshops and community events to their virtual audience. 
                    </p>
                    <div style={{position: "relative"}}>
                        <img src={donation_map} alt="Map generated in Tableau showing the distribution of donors outside of Pittsburgh"/>
                        <div className="ProjDet-ImgCaption">
                            <p className="ProjDet-p-mini ProjectWhiteText">
                                Map generated in Tableau showing the distribution of donors outside of Pittsburgh
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ProjDet-Section">
                <h4 className="ProjDet-Header ProjectWhiteText">RESEARCH METHDOLOGY</h4>
                <div className="ProjDet-TextImg">
                    <p className="ProjDet-p ProjectWhiteText">
                    To first examine the pain points theater attendees experienced when donating online, and to compare how other theaters have incentivized attendees to donate, we conducted 4 think-alouds on the Oregon Shakespeare Festival website. 
                    </p>
                    <img src={thinkaloud} alt="Example of usability findings from our think-alouds"/>
                </div>
            </div>
            <div className="ProjDet-Section">
                <div className="ProjDet-SectionDesc">
                    <p className="ProjDet-p ProjectWhiteText">
                    Following our initial think-alouds, I conducted contextual inquiries with young adults to delve into how people accessed digital content, and how content creators made their work more discoverable. These insights were synthesized recursively through affinity diagramming, which we used to distill core themes that were later used for subsequent storyboarding. Our findings indicated that online users value personalized educational content, and only donate to creators if they believe that there are tangible benefits in their donation.
                    </p>
                </div>
                <div className="ProjDet-ImgFrame">
                    <img src={aff_diagram} alt="Affinity diagram from contextual inquiries"/>
                    <div className="ProjDet-ImgCaption">
                        <p className="ProjDet-p-mini ProjectWhiteText">
                            Through affinity diagramming, we mapped out the journey users experienced as they discovered new content and decided whether to donate to creators or not.
                        </p>
                    </div>
                </div>
            </div>
            <div className="ProjDet-Section">
                <div className="ProjDet-SectionDesc">
                    <p className="ProjDet-p ProjectWhiteText">
                    With our new findings, we brainstormed and drafted 12 storyboards as a team through a Crazy 8’s session. I was responsible for developing and designing ideas for enhancing content discoverability and recommendations, to help potential theater attendees find new content based on existing preferences and interests. 
                    </p>
                </div>
                <div className="ProjDet-ImgFrame">
                    <img src={storyboard} alt="Storyboards that were generated during our Crazy 8s session"/>
                    <div className="ProjDet-ImgCaption">
                        <p className="ProjDet-p-mini ProjectWhiteText">
                            After our Crazy 8's session, we compiled a set of 12 storyboards that spanned across 4 themes: educational content, fostering a digital community, accessing content on social media, and getting content through recommendations.
                        </p>
                    </div>
                </div>
            </div>
            <div className="ProjDet-Section">
                <h4 className="ProjDet-Header ProjectWhiteText">KEY INSIGHTS</h4>
                <div className="ProjDet-SectionDesc">
                    <p className="ProjDet-p ProjectWhiteText">
                    To evaluate and generate ideas with our storyboards, we conducted 4 speed-dating sessions with 4 young adults who have had prior theater experiences. The findings we gathered from these sessions confirmed the educational value that theater can bring, as well as the importance of building a social community in performing arts to attract new audiences. From these, we identified the following insights.
                    </p>
                </div>
                <div className="ProjDet-Table">
                    <div className="ProjDet-TableRow">
                        <p className="ProjDet-p-sub ProjectWhiteText" style={{gridColumn: "1/3"}}>
                            INSIGHT 01
                        </p>
                        <p className="ProjDet-p ProjectWhiteText">
                            People want a variety of digital content through recommendations
                        </p>
                    </div>
                    <div className="ProjDet-TableRow">
                        <p className="ProjDet-p-sub ProjectWhiteText" style={{gridColumn: "1/3"}}>
                            INSIGHT 02
                        </p>
                        <p className="ProjDet-p ProjectWhiteText">
                            Donation incentive is directly tied to perceptions of creators who are most in need or most deserving
                        </p>
                    </div>
                    <div className="ProjDet-TableRow">
                        <p className="ProjDet-p-sub ProjectWhiteText" style={{gridColumn: "1/3"}}>
                            INSIGHT 03
                        </p>
                        <p className="ProjDet-p ProjectWhiteText">
                            Educational value in content is an intrinsic motivator for attending theaters
                        </p>
                    </div>
                    <div className="ProjDet-TableRow">
                        <p className="ProjDet-p-sub ProjectWhiteText" style={{gridColumn: "1/3"}}>
                            INSIGHT 04
                        </p>
                        <p className="ProjDet-p ProjectWhiteText">
                            People wanted clarification as to what exactly membership perks entailed; what were they signing up for, what content to expect, etc.
                        </p>
                    </div>
                    <div className="ProjDet-TableRow">
                        <p className="ProjDet-p-sub ProjectWhiteText" style={{gridColumn: "1/3"}}>
                            INSIGHT 05
                        </p>
                        <p className="ProjDet-p ProjectWhiteText">
                        Digital content is a desirable method of accessing theater given a remote setting
                        </p>
                    </div>
                </div>
            </div>
            <div className="ProjDet-Section">
                <h4 className="ProjDet-Header ProjectWhiteText">DESIGNING A MEMBER HUB</h4>
                <div className="ProjDet-SectionDesc">
                    <p className="ProjDet-p ProjectWhiteText">
                        Through our research process, we discovered that education and social interactions were central factors in attracting donors and subscribers to digital content. Drawing from these insights, I helped design and build a low-fidelity prototype on Figma that builds upon KST’s existing website for users to access premium theater content and educational content upon purchasing a subscription. In addition, we were also inspired by YouTube’s video-recommendation system, and integrated automated theater show recommendations into the member hub, to help users discover and explore new theater shows based on their existing interests.
                    </p>
                </div>
                <div className="ProjDet-ImgFrame">
                    <img src={lowfi_1} alt="A screen of our low fidelity prototype designed on figma"/>
                    <div className="ProjDet-ImgCaption">
                        <p className="ProjDet-p-mini ProjectWhiteText">
                            A Low-fidelity prototype of our proposed KST Member Hub. The prototype was designed on Figma, and can be accessed by clicking here.
                        </p>
                    </div>
                </div>
            </div>
            <div className="ProjDet-Section">
                <div className="ProjDet-SectionDesc">
                    <p className="ProjDet-p ProjectWhiteText">
                        Upon conducting 4 additional think-alouds with our experience prototype, we discovered that users had mixed feelings about our live chatting widget, as it was potentially distracting and difficult to moderate. As a result, we redesigned our member hub to include more event updates, to highlight the educational content that members have access to once they purchase a membership.
                    </p>
                </div>
                <div className="ProjDet-ImgFrame">
                    <img src={highfi_1} alt="Our improved high-fidelity prototype designed on figma"/>
                    <div className="ProjDet-ImgCaption">
                        <p className="ProjDet-p-mini ProjectWhiteText">
                            From our user feedback, we decided to remove the Discord Chat feature and add a calendar instead, containing color-coded upcoming events. We then increased the fidelity of our prototype to present to the theater.
                        </p>
                    </div>
                </div>
            </div>
            <div className="ProjDet-Section"/>
            <div className="ProjDet-Section">
                <h4 className="ProjDet-Header ProjectWhiteText">Final Thoughts and Reflection</h4>
                <div className="ProjDet-SectionDesc">
                    <p className="ProjDet-p ProjectWhiteText">
                        At the beginning of the project, I underappreciated the value of educational content in giving value to interested theater attendees. However, upon conducting contextual inquiries with Twitch streamers and other digital content creators, I realized that there was a large audience of online users who see value in financially supporting creators who offer personalized educational content. This was further reinforced by the storyboards that my teammates developed, which also comprised ideas for educating theater attendees about acting and theater in general. This experience helped me appreciate the process of conducting user research, and discovering unforeseen insights that have positively influenced the trajectory of our project.
                    </p>
                </div>
            </div>
        </div>);
    }
}