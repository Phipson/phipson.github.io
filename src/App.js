import './style.css';
import { HashRouter, Route } from 'react-router-dom';
import React, {Component} from 'react';

import LandingPage from './components/Landing';
import NavigationBar from './components/NavigationBar';
import ProjectCatalogue from './components/ProjectCatalogue';
import AboutPage from './components/About';
import NavigationMenuPage from './components/NavigationMenu';

import XRProjectList from './components/XRProjectList';
import UXProjectList from './components/UXProjectList';
import SWProjectList from './components/SWProjectList';

import $ from 'jquery';
import gsap from "gsap";
import { TweenMax } from 'gsap/all';


const ProjectCatalogueList = [XRProjectList, UXProjectList, SWProjectList]; // TODO: Based on PageID fetch the corresponding projects
const NavHeader = ["Mixed Reality", "UX Design", "Software Development"];
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

      // FOR PROJECTS
      projectList: ProjectCatalogueList[0],
    }

    this.setSiteState = this.setSiteState.bind(this);
    this.fadeIntoNewState = this.fadeIntoNewState.bind(this);
    this.changePageIDState = this.changePageIDState.bind(this);
    this.viewDetails = this.viewDetails.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.toggleNavigationMenu = this.toggleNavigationMenu.bind(this);
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
        if (newState === 0) {
          gsap.to($(".ProjectCatalogueWrapper"), {css: {opacity: 0}, duration: 0.25,
          onComplete: () => {this.fadeIntoNewState(newState, oldState)}});
        }
        else {
          this.fadeIntoNewState(newState, oldState);
        }
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
    if (newState !== 2) {
      gsap.set($(".LandingWrapper,.ProjectCatalogueWrapper,.ProjectDetailWrapper"), {css: {opacity: 0}});
    }

    if (oldState === 2) {
      this.setState(() => ({
        displayPage: <div></div>
      }))
    }

    this.setState(() => ({
      siteState: newState,
    }), () => {

      switch (newState) {
        case 0:
          this.setState(() => ({
            headerText: ""
          }), () => {
            this.navChild.changeLogoButton("Phipson", () => {this.setSiteState(0)}, "/")
            this.navChild.changeTitleText(this.state.headerText);
          });
          gsap.to($(".LandingWrapper"), {css: {opacity: 1}, duration: 0.25});
          break;

        case 1:
          this.setState(() => ({
            headerText: NavHeader[this.state.pageID]
          }), () => {
            this.navChild.changeLogoButton("Phipson", () => {this.setSiteState(0)}, "/")
            this.navChild.changeTitleText(this.state.headerText);
          })
          gsap.to($(".ProjectCatalogueWrapper"), {css: {opacity: 1}, duration: 0.25});
          break;

        case 2:
          gsap.to($(".ProjectDetailWrapper"), {css: {opacity: 1}, duration: 0.25});
          gsap.to($(".ScrollArrowDown"), {css: {opacity: 1}, duration: 0.25});

          gsap.timeline({
            scrollTrigger: {
              trigger: ".ProjDet-TitleWrapper",
              start: "10% top",
              end: "20% top",
              scrub: true
            }}
          ).to($(".ScrollArrowDown"), {css: {opacity: 0}, duration: 0.25});

          gsap.timeline({yoyo: true, repeat: -1}).to($(".ScrollArrowDown"), {css: {y: "-=10"}, duration: 1, ease: "Power1.easeInOut"})
          break;

        case 3:
          this.setState(() => ({
            headerText: ""
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
      projectList: ProjectCatalogueList[newPageID%3]
    }), () => {
      if (!this.state.navOpen && this.state.siteState === 0) {
        this.child.child.swapTimeline(this.state.pageID);
      }
      else {
          // By default, we execute this if we are not on the home page
          switch(this.state.pageID) {
              case 0:
                  TweenMax.to($("body"), 0.25, {css:{background: "linear-gradient(111.2deg, #7C67E4 0%, #4D33CC 100.5%)"}});
                  TweenMax.to($("h1").add("h2").add("h3").add("h4").add("h5").add("h6").add("div"), 0.25, {css: {color: "white"}});
                  break;
  
              case 1:
                  TweenMax.to($("body"), 0.25, {css:{background: "linear-gradient(111.2deg, #2258C3 0%, #1F3D7A 100.5%)"}});
                  TweenMax.to($("h1").add("h2").add("h3").add("h4").add("h5").add("h6").add("div"), 0.25, {css: {color: "white"}});
                  break;
  
              case 2:
                  TweenMax.to($("body"), 0.25, {css:{background: "linear-gradient(111.2deg, #26734C 0%, #244233 100.5%)"}});
                  TweenMax.to($("h1").add("h2").add("h3").add("h4").add("h5").add("h6").add("div"), 0.25, {css: {color: "white"}});
                  break;
          }
      }

      console.log(this.state.projectList)
    });
  }

  /**
   * Sets the new project detail page to show when we click on "view details"
   * @param {*} displayPage JSX element that will be displayed when the user clicks on the corresponding "view details"
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
   * @param {*} open Boolean indicating whether we want the navigation menu to open or close
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

  render () {
    // Dictionary that maps this.state.siteState with the actual page that we want to show
    let siteMap = {
      0: <Route path="/">
          <LandingPage pageID={this.state.pageID} 
                      onChange={this.changePageIDState} 
                      onRef={ref => (this.child = ref)}
                      onViewProject={() => {this.setSiteState(1)}}
                      transitionComplete={this.state.transitionComplete}
                      onInit={this.handleColorChange}/>
        </Route>,

      1: <Route path={`/${LinkNames[this.state.pageID]}`}>
          <ProjectCatalogue  viewDetails={this.viewDetails} 
                            projectList={this.state.projectList}
                            pageID={this.state.pageID}/>
          </Route>,
      2: <Route path={`/${LinkNames[this.state.pageID]}/${this.state.displayPage.link}`}>
          <div className="ProjectDetailWrapper">
            <div className="ProjDet-TitleWrapper">
                <div className="ProjectElementText">
                    <h2 className="ProjectWhiteText">{this.state.headerText}</h2>
                    <p className="ProjectSubtitle"/>
                    <button className="ProjectButtonText" style={{cursor: "unset"}}/>
                </div>
                <div className="ProjectElementSVG">
                </div>
            </div>
            <p className="ProjectWhiteText ScrollArrowDown">&#8595;</p>
            {this.state.displayPage.page}
          </div>
        </Route>,
      3: <Route path='/about'>
          <AboutPage transitionComplete={this.state.transitionComplete}/>
        </Route>,
    };

    return (
      <HashRouter basename='/'>
        <div className="App">
          <NavigationBar  title={this.state.headerText} 
                          navClick={this.toggleNavigationMenu}
                          onChange={() => {this.setSiteState(0)}}
                          onRef={(ref) => {this.navChild = ref}}
                          open={this.state.navOpen}/>
          {this.state.navOpen ? <div style={{width: "100%", minHeight: "100vh"}}></div> : siteMap[this.state.siteState]}
          <NavigationMenuPage currentPageID={this.state.pageID} 
                              changePageIDState={this.changePageIDState}
                              setSiteState={this.setSiteState}/>
        </div>
      </HashRouter>
    );
  }
}

export default App;
