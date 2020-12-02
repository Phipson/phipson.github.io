// Import the html pages to display when clicking "view more"
import A11YCollabAR from './UXPages/A11YCollabAR';

// Import the svgs to display next to the divs
import UX_A11YCollabARSVG from './portfolioSVG/UX_A11YCollabARSVG';

export default {
    a11ycollabar: {
        link: "a11y_collab_ar",
        name: "A11Y Collaboration in Augmented Reality",
        page: <A11YCollabAR/>,
        img: <UX_A11YCollabARSVG/>,
        desc: "Designing collaborative tools and environments for blind and visually impaired users in augmented reality."
    },
}