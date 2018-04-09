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
        }, '-=0.5')
        .fromTo("#code-anim", 1, {
        visibility: 'hidden',
        opacity: 0,
        x:-50
        }, {
        visibility: 'visible',
        x:0,
        autoAlpha: 1,
        opacity: 1
        }, '-=0.5');


    /*Move Computer Icon */
    /* Text Typing */
    var css = document.getElementById("CSS");
    var html = document.getElementById("HTML");
    var python = document.getElementById("PYTHON");
    var java = document.getElementById("JAVA");
    var javasc = document.getElementById("JAVASCRIPT");
    var cpp = document.getElementById("CPP");
    var bash = document.getElementById("BASH");
    var Typewriter = new TimelineMax({repeat:-1});

    Typewriter
    .fromTo(css, 1, {
    y:10,
    opacity: 0,
    visibility: 'hidden'
    }, {
    y: -10,
    opacity: 1,
    autoAlpha: 1,
    visibility: 'visible'
    })
    .to(css, 1, {
    y:-20,
    opacity: 0
    })
    .fromTo(html, 1, {
    y:10,
    opacity: 0,
    visibility: 'hidden'
    }, {
    y: -10,
    opacity: 1,
    autoAlpha: 1,
    visibility: 'visible'
    })
    .to(html, 1, {
    y:-20,
    opacity: 0
    })
    .fromTo(python, 1, {
    y:10,
    opacity: 0,
    visibility: 'hidden'
    }, {
    y: -10,
    opacity: 1,
    autoAlpha: 1,
    visibility: 'visible'
    })
    .to(python, 1, {
    y:-20,
    opacity: 0
    })
    .fromTo(java, 1, {
    y:10,
    opacity: 0,
    visibility: 'hidden'
    }, {
    y: -10,
    opacity: 1,
    autoAlpha: 1,
    visibility: 'visible'
    })
    .to(java, 1, {
    y:-20,
    opacity: 0
    })
    .fromTo(javasc, 1, {
    y:10,
    opacity: 0,
    visibility: 'hidden'
    }, {
    y: -10,
    opacity: 1,
    autoAlpha: 1,
    visibility: 'visible'
    })
    .to(javasc, 1, {
    y:-20,
    opacity: 0
    })
    .fromTo(cpp, 1, {
    y:10,
    opacity: 0,
    visibility: 'hidden'
    }, {
    y: -10,
    opacity: 1,
    autoAlpha: 1,
    visibility: 'visible'
    })
    .to(cpp, 1, {
    y:-20,
    opacity: 0
    })
    .fromTo(bash, 1, {
    y:10,
    opacity: 0,
    visibility: 'hidden'
    }, {
    y: -10,
    opacity: 1,
    autoAlpha: 1,
    visibility: 'visible'
    })
    .to(bash, 1, {
    y:-20,
    opacity: 0
    });

    /* Move Mouse */
    var mouse2 = document.getElementById("mouse2");
    var mouseshadow2 = document.getElementById("mouseshadow2");
    var hand = document.getElementById("handR");
    var handShad = document.getElementById("handRshadow");
    var codeMouse = new TimelineMax({repeat:-1});

    codeMouse
    .staggerFromTo([mouse2, mouseshadow2], 0.5, {
    x:0
    },{
    x:5
    }, '-=0.5')
    .staggerTo([mouse2, mouseshadow2, hand, handShad], 0.5, {
    x:-2
    }, '-=0.5')
    .staggerTo([mouse2, mouseshadow2, hand, handShad], 0.5, {
    x:0
    }, '-=0.5');
    introtl.play();
    Typewriter.play();
});