$(document).ready(function(){
        var icon_alt = document.getElementById("main-icon");
        var res_alt = document.getElementById("vu");

        /* Intro Animation */
        var main_name = document.getElementById("headname");
        var main_text = document.getElementById("introtxt");
        var vu = document.getElementById("vu");
        var introtl = new TimelineMax({});
        introtl
        .fromTo(icon_alt, 1, {
        left:"87%",
        top:"10%",
        scale: 1,
        visibility: 'hidden',
        opacity: 0,
        }, {
        left:"87%",
        top:"0%",
        visibility: 'visible',
        autoAlpha: 1,
        opacity: 1
        })
        .fromTo(main_name, 1, {
        visibility: 'hidden',
        opacity: 0,
        x:50
        }, {
        visibility: 'visible',
        x:0,
        autoAlpha: 1,
        opacity: 1
        }, '-=0.5')
        .fromTo(main_text, 1, {
        visibility: 'hidden',
        opacity: 0,
        x:50
        }, {
        visibility: 'visible',
        x:0,
        autoAlpha: 1,
        opacity: 1
        }, '-=0.5')
        .fromTo(res_alt, 1, {
            visibility: 'hidden',
            opacity: 0,
            x: -50
        }, {
            visibility: 'visible',
            opacity: 1,
            x: 0,
            autoAlpha: 1
        }, '-=0.5');
    
        /* Get the 10 different components of the icon */
        var vu1 = document.getElementById("micstand");
        var vu2 = document.getElementById("micball");
        var vu3 = document.getElementById("speaker");
        var vu4 = document.getElementById("stagebot");
        var vu5 = document.getElementById("stagetop");
        var comp1 = document.getElementById("vidscreen");
        var comp2 = document.getElementById("vidrec");
        var comp3 = document.getElementById("voiceup");
        var comp4 = document.getElementById("compscreen");
        var comp5 = document.getElementById("cursor");

        var logo = document.getElementById("VU");
        
        var VU = new TimelineMax({repeat:-1, delay: 1, paused: true});
        VU
        .fromTo(vu4, 0.5, {
            y:100
        }, {
            y:0
        })
        .fromTo(vu5, 0.5, {
            y:100
        }, {
            y:0
        }, '-=0.5')
        .fromTo(vu1, 1, {
            y: 500
        }, {
            y: 0
        })
        .fromTo(vu2, 1, {
            visibility: "hidden",
            opacity: 0
        }, {
            visibility: "visible",
            opacity: 1,
            autoAlpha: 1
        })
        .fromTo(vu3, 1, {
            visibility: "hidden",
            opacity: 0
        }, {
            visibility: "visible",
            opacity: 1,
            autoAlpha: 1
        })

        .to(vu1, 1, {morphSVG: comp1, delay: 1, fill: "#0071BC"})
        .to(vu2, 1, {morphSVG: comp2, fill: "#00A99D"}, '-=1')
        .to(vu3, 1, {morphSVG: comp3, fill: "black"}, '-=1')
        .to(vu4, 1, {morphSVG: comp4, fill: "#666666"}, '-=1')
        .to(vu5, 1, {morphSVG: comp5, fill: "black"}, '-=1')

        //cursor motion
        .to(vu5, 1, {x: 100, y: -20})
        .to(vu5, 1, {x: -50, y: -30})
        .fromTo(logo, 1, {opacity: 0, autoAlpha: 0},
            {opacity: 1, autoAlpha: 1}, '-=1')

        .to(vu1, 1, {morphSVG: vu1, delay: 1, fill: "#4D4D4D"})
        .to(vu2, 1, {morphSVG: vu2, fill: "#B3B3B3"}, '-=1')
        .to(vu3, 1, {morphSVG: vu3, fill: "black"}, '-=1')
        .to(vu4, 1, {morphSVG: vu4, fill: "#A67C52"}, '-=1')
        .to(vu5, 1, {morphSVG: vu5, x:0, y:0, fill: "#8C6239"}, '-=1')
        .to(logo, 1, {opacity: 0, autoAlpha: 0}, '-=1')

        //dissolve
        .to(vu1, 0.5, {opacity: 0, autoAlpha: 0})
        .to(vu2, 0.5, {opacity: 0, autoAlpha: 0}, '-=0.5')
        .to(vu3, 0.5, {opacity: 0, autoAlpha: 0}, '-=0.5')
        .to(vu4, 0.5, {opacity: 0, autoAlpha: 0}, '-=0.5')
        .to(vu5, 0.5, {opacity: 0, autoAlpha: 0}, '-=0.5');

        introtl.play();
        VU.play();
    });