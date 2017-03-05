$(document).ready(function () {
	"use strict";
	
	//Initialize filterizr
	$('.filtr-container').filterizr();
	//Filter controls
    $('.work-filter li').on('click', function (e) {
        $('.work-filter li').removeClass('active');
        $(this).addClass('active');
    });
	
	//Course Carousel
	$(".testimonial-carousel").owlCarousel({
		loop: true,
		items : 3,
		nav : true,
		navText : ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		margin: 30,
		responsiveClass: true,
		dots: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			480: {
				items: 1,
				nav: false
			},
			768: {
				items: 2,
				nav: true
			},
			992: {
				items: 3,
				nav: true,
				loop: true
			}
		}
    });
	
	//Search
	$('.search-trigger').on('click', function (e) {
		e.preventDefault();
		$('.search-wrap').animate({opacity: 'toggle'}, 500);
		$('.nav-search, #search-close').addClass("open");
	});
	$('.search-close').on('click', function (e) {
		e.preventDefault();
		$('.search-wrap').animate({opacity: 'toggle'}, 500);
		$('.nav-search, #search-close').removeClass("open");
	});
	function closeSearch() {
		$('.search-wrap').fadeOut(200);
		$('.nav-search, #search-close').removeClass("open");
	}
	$(document.body).on('click', function (e) {
		closeSearch();
	});
	$(".search-trigger, .main-search-input").on('click', function (e) {
		e.stopPropagation();
	});
	
	//Sidenav
	$("#nav-icon-trigger, #sidenav-close").on('click', function (e) {
		e.preventDefault();
		e.stopPropagation();
		$(".sidenav").toggleClass('opened');
		$('.main-wrapper').toggleClass('sidenav-opened');
	});
	$('.main-wrapper').on('click', function () {
		$(this).removeClass('sidenav-opened');
		$(".sidenav").removeClass('opened');
	});
	
	//Sticky Navigation
	$(window).on('scroll', function (e) {
		if ($(window).scrollTop()) {
			$(".sidenav").removeClass('opened');
			$('.main-wrapper').removeClass('sidenav-opened');
			$('#nav-icon').removeClass('open');
		} else {
			return false;
		}
	});
	
	//Sticky JS
	$("#main-nav").sticky({topSpacing: 0});
	
	//jQuery Counter
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});
	
	//Portfolio Lightbox
	$('.filtr-item').magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery: {
			// options for gallery
			enabled: true
		},
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});
	
	//Text Rotate
	$("#js-rotating").Morphext({
		animation: "flipInX"
	});
	
	//Scroll Spy
	$('body').scrollspy({ target: '#main-nav' });
	
	//Typed JS
	$("#typed").typed({
		stringsElement: $('#typed-strings'),
		typeSpeed: 50,
		backDelay: 1000,
		loop: true,
		contentType: 'html',
		loopCount: true
	});
	
	//WOW JS
	new WOW().init();
	
	//Smooth Scrool
	smoothScroll.init();
	
	//YTPlayer JS
	jQuery("#intro").YTPlayer();
	
	//Preloader
	$(window).on('load', function (e) { 
		$('#status').fadeOut(); 
		$('#preloader').delay(350).fadeOut('slow');
		$('body').delay(350).css({'overflow':'visible'});
	})
	
});