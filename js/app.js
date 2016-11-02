/*--------------------------------------------
 Smooth Scrolling Anchors
---------------------------------------------*/

$(document).ready(function() {
    // console.log('ready');
 $(".arrowDown").click(function(e) {
   e.preventDefault();
   $('.bg-img').hide();
   $('html,body').animate({scrollTop:$(this.hash).offset().top + 1}, 1000, function() {
     $('.image2').show();
   });
 });

 // applying parallax effect to the 1st image
 $('.parallax-window').parallax({imageSrc: 'image1.jpg'});

});
