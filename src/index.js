// JavaScript Document
$(function(){
	'use strict';
	$('#footer').load('../com/src/footer.html');
    //	ヘッダーの固定
    if($('.nc').length){
        const gm_nav = $('header');
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
        //現在のページのリンク
        let pathname = window.location.pathname;
        const array = pathname.split('/');
        pathname = array.slice(-1)[0];
        $('.gnav a[href="'+'./'+pathname+'"]').addClass('active');
    }
		
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
  const trigger = new ScrollTrigger();
});
