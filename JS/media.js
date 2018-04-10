$(document).ready(function(){
    
        /* Get id of the different icons */
        var icon_alt = document.getElementById("main-icon");
        var media_alt = document.getElementById("meicon");
    
        /* Intro Animation */
        var main_name = document.getElementById("headname");
        var main_text = document.getElementById("introtxt");
        var introtl = new TimelineMax({});
        introtl
        .fromTo(icon_alt, 1, {
        right: "0%",
        top:"10%",
        scale: 1,
        visibility: 'hidden',
        opacity: 0,
        }, {
        right: "0%",
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
        })
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
        .fromTo(media_alt, 1, {
        visibility: 'hidden',
        opacity: 0,
        x:-50
        }, {
        visibility: 'visible',
        x:0,
        autoAlpha: 1,
        opacity: 1
        }, '-=0.5');
    
        /* Adjust Lens */
        var zoomlens = document.getElementById("cam-clens2");
        var widelens = document.getElementById("cam-clens1");
        var zoomCamera = new TimelineMax({repeat:-1});

        zoomCamera
        .fromTo(zoomlens, 0.5, {x: 0, scaleX: 1},
        {scaleX: 1.5})
        .to(widelens, 0.5, {x: 10, scaleX: 1.2}, '-=0.5')
        .to(zoomlens, 0.5, {x: 0, scaleX: 1, delay: 0.5})
        .to(widelens, 0.5, {x: 0, scaleX: 1}, '-=0.5');

        introtl.play();
        zoomCamera.play();
    });