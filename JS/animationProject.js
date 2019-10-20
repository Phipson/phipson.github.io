(function($)
    {
        $(document).ready(function(){
            // Changing pages
            transitionToPage = function(color="#FFFFFF") {
                document.body.classList.add("animate-out");
                document.querySelector('body').style.opacity = 0;
                document.querySelector('body').style.backgroundColor = color;
                setTimeout(function() { 
                    history.back();
                }, 500)
            }

            // Back button
            var backBtn = document.getElementById("ReturnHomeTitle");
            var tlBack = new TimelineMax({paused: true});
            tlBack
            .to(backBtn, 0.5, {scale: 1.05, transformOrigin:"50% 50%"});

            backBtn.onmouseenter = function() {
                tlBack.play();
            }

            backBtn.onmouseleave = function() {
                tlBack.reverse();
            }

            backBtn.onclick = function() {
                transitionToPage();
            }

        });

    }) (jQuery);