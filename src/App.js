import './style.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import React, {Component} from 'react';

import LandingPage from './components/Landing';
import NavigationBar from './components/NavigationBar';
import ProjectCatalogue from './components/ProjectCatalogue';
import ProjectDetailPage from './components/ProjectDetailPage';
import AboutPage from './components/About';
import NavigationMenuPage from './components/NavigationMenu';

import XRProjectList from './components/XRProjectList';
import UXProjectList from './components/UXProjectList';
import SWProjectList from './components/SWProjectList';

import $ from 'jquery';
import gsap from "gsap";
import { TweenMax } from 'gsap/all';
import { ScrollToPlugin } from 'gsap/all';
gsap.registerPlugin(ScrollToPlugin);

// Lists of individual project categories for different pages
const ProjectCatalogueList = [XRProjectList, UXProjectList, SWProjectList];

// Different headers for each project for the navigation bar
const NavHeader = ["Mixed Reality", "UX Design", "Software Development"];

// The corresponding URL for the project page
const LinkNames = ["mixed_reality", "ux_design", "software_development"]

class App extends Component{
  constructor (props) {
    super(props);
    this.state = {
      transitionComplete: false,
      pageID: 0, // FOR LANDING PAGE (By default, black for nothing)
      siteState: 0, // FOR NAVIGATION
      headerText: "",  // FOR NAVIGATION DISPLAY (SYSTEM STATUS)
      displayPage: {}, // BASED ON CLICKED PROJECT CATALOGUE PAGE

      // FOR NAVIGATION PAGE
      navOpen: false,
    }

    this.setSiteState = this.setSiteState.bind(this);
    this.fadeIntoNewState = this.fadeIntoNewState.bind(this);
    this.changePageIDState = this.changePageIDState.bind(this);
    this.viewDetails = this.viewDetails.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.toggleNavigationMenu = this.toggleNavigationMenu.bind(this);
    this.setBodyCSSStyle = this.setBodyCSSStyle.bind(this);
    this.setNavMenuState = this.setNavMenuState.bind(this);
  }

  // Helper function that is called when the transition is happening to ensure that 
  // If the user clicked on the dot in the side navigation bar
  // While the page is scrolling, the side carousel dot scrolling is disabled (preventing unnecessary scroll animations)
  handleColorChange() {
    this.setState(() => ({
      transitionComplete: true,
    }))
  }

  /**
   * Helper function to switch to a new page
   * @param {Number} newState New index in the siteMap var to switch screens
   */
  setSiteState(newState) {
    let oldState = this.state.siteState;
    switch (oldState) {
      // Fade out home page
      case 0:
        gsap.to($(".LandingWrapper"), {css: {opacity: 0}, duration: 0.25,
        onComplete: () => {this.fadeIntoNewState(newState, oldState)}});
        break;

      case 1:
        gsap.to($(".ProjectCatalogueWrapper"), {css: {opacity: 0}, duration: 0.25,
        onComplete: () => {
          gsap.to($(window), {scrollTo: {y: 0}, duration: 0.15, ease: "Power2.easeInOut"});
          this.fadeIntoNewState(newState, oldState)
        }});
        break;

      case 2:
        gsap.to($(".ProjectDetailWrapper"), {css: {opacity: 0}, duration: 0.25,
        onComplete: () => {this.fadeIntoNewState(newState, oldState)}});
        break;

      case 3:
        gsap.to($(".AboutWrapper"), {css: {opacity: 0}, duration: 0.25,
        onComplete: () => {this.fadeIntoNewState(newState, oldState)}});
        break;

      default:
        break;
    }
  }

  /**
   * Helper function called after the animation is complete to switch the state of the web app
   * Helps reset the states between the pages 
   * @param {Number} newState New index in the siteMap var to switch screens
   * @param {Number} oldState Previous state that we are switching from
   */
  fadeIntoNewState(newState, oldState) {
    // Set all the screens to have opacity 0
    gsap.set($(".LandingWrapper,.ProjectCatalogueWrapper,.ProjectDetailWrapper,.AboutWrapper"), {css: {opacity: 0}});

    if (oldState === 2) {
      this.setState(() => ({
        displayPage: <div></div>
      }))
    }

    this.setState(() => ({
      siteState: newState,
    }), () => {
      if (newState === oldState && newState === 0)
        this.setNavMenuState(newState, this.state.pageID);
    });
  }

  /**
   * Changing the CSS and types of information that will be shown in the Project Catalogue page 
   * (depending on which type of projects the user wants to see)
   * @param {Number} newPageID The new index of projects to show from the ProjectCatalogueList
   */
  changePageIDState(newPageID) {
    if (newPageID < 0)
      newPageID = 2;
    else if (newPageID > 2)
      newPageID = 0;

    console.log("Changing pageID to: ", newPageID);
    this.setState(() => ({
      pageID: newPageID%3,
    }), () => {
      if (!this.state.navOpen && this.state.siteState === 0) {
        this.child.child.swapTimeline(this.state.pageID);
      }
      
      this.setBodyCSSStyle(this.state.pageID);
    });
  }

