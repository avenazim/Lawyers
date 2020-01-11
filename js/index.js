function scrollToService() { 
    var e = document.querySelector("#services-box"); 
    e.scrollIntoView();
} 
function scrollToAbout() { 
    var e = document.querySelector("#about-box"); 
    e.scrollIntoView();
} 
function scrollToContact() { 
    var e = document.querySelector("footer"); 
    e.scrollIntoView();
}
function scrollToTopPage() { 
    var e = document.querySelector(".header"); 
    e.scrollIntoView();
} 

var menu = document.querySelector('#menu');
var exit = document.querySelector('#exit');
var nav = document.getElementById('nav');

function showMenu() { 
    menu.addEventListener('click', function(e){
        nav.classList.toggle('hide-mobile'); //toggle - attach and deattach classes
        e.preventDefault();
    });
}
function hideMenu() { 
    exit.addEventListener('click', function(e){
        nav.classList.add('hide-mobile'); //toggle - attach and deattach classes
        e.preventDefault();
    });
}
