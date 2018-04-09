$(document).ready(function(){
    //DONT CHANGE ANYTHING HERE
    /* Get all Elements */
    var closer = document.getElementById("close");
    var BG = document.getElementById("showcase-bg");
    closer.style.cursor = 'pointer';
    var display = document.getElementById("displayinfo");
    var distitle = document.getElementById("proj-title");
    var disdesc = document.getElementById("proj-desc");
    var disdate = document.getElementById("proj-date");

    var tl1 = new TimelineMax({paused: true});
    tl1
    .to("body", 0.5, {
        overflow: "hidden"
    })
    .fromTo(BG, 0.5, {
        visibility: "hidden",
        opacity: 0,
        left: '-100%'
    }, {
        visibility: "visible",
        opacity: 1,
        autoAlpha: 1,
        left: "0%"
    }, '-=0.5');

    //FOR SUBSEQUENT PROJECTS, ONLY ADD THINGS BELOW
    //FOLLOW SAME NAMING RULES AND METHODS
    //CUHK Summer Internship
    var cuhk1 = document.getElementById("open-cuhk1");
    cuhk1.style.cursor = 'pointer';
    cuhk1.onclick = function(){
        //CHANGES THE TEXT AND CONTENT OF THE ELEMENT
        distitle.innerHTML = "CUHK Self Regulation Lab";
        disdate.innerHTML = "June 2016 to Present";
        disdesc.innerHTML = "During the summer of 2016, I had the chance to work with professors at the Chinese University of Hong Kong (CUHK)\
        Self Regulation Lab, which investigates self control, emotional regulation, and the dynamics of goal setting and motivation.\
        As part of their experiment to track the effectiveness of self control training on mobile device usage, I programmed a mobile\
        analytics app that would measure the duration, frequency, and other factors such asnumber of clicks per minute,\
        frequency of certain apps. The app used the built-in sensors of a smartphone device, and was piloted among groups of university\
        students. I was in charge of piloting the studies and translating the app from English to Chinese. I was subsequently listed\
        as a coauthor for the app.\
        <br><br>\
        Beyond engineering an unprecedented app for psychological testing for social media usage, I was also involved in the statistical\
        analysis of the data using Qualtrics, SPSS, and common statistical methods such as two-way ANOVA. With that, I helped to double\
        check the results and offer input and observations where necessary.";
        tl1.play();
    };

    //HKBN
    var hkbn = document.getElementById("open-hkbn");
    hkbn.style.cursor = 'pointer';
    hkbn.onclick = function(){
        distitle.innerHTML = "HKBN UX Researcher";
        disdate.innerHTML = "June 2017 to August 2017";
        disdesc.innerHTML = "During the summer of 2017, I led a city-wide user experience research in Hong Kong as part of my\
        internship at Hong Kong Broadband Network, the leading telecommunications company in Hong Kong. The study\
        evaluated the functionality of the company's mobile and web apps, specifically when customers made online\
        transactions and payments. Not only was I repsonsible for cooperating with the marketing team to design surveys,\
        but I also collaborated with the IT department to develop Key Performance Indicators and metrics that quantified\
        users' ease of use, navigation convenience, and payment tracking.\
        <br><br>\
        In addition to the research design, I was also asked to conduct a case study of the company's web services, and compare\
        them with local and international competitors in China, Korea, Japan, and other regions of southease Asia. Over\
        the course of this 12-week internship, I studied the user interface, functionality, and navigation features of over\
        20 companies in Asia, compiled a report and presented my findings and suggestions to the IT department.";
        tl1.play();
    };

    //Regoalate
    var cuhk2 = document.getElementById("open-cuhk2");
    cuhk2.style.cursor = 'pointer';
    cuhk2.onclick = function(){
        distitle.innerHTML = "Coauthor for CUHK Research";
        disdate.innerHTML = "June 2016 to August 2016";
        disdesc.innerHTML = "During the summer of 2016, I had the chance to work with professors at the Chinese University of Hong Kong (CUHK)\
        Self Regulation Lab, which investigates self control, emotional regulation, and the dynamics of goal setting and motivation.\
        As part of their experiment to track the effectiveness of self control training on mobile device usage, I programmed a mobile\
        analytics app that would measure the duration, frequency, and other factors such asnumber of clicks per minute,\
        frequency of certain apps. The app used the built-in sensors of a smartphone device, and was piloted among groups of university\
        students. I was in charge of piloting the studies and translating the app from English to Chinese. I was subsequently listed\
        as a coauthor for the app.\
        <br><br>\
        Beyond engineering an unprecedented app for psychological testing for social media usage, I was also involved in the statistical\
        analysis of the data using Qualtrics, SPSS, and common statistical methods such as two-way ANOVA. With that, I helped to double\
        check the results and offer input and observations where necessary.";
        tl1.play();
    }

    //Stylify
    var ucla1 = document.getElementById("open-ucla1");
    ucla1.style.cursor = 'pointer';
    ucla1.onclick = function(){
        distitle.innerHTML = "UCLA Tennenbaum Center for the Biology of Creativity";
        disdate.innerHTML = "September 2017 to Present";
        disdesc.innerHTML = "As part of my personal interests in the psychology of creativity and inspiration, I offerred to be a student researcher and assistant at the\
        UCLA Tennenbaum Center for the Biology of Creativity, which explores the cogntive neural underpinnings of creative cognition. As part of my work\
        I have been asked to design an unprecedented online creativity training program that enhances and gauges human creativity. I am currently reviewing\
        literature regarding factors and existing measures that can be adopted to measure and train creativity. \
        <br><br>\
        I will be looking to pilot several studies towards the end of this year. If all is successful, I will be highly interested in extending this study into\
        the psychology of inspiration, and also look into sociocultural differences in creativity enhancement.";
        tl1.play();
    };

    closer.onclick = function(){
        tl1.reverse();
    };

    function clickOutside(evt){
        var id = evt.target.id;
        switch(id){
            //Will not reverse if these items are clicked
            case "proj-title": case "proj-desc": case "proj-date": case "displayinfo":
            break;

            //Otherwise, will reverse
            default: 
            tl1.reverse();
            break;
        }
    }

    BG.addEventListener("click", clickOutside, false);
});