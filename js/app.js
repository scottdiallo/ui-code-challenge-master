$(document).ready(function(){
    console.log("hello world");
    //  Smooth Scrolling Anchors
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
     $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  
});













// ---------------------------------------------*/
//
// $(document).ready(function() {
//     console.log("hello world");
//  // $(".arrowDown").click(function(e) {
//  //   e.preventDefault();
//  //   $('.bg-img').hide();
//  //   $('html,body').animate({scrollTop:$(this.hash).offset().top + 1}, 1000, function() {
//  //     $('.image2').show();
//  //   });
//  // });
//
//  // applying parallax effect to the 1st image
// //  $('.parallax-window').parallax({imageSrc: 'image1.jpg'});
// //
// // applying smooth scrolling to the arrow
// $('a[href*="#"]:not([href="#"])').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//       if (target.length) {
//         $('html, body').animate({
//           scrollTop: target.offset().top
//         }, 1000);
//         return false;
//       }
//     }
//   });
//
//
// });
