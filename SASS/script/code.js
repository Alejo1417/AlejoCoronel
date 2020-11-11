let arrayH2;
let arrayP;

const load = {
    duration: '1000',
    delay: '500',
    opacity: 0.3,
    reset: false
}
const loadHs = {
    origin: 'bottom',
    distance: '15%',
    interval: '1500',
    animation: '1000',
    reset: true

}
const loadP = {
    origin: 'left',
    distance: '20%',
    interval: '200',
    duration: '900'
}

function loadH(){
    arrayH = $('.sideL');
    ScrollReveal().reveal(arrayH, loadHs);

    // ScrollReveal().reveal('.loadbar',
    //     { beforeReveal: loadBar});
};

function loadCanvas(){
    ScrollReveal().reveal('#lienzo', load);
    ScrollReveal().reveal('#canvas', load);
}

function loadPe(arrayP){
    arrayP = $('p');
    ScrollReveal().reveal(arrayP, loadP);
    ScrollReveal().reveal('.img', loadP);
    ScrollReveal().reveal('.navbar', loadP);
}


// loadPe();
// loadH();
// loadCanvas();
// --------End Scroll------------

$(document).ready(function(){
    $('#drop').click(function(){
        $('#navbarToggler').toggle();
    });
});

//--------------Load Bars----------

function loadBar(){
    $('.loadbar').each(function(){
        var $this = $(this);
        var per = $this.attr('per');
        $(this).animate({
        width: per},{ 
        duration: 9000,
        });
    });
};

// ScrollReveal().clean('#skills');

// ScrollReveal().reveal('#skills' ,
//     {afterReveal: loadBar()});

//-------Footer--------
$(document).ready(function(){
    $(".contact").hover(function(){
        $(this).addClass('shadow');
    }, function(){
        $(this).removeClass('shadow')
    });
});
//----Scroll Button
function btnScroll(){
   $(window).scroll(function(){
       if($(this).scrollTop() > 300) {
           $('.scrollTop').fadeIn('slow');
       } else {
           $('.scrollTop').fadeOut('slow');
       }
   });
   $('.scrollTop').hover(function(){
    $(this).animate({width: "70px", height: "70px"})
   }, function(){
    $(this).animate({width: "40px", height: "40px"})
   });
}
btnScroll();