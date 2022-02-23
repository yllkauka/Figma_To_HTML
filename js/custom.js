jQuery(document).ready(function () {
	

	



	// ecosystem slider js
	// jQuery('.fragmenting-slider').slick({
	// 	slidesToShow:1,
	// 	slidesToScroll:1,
	// 	infinite:true,
	// 	dots:false,
	// 	arrows: true,
	// 	fade: false,
	// 	adaptiveHeight: true,
	// 	autoplay: false,
    //     autoplaySpeed: 6000
	// });

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

	// cursor movement css
	
		// Add event listener
		document.addEventListener("mousemove", parallax);
		console.log('elem')
		// Magic happens here
		function parallax(e) {
			let _w = window.innerWidth/2;
			let _h = window.innerHeight/2;
			let _mouseX = e.clientX;
			let _mouseY = e.clientY;
			// let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
			// let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
			// let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;

			let home_depth = `${(_mouseX - _w) * 0.01}px, ${(_mouseY - _h) * 0.04}px`;
			$('.home-container .box-bg img, .fund-main-info .overview-img2, .supply-amount img, .milestone-button, .partner-bottom-image, .bottom-team-img, .fragmenting-slider img').css({
				'transform':`translate(${home_depth})`
			}); 

			// let home_depth1 = `${(_mouseX - _w) * 0.02}px, ${(_mouseY - _h) * 0.08}px`;
			// $('.about-bottom .icon-img').css({
			// 	'transform':`translate(${home_depth1})`
			// });

			// let frag_bg1 = `${(_mouseX - _w) * 0.0001}% ${50 - (_mouseY - _h) * 0.001}%`;
			// let frag_bg2 = `${5 - (_mouseX - _w) * 0.001}% ${95 - (_mouseY - _h) * 0.001}%`;
			// let frag_bg3 = `${90 - (_mouseX - _w) * 0.001}% ${90 - (_mouseY - _h) * 0.001}%`;

			// $('.fragmenting-box').css({
			// 	'background-position':`${frag_bg1}, ${frag_bg2}, ${frag_bg3}`
			// });

			// let mk_bg1 = `${90 - (_mouseX - _w) * 0.001}% ${(_mouseY - _h) * 0.001}%`;
			// let mk_bg2 = `${3 - (_mouseX - _w) * 0.001}% ${75 - (_mouseY - _h) * 0.001}%`;
			

			// $('.marketplace-list').css({
			// 	'background-position':`${mk_bg1}, ${mk_bg2}`
			// });
			
		}

		// const registerVideo = (bound, video) => {
		// 	bound = document.querySelector(bound);
		// 	video = document.querySelector(video);
		// 	const scrollVideo = ()=>{
		// 		if(video.duration) {
		// 			const distanceFromTop = window.scrollY + bound.getBoundingClientRect().top;
		// 			const rawPercentScrolled = (window.scrollY - distanceFromTop) / (bound.scrollHeight - window.innerHeight);
		// 			const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);
					
		// 			video.currentTime = video.duration * percentScrolled * 0.1;
		// 		}
		// 		requestAnimationFrame(scrollVideo);
		// 	}
		// 	requestAnimationFrame(scrollVideo);
		// }
		// registerVideo("#scroll-video", "#scroll-video video");

		

		
});

