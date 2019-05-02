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

			$('#nav_toggle').click(function(){
				$("header").toggleClass('open');
				$('nav').slideToggle(500);
			});
		
		{
			let url = window.location;
			$('.gnav a[href="'+url+'"]').addClass('active');
		}
		
	});	
    $('.hero-img').vegas({
       slides: [
           {src: '../com/img/hentaiHackthon02.jpg'},
           {src: '../com/img/hentaiHackthon01.jpg'},
           {src: '../com/img/hentaiHackthon03.jpg'},
           {src: '../com/img/DeepLarning01.jpg'},
           {src: '../com/img/HTMLCSS01.jpg'},
           {src: '../com/img/IoT01.jpg'},
       ],
        delay: 5000,
        transitionDuration: 3000,
        transition: 'blur',
        animation: 'random',
    });
});
document.addEventListener('DOMContentLoaded', function(){
  var trigger = new ScrollTrigger();
});
