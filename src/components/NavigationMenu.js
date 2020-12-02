import React from 'react';
import "../style.css";

import $ from 'jquery';
import gsap from "gsap";

import {Link} from 'react-router-dom';

class NavigationMenuPage extends React.Component {
    constructor(props) {
        super(props);

        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    /**
     * Helper function to handle mouse-over events (onMouseEnter) and increase opacity of selected element
     * @param {Event} e Javascript Event Object that corresponds to the object that we moused over
     */
    handleMouseOver(e) {
        gsap.to($(e.target), {css: {opacity: 1}, duration: 0.25});
    }

    /**
     * Helper function to handle mouse-over events (onMouseLeave) and decrease opacity of selected element
     * @param {Event} e Javascript Event Object that corresponds to the object that we moused over
     */
    handleMouseLeave(e) {
        gsap.to($(e.target), {css: {opacity: 0.5}, duration: 0.25});
    }

    /**
     * Helper function to handle mouse-over events (onClick) and routes our page to the specified button
     * @param {Number} siteState The index of the page we want to navigate to (see App.js siteMap)
     * @param {Number} pageID The index of the projects we want to see if we are viewing the project catalogue (see App.js)
     */
    handleClick(siteState, pageID) {
        this.props.changePageIDState(pageID);
        this.props.setSiteState(siteState);
    }

    render() { 
        return (
                <div className="HamburgerMenuWrapper">
                    <Link to="/mixed_reality">
                    <h3 onMouseEnter={(e) => {this.handleMouseOver(e)}}
                        onMouseLeave={(e) => {this.handleMouseLeave(e)}}
                        onClick={() => {this.handleClick(1, 0)}}>
                            Mixed-Reality
                    </h3>
                    </Link>
                    <Link to="/ux_design">
                    <h3 onMouseEnter={(e) => {this.handleMouseOver(e)}}
                        onMouseLeave={(e) => {this.handleMouseLeave(e)}}
                        onClick={() => {this.handleClick(1, 1)}}>
                            UX Design
                    </h3>
                    </Link>
                    <Link to="/software_development">
                    <h3 onMouseEnter={(e) => {this.handleMouseOver(e)}}
                        onMouseLeave={(e) => {this.handleMouseLeave(e)}}
                        onClick={() => {this.handleClick(1, 2)}}>
                            Software Development
                    </h3>
                    </Link>
                    <Link to="/about">
                    <h3 onMouseEnter={(e) => {this.handleMouseOver(e)}}
                        onMouseLeave={(e) => {this.handleMouseLeave(e)}}
                        onClick={() => {this.handleClick(3, this.props.currentPageID)}}>
                            About Me
                    </h3>
                    </Link>
                </div>
            );
        }
}

export default NavigationMenuPage;