  /**
   * Sets the new project detail page to show when we click on "view details"
   * @param {JSX} displayPage JSX element that will be displayed when the user clicks on the corresponding "view details"
   */
  viewDetails(displayPage) {
    console.log("Displaying page: ", displayPage);
    this.setState(() => ({
      displayPage: displayPage,
      headerText: displayPage.name
    }), () => {
      this.navChild.changeLogoButton("← Projects", () => {this.setSiteState(1)}, `/${LinkNames[this.state.pageID]}`)
      this.navChild.changeTitleText(this.state.headerText);
      this.setSiteState(2)
    });
  }

  /**
   * Toggles a Navigation Menu that will be displayed in front of the existing page to navigate between screens
   * @param {Boolean} open Boolean indicating whether we want the navigation menu to open or close
   */
  toggleNavigationMenu(open) {
    this.setState(() => ({
      navOpen: open,
    }), () => {
      if (open) {
        switch (this.state.siteState) {
          case 0:
            gsap.to($(".LandingWrapper"), {css: {opacity: 0}, duration: 0.25});
            break;
  
          case 1:
            gsap.to($(".ProjectCatalogueWrapper"), {css: {opacity: 0}, duration: 0.25});
            break;
  
          case 2:
            gsap.to($(".ProjectDetailWrapper"), {css: {opacity: 0}, duration: 0.25});
            break;
  
          case 3:
            gsap.to($(".AboutWrapper"), {css: {opacity: 0}, duration: 0.25});
            break;
  
          default:
            break;
        }
  
        gsap.set($(".HamburgerMenuWrapper"), {css: {display: "grid"}});
        gsap.to($(".HamburgerMenuWrapper"), {css: {opacity: 1}, duration: 0.25});
      }
  
      else {
        switch (this.state.siteState) {
          case 0:
            gsap.to($(".LandingWrapper"), {css: {opacity: 1}, duration: 0.25});
            break;
  
          case 1:
            gsap.to($(".ProjectCatalogueWrapper"), {css: {opacity: 1}, duration: 0.25});
            break;
  
          case 2:
            gsap.to($(".ProjectDetailWrapper"), {css: {opacity: 1}, duration: 0.25});
            break;
  
          case 3:
            gsap.to($(".AboutWrapper"), {css: {opacity: 1}, duration: 0.25});
            break;
  
          default:
            break;
        }
  
        gsap.to($(".HamburgerMenuWrapper"), {css: {opacity: 0}, duration: 0.25, onComplete: () => {
          gsap.set($(".HamburgerMenuWrapper"), {css: {display: "none"}});
        }})
      }
    })
  }

  /**
   * Helper function that will be called when a component mounts to change the style of the body and headers
   * Used when a user accesses a specific page via the page URL
   * @param {Number} pageID Number that indicates which pageID we are on (0 = Mixed Reality; 1 = UX Design; 2 = SWE)
   */
  setBodyCSSStyle(pageID) {
    // By default, we execute this if we are not on the home page
    let tweenDuration = 0.15;
    switch(pageID) {
      case 1:
          TweenMax.to($("body"), tweenDuration, {css:{background: "linear-gradient(111.2deg, #2258C3 0%, #081C45 100.5%)"}});
          TweenMax.to($(".LandingButtonBG"), tweenDuration, {css:{backgroundColor: "#1F8BAD"}});
          TweenMax.to($("h1").add("h2").add("h3").add("h4").add("h5").add("h6").add("div"), tweenDuration, {css: {color: "white"}});
          break;

      case 2:
          TweenMax.to($("body"), tweenDuration, {css:{background: "linear-gradient(111.2deg, #26734C 0%, #122119 100.5%)"}});
          TweenMax.to($(".LandingButtonBG"), tweenDuration, {css:{backgroundColor: "#5C9119"}});
          TweenMax.to($("h1").add("h2").add("h3").add("h4").add("h5").add("h6").add("div"), tweenDuration, {css: {color: "white"}});
          break;

      case 0:
      default:
          TweenMax.to($("body"), tweenDuration, {css:{background: "linear-gradient(111.2deg, #6653C6 0%, #180A5C 100.5%)"}});
          TweenMax.to($(".LandingButtonBG"), tweenDuration, {css:{backgroundColor: "#AB1FAD"}});
          TweenMax.to($("h1").add("h2").add("h3").add("h4").add("h5").add("h6").add("div"), tweenDuration, {css: {color: "white"}});
          break;
    }

    this.setState(() => ({
      pageID: pageID
    }));

    if (this.state.navOpen)
      this.toggleNavigationMenu(false);
  }

