scroll.animate={
	slideup:function(){

	}
}


$(window).scroll(function () {
	$('.header-right h1').removeClass('fadeInDown1');
	$('.header-right h6').removeClass('fadeInDown2');
	$('.header-right .address-text').eq(0).removeClass('fadeInDown3');
	$('.header-right .address-text').eq(1).removeClass('fadeInDown4');
	$('.header-right .address-text').eq(2).removeClass('fadeInDown5');
	$('.header-right .address-text').eq(3).removeClass('fadeInDown6');
	$('.header-right .address-text').eq(4).removeClass('fadeInDown7');
	$('.header-right .address-text').eq(5).removeClass('fadeInDown8');
	$('.header-right .address-text').eq(6).removeClass('fadeInDown9');
	$('.header-left img').removeClass('rollIn')
	$('h3.title').removeClass('flipInX')
	$('.about-left').removeClass('fadeInRightBig')
	$('.work-left').removeClass('rotateInDownLeft')
	$('.work-right').removeClass('rotateInDownRight')
	$('.education .work-left').removeClass('fadeInLeft')
	$('.education .work-right').removeClass('fadeInRight')	
	if($(window).scrollTop()<=$('.banner-info').height()){
		$('.header-right h1').addClass('fadeInDown1');
		$('.header-right h6').addClass('fadeInDown2');
		$('.header-right .address-text').eq(0).addClass('fadeInDown3');
		$('.header-right .address-text').eq(1).addClass('fadeInDown4');
		$('.header-right .address-text').eq(2).addClass('fadeInDown5');
		$('.header-right .address-text').eq(3).addClass('fadeInDown6');
		$('.header-right .address-text').eq(4).addClass('fadeInDown7');
		$('.header-right .address-text').eq(5).addClass('fadeInDown8');
		$('.header-right .address-text').eq(6).addClass('fadeInDown9');
		$('.header-left img').addClass('rollIn')
	}	
	if($(window).scrollTop()<=$('.banner-info').height()+$('.top-nav').height()+$('.about').height()){
		$('h3.title').addClass('flipInX')
		$('.about-left').addClass('fadeInRightBig')
	}
	if($(window).scrollTop()<=$('.banner-info').height()+$('.top-nav').height()+$('.about').height()+$('.work').height()){
		$('h3.title').addClass('flipInX')
		$('.work-left').addClass('rotateInDownLeft')	
		$('.work-right').addClass('rotateInDownRight')	
	}
	if($(window).scrollTop()<=$('.banner-info').height()+$('.top-nav').height()+$('.about').height()+$('.work').height()+$('.skills').height()){
		$('h3.title').addClass('flipInX')
		$('.education .work-left').addClass('fadeInLeft')
		$('.education .work-right').addClass('fadeInRight')
	}
	if($(window).scrollTop()<=$('.banner-info').height()+$('.top-nav').height()+$('.about').height()+$('.work').height()+$('.skills').height()+$('.portfolio').height()){
		$('h3.title').addClass('flipInX')
	}
	if($(window).scrollTop()<=$('.banner-info').height()+$('.top-nav').height()+$('.about').height()+$('.work').height()+$('.skills').height()+$('.portfolio').height()+$('.contact').height()){
		$('h3.title').addClass('flipInX')
	}	
})

