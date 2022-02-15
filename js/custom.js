jQuery(document).ready(function () {
	

	// ecosystem slider js
	jQuery('.fragmenting-slider').slick({
		slidesToShow:1,
		slidesToScroll:1,
		infinite:true,
		dots:false,
		arrows: true,
		fade: false,
		adaptiveHeight: true,
		autoplay: false,
        autoplaySpeed: 6000
	});

	// ecosystem slider js
	jQuery('.milestone-slider').slick({
		slidesToShow:1,
		slidesToScroll:1,
		infinite:true,
		dots:false,
		arrows: false,
		fade: false,
		adaptiveHeight: true,
		autoplay: false,
        autoplaySpeed: 6000
	});
	// On before slide change
	
	$('.map-milestone-block .milestone-button').on('click', function(){
		$('.milestone-slider').slick('slickNext');
		$('.video')[0].play();
	});

	$('.milestone-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$('.milestone-container').removeClass('milestone-slide' + currentSlide );
		$('.milestone-container').addClass('milestone-slide' + nextSlide );
		$('.video')[0].play();
	});
	

});