(function($)
    {
        $(document).ready(function(){
            // Changing pages
            transitionToPage = function(href, color="#FFFFFF") {
                document.body.classList.add("animate-out");
                document.querySelector('body').style.opacity = 0;
                document.querySelector('body').style.backgroundColor = color;
                setTimeout(function() { 
                    window.location.href = href
                }, 500)
            }

            // Nav Menu Section
            // Logo Hover
            var tlNav_1 = new TimelineMax({paused: true});
            tlNav_1
            .to('#PortTitle', 0.5, {scale: 1.05, transformOrigin:"50% 50%"});

            var LogoDiv = document.getElementById("IntroWrapper");
            LogoDiv.onmouseenter = function() {
                tlNav_1.play();
            }

            LogoDiv.onmouseleave = function() {
                tlNav_1.reverse();
            }

            // ARVR Section
            // VR Guy Hands and Head
            var GuyHead = document.getElementById("Head");
            var GuyHandL = document.getElementById("LArm");
            var GuyHandR = document.getElementById("RArm");

            var tlARVR_1 = new TimelineMax({paused: true, repeat: -1, yoyo: true, repeatDelay: 0.2});
            tlARVR_1
            .to(GuyHandL, 1, {rotation: 15, transformOrigin: "10% 40%"})
            .to(GuyHandR, 1, {rotation: -20, transformOrigin: "10% 40%"}, '-=1')
            .to(GuyHead, 1, {rotation: -20, transformOrigin: "22.1% 63%"}, '-=1');

            tlARVR_1.play();

            // Hello World Hover
            var HelloBlock = document.getElementById("Hello");
            var WorldBlock = document.getElementById("World");
            var LogicDiv = document.getElementById("m_Logic");

            var tlARVR_2 = new TimelineMax({paused: true});
            tlARVR_2
            .to(HelloBlock, 0.25, {y: '+=35'})
            .to(WorldBlock, 0.25, {y: '-=35'}, '-=0.25');

            LogicDiv.onmouseenter = function() {
                tlARVR_2.play();
            }

            LogicDiv.onmouseleave = function() {
                tlARVR_2.reverse();
            }

            LogicDiv.onclick = function() {
                transitionToPage("./Projects/logicinar.html");
            }

            // Voxel Modeling
            var VoxelDiv = document.getElementById("m_Voxel");
            TweenMax.set(".monkey-3", {scale: 0, transformOrigin: "50% 50%"});

            var tlARVR_4 = new TimelineMax({paused: true});
            tlARVR_4
            .to("#Voxels", 0.01, {autoAlpha: 1})
            .staggerTo(".monkey-3", 0.15, {scale: 1, transformOrigin: "50% 50%"}, 0.1)
            .to("#Original", 0.3, {autoAlpha: 0});

            VoxelDiv.onmouseenter = function() {
                tlARVR_4.play();
            }

            VoxelDiv.onmouseleave = function() {
                tlARVR_4.reverse();
            }

            VoxelDiv.onclick = function() {
                transitionToPage("./Projects/voxelmodeling.html");
            }

            // CAVECAD
            var CAVECADDiv = document.getElementById("m_CAVECAD");
            var TableSurface = document.getElementById("Surface");
            var SqrTable = document.getElementById("SquareTable");
            var PentTable = document.getElementById("PentagonTable");
            var HexTable = document.getElementById("HexagonTable");
            TweenMax.set(TableSurface, {scale: 0, transformOrigin: "50% 50%"});

            var tlARVR_5 = new TimelineMax({paused: true});
            tlARVR_5
            .to(SqrTable, 0.05, {autoAlpha: 1})
            .to(TableSurface, 0.3, {scale: 1.1, transformOrigin: "50% 50%"})
            .to(TableSurface, 0.2, {scale: 1, transformOrigin: "50% 50%"})
            .to('#gradient-1 stop', 0.5, {attr: {offset: "0%"}}, "+=0.1")
            .to('#gradient-2 stop', 0.5, {attr: {offset: "0%"}}, "-=0.5")
            .to('#gradient-3 stop', 0.5, {attr: {offset: "0%"}})
            .to('#gradient-4 stop', 0.5, {attr: {offset: "0%"}}, "-=0.5")
            .to(SqrTable, 0.05, {autoAlpha: 0}, "+=0.4")
            .to(PentTable, 0.05, {autoAlpha: 1}, "-=0.05")
            .to(PentTable, 0.05, {autoAlpha: 0}, "+=0.2")
            .to(HexTable, 0.05, {autoAlpha: 1}, "-=0.05");

            CAVECADDiv.onmouseenter = function() {
                tlARVR_5.play();
            }

            CAVECADDiv.onmouseleave = function() {
                tlARVR_5.reverse();
            }

            CAVECADDiv.onclick = function() {
                transitionToPage("./Projects/CAVECAD.html");
            }

            // Web Mobile Section
            var _3D4Ebtn = document.getElementById("_3D4E");
            var Spotbtn = document.getElementById("Spot");
            var SUSbtn = document.getElementById("SUS");

            var hoverButton = document.getElementById("WMDetailButton");
            var hoverDetails = new TimelineMax({paused: true});
            hoverDetails
            .to("#WMDetailRect", 0.25, {fill: "#74f9ff"});

            hoverButton.onmouseenter = function() {
                hoverDetails.play();
            }

            hoverButton.onmouseleave = function() {
                hoverDetails.reverse();
            }

            var show3D4E = function() {
                TweenMax.to(_3D4Ebtn, 0.25, {autoAlpha: 1})
                TweenMax.to(Spotbtn, 0.25, {autoAlpha: 0}, "-=0.25")
                TweenMax.to(SUSbtn, 0.25, {autoAlpha: 0}, "-=0.25");
                $("#TextDescLine1").html("As the webmaster for UCLA's 3D Printing club,");
                $("#TextDescLine2").html("I was responsible for rebranding the club and");
                $("#TextDescLine3").html("enhancing the club website.");
            }

            var showSpot = function() {
                TweenMax.to(_3D4Ebtn, 0.25, {autoAlpha: 0})
                TweenMax.to(Spotbtn, 0.25, {autoAlpha: 1}, "-=0.25")
                TweenMax.to(SUSbtn, 0.25, {autoAlpha: 0}, "-=0.25");
                $("#TextDescLine1").html("As a full-stack developers for LinksIn,");
                $("#TextDescLine2").html("I designed and deployed a Tinder-styled app");
                $("#TextDescLine3").html("for gamers to network and play together.");
            }

            var showSUS = function() {
                TweenMax.to(_3D4Ebtn, 0.25, {autoAlpha: 0})
                TweenMax.to(Spotbtn, 0.25, {autoAlpha: 0}, "-=0.25")
                TweenMax.to(SUSbtn, 0.25, {autoAlpha: 1}, "-=0.25");
                $("#TextDescLine1").html("As a front-end Android developer for my team");
                $("#TextDescLine2").html("I built an app for users to coordinate events");
                $("#TextDescLine3").html("to promote environmental awareness.");
            }

            // TODO: Details Page Display
            var detail3D4E = function() {
                console.log("3D4EDetails");
                transitionToPage("./Projects/3D4EatUCLA.html");
            }

            var detailSpot = function() {
                console.log("SpotDetails");
                transitionToPage("./Projects/cs188.html");
            }

            var detailSUS = function() {
                console.log("SUSDetails");
                transitionToPage("./Projects/SUS.html");
            }

            var ProjectArray = [show3D4E, showSpot, showSUS];
            var ProjectDetailArray = [detail3D4E, detailSpot, detailSUS];
            var CurrElement = 0;

            ProjectArray[CurrElement](); // Initialize the current element

            // Highlight App to Select
            $(".webmob-index").hover(function() {
                TweenMax.to($(this), 0.25, {css:{fill: '#FFFFFF'}});
            }, function() {
                TweenMax.to($(this), 0.25, {css:{fill: '#000000'}});
            });

            $(".webmob-index").click(function() {
                var index = $(this).data("wmindex");
                var offset = (CurrElement-index) * 65;
                CurrElement = index;
                console.log(offset);
                TweenMax.to($("#WMBGHighlighter"), 0.5, {y: `-=${offset}`});
                ProjectArray[CurrElement]();
            });


            // View More Button
            hoverButton.onclick = function() {
                ProjectDetailArray[CurrElement]();
            }


            // Research Notebook
            var playing = false;
            var hoverFlipAmount = 0;
            var count = 0;

            flipReset = function(e) {
                if ($(e).data("flip")) {
                    anime({
                        targets: e,
                        transformOrigin: '0% 0%',
                        rotateY: {value: `-180`, delay: 0},
                        //translateX: {value: '-=50%', delay: 0},
                        easing: 'easeInOutSine',
                        duration: 100
                    });
                } else {
                    anime({
                        targets: e,
                        transformOrigin: '0% 0%',
                        rotateY: {value: `0`, delay: 0},
                        //translateX: {value: '-=50%', delay: 0},
                        easing: 'easeInOutSine',
                        duration: 100
                    });
                }
            }

            flipHoverIn = function(e) {
                if (playing)
                    return;
                if ($(e).data("flip")) {
                    anime({
                        targets: e,
                        transformOrigin: '0% 0%',
                        rotateY: {value: `+=${hoverFlipAmount}`, delay: 0},
                        //translateX: {value: '-=50%', delay: 0},
                        easing: 'easeInOutSine',
                        duration: 400
                    });
                } else {
                    anime({
                        targets: e,
                        transformOrigin: '0% 0%',
                        rotateY: {value: `-=${hoverFlipAmount}`, delay: 0},
                        //translateX: {value: '-=50%', delay: 0},
                        easing: 'easeInOutSine',
                        duration: 400
                    });
                }
            };

            flipHoverOut = function(e) {
                if (playing)
                    return;

                if ($(e).data("flip")) {
                    anime({
                        targets: e,
                        transformOrigin: '0% 0%',
                        rotateY: {value: `-=${hoverFlipAmount}`, delay:0},
                        //translateX: {value: '-=50%', delay: 0},
                        easing: 'easeInOutSine',
                        duration: 400
                    });
                } else {
                    anime({
                        targets: e,
                        transformOrigin: '0% 0%',
                        rotateY: {value: `+=${hoverFlipAmount}`, delay: 0},
                        //translateX: {value: '-=50%', delay: 0},
                        easing: 'easeInOutSine',
                        duration: 400
                    });
                }
            };

            flipPage = function(e) {
                if(playing)
                    return;
                
                playing = true;
                $(e).css('z-index', count);
                $(e).css('transform-origin', "0% 0%");
                //console.log($(this).data("flip"));
                if ($(e).data("flip")) {
                    anime({
                        targets: e,
                        rotateY: {value: `+=${180-hoverFlipAmount}`, delay: 50},
                        //translateX: {value: '-=50%', delay: 0},
                        easing: 'easeInOutSine',
                        duration: 400,
                        complete: function(anim){
                            playing = false;
                            count += 1;
                        }
                    });
                } else {
                    anime({
                        targets: e,
                        rotateY: {value: `-=${180-hoverFlipAmount}`, delay: 50},
                        //translateX: {value: '-=50%', delay: 0},
                        easing: 'easeInOutSine',
                        duration: 400,
                        complete: function(anim){
                            playing = false;
                            count += 1;
                        }
                    });
                }
                $(e).data("flip", !$(e).data("flip"));
            };

            $(".card").click(function() {
                flipPage(this);
            });
 


        });

    }) (jQuery);