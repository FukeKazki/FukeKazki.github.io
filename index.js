// JavaScript Document
$(function(){
//	ヘッダーの固定
if($('.nc').length){
	var gm_nav = $('.nc'), gm_offset = gm_nav.offset();
	$(window).scroll(function () {
	if($(window).scrollTop() > gm_offset.top) { gm_nav.addClass('fixed'); } else { gm_nav.removeClass('fixed'); }
	});
}
//	リンク移動
$('a[href^="#"]').click(function() {
	var headerHight = 100;
	var speed = 400;
  	var href= $(this).attr("href");
  	var target = $(href == "#" || href == "" ? 'html' : href);
  	var position = target.offset().top-headerHight;
  	$('body,html').animate({scrollTop:position}, speed, 'swing');
  	return false;
});

	$('#nav_toggle').click(function(){
		$("header").toggleClass('open');
		$('nav').slideToggle(500);
	});
	
	//桜が降る
	$(document).snowfall({
		maxSize: 100,
		maxSpeed: 5,
		round: true,
		//shadow: true,
		flakeColor: "pink",
		//collection: 'div',
		image: 'com/img/sakura.png',
	});
});
