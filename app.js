$(function() {
    //  console.log( "ready!" );
    //  $( ".arrowDown" ).hover(function() {
    //      background-color(color:red);
    // //    $( this ).fadeOut( 100 );
    // //    $( this ).fadeIn( 500 );
    //  });

     $(window).scroll(function() {
     		$('.bg-img').each(function(){
     		var imagePos = $(this).offset().top;

     		var topOfWindow = $(window).scrollTop();
     			if (imagePos < topOfWindow+400) {
     				$(this).addClass("bg-img");
     			}
     		});
     	});


});
