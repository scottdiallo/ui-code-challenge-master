$(function() {
     console.log( "ready!" );

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