  /**
   * Helper function that is used to set the state of the navigation menu based on the page we are at
   * This is passed to each subdirectory in the Routes below, so that the style of the page is animated
   * and correctly rendered
   * @param {Number} siteStateID Int that represents the state of the page when it is loaded
   * @param {Number} pageID Int that represents the style of the page when it is loaded
   * @param {String} newHeader String that is used to display on the header when we load the page
   */
  setNavMenuState(siteStateID, pageID=this.state.pageID, newHeader="") {
    switch (siteStateID) {
      case 0:
        this.setState(() => ({
          headerText: newHeader
        }), () => {
          this.navChild.changeLogoButton("Phipson", () => {this.setSiteState(0)}, "/")
          this.navChild.changeTitleText(this.state.headerText);
        });
        gsap.to($(".LandingWrapper"), {css: {opacity: 1}, duration: 0.25});
        break;

      case 1:
        this.setState(() => ({
          headerText: newHeader
        }), () => {
          this.navChild.changeLogoButton("Phipson", () => {this.setSiteState(0)}, "/")
          this.navChild.changeTitleText(this.state.headerText);
        })
        gsap.to($(".ProjectCatalogueWrapper"), {css: {opacity: 1}, duration: 0.25});
        break;

      case 2:
        this.setState(() => ({
          headerText: newHeader
        }), () => {
          this.navChild.changeLogoButton("← Projects", () => {this.setSiteState(1)}, `/${LinkNames[pageID]}`)
          this.navChild.changeTitleText(this.state.headerText);
        })
        break;

      case 3:
        this.setState(() => ({
          headerText: newHeader
        }), () => {
          this.navChild.changeTitleText(this.state.headerText);
        })
        gsap.to($(".AboutWrapper"), {css: {opacity: 1}, duration: 0.25});
        break;

      default:
        break;
    }

    if (this.state.navOpen)
      this.toggleNavigationMenu(false);
  }

  render () {
    return (
      <HashRouter basename='/'>
        <div className="App">
          {/* This is the navigation bar at the top of the screen (constant component) */}
          <NavigationBar  title={this.state.headerText} 
                          navClick={this.toggleNavigationMenu}
                          onChange={() => {this.setSiteState(0)}}
                          onRef={(ref) => {this.navChild = ref}}
                          open={this.state.navOpen}/>
          {/* We add a conditional to open this overlaying hamburger menu based on whether we have set the navOpen state */}
          {this.state.navOpen ? <div style={{width: "100%", minHeight: "100vh"}}></div> : 
            /* If the hamburger menu is not open, then we have a switch that sets the route based on the URL we are at */
            <Switch>
              <Route exact path="/">
                <LandingPage
                  pageID={this.state.pageID} 
                  onChange={this.changePageIDState} 
                  onRef={ref => (this.child = ref)}
                  onViewProject={() => {this.setSiteState(1)}}
                  onChangeNavMenu={() => {this.setNavMenuState(0)}}
                  changeBodyCSS={this.setBodyCSSStyle}
                  />
              </Route>
              {/* Create a list of routes based on the different project pages */}
              {ProjectCatalogueList.map((element, i) => {
                //console.log("Project Catalogue List: ", ProjectCatalogueList[i]);
                return (<Route key={i} exact path={`/${LinkNames[i]}`}>
                          <ProjectCatalogue
                            viewDetails={this.viewDetails} 
                            projectList={ProjectCatalogueList[i]}
                            pageID={i}
                            changeBodyCSS={this.setBodyCSSStyle}
                            onChangeNavMenu={() => {this.setNavMenuState(1, i, NavHeader[i])}}/>
                        </Route>)})}
              {/* Create a list of routes based on the project details pages in each project list */}
              {ProjectCatalogueList.map((element, i) => {
                return(Object.values(element).map((proj, j) => {
                  //console.log("Project Details Links: ", `/${LinkNames[i]}/${proj.link}`);
                  return(<Route key={j} path={`/${LinkNames[i]}/${proj.link}`}>
                          <ProjectDetailPage  proj={proj}
                                              changeBodyCSS={this.setBodyCSSStyle}
                                              pageID={i}
                                              onChangeNavMenu={() => {this.setNavMenuState(2, i, proj.name)}}/>
                        </Route>)}))})}
              <Route path='/about'>
                <AboutPage pageID={this.state.pageID}
                            changeBodyCSS={this.setBodyCSSStyle}
                            onChangeNavMenu={() => {this.setNavMenuState(3, this.state.pageID, "About Me")}}/>
              </Route>
            </Switch>
          }
          <NavigationMenuPage currentPageID={this.state.pageID} 
                              changePageIDState={this.changePageIDState}
                              setSiteState={this.setSiteState}
                              onChangeNavMenu={() => {this.setNavMenuState(3)}}/>
        </div>
      </HashRouter>
    );
  }
}

export default App;
