// Import the html pages to display when clicking "view more"
import A11YCollabAR from './UXPages/A11YCollabAR';
import KSTUXResearch from './UXPages/KSTUXResearch';

// Import the svgs to display next to the divs
import UX_A11YCollabARSVG from './portfolioSVG/UX_A11YCollabARSVG';
import UX_KSTSVG from './portfolioSVG/UX_KSTSVG';

export default {
    a11ycollabar: {
        link: "a11y_collab_ar",
        name: "A11Y Collaboration in Augmented Reality",
        page: <A11YCollabAR/>,
        img: <UX_A11YCollabARSVG/>,
        desc: "Designing collaborative tools and environments for blind and visually impaired users in augmented reality."
    },
    kstuxresearch: {
        link: "kst_ux_research",
        name: "Kelly Strayhorn Theater (KST) Member Hub",
        page: <KSTUXResearch/>,
        img: <UX_KSTSVG/>,
        desc: "A case study improving the local Pittsburgh theater's donor acquisition and online viewership during COVID-19."
    }
}