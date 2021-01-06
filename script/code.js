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

$canvas = $('#canvas');
$letter = $(".boxName span");

//Text in Canvas
function blur(){
    $.fx.step.textShadowBlur = (fx) => {
        $(fx.elem).css({textShadow: '0 0 ' + Math.floor(fx.now) + 'px #0275d8'})};
        $($letter).hover(function() {
            $(this).stop().animate({textShadowBlur:50}, {duration: 500});
    }, function(){
        $(this).animate({textShadowBlur: null}, {duration: 1500})
    });
}
blur();
function letterMove() {
    var text = $('.allName span');
    text.click(function(){
        text.toggleClass('move')
    })
}
letterMove();
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

//Scroll things...............
window.sr = new ScrollReveal();
loadh2 = {
    duration: 1000, 
    distance: '250px',
    easing: 'cubic-bezier(.62,-0.45,.7,1.38)', 
    origin: 'left',
    reset: true
}
z = {
    duration: 1500,
    distance: '100px',
    origin: 'top',
    easing: 'cubic-bezier(.37,.26,0,1.44)',
    interval: 300,
    duration: 1000
}
canvasOptions = {
    delay: 1500,
    duration: 1500,
    easing: 'ease-in-out'
}
sr.reveal($letter, z);
sr.reveal($canvas, canvasOptions);

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
        origin: 'top',
        distance: '70px',
        easing: 'cubic-bezier(.65,1.26,.74,1.36)',
        reset: true,
    })
}
aptLoad();
svgSkill();
simbolLoad();
ScrollReveal().reveal('h2', loadh2);

