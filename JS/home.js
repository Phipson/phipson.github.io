$(document).ready(function(){

    /* Get id of the different icons */
    var icon_alt = document.getElementById("main-icon");

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
    }, '-=0.5');


    /* SVG Me Icon Animation */
    /* Get Chair Animation Items */
    var meicon = document.getElementById("meicon");

    /* To avoid viewbox problems, we will keep everything invisible and only move the svg to resemble the chair moving */
    var computer = document.getElementById("Computer");
    var face = document.getElementById("Myhead");
    var table = document.getElementById("Table");
    var music = document.getElementById("Music");
    var shirt = document.getElementById("Shirt");
    var pants = document.getElementById("Pants");

    var MoveChair = new TimelineMax({});
    MoveChair
    .fromTo(meicon, 3, {x:-2000}, {x:0, ease:"Sine.easeOut", delay: 1})
    .staggerFromTo([computer, face, table, shirt, pants], 0.5, {
    opacity: 0,
    visibility: 'hidden',
    },{
    opacity: 1,
    visibility: 'visible',
    autoAlpha: 1
    }, '-=0.5');

    /* BobbleHead */
    var BobbleHead = new TimelineMax({repeat:-1, delay:5});
    BobbleHead
    .to(face, 1, {
    rotation: 5,
    ease:"Linear.easeNone",
    transformOrigin: "60% 100%"
    })
    .to(face, 1, {
    rotation: -5,
    ease:"Linear.easeNone",
    transformOrigin: "60% 100%"
    })
    .to(face, 1, {
    rotation: 0.55,
    ease:"Linear.easeNone",
    transformOrigin: "60% 100%"
    });

    /* Music Notes */
    var note1 = document.getElementById("note1");
    var note2 = document.getElementById("note2");
    var note3 = document.getElementById("note3");

    var HumNotes = new TimelineMax ({repeat:-1, delay: 5});
    HumNotes
    .fromTo(note2, 1,{
    opacity: 0,
    visibility: 'hidden',
    x: -3,
    y: 10
    },{
    opacity: 1,
    visibility: 'visible',
    autoAlpha: 1,
    x: 0,
    y: 0
    })
    .to(note2, 1, {
    opacity: 0,
    x: 3,
    y: -10
    })
    .fromTo(note3, 1,{
    opacity: 0,
    visibility: 'hidden',
    x: -3,
    y: 10
    },{
    opacity: 1,
    visibility: 'visible',
    autoAlpha: 1,
    x: 0,
    y: 0
    })
    .to(note3, 1, {
    opacity: 0,
    x: 3,
    y: -10
    })
    .fromTo(note1, 1,{
    opacity: 0,
    visibility: 'hidden',
    x: -3,
    y: 10
    },{
    opacity: 1,
    visibility: 'visible',
    autoAlpha: 1,
    x: 0,
    y: 0
    })
    .to(note1, 1, {
    opacity: 0,
    x: 3,
    y: -10
    });

    /* Move Mouse */
    var mouse = document.getElementById("mouse");
    var mouseshadow = document.getElementById("mouseshadow");
    var armR = document.getElementById("armR");
    var armRshadow = document.getElementById("armRshadow");

    var MoveMouse = new TimelineMax({repeat:-1, delay:5});

    MoveMouse
    .staggerTo([mouse, mouseshadow], 0.3, {x:5}, '-=0.3')
    .staggerTo([mouse, mouseshadow, armR, armRshadow], 0.5, {x:-10}, '-=0.5')
    .staggerTo([mouse, mouseshadow, armR, armRshadow], 1, {x:0}, '-=1');
    introtl.play();
    MoveChair.play();
});