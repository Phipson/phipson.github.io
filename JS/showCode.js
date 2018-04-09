$(document).ready(function(){
    //DONT CHANGE ANYTHING HERE
    /* Get all Elements */
    var closer = document.getElementById("close");
    var BG = document.getElementById("showcase-bg");
    closer.style.cursor = 'pointer';
    var display = document.getElementById("displayinfo");
    var distitle = document.getElementById("proj-title");
    var disdesc = document.getElementById("proj-desc");
    var disshow = document.getElementById("proj-img");
    var img1 = document.getElementById("img1");
    var img2 = document.getElementById("img2");
    var img3 = document.getElementById("img3");
    var img4 = document.getElementById("img4");

    function ChangeImg(img, url=""){
        if (url == ""){
            img.style.display = "none";
        } else {
            img.style.display = "inline-block";
            img.src = url;
        }
    }

    var tl1 = new TimelineMax({paused: true});
    tl1
    .to("body", 0.5, {
        overflow: "hidden"
    })
    .fromTo(BG, 0.5, {
        visibility: "hidden",
        opacity: 0,
    }, {
        visibility: "visible",
        opacity: 1,
        autoAlpha: 1,
        bottom: "0%"
    }, '-=0.5');

    //FOR SUBSEQUENT PROJECTS, ONLY ADD THINGS BELOW
    //FOLLOW SAME NAMING RULES AND METHODS
    //Appstat
    var appstat = document.getElementById("open-appstat");
    appstat.style.cursor = 'pointer';
    appstat.onclick = function(){   
        ChangeImg(img1, "https://drive.google.com/uc?export=view&id=1hAHNSknlktyB0qM9UkqYeGqa8n8jgdm_");
        ChangeImg(img2, "https://drive.google.com/uc?export=view&id=1r33g7M89dNeJ3XLVhxgKwBgpbovAThq1");
        ChangeImg(img3, "https://drive.google.com/uc?export=view&id=1xY3NtSTxIz-oWOosQl49DhfH8XNMC4Ig");
        ChangeImg(img4, "https://drive.google.com/uc?export=view&id=1y7DfiUuTUj72RWjz2dzEfqMPELpsHtZ-");

        //CHANGES THE TEXT AND CONTENT OF THE ELEMENT
        distitle.innerHTML = "APPSTAT";
        disdesc.innerHTML = "I created AppStat by myself as part of my position as a research assistant\
         at Chinese University of Hong Kong (CUHK). It is an Android App designed to track users' socia\
         l media usage as part of a study that I am co-authoring. I programmed the front end and user i\
         nterface of the app, and also implemented the backend server used to retrieve data for statist\
         ical testing. I piloted the app with the staff and participants, and am currently looking to r\
         efine the app and integrate it natively for both iOS and Android.<br><br><a href\
          ='https://github.com/Phipson/PsychAppStatUsage'>GitHub Code</a>";
        tl1.play();
    };

    //Brainbound
    var brainb = document.getElementById("open-brainbound");
    brainb.style.cursor = 'pointer';
    brainb.onclick = function(){
        ChangeImg(img1, "https://drive.google.com/uc?export=view&id=1oO7dSQhltZZv5-nn3AfBcP8i4YNY4nH6");
        ChangeImg(img2, "https://drive.google.com/uc?export=view&id=1pUlXmTwj7OAvGnx5pldpJVyS85Jp0nV2");
        ChangeImg(img3, "https://drive.google.com/uc?export=view&id=1Wbfo1rK4IdQea1uUukjkk-7LLy4Z2fqY");
        ChangeImg(img4);

        distitle.innerHTML = "BRAINBOUND";
        disdesc.innerHTML = "BrainBound is a self-initiated web-app designed to connect young and profe\
        ssional researchers with laboratories and research opportunities. By designing an app that not \
        only connects users to desired research labs, but also equips users with necessary research ski\
        lls through online training courses, I hope to bridge the skill gap between experienced profess\
        ors and aspiring researchers across a multitude of fields.";
        tl1.play();
    };

    //Regoalate
    var rgoal = document.getElementById("open-regoalate");
    rgoal.style.cursor = 'pointer';
    rgoal.onclick = function(){
        ChangeImg(img1, "https://drive.google.com/uc?export=view&id=1hAHNSknlktyB0qM9UkqYeGqa8n8jgdm_");
        ChangeImg(img2, "https://drive.google.com/uc?export=view&id=1r33g7M89dNeJ3XLVhxgKwBgpbovAThq1");
        ChangeImg(img3, "https://drive.google.com/uc?export=view&id=1xY3NtSTxIz-oWOosQl49DhfH8XNMC4Ig");
        ChangeImg(img4, "https://drive.google.com/uc?export=view&id=1y7DfiUuTUj72RWjz2dzEfqMPELpsHtZ-");

        distitle.innerHTML = "REGOALATE";
        disdesc.innerHTML = "ReGoalate employs research conducted during my internship at the Chinese University of\
        Hong Kong, to transform goal-setting into fun, interactive games that are family friendly and enjoyable. I\
        used React Native Game Engine and the React Native interface to design and build the app applicable for both\
        iOS Systems and Android devices. I am currently in the prototyping stage, but will release the app near June\
        of 2018.";
        tl1.play();
    }

    //Stylify
    var styli = document.getElementById("open-stylify");
    styli.style.cursor = 'pointer';
    styli.onclick = function(){
        ChangeImg(img1, "https://drive.google.com/uc?export=view&id=1hAHNSknlktyB0qM9UkqYeGqa8n8jgdm_");
        ChangeImg(img2, "https://drive.google.com/uc?export=view&id=1r33g7M89dNeJ3XLVhxgKwBgpbovAThq1");
        ChangeImg(img3, "https://drive.google.com/uc?export=view&id=1xY3NtSTxIz-oWOosQl49DhfH8XNMC4Ig");
        ChangeImg(img4, "https://drive.google.com/uc?export=view&id=1y7DfiUuTUj72RWjz2dzEfqMPELpsHtZ-");

        distitle.innerHTML = "STYLIFY";
        disdesc.innerHTML = "As an intern for a newly found startup, I am creating an interactive prototype on behalf of Stylify, \
        which is a newly found startup in Los Angeles that offers new swiping mechanisms for selecting clothing\ using machine learning \
        algorithms <br><br>\ The initial prototype, which was created as a web app, is now migrating on mobile systems. As the core mobile\
        developer for this startup, it is my duty to research into methods of efficiently translating the machine learning functions\
        into a mobile device, but also provide fast and interactive swiping mechanisms that have minimal delay. I am currently in the\
        research stage of the project, and will be completing the prototype by early June.";
        tl1.play();
    };

    //3D4E
    var threed4e = document.getElementById("open-3d4e");
    threed4e.style.cursor = 'pointer';
    threed4e.onclick = function(){
        ChangeImg(img1, "https://drive.google.com/uc?export=view&id=1hAHNSknlktyB0qM9UkqYeGqa8n8jgdm_");
        ChangeImg(img2, "https://drive.google.com/uc?export=view&id=1r33g7M89dNeJ3XLVhxgKwBgpbovAThq1");
        ChangeImg(img3, "https://drive.google.com/uc?export=view&id=1xY3NtSTxIz-oWOosQl49DhfH8XNMC4Ig");
        ChangeImg(img4, "https://drive.google.com/uc?export=view&id=1y7DfiUuTUj72RWjz2dzEfqMPELpsHtZ-");

        distitle.innerHTML = "3D4E";
        disdesc.innerHTML = "A 3D Printing Organization at UCLA, 3D4E offers opportunities for students to design and engineer meaning\
        ful projects that can improve the well-being and lifestyle of the California community. I worked with a team to \
        develop a 3D-printed tic tac toe board that uses Raspberry Pi to create an AI Computer that would compete against students.\
        This project was presented at the annual spring showcase at the University of Southern California in 2018. We are currently\
        working on creating other board games driven by Raspberry Pi AI, such as Battleship and Chess.";
        tl1.play();
    };

    //SUS
    var sus = document.getElementById("open-sus");
    sus.style.cursor = 'pointer';
    sus.onclick = function(){
        ChangeImg(img1, "https://drive.google.com/uc?export=view&id=1hAHNSknlktyB0qM9UkqYeGqa8n8jgdm_");
        ChangeImg(img2, "https://drive.google.com/uc?export=view&id=1r33g7M89dNeJ3XLVhxgKwBgpbovAThq1");
        ChangeImg(img3, "https://drive.google.com/uc?export=view&id=1xY3NtSTxIz-oWOosQl49DhfH8XNMC4Ig");
        ChangeImg(img4, "https://drive.google.com/uc?export=view&id=1y7DfiUuTUj72RWjz2dzEfqMPELpsHtZ-");

        distitle.innerHTML = "SUS";
        disdesc.innerHTML = "SUS, short for 'Sustainability Under SOS', is a project led by me and 3 other programmers during the annual LA Hacks Hackathon of 2017. \
        Over the span of 3 days, we were able to design an Android App that used the API provided by the City of LA to create a social networking app that promoted\
         sustainable lifestyles through civil engagement and real-time alert systems.\
        Users could pinpoint a location in LA that is of concern to the environment, and can then host an event that the public can attend. \
        Events can range from beach clean-ups to demonstrations. The app was awarded the Most Sustainable Hack for its innovative means of promoting\
         sustainable lifestyles and change in the city of LA. \
        <br><br> This project was made on:&nbsp;&nbsp;Android Studio (Gradle, Java, Javascript, XML);&nbsp;&nbsp;City of LA API;&nbsp;&nbsp;SQL\
        (Database);&nbsp;&nbsp;PHP (Server)&nbsp;&nbsp;|&nbsp;&nbsp; <a href='\https://github.com/Phipson/Civic-app\>GitHub Code (Snippets)</a>";
        tl1.play();
    }

    //Spot
    var spot = document.getElementById("open-spot");
    spot.style.cursor = 'pointer';
    spot.onclick = function(){
        ChangeImg(img1, "https://drive.google.com/uc?export=view&id=1hAHNSknlktyB0qM9UkqYeGqa8n8jgdm_");
        ChangeImg(img2, "https://drive.google.com/uc?export=view&id=1r33g7M89dNeJ3XLVhxgKwBgpbovAThq1");
        ChangeImg(img3, "https://drive.google.com/uc?export=view&id=1xY3NtSTxIz-oWOosQl49DhfH8XNMC4Ig");
        ChangeImg(img4, "https://drive.google.com/uc?export=view&id=1y7DfiUuTUj72RWjz2dzEfqMPELpsHtZ-");

        distitle.innerHTML = "SPOT";
        disdesc.innerHTML = "As part of my involvement with the 2018 LA Hacks, I developed a music recommendation web-app that visualized and synthesized data\
         from Spotify using machine learning algorithms and the Spotify API.\
        This web app aimed to improve the user experience when using Spotify, while also offering better statistical information about their music preferences,\
         musical trends, and where to look for similar music that would\
        fit their taste. This app is currently deployed as a web-app, and I was responsible for the front-end development, UI/UX Design, as well as the data visualization.";
        tl1.play();
    };

    //CST
    var comst = document.getElementById("open-cst");
    comst.style.cursor = 'pointer';
    comst.onclick = function(){
        ChangeImg(img1, "https://drive.google.com/uc?export=view&id=1hAHNSknlktyB0qM9UkqYeGqa8n8jgdm_");
        ChangeImg(img2, "https://drive.google.com/uc?export=view&id=1r33g7M89dNeJ3XLVhxgKwBgpbovAThq1");
        ChangeImg(img3, "https://drive.google.com/uc?export=view&id=1xY3NtSTxIz-oWOosQl49DhfH8XNMC4Ig");
        ChangeImg(img4, "https://drive.google.com/uc?export=view&id=1y7DfiUuTUj72RWjz2dzEfqMPELpsHtZ-");

        distitle.innerHTML = "UCLA Computer Support Technician";
        disdesc.innerHTML = "As a member of the UCLA Office of Residential Life, I am responsible for ensuring that residents living on campus are\
        equipped with the suitable technological resources and infrastructure to thrive in their academic pursuits. Beyond troubleshooting\
        computers and priners, I am responsible for responding to client phone calls and addressing concerns from the UCLA office.\
        <br><br>\
        In addition to supporting the students with their technology, I am also required to maintenance college wide servers, implement cybersecurity programs\
        and also construct computers for residential offices when necessary.";
        tl1.play();
    };

    //HKBN
    var hkbn = document.getElementById("open-hkbn");
    hkbn.style.cursor = 'pointer';
    hkbn.onclick = function(){
        ChangeImg(img1, "https://drive.google.com/uc?export=view&id=1hAHNSknlktyB0qM9UkqYeGqa8n8jgdm_");
        ChangeImg(img2, "https://drive.google.com/uc?export=view&id=1r33g7M89dNeJ3XLVhxgKwBgpbovAThq1");
        ChangeImg(img3, "https://drive.google.com/uc?export=view&id=1xY3NtSTxIz-oWOosQl49DhfH8XNMC4Ig");
        ChangeImg(img4, "https://drive.google.com/uc?export=view&id=1y7DfiUuTUj72RWjz2dzEfqMPELpsHtZ-");

        distitle.innerHTML = "Hong Kong Broadband Network";
        disdesc.innerHTML = "As a summer intern, I was involved with the IT Operations for the company. I not only facilitated a city-wide user experience research\
        evaluating the company's web and mobile eCommerce services relative to its local and continental competitors, such as China, Singapore, Korea, and Japan\
        I also implemented the front-end of a web-app that the company would use to deploy software assisting the marketing team in targeting reponsive consumers\
        in the city.";
        tl1.play();
    };

    //ACM
    var acm = document.getElementById("open-acm");
    acm.style.cursor = 'pointer';
    acm.onclick = function(){
        ChangeImg(img1, "https://drive.google.com/uc?export=view&id=1hAHNSknlktyB0qM9UkqYeGqa8n8jgdm_");
        ChangeImg(img2, "https://drive.google.com/uc?export=view&id=1r33g7M89dNeJ3XLVhxgKwBgpbovAThq1");
        ChangeImg(img3, "https://drive.google.com/uc?export=view&id=1xY3NtSTxIz-oWOosQl49DhfH8XNMC4Ig");
        ChangeImg(img4, "https://drive.google.com/uc?export=view&id=1y7DfiUuTUj72RWjz2dzEfqMPELpsHtZ-");
        
        distitle.innerHTML = "UCLA ACM";
        disdesc.innerHTML = "UCLA ACM is one of the many chapters of the Association of Computing and Machinery. As a member of this\
        organization, I have been actively involved in the different groups and activities offered by UCLA ACM, namely\
        ACM AI, which focuses on artificial intelligence and machine learning; ACM Unity, which focuses on game design\
        and development using Unity; ACM ICPC, which trains students to solve computing problems at a competitive level.\
        <ul class='res-layout'>\
        <a class='showcase-link' href=''>Learn About UCLA ACM</a>\
        </ul>";
        tl1.play();
    };

    closer.onclick = function(){
        tl1.reverse();  
    };

    function clickOutside(evt){
        var id = evt.target.id;
        switch(id){
            //Will not reverse if these items are clicked
            case "proj-title": case "proj-desc": case "displayinfo": case "slider":
            case "img1": case "cell1": 
            case "img2": case "cell2": 
            case "img3": case "cell3": 
            case "img4": case "cell4":
            case "img5": case "cell5":
            case "img6": case "cell6":
            case "img7": case "cell7":
            case "img8": case "cell8":
            break;

            //Otherwise, will reverse
            default: 
            tl1.reverse();
            break;
        }
    }

    BG.addEventListener("click", clickOutside, false);
});