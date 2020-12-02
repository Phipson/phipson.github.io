// Import the html pages to display when clicking "view more"
import AppleLogic from './XRPages/AppleLogic';

// Import the svgs to display next to the divs
import XR_PokemonVRSVG from './portfolioSVG/XR_PokemonVRSVG';
import XR_MultiselectSVG from './portfolioSVG/XR_MultiselectSVG';
import XR_VisualProgrammingARSVG from './portfolioSVG/XR_VisualProgrammingARSVG';
import XR_VoxelModelARSVG from './portfolioSVG/XR_VoxelModelARSVG';

export default {
    applelogic: {
        link: "visual_programming_ar",
        name: "Visual Programming in Augmented Reality",
        page: <AppleLogic />,
        img: <XR_VisualProgrammingARSVG />,
        desc: "A programming interface designed at Apple (2019) to program logic in augmented reality."
    },
    applevoxel: {
        link: "voxel_modeling_ar",
        name: "Voxel Modeling in Augmented Reality",
        page: null,
        img: <XR_VoxelModelARSVG/>,
        desc: "A prototyped designed at Apple (2019) to author 3D assets in augmented reality."
    },
    multiselect: {
        link: "multiselect",
        name: "Multi-Object Selection Explorations",
        page: null,
        img: <XR_MultiselectSVG/>,
        desc: "A design project I led at Apple (2020) examining techniques of selecting and manipulating objects in augmented reality."
    },
    pokemonvr: {
        link: "pokemon_vr",
        name: "PokemonVR",
        page: null,
        img: <XR_PokemonVRSVG/>,
        desc: "A prototype built in Unity for the Oculus Quest, examining a first-person experience of Pokemon games."
    },
}