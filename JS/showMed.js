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
        left: "-100%"
    }, {
        visibility: "visible",
        opacity: 1,
        autoAlpha: 1,
        left: "0%"
    }, '-=0.5');

    function changeFrame(src){
        $("#display-media").attr("src", src);
    };

    //FOR SUBSEQUENT PROJECTS, ONLY ADD THINGS BELOW
    //FOLLOW SAME NAMING RULES AND METHODS
    //CUHK Summer Internship
    var cuhk1 = document.getElementById("open-video1");
    cuhk1.style.cursor = 'pointer';
    cuhk1.onclick = function(){
        changeFrame("https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fvoiceuptalk%2Fvideos%2F1194830543915110%2F&show_text=0&width=560");
        //CHANGES THE TEXT AND CONTENT OF THE ELEMENT
        distitle.innerHTML = "VoiceUp: Puruits";
        disdesc.innerHTML = "A video series I produced independently to showcase the lives and stories of 8 individuals form Hong Kong,\
        sharing their life experiences as they pursued their passion and dreams.";
        tl1.play();
    };

    //HKBN
    var vid2 = document.getElementById("open-video2");
    vid2.style.cursor = 'pointer';
    vid2.onclick = function(){
        changeFrame("http://player.vimeo.com/video/253192305");

        distitle.innerHTML = "3D4E Campaign Video";
        disdesc.innerHTML = "During the beginning of 2018, I directed and edited a short campaign video for the UCLA 3D Printing Club, 3D4E.\
        As a team, I had to work with the president and head coordinators of the club to clearly communicate and sell the ideas that the \
        organization wanted to present. With my contribution, we were able to raise up to $4500 USD for the organization, which will be used\
        to fund large-scaled projects and resources.";
        tl1.play();
    };

    //Regoalate
    var web1 = document.getElementById("open-web1");
    web1.style.cursor = 'pointer';
    web1.onclick = function(){
        changeFrame("#");
        distitle.innerHTML = "Spot";
        disdesc.innerHTML = "During the LA Hackathon of 2018, I developed a web-app that would use Spotify's API, in conjunction to machine learning\
        algorithms to visualize and predict music trends users had, in order to present data on their musical behavior, and also offer music suggestions\
        for each of their playlists. During this process, I developed the front-end and designed different methods of data visualization and representation.";
        tl1.play();
    }

    //Stylify
    var web2 = document.getElementById("open-web2");
    web2.style.cursor = 'pointer';
    web2.onclick = function(){
        changeFrame("http://voiceup.wixsite.com/voiceup");
        distitle.innerHTML = "VoiceUp Website";
        disdesc.innerHTML = "From high school to now, I have designed and developed the website for my organization VoiceUp, which aims to inspire and empower youths\
        through the art of storytelling and creative expression. The website houses a plethora of videos and resources that we have coalesced from UCLA and other organizations\
        all to help and support youths in their personal growth and development. Although the website is currently under wix, we will be looking to buy our own domain very\
        soon.";
        tl1.play();
    };

    var web3 = document.getElementById("open-web3");
    web3.style.cursor = 'pointer';
    web3.onclick = function(){
        changeFrame("https://www.hkbn.net/");
        distitle.innerHTML = "Hong Kong Broadband Network Consumer App";
        disdesc.innerHTML = "As part of ongoing efforts I designed a modern, slick, accessible interface that enabled the business and marketing department of the company\
        to streamline their customer inforamtion and improve sales transactions. As part of the front-end developer, I used HTML, CSS and Javascript to program a suitable\
        and professional interface specifically for users to track and manage consumer data easily.";
        tl1.play();
    };

    var cad1 = document.getElementById("open-cad1");
    cad1.style.cursor = 'pointer';
    cad1.onclick = function(){
        changeFrame("https://3d4eatucla.github.io/");
        distitle.innerHTML = "3D4E Projects";
        disdesc.innerHTML = "Joining 3D4E during 2017 has enabled me to sculpt and manufacture computer aided designs I design using Fusion360 and AutoCAD. As part of my time\
        in this organization, I have designed my own lithophane, a Rick and Morty House, as well as a Tic Tac Toe Board. I am currently involved with the Raspberry Pi team\
        to create AI driven board games that are 3D printed using CAD software, such as chess and battleship";
        tl1.play();
    };

    closer.onclick = function(){
        tl1.reverse();
        changeFrame("#");
    };

    function clickOutside(evt){
        var id = evt.target.id;
        switch(id){
            //Will not reverse if these items are clicked
            case "proj-title": case "proj-desc": case "display-media": case "displayinfo":
            break;

            //Otherwise, will reverse
            default: 
            tl1.reverse();
            changeFrame("#");
            break;
        }
    }

    BG.addEventListener("click", clickOutside, false);
});