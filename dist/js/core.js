//variables
var url = 'http://'+document.location.hostname+'/';
var core = null;
if($(window).width() <= 767){
	core = true
}else{
	core = false
}

init = function(){

	medidas = function(){
		altura = $(window).height();
		anchura = $(window).width();
		alturaScroll = $(window).scrollTop();
		return;
	}

	setSize = function(){
		medidas();
		if(anchura <= 767){
			if(core=== true){
				core = false
				moverElementos();
				menumobile();
				destructMenuDesctop();
				menuFotter();
			}
		}
		else if(anchura >= 768){
			if(core=== false){
				core = true
				resetElementos();
				hoverdir();
				menudesktop();
				destructMenuMobile();
				menuFotterStop();
			}
		}
	}

	moverElementos = function(){
		$('.linksFooter dl > div').css("display", "none");
		$('.menuAutos > div ul li > div').css("display", "none");
	}

	resetElementos = function(){
		$('.linksFooter dl > div').css("display", "block");
		$('.menuAutos > div ul li > div').css("display", "block");
	}

	menudesktop = function(){
		$('.menuAutos div ul li').eq(0).addClass('activo');
		$('.menuAutos div ul li').on('click', function(){
			$('.menuAutos div ul li').removeClass('activo');
			$(this).addClass('activo');
		});
		$('.desplegar').on('mouseover',function() {
			$(this).addClass('hover');
		}).on('mouseout',function() {
			$(this).removeClass('hover');
		});
		$('.menuAutos .flex > div').on('mouseover',function() {
			$(this).addClass('hover');
			$('.menuAutos .flex').addClass('hover');
		}).on('mouseout',function() {
			$(this).removeClass('hover');
			$('.menuAutos .flex').removeClass('hover');
		});
	}

	menumobile = function(){
		$('.hamburguesa').on('click', function(){
			$('.header > .menu').toggleClass('activo');
			$('body').toggleClass('hidden');
		});
		$('.desplegar > a').on('click', function(){
			$('.header .menuAutos').addClass('activo');
			$('.header > .menu > .flex').addClass('hidden');
		});
		$('.regresar').on('click', function(){
			$('.header .menuAutos').removeClass('activo');
			$('.header > .menu > .flex').removeClass('hidden');
		});
		$('.menuAutos div ul li > a').on('click', function(){
			if(!$(this).hasClass('activo')){
				$('.menuAutos div ul li > a').removeClass('activo')		
				$('.menuAutos div ul li > a ~ div').slideUp();
			}
			$(this).toggleClass('activo');
			$('~ div', this).slideToggle();
		});
		$('.menuAutos .flex > div').on('mouseover',function() {
			$(this).addClass('hover');
			$('.menuAutos .flex').addClass('hover');
		}).on('mouseout',function() {
			$(this).removeClass('hover');
			$('.menuAutos .flex').removeClass('hover');
		});
	}
	destructMenuMobile = function(){
		$('.hamburguesa, .desplegar > a, .regresar, .menuAutos div ul li a').off('click');
	}
	
	destructMenuDesctop = function(){
		$('.menuAutos div ul li').off('click');
		$('.desplegar').off('mouseover');
		$('.desplegar').off('mouseout');
		// $('.menuAutos .flex > div').off('mouseover');
		// $('.menuAutos .flex > div').off('mouseout');
	} 
	hoverdir = function(){
		$('.promociones .flex dd').each( function() { $(this).hoverdir(); } );
		$('.intsgram').each( function() { $(this).hoverdir(); } );
	}

	$('.cover .slide').bxSlider({
		mode:'horizontal',
		infiniteLoop: false,
		responsive: true,
		hideControlOnEnd: true,
		touchEnabled: true,
		preventDefaultSwipeX: true,
		prevSelector: '#prev',
		nextSelector: '#next'
	});

	menuFotter = function(){
		$('.linksFooter dl > dt').on('click', function(){
			if(!$(this).parent().hasClass('activo')){
				$('.linksFooter dl').removeClass('activo')		
				$('.linksFooter dl > dt ~ div').slideUp();
			}
			$(this).parent().toggleClass('activo');
			$('~ div', this).slideToggle();
		});
	}

	menuFotterStop = function(){
		$('.linksFooter dl > dt').off('click')
	}

	inicio = function(){
		setSize();
	}

	$(window).resize(function(){
		setSize();
	});

	inicio();

	//genera movimiento sutil del scroll	
	$('a.scroll').on('click', function(e) {  		
		event.preventDefault();
		var $link = $(this);  
		var anchor  = $link.attr('href'); 
		var general =  $(anchor).offset().top
		//general = general - 100;
		$('html, body').stop().animate({scrollTop: general}, 1000);
	});

};

$(document).on('ready',init);

$(window).on('load',function(){
	
	if(! /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		//menudesktop();
	}

	else{
		if(! /iPad/i.test(navigator.userAgent) ) {
			//menuFotter();
			//menumobile();
		}
		else{

		}
	}
})