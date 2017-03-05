$(document).ready(function () {
	"use strict";
	
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

	//Scroll Spy
	$('body').scrollspy({ target: '#main-nav' });
		
	//Smooth Scrool
	smoothScroll.init();
	
});




