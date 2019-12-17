$(window).scroll(function(){
	var wScroll = $(this).scrollTop();
	$('.logo').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	});
	$('.inner_logo').css({
		'transform' : 'translate(0px, '+ wScroll/20 +'%)'
	});
});

