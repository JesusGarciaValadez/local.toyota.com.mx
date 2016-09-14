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
		$('.links-footer dl > div').css("display", "none");
		$('.menu-autos > div ul li > div').css("display", "none");
		$('.btnBuscador').removeClass('activo');
	}

	resetElementos = function(){
		$('.links-footer dl > div').css("display", "block");
		$('.menu-autos > div ul li > div').css("display", "block");
	}

	menudesktop = function(){
		$('.menu-autos div ul li').eq(0).addClass('activo');
		$('.menu-autos div ul li').on('click', function(){
			$('.menu-autos div ul li').removeClass('activo');
			$(this).addClass('activo');
		});
		$('.desplegar').on('mouseover',function() {
			$(this).addClass('hover');
		}).on('mouseout',function() {
			$(this).removeClass('hover');
		});
		$('.menu-autos .flex > div').on('mouseover',function() {
			$(this).addClass('hover');
			$('.menu-autos .flex').addClass('hover');
		}).on('mouseout',function() {
			$(this).removeClass('hover');
			$('.menu-autos .flex').removeClass('hover');
		});
		$('.btnBuscador > span').on('click', function(){
			$('.btnBuscador').toggleClass('activo');
		});
	}

	menumobile = function(){
		$('.hamburguesa').on('click', function(){
			$('.header > .menu').toggleClass('activo');
			$('body').toggleClass('hidden');
		});
		$('.desplegar > a').on('click', function(){
			$('.header .menu-autos').addClass('activo');
			$('.header > .menu > .flex').addClass('hidden');
		});
		$('.regresar').on('click', function(){
			$('.header .menu-autos').removeClass('activo');
			$('.header > .menu > .flex').removeClass('hidden');
		});
		$('.menu-autos div ul li > a').on('click', function(){
			if(!$(this).hasClass('activo')){
				$('.menu-autos div ul li > a').removeClass('activo')		
				$('.menu-autos div ul li > a ~ div').slideUp();
			}
			$(this).toggleClass('activo');
			$('~ div', this).slideToggle();
		});
		$('.menu-autos .flex > div').on('mouseover',function() {
			$(this).addClass('hover');
			$('.menu-autos .flex').addClass('hover');
		}).on('mouseout',function() {
			$(this).removeClass('hover');
			$('.menu-autos .flex').removeClass('hover');
		});
	}
	destructMenuMobile = function(){
		$('.hamburguesa, .desplegar > a, .regresar, .menu-autos div ul li a').off('click');
	}
	
	destructMenuDesctop = function(){
		$('.menu-autos div ul li').off('click');
		$('.desplegar').off('mouseover');
		$('.desplegar').off('mouseout');
		// $('.menu-autos .flex > div').off('mouseover');
		// $('.menu-autos .flex > div').off('mouseout');
		$('.btnBuscador > span').off('click');
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
		$('.links-footer dl > dt').on('click', function(){
			if(!$(this).parent().hasClass('activo')){
				$('.links-footer dl').removeClass('activo')		
				$('.links-footer dl > dt ~ div').slideUp();
			}
			$(this).parent().toggleClass('activo');
			$('~ div', this).slideToggle();
		});
	}

	menuFotterStop = function(){
		$('.links-footer dl > dt').off('click')
	}

	modelotarjeta = function(){
		$('.modelos-participantes .legales').on('click', function(){
			$('~ .detalle', this).fadeIn();
		})
		$('.modelos-participantes .detalle .cerrar').on('click', function(){
			$(this).parent().fadeOut();
		})
	}

	inicio = function(){
		setSize();
		modelotarjeta();
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