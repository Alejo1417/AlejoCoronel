//----Scroll Button
function btnScroll(){
   $(window).scroll(function(){
       if($(this).scrollTop() > 900) {
           $(".scrollTop").fadeIn('slow');
       } else {
           $(".scrollTop").fadeOut('slow');
       }
   });
   $('.scrollTop').hover(function(){
    $(this).animate({top: "78%",opacity: 1, boxShadow: "0px 3px 7px #0275d8"},200)
   }, function(){
    $(this).animate({top: "80%", opacity: .4, boxShadow: "null"})
   },300);
};
btnScroll();

//Scroll things...............
window.sr = new ScrollReveal();
loadh2 = {
    duration: 1000, 
    distance: '250px',
    easing: 'cubic-bezier(.62,-0.45,.7,1.38)', 
    origin: 'left',
    reset: true}

//Canvas Load
function callBack() { 
    sr.reveal('#canvas', {
        duration: 600
    })
}
function showCanvas(){
    sr.reveal('#span', {
        delay: 900,
        duration: 800,
        origin: 'top',
        distance: '1000px',
        afterReveal: callBack
    });
    
}
function canvasLoad(){
    sr.reveal('h1', {
        origin: 'top',
        distance: '70px',
        interval: 5000,
        easing: 'cubic-bezier(.71,-0.29,.28,1.06)',
        afterReveal: showCanvas
    })
};
// Nav Load--
sr.reveal('#sectionNav', {
    reset: true,
    origin: 'top',
    distance: '80px',
    interval: 2000,
    delay: 400,
    duration: 1000,
    easing: 'cubic-bezier(.24,-0.33,.27,.95)'
});
//Head Load
sr.reveal('.interval', {
    interval: 600,
    distance: '250px',
    origin: 'left',
    duration: 2000
})

//Skills Load--
function svgSkill() {
    sr.reveal('.square', {
        interval: 100,
        delay: 500,
        duration: 2000,
        origin: 'left',
        distance: '250px', 
        rotate: {x: 90, y: 100, z:50}
    })
};
//Aptitute Load
function aptLoad() {
    sr.reveal('.txtPoint', {interval: 700})
}
//Contact Load
function simbolLoad() {
    sr.reveal('.load', {
        interval: 500,
        origin: 'bottom',
        distance: '70px',
        easing: 'cubic-bezier(.65,1.26,.74,1.36)',
        reset: true,
    })
}
aptLoad();
svgSkill();
canvasLoad();
simbolLoad();
ScrollReveal().reveal('h2', loadh2);

//Skill animation
function skillSVG(){
    $('.square').hover(function(){
        $(this).animate({
            boxShadow: '1px 2px 4px black',
            backgroundColor: '#9b9fa178'
        })
    }, function(){
        $(this).animate({
            boxShadow: 'null',
            backgroundColor: 'transparent'
        })
    })
};
skillSVG();