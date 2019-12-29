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
            /*
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
            */
            var WMSVG = [`<div style="max-width: 20vh"><svg id="Logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 387 386.66"><defs><style>.cls-1{fill:none;stroke:#fbb03b;stroke-miterlimit:10;stroke-width:30px}</style></defs><path id="Three" class="cls-1" d="M139 102a146.91 146.91 0 0184-36v152H57" transform="translate(-56 -49.11)"/><path id="ThreeStroke" class="cls-1" d="M165 95.89H86"/><path id="D" class="cls-1" d="M275 66v152h150c-1.48-13.73-8.77-66.26-54-108-38-35.07-80.78-42.19-96-44z" transform="translate(-56 -49.11)"/><path id="FourR" class="cls-1" d="M167 200.89v184"/><path id="FourL" class="cls-1" d="M71 250a171.48 171.48 0 0026 89h126" transform="translate(-56 -49.11)"/><path id="E" class="cls-1" d="M443 265H275v154a145.61 145.61 0 0089-44" transform="translate(-56 -49.11)"/><path id="EStroke" class="cls-1" d="M219 289.89h84"/></svg></div>`,
            `<div style="max-width: 300px"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460.76 222.3"><defs><style>.cls-3{stroke:#fff;stroke-miterlimit:10;fill:#fff;stroke-width:7px}</style></defs><g id="Controller"><path id="ConRight" d="M150.76 30.04A43.09 43.09 0 00133.1 9.66c-14.21-8.28-28.5-5-32.61-4.08-26.2 6-36.95 32.53-38 35.32L6.76 165.88a44.2 44.2 0 00-2.72 27.17c.39 1.76 3.2 13.76 10.87 20.38 17.12 14.77 53-2.11 69.28-9.51 17.73-8.08 46.34-24.51 73.36-58.41q-3.41-57.73-6.79-115.47z" stroke-width="6" stroke="#fff" stroke-miterlimit="10" fill="#3bedff"/><path id="ConLeft" d="M310.02 30.04a43 43 0 0117.66-20.38c14.2-8.28 28.5-5 32.6-4.08 26.2 6 37 32.53 38 35.32l55.7 125a44.3 44.3 0 012.78 27.15c-.39 1.76-3.19 13.76-10.87 20.38-17.12 14.77-53-2.11-69.28-9.51-17.73-8.08-46.34-24.51-73.36-58.41l6.77-115.47z" fill="#ff3939" stroke-width="6" stroke="#fff" stroke-miterlimit="10"/><path class="cls-3" d="M117.31 228.71h-8.72v-12.87H95.65V207h12.94v-12.95h8.72V207h13v8.85h-13z" transform="translate(-22.24 -139.56)" id="Plus"/><g id="Buttons"><circle class="cls-3" cx="361.98" cy="52.45" r="6.79"/><circle class="cls-3" cx="385.08" cy="71.47" r="6.79"/><circle class="cls-3" cx="363.34" cy="90.49" r="6.79"/></g></g><g id="Head" stroke-width="6" stroke="#fff" stroke-miterlimit="10"><path d="M229.37 3.03a117.45 117.45 0 0161.81 16.21c29.58 17.41 57.95 51.72 49.64 67.89-2.28 4.43-6.95 6.78-11.14 8.1a121.15 121.15 0 01-22.29 41.54c-10.63 12.86-29.4 35.56-50.63 34.45-18.87-1-22.35-19.8-70.93-87.13-22.42-31.09-30.47-39.27-27.35-50.67 6.19-22.76 49.16-29.9 70.89-30.39z" fill="#009245"/><path d="M202.01 39.5c-9.3 1.46-32.08 5-44.58 25.33-10.53 17.12-7.19 35.44-6.08 40.53a21 21 0 00-10.13-7.09c-5.12-1.5-7.35 1-14.18 0-7.11-1-9.82-4.22-11.15-3-2 1.83 3.78 10 10.13 23.3 8.31 17.46 6.62 21 14.19 32.43 4 6 7.6 9.81 13.31 15.78 10.38 10.84 17.35 17.92 26.2 22.72 20.95 11.36 44.93 3.22 51.68 1 24-7.86 37.1-25 41.54-31.41a66.1 66.1 0 0013.17-16.21c5.09-8.87 4.37-12.56 9.12-24.32 6.76-16.7 14.95-25.85 13.17-27.35-1.17-1-4.89 2.89-14.18 7.09a78.2 78.2 0 01-11.15 4c-.19-6.65-1.63-26.11-16.21-42.55-22.95-25.86-58.1-21.31-64.85-20.25z" fill="#66be8f"/><path d="M209.11 24.31a76.26 76.26 0 00-34.45 8.13l-8.11-15.2c-8.62 6.83-32.6 27.65-38.5 60.8-3.19 17.9-.19 34.27 1 40.52a124.25 124.25 0 0011.15 32.43c3 6.26 7.09 13.58 8.1 13.17 1.42-.58-5.59-15.1-6.08-35.46a93.84 93.84 0 011-16.21l15.2 8.1c-3.08-7.62-7.4-21.83-4.06-38.5 1.34-6.65 3.51-16.75 12.16-24.32 2.92-2.55 10.12-8.89 18.24-7.09s14.45 10.71 15.2 22.29c7.2-14.79 21-22.81 32.42-20.26 14.3 3.19 18.88 21.76 20.26 27.35 5.12 20.73-5.28 38.14-8.1 42.56l15.22-10.18a78.3 78.3 0 011 62.81 124.41 124.41 0 0024.32-42.55 120.81 120.81 0 006.08-44.58c-2.24-36.26-21.9-61.45-30.1-70.85l-22.57 13.17a76 76 0 00-29.38-6.13z" fill="#99d3b5"/></g></svg></div>`, 
            `<div style="max-width: 300px"><svg id="Layer_7" data-name="Layer 7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 214.72 115.62"><defs><style>.cls-1{fill:#5baa4a}.cls-5{fill:#82be76}.cls-6{fill:#901413}</style></defs><g id="SUS"><path class="cls-1" d="M655 390.42c-.1 11.57 1.18 23.21-1.24 34.69-2.71 12.85-10.11 21.15-23.42 23.5-.54.1-1 .21-1.16.81h-3.94a2.65 2.65 0 00-3.93 0h-4.72c-.28-1-1.2-.85-1.91-1-13.68-3.1-20.47-12.29-22.56-25.42-1.75-11-.63-22.16-.75-33.25 6.51.19 13-.32 19.54.46l.14 22.76a39.31 39.31 0 00.63 7.41c1.75 8.78 9.85 12.68 17.89 8.6 3.29-1.68 4.37-4.7 5-8 1.24-6.08.73-12.25.82-18.39.07-4.06.09-8.11.14-12.16z" transform="translate(-515.89 -333.8)"/><path d="M567.11 390.28c10.51 8.2 13.06 19.52 11.92 32-1.41 15.39-8.78 23.32-23.78 26.49-.31.07-.55.46-.82.7h-11c-.28-1-1.2-.84-1.9-1-13-3.35-21-11.7-24.45-24.62-.24-.91.07-2.18-1.18-2.68v-8.65c5.63 0 11.26 0 16.88-.17 2.31-.08 2.82.84 2.92 2.9a22.16 22.16 0 002.19 9.48c2.32 4.37 7.13 6.51 13.12 5.85 4-.45 6.68-2.84 7.86-7.14 2.29-8.27-.31-15.08-7.6-19.52-2.45-1.49-5.08-2.69-7.64-4-5.14-2.59-10.32-5.11-14.39-9.32z" transform="translate(-515.89 -333.8)" fill="#5baa4b"/><path class="cls-1" d="M694.43 449.42c-.61-1.35-2-1.09-3-1.35-17.52-4.45-24.39-20.5-24.53-33.48 0-1.76.5-2.3 2.18-2.28 5.11.06 10.22.08 15.33 0 1.74 0 2.22.63 2.25 2.29a31.27 31.27 0 00.69 5.43c1.55 8 7.75 12.09 15.63 10.35a8.45 8.45 0 005.44-3.57c3.9-5.85 2.12-16.75-3.42-21.09-3.43-2.69-7.39-4.42-11.27-6.31-4.94-2.42-9.78-5-13.67-9q16.59-.06 33.17-.16c1.39 0 2.88.45 4.13-.62a30.5 30.5 0 0111.87 18.23c.37 1.54 0 3.4 1.43 4.62v11.8c-1.42.75-1.09 2.27-1.38 3.43-2.85 11.62-10.18 18.49-21.81 20.91-.71.15-1.62-.17-2 .83h-3.15a2.65 2.65 0 00-3.93 0z" transform="translate(-515.89 -333.8)"/><path d="M567.11 390.28l-37.88.27c-14.26-11.21-15-36.77-1.58-48.87 4.6-4.14 10.21-5.87 15.77-7.88h10.22c.89 1.58 2.58.81 3.85 1.2 12.54 3.87 18.93 12.94 21.21 25.25 1.61 8.71 1.37 8.75-7.43 8.75h-1.18c-3 0-6.31.75-9-.22-3.29-1.21-1.5-5.24-2.49-7.93-2.54-6.82-8.25-9.83-14.46-7.08-5.65 2.5-8 11.19-4.74 17.42a18.38 18.38 0 006.24 6.4 63 63 0 009.29 5c4.41 2.04 8.73 4.19 12.18 7.69z" transform="translate(-515.89 -333.8)" fill="#911615"/><path d="M717.31 389.6c-1.25 1.07-2.74.61-4.13.62q-16.57.12-33.17.16c-11-9.31-12.68-21.54-9.71-34.49 2.67-11.68 10.81-18.63 22.52-21.27.63-.14 1.32-.06 1.61-.82h10.22c.25.25.47.67.76.72 11.78 1.93 18.83 9.17 22.85 20 1 2.75.82 5.79 2.35 8.37v6.29c-4.57-.06-9.14-.16-13.7-.18-5.93 0-5.93 0-6.74-5.71-1-7.26-6.27-11.51-12.61-10.23-8.45 1.7-11.63 13.52-5.51 20.54 3.35 3.83 7.74 6.13 12.27 8.23s9.22 4.24 12.99 7.77z" transform="translate(-515.89 -333.8)" fill="#901716"/><path class="cls-5" d="M621.28 449.42a2.65 2.65 0 013.93 0zM698.36 449.42a2.65 2.65 0 013.93 0z" transform="translate(-515.89 -333.8)"/><path class="cls-6" d="M655 390.42h-19.4c-.05-17.52-.06-35.05-.16-52.57 0-1.84.48-2.51 2.41-2.46 5 .12 9.94.12 14.9 0 1.93-.05 2.42.62 2.41 2.46-.16 17.52-.16 35.05-.16 52.57zM610.91 390.16c-6.5-.78-13-.27-19.54-.46l-.23-52.15c0-1.8.79-2.17 2.38-2.15 5.1.07 10.2.13 15.3 0 2.13-.06 2.26 1 2.26 2.61q-.14 26.07-.17 52.15z" transform="translate(-515.89 -333.8)"/></g></svg></div>`];
            var WMTitle = ["3D Printing for Everyone", "LinksIn", "SUS"];
            var WMDesc = ["As the webmaster for UCLA's 3D Printing club, I was responsible for rebranding the club and enhancing the club website.",
            "As a full-stack developers for LinksIn, I designed and deployed a Tinder-styled app for gamers to network and play together.", 
            "As a front-end Android developer for my team, I built an app for users to coordinate events to promote environmental awareness."];
            var WMButton = ["./Projects/3D4EatUCLA.html", "./Projects/cs188.html", "./Projects/SUS.html"];
            var UnSelectColor = "#eaeaea";
            var SelectColor = "#cacaca";

            $(".webmob-button").click(function() {
                var index = $(this).data("wmindex");
                $("#wmlogo").html(`${WMSVG[index]}`);
                $("#wmtitle").html(`${WMTitle[index]}`);
                $("#wmdesc").html(`${WMDesc[index]}`);
                $("#wmbutton").html(`<button 
                        style="border: none; text-align: center; text-decoration: none; background-color: #cbf1f5; cursor: pointer; border-radius: 5px; padding: 5px; transition: background-color 0.25s" 
                        onclick="transitionToPage('${WMButton[index]}')"
                        onMouseOver="this.style.backgroundColor='#cdfcff'"
                        onMouseOut="this.style.backgroundColor='#cbf1f5'"><p style="color: #3f72af">View More</p></button>`);

                // Change color of the buttons to indicate which one was selected
                $(".webmob-button").each(function() {
                    var currData = $(this).data('wmindex');
                    if (index == currData) {
                        $(this).css("background-color", SelectColor);
                    }
                    else {
                        $(this).css("background-color", UnSelectColor);
                    }
                })
            });


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