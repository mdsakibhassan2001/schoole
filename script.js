$(document).ready(function(){
					

					// ==========Heder area==============//


			$(window).on('scroll',function(){
						
						if($(this).scrollTop()>100)
						{
							$('.header-area').addClass("sticky");
						}

						else{
						
							$('.header-area').removeClass("sticky");
						}
					
				});

				
		// ==========NaveBar Scroll area==============//
		
		$('#nav').onePageNav({
			filter: ':not(.external)'
		});

			// ==========Slide area==============//


			$(document).ready(function(){
					
					  $(".owl-carousel").owlCarousel();
					  
					});



		//===================Button Collapse==================//

				

				$(".hide_1").click(function() {
					

					
					
					$(".hide-1").slideToggle(1000);
					$(".hide-5").slideUp(1000);
					$(".hide-2").slideUp(1000);
					$(".hide-3").slideUp(1000);
					$(".hide-4").slideUp(1000);

				});


				$(".hide_2").click(function() {
					

					$(".hide-2").slideToggle(1000);	
					$(".hide-5").slideUp(1000);
					$(".hide-1").slideUp(1000);
					$(".hide-3").slideUp(1000);
					$(".hide-4").slideUp(1000);
				});

				$(".hide_3").click(function() {
					
					$(".hide-3").slideToggle(1000);	
					$(".hide-5").slideUp(1000);
					$(".hide-1").slideUp(1000);
					$(".hide-2").slideUp(1000);
					$(".hide-4").slideUp(1000);
				});

				$(".hide_4").click(function() {
					

					$(".hide-4").slideToggle(1000);	
					$(".hide-5").slideUp(1000);
					$(".hide-1").slideUp(1000);
					$(".hide-2").slideUp(1000);
					$(".hide-3").slideUp(1000);
				});

				$(".hide_5").click(function() {
					

					$(".hide-5").slideToggle(1000);	
					$(".hide-1").slideUp(1000);
					$(".hide-2").slideUp(1000);
					$(".hide-3").slideUp(1000);
					$(".hide-4").slideUp(1000);
				});








			

					  
});