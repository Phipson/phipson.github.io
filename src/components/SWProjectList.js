// Import the html pages to display when clicking "view more"
import COVIDDashboard from './SWEPages/COVIDDashboard';

// Import the svgs to display next to the divs
import SWE_COVIDSVG from './portfolioSVG/SWE_COVIDSVG';
import SWE_PearlSVG from './portfolioSVG/SWE_PearlSVG';
import SWE_BoidsSVG from './portfolioSVG/SWE_BoidsSVG';

export default {
    coviddashboard: {
        link: "covid_dashboard",
        name: "COVID Dashboard",
        page: <COVIDDashboard/>,
        img: <SWE_COVIDSVG/>,
        desc: "An interactive dashboard that uses interpretable Machine Learning algorithms to forecast COVID cases in the U.S."
    },
    boids: {
        link: "boids",
        name: "Boids",
        page: null,
        img: <SWE_BoidsSVG/>,
        desc: "Modeling bird flocking behavior with realistic locomotion, active vision, and pheromones."
    },
    pearl: {
        link: "pearl",
        name: "Pearl",
        page: null,
        img: <SWE_PearlSVG/>,
        desc: "Enhancing job searching and recommendation services through Natural Language Processing and data science."
    }
}