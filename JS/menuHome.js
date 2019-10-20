(function($)
    {
        $(document).ready(function(){

            // Define animation for intro picture
            var ProfIcon = document.getElementById("SketchIcon");
            var Bubble = document.getElementById("Bubble");
            var Person = document.getElementById("Me");

            // Initialize state of animation
            TweenMax.set(Bubble, {autoAlpha:0});
            TweenMax.set(ProfIcon, {scale: 0, transformOrigin: "50% 50%"});
            TweenMax.set(Person, {y: "+=500", autoAlpha: 0});
            TweenMax.set("#bub4", {scale: 0, transformOrigin: "50% 50%"});
            TweenMax.set("#bub3", {scale: 0, transformOrigin: "50% 50%"});
            TweenMax.set("#bub2", {scale: 0, transformOrigin: "50% 50%"});
            TweenMax.set("#bub1", {scale: 0, transformOrigin: "50% 50%"});
            TweenMax.set("#bubtext", {autoAlpha: 0});

            var tlProf = new TimelineMax({paused: true});
            tlProf
            .to(ProfIcon, 0.05, {autoAlpha: 1})
            .to(ProfIcon, 0.3, {scale: 1.03, transformOrigin: "50% 30%"})
            .to(ProfIcon, 0.1, {scale: 1, transformOrigin: "50% 30%"})
            .to(Person, 0.05, {autoAlpha: 1})
            .to(Person, 0.3, {y: "-=500"})
            .to(Bubble, 0.05, {autoAlpha: 1})
            .to("#bub1", 0.15, {scale: 1.5, transformOrigin: "50% 50%"})
            .to("#bub1", 0.15, {scale: 1, transformOrigin: "50% 50%"})
            .to("#bub2", 0.15, {scale: 1.5, transformOrigin: "50% 50%"}, '-=0.2')
            .to("#bub2", 0.15, {scale: 1, transformOrigin: "50% 50%"})
            .to("#bub3", 0.15, {scale: 1.5, transformOrigin: "50% 50%"}, '-=0.2')
            .to("#bub3", 0.15, {scale: 1, transformOrigin: "50% 50%"})
            .to("#bub4", 0.15, {scale: 1.1, transformOrigin: "50% 50%"}, '-=0.2')
            .to("#bub4", 0.15, {scale: 1, transformOrigin: "50% 50%"})
            .to("#bubtext", 0.25, {autoAlpha: 1});

            tlProf.play();

            // Web Mobile Dev Entrance Animation
            var CompWindow = document.getElementById("ShowcaseWindow");

            // Set Initial State
            TweenMax.set(CompWindow, {scale: 0, transformOrigin: "50% 50%"});
            
            var tlWebDev = new TimelineMax({paused: true, delay: 0.1});
            tlWebDev
            .to(CompWindow, 0.05, {autoAlpha: 1})
            .to(CompWindow, 0.4, {scale: 1.1, transformOrigin: "50% 50%"})
            .to(CompWindow, 0.1, {scale: 1, transformOrigin: "50% 50%"});

            // Social Media Outlets
            var Linkedin = document.getElementById("linkedin");
            var Email = document.getElementById("email");
            var Github = document.getElementById('github');

            Linkedin.onclick = function() {
                window.open('https://www.linkedin.com/in/phipson-lee/');
            }

            Email.onclick = function() {
                var link = "mailto:phipsonleecy@gmail.com";
                window.location.href = link;
            }

            Github.onclick = function() {
                window.open('https://github.com/Phipson');
            }

            // Get initial offset tops
            var ARVRTop =  document.getElementById("anchor_ARVR").offsetTop;
            var WebMobTop =  document.getElementById("anchor_webmob").offsetTop;
            var ResearchTop =  document.getElementById("anchor_research").offsetTop;

            // Update offsetTop based on window resizing
            window.addEventListener('resize', function() {
                // Get the y-axis positions of anchors for the document
                ARVRTop =  document.getElementById("anchor_ARVR").offsetTop;
                WebMobTop =  document.getElementById("anchor_webmob").offsetTop;
                ResearchTop =  document.getElementById("anchor_research").offsetTop;
            })
            
            // Animate as you scroll
            window.addEventListener('scroll', function() {
                var scrollTop = $(window).scrollTop();
                var scrollBot = scrollTop + $(window).height();

                // Calculating bottom of screen
                var body = document.body,
                html = document.documentElement;
            
                var height = Math.max( body.scrollHeight, body.offsetHeight, 
                                    html.clientHeight, html.scrollHeight, html.offsetHeight );

                var threshold = 15; // Pixels before anchor for transition to start
                var ProfIconThreshold = 0.2 * ARVRTop; // Pixels before ARVR for ProfIcon to disappear
                var ScaleSize = 1.5;
                
                // Case 1: Reached Research Section
                if ((scrollTop >= ResearchTop - threshold) || (scrollBot == height)) {
                    //console.log("1");
                    TweenMax.to("#anchor_research", 0.25, {autoAlpha: 1}); // Research background image fade in
                    TweenMax.to("#anchor_webmob", 0.25, {autoAlpha: 0}); // Web Mobile Dev fade out
                    TweenMax.to("#nav-research", 0.25, {scale: ScaleSize, transformOrigin: "50% 50%"}); // Scale the header to make it noticeable
                    TweenMax.to("#nav-3dint", 0.25, {scale: 1, transformOrigin: "50% 50%"});
                    TweenMax.to("#nav-webmob", 0.25, {scale: 1, transformOrigin: "50% 50%"});
                    tlWebDev.reverse(); // Hide the Screen Window
                }

                // Case 2: Reached Web Mobile Dev Section
                else if (scrollTop >= WebMobTop - threshold) {
                    //console.log("2");
                    TweenMax.to("body", 0.25, {css:{backgroundColor: '#522546'}}); // Set background color
                    TweenMax.to("#anchor_research", 0.25, {autoAlpha: 0}); // Research background image fade out
                    TweenMax.to("#anchor_ARVR", 0.25, {autoAlpha: 0}); // ARVR fade out
                    TweenMax.to("#anchor_webmob", 0.25, {autoAlpha: 1}); // Web Mobile Dev fade in

                    TweenMax.to("#nav-research", 0.25, {scale: 1, transformOrigin: "50% 50%"}); // Scale the header to make it noticeable
                    TweenMax.to("#nav-3dint", 0.25, {scale: 1, transformOrigin: "50% 50%"});
                    TweenMax.to("#nav-webmob", 0.25, {scale: ScaleSize, transformOrigin: "50% 50%"});
                    tlWebDev.play();
                }

                // Case 3: Reached ARVR Section
                else if (scrollTop >= ARVRTop - threshold) {
                    //console.log("3");
                    TweenMax.to("body", 0.25, {css:{backgroundColor: '#112d4e'}}); // Set background color
                    TweenMax.to("#anchor_ARVR", 0.25, {autoAlpha: 1}); // ARVR fade in
                    TweenMax.to("#anchor_webmob", 0.25, {autoAlpha: 0}); // Web Mobile Dev fade out

                    TweenMax.to("#nav-research", 0.25, {scale: 1, transformOrigin: "50% 50%"}); // Scale the header to make it noticeable
                    TweenMax.to("#nav-3dint", 0.25, {scale: ScaleSize, transformOrigin: "50% 50%"});
                    TweenMax.to("#nav-webmob", 0.25, {scale: 1, transformOrigin: "50% 50%"});
                    tlWebDev.reverse();
                }

                // Case 4: Top of webpage 
                else {
                    //console.log("4");
                    TweenMax.to("body", 0.25, {css:{backgroundColor: '#FFFFFF'}}); // Set background color
                    TweenMax.to("#anchor_ARVR", 0.25, {autoAlpha: 0}); // ARVR fade out

                    TweenMax.to("#nav-research", 0.25, {scale: 1, transformOrigin: "50% 50%"}); // Scale the header to make it noticeable
                    TweenMax.to("#nav-3dint", 0.25, {scale: 1, transformOrigin: "50% 50%"});
                    TweenMax.to("#nav-webmob", 0.25, {scale: 1, transformOrigin: "50% 50%"});
                }

                // Special State Case: Checking when to show the ProfIcon
                if (scrollTop >= 0 && scrollTop <= ProfIconThreshold) {
                        tlProf.play().timeScale(1);
                } else {
                        tlProf.reverse().timeScale(2);
                }

                // Changing color of menu
                if (scrollTop >= ARVRTop - threshold) {
                    TweenMax.to(".NavText", 0.25, {css:{color: '#f9f7f7'}}); // Set the color of the text for the navigation menu
                    TweenMax.to("#PortTitle", 0.25, {css:{color: '#f9f7f7'}});
                    TweenMax.to(".socialmediasvg", 0.25, {stroke: '#f9f7f7'}); // Set the color of the text for the navigation menu
                    TweenMax.to(".socialmediasvg", 0.25, {fill: '#f9f7f7'});
                } else {
                    TweenMax.to(".NavText", 0.25, {css:{color: '#222831'}}); // Set the color of the text for the navigation menu
                    TweenMax.to("#PortTitle", 0.25, {css:{color: '#222831'}});
                    TweenMax.to(".socialmediasvg", 0.25, {stroke: '#222831'}); // Set the color of the text for the navigation menu
                    TweenMax.to(".socialmediasvg", 0.25, {fill: '#222831'});
                }
            });

        });
}) (jQuery);