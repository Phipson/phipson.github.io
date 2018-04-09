$(document).ready(function(){
    var fb = document.getElementById("facebook");
    fb.style.cursor = 'pointer';
    var yt = document.getElementById("youtube");
    yt.style.cursor = 'pointer';
    var gh = document.getElementById("github");
    gh.style.cursor = 'pointer';
    var em = document.getElementById("email");
    em.style.cursor = 'pointer';
    var li = document.getElementById("linkedin");
    li.style.cursor = 'pointer';
    var ig = document.getElementById("instagram");
    ig.style.cursor = 'pointer';

    fb.onclick = function(){
        window.open('https://www.facebook.com/voiceuptalk', '_blank');
    };
    yt.onclick = function(){
        window.open('https://www.youtube.com/user/voiceuptalk', '_blank');
    };
    gh.onclick = function(){
        window.open('https://github.com/phipson', '_blank');
    };
    em.onclick = function(){
        window.location.href = "mailto:phipsonleecy@gmail.com?subject=Inquiries&body=Dear%20Phipson,";
    };
    li.onclick = function(){
        window.open('https://www.linkedin.com/in/phipson-lee/', '_blank');
    };
    ig.onclick = function(){
        window.open('https://www.instagram.com/voiceuphk/', '_blank');
    }
});