import {React, Component} from 'react';
import './SVGStyle.css';
import $ from 'jquery';
import { TimelineMax, TweenMax } from 'gsap/all';
import {dissolveFlashIn, dissolveFadeFromWhite, setElementTransform, transformComponent} from './SVGAnimatorUtility';

export default class XR_VoxelModelARSVG extends Component {
    constructor(props) {
        super(props);

        this.voxelmodel_TL = new TimelineMax({paused: true});
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseExit = this.handleMouseExit.bind(this);
    }

    componentDidMount() {
        TweenMax.set($(".monkey-3"), {scale: 0, transformOrigin: "50% 50%"});
        this.voxelmodel_TL
        .to($(".monkey-3"), {scale: 1, 
                            duration: 0.1,
                            transformOrigin: "50% 50%", 
                            stagger: {
                                grid: [7,15],
                                from: "end",
                                each: 0.025,
                            }})
        .to($("#Original"), {css: {opacity: 0}, duration: 0.3}, "-=0.2");
    }

    // Helper function to play the specified animation timeline when the mouse hovers over the svg
    handleMouseEnter() {
        this.voxelmodel_TL.play();
    }

    // Helper function to play the specified animation timeline when the mouse leaves the svg
    handleMouseExit() {
        this.voxelmodel_TL.reverse();
    }

    render() {
        return (
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 510.67 337.5"
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseExit}>
               <defs><style></style></defs><g id="Original"><path className="monkey-1" d="M187.98 0l-79.02 48.66L57.6 36.24l-46.1 91.11 63.22 99.4h40.83l15.8-35.2 75.07 144.95h48.73V28.99L187.98 0z"/><path className="monkey-1" d="M321.5 0l79.24 48.66 51.5-12.42 46.22 91.11-63.39 99.4h-40.94l-15.84-35.2-75.28 144.95h-48.86V28.99L321.5 0z"/><path fill="#267cf9" d="M199.73 74l54.42 19.66L308.73 74l57 43-79 171h-66l-80-172 59-42z"/></g><g id="Voxels"><rect className="monkey-3" x="0.5" y="105.33" width="46.33" height="46.33"/><rect className="monkey-3" x="0.5" y="151.67" width="46.33" height="46.33"/><rect className="monkey-3" x="0.5" y="59" width="46.33" height="46.33"/><rect className="monkey-3" x="46.83" y="12.67" width="46.33" height="46.33"/><rect className="monkey-3" x="46.83" y="59" width="46.33" height="46.33"/><rect className="monkey-3" x="46.83" y="151.67" width="46.33" height="46.33"/><rect className="monkey-3" x="46.83" y="198" width="46.33" height="46.33"/><rect className="monkey-3" x="46.83" y="105.33" width="46.33" height="46.33"/><rect className="monkey-3" x="93.17" y="59" width="46.33" height="46.33"/><rect className="monkey-3" x="93.17" y="151.67" width="46.33" height="46.33"/><rect className="monkey-3" x="93.17" y="105.33" width="46.33" height="46.33"/><rect className="monkey-3" x="139.5" y="59" width="46.33" height="46.33"/><rect className="monkey-3" x="185.83" y="105.33" width="46.33" height="46.33"/><rect className="monkey-3" x="185.83" y="151.67" width="46.33" height="46.33"/><rect className="monkey-3" x="185.83" y="59" width="46.33" height="46.33"/><rect className="monkey-3" x="232.17" y="59" width="46.33" height="46.33"/><rect className="monkey-3" x="232.17" y="151.67" width="46.33" height="46.33"/><rect className="monkey-3" x="232.17" y="105.33" width="46.33" height="46.33"/><rect className="monkey-3" x="278.5" y="59" width="46.33" height="46.33"/><rect className="monkey-3" x="278.5" y="151.67" width="46.33" height="46.33"/><rect className="monkey-3" x="278.5" y="105.33" width="46.33" height="46.33"/><rect className="monkey-3" x="324.83" y="105.33" width="46.33" height="46.33"/><rect className="monkey-3" x="324.83" y="151.67" width="46.33" height="46.33"/><rect className="monkey-3" x="324.83" y="59" width="46.33" height="46.33"/><rect className="monkey-3" x="371.17" y="59" width="46.33" height="46.33"/><rect className="monkey-3" x="371.17" y="151.67" width="46.33" height="46.33"/><rect className="monkey-3" x="371.17" y="105.33" width="46.33" height="46.33"/><rect className="monkey-3" x="417.5" y="59" width="46.33" height="46.33"/><rect className="monkey-3" x="417.5" y="151.67" width="46.33" height="46.33"/><rect className="monkey-3" x="417.5" y="105.33" width="46.33" height="46.33"/><rect className="monkey-3" x="139.5" y="151.67" width="46.33" height="46.33"/><rect className="monkey-3" x="139.5" y="198" width="46.33" height="46.33"/><rect className="monkey-3" x="139.5" y="105.33" width="46.33" height="46.33"/><rect className="monkey-3" x="324.83" y="198" width="46.33" height="46.33"/><rect className="monkey-3" x="185.83" y="198" width="46.33" height="46.33"/><rect className="monkey-3" x="232.17" y="198" width="46.33" height="46.33"/><rect className="monkey-3" x="278.5" y="198" width="46.33" height="46.33"/><rect className="monkey-3" x="185.83" y="244.33" width="46.33" height="46.33"/><rect className="monkey-3" x="232.17" y="244.33" width="46.33" height="46.33"/><rect className="monkey-3" x="278.5" y="244.33" width="46.33" height="46.33"/><rect className="monkey-3" x="185.83" y="290.67" width="46.33" height="46.33"/><rect className="monkey-3" x="232.17" y="290.67" width="46.33" height="46.33"/><rect className="monkey-3" x="278.5" y="290.67" width="46.33" height="46.33"/><rect className="monkey-3" x="139.5" y="12.67" width="46.33" height="46.33"/><rect className="monkey-3" x="185.83" y="12.67" width="46.33" height="46.33"/><rect className="monkey-3" x="278.5" y="12.67" width="46.33" height="46.33"/><rect className="monkey-3" x="324.83" y="12.67" width="46.33" height="46.33"/><rect className="monkey-3" x="417.5" y="12.67" width="46.33" height="46.33"/><rect className="monkey-3" x="417.5" y="198" width="46.33" height="46.33"/><rect className="monkey-3" x="463.83" y="105.33" width="46.33" height="46.33"/><rect className="monkey-3" x="463.83" y="151.67" width="46.33" height="46.33"/><rect className="monkey-3" x="463.83" y="59" width="46.33" height="46.33"/></g>
            </svg>
        )
    }
}