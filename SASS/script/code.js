//-------Footer--------
function btnContact(){
    $(".contact").hover(function(){
        $(this).addClass('shadow');
    }, function(){
        $(this).removeClass('shadow')
    });
};
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
btnContact();
