$(document).ready(function(){
    
        /* Get id of the different icons */
        var icon_alt = document.getElementById("main-icon");
        var res_alt = document.getElementById("res-icon");
    
        /* Intro Animation */
        var main_name = document.getElementById("headname");
        var main_text = document.getElementById("introtxt");
        var introtl = new TimelineMax({});
        introtl
        .fromTo(icon_alt, 1, {
        left:"87%",
        top:"10%",
        scale: 1,
        visibility: 'hidden',
        opacity: 0,
        }, {
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

        introtl.play();
    });