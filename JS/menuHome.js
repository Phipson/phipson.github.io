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

            // Hamburger Menu Dev
            $("#hamMenu").click(function() {
                if ($(this).hasClass("is-active")) {
                    $(this).removeClass("is-active");
                    TweenMax.to("#MobileMenuUI", 0.5, {css:{visibility: "hidden"}});
                } else {
                    $(this).addClass("is-active");
                    TweenMax.to("#MobileMenuUI", 0.5, {css:{visibility: "visible"}});

                }
            })

            // Set Init States
            TweenMax.set("#wmbottombg", {width: "0vw", marginLeft: "-80vw"});
            TweenMax.set("#wmbottomindent", {width: "0vw", marginLeft: "-20vw"});
            TweenMax.set("#webmob_computer", {width: "0vw", marginLeft: "-70vw"});
            TweenMax.set("#webmob_computerscreen", {width: "0%"});
            TweenMax.set("#webmob_windowBG", {height: "0%"});
            TweenMax.set("#webmob_menuLeft", {height: "0%"});
            TweenMax.set("#webmob_displayRight", {width: "0%"});

            var clickStart = function() {
                $("#webmob_start").click();
            }

            var TLWebMob = new TimelineMax({paused: true});
            TLWebMob
            .to("#wmbottombg", 0.001, {autoAlpha: 1})
            .to("#wmbottombg", 0.5, {width: "80vw", marginLeft: "0vw"})
            .to("#wmbottomindent", 0.25, {width: "20vw", marginLeft: "0vw"});

            var TLWebMobWindow = new TimelineMax({paused: true, delay: 0.25, onComplete: clickStart});
            TLWebMobWindow
            .to("#webmob_computer", 0.001, {autoAlpha: 1})
            .to("#webmob_computer", 0.5, {width: "70vw", marginLeft: "0vw"})
            .to("#webmob_computerscreen", 0.001, {autoAlpha: 1})
            .to("#webmob_computerscreen", 0.4, {width: "100%"})
            .to("#webmob_windowBG", 0.001, {autoAlpha: 1}, '-=0.15')
            .to("#webmob_windowBG", 0.5, {height: "100%"}, '-=0.15')
            .to("#webmob_menudisplay", 0.001, {autoAlpha: 1})
            .to("#webmob_menuLeft", 0.5, {height: "100%"})
            .to("#webmob_displayRight", 0.4, {width: "100%"}, '-=0.5')
            .staggerTo(".webmob-button", 0.2, {autoAlpha: 1}, 0.2)
            .to("#webmob_displayRight", 0.2, {padding: "2em"}, '-=0.2')
            .to("#webmob_compmenubutton", 0.5, {autoAlpha: 1})
            .to("#wmheader", 0.5, {autoAlpha: 1}, '-=0.5');

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

            var checkColor = function() {
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
                    TweenMax.to("body", 0.25, {css:{backgroundColor: '#1fab89'}});
                    TweenMax.to("#anchor_research", 0.25, {autoAlpha: 1}); // Research background image fade in
                    TweenMax.to("#anchor_webmob", 0.25, {autoAlpha: 0}); // Web Mobile Dev fade out
                    TweenMax.to("#nav-research", 0.25, {scale: ScaleSize, transformOrigin: "50% 50%"}); // Scale the header to make it noticeable
                    TweenMax.to("#nav-3dint", 0.25, {scale: 1, transformOrigin: "50% 50%"});
                    TweenMax.to("#nav-webmob", 0.25, {scale: 1, transformOrigin: "50% 50%"});
                    TLWebMob.reverse();
                    TLWebMobWindow.reverse();
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
                    //tlWebDev.play();
                    TLWebMob.play();
                    TLWebMobWindow.play();

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
                    TLWebMob.reverse();
                    TLWebMobWindow.reverse();
                }

                // Case 4: Top of webpage 
                else {
                    //console.log("4");
                    TweenMax.to("body", 0.25, {css:{backgroundColor: '#FFFFFF'}}); // Set background color
                    TweenMax.to("#anchor_ARVR", 0.25, {autoAlpha: 0}); // ARVR fade out

                    TweenMax.to("#nav-research", 0.25, {scale: 1, transformOrigin: "50% 50%"}); // Scale the header to make it noticeable
                    TweenMax.to("#nav-3dint", 0.25, {scale: 1, transformOrigin: "50% 50%"});
                    TweenMax.to("#nav-webmob", 0.25, {scale: 1, transformOrigin: "50% 50%"});
                    TLWebMob.reverse();
                    TLWebMobWindow.reverse();
                }

                // Special State Case: Checking when to show the ProfIcon
                if (scrollTop >= 0 && scrollTop <= ProfIconThreshold) {
                        tlProf.play().timeScale(1);
                } else {
                        tlProf.reverse().timeScale(1);
                }

                // Changing color of menu
                if (scrollTop >= ARVRTop - threshold && $("#SideMenu").css("visibility") == "visible") {
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
            }

            // Update offsetTop based on window resizing
            window.addEventListener('resize', function() {
                // Get the y-axis positions of anchors for the document
                ARVRTop =  document.getElementById("anchor_ARVR").offsetTop;
                WebMobTop =  document.getElementById("anchor_webmob").offsetTop;
                ResearchTop =  document.getElementById("anchor_research").offsetTop;
            })
            
            // Animate as you scroll
            window.addEventListener('scroll', function() {
                checkColor();
            });

            // Call once to change color based on current location
            checkColor();

        });
}) (jQuery);