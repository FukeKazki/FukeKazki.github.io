// JavaScript Document
$(function(){
	'use strict';
	$('#header').load('../com/src/header.html');
	$('#footer').load('../com/src/footer.html');
	$('#gnav').load('../com/src/gnav.html', function() {
		//	ヘッダーの固定
		if($('.nc').length){
			const gm_nav = $('.nc');
			const gm_offset = gm_nav.offset();
			$(window).scroll(function () {
			if($(window).scrollTop() > gm_offset.top) { gm_nav.addClass('fixed'); } else { gm_nav.removeClass('fixed'); }
			});
		}
		
		$('a[href^="#"]').click(function() {
			const headerHight = 100;
			const speed = 400;
			const href= $(this).attr("href");
			const target = $(href == "#" || href == "" ? 'html' : href);
			const position = target.offset().top-headerHight;
			$('body,html').animate({scrollTop:position}, speed, 'swing');
			return false;
		});

			$('#nav_toggle').click(function(){
				$("header").toggleClass('open');
				$('nav').slideToggle(500);
			});
		
		{
		let url = window.location;
		$('.gnav a[href="'+url+'"]').addClass('active');
		}
		
	});
	
	
	//桜が降る
//	$(document).snowfall({
//		maxSize: 100,
//		maxSpeed: 5,
//		round: true,
//		flakeColor: "pink",
//		image: 'com/img/sakura.png',
//	});
	
	
});
