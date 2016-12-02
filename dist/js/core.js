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

	coordenadas = function() {
		filtroFixed = $("#menuFiltro").offset().top;
		console.log(filtroFixed);
	};

	setSize = function(){
		medidas();
		if(anchura <= 767){
			if(core=== true){
				core = false
				moverElementos();
				menumobile();
				destructMenuDesctop();
				filtroblogMobile();
				menuFotter();
				mobileMenuDescargables();
				mobileMenuServicios();
				mobileMenuPreguntas();
				//coverModeloMobile();
			}
		}
		else if(anchura >= 768){
			if(core=== false){
				core = true
				resetElementos();
				hoverdir();
				menudesktop();
				destructMenuMobile();
				filtroblog();
				menuFotterStop();
				menuDescargables();
				menuServicios();
				menuPreguntas();
				//coverModeloDesctop();
			}
		}
	}

	decideScroll = function(){
		medidas();
		coordenadas();

		// Home
		if ($(this).scrollTop() > 610) {
			$('.filtro-blog').addClass('fixed');
		} else {

			$('.filtro-blog').removeClass('fixed');
		}
	}

	moverElementos = function(){
		$('.links-footer li > ul').css("display", "none");
		$('.header .menu-autos > div ul li > div').css("display", "none");
		$('.btnBuscador').removeClass('activo');
	}

	resetElementos = function(){
		$('.links-footer li > ul').css("display", "block");
		$('.header .menu-autos > div ul li > div').css("display", "block");
		$('.descargas .mobile').css("display", "none");
	}

	menudesktop = function(){
		$('.header .menu-autos div ul li').eq(0).addClass('activo');
		$('.header .menu-autos div ul li').on('click', function(){
			$('.header .menu-autos div ul li').removeClass('activo');
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

	filtroblog = function(){
		$('.filtro-autos').on('mouseover',function() {
			$(this).addClass('hover');
			$('.lista-autos').addClass('activo');
		}).on('mouseout',function() {
			$(this).removeClass('hover');
			$('.lista-autos').removeClass('activo');	
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
		$('.header .menu-autos div ul li > a').on('click', function(){
			if(!$(this).hasClass('activo')){
				$('.header .menu-autos div ul li > a').removeClass('activo')		
				$('.header .menu-autos div ul li > a ~ div').slideUp();
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

	filtroblogMobile = function(){
		$('.menuFiltro').on('click', function(){
			$('.filtro-blog').toggleClass('activo');
			$('body').toggleClass('hidden');
		});
		$('.close').on('click', function(){
			$('.filtro-blog').removeClass('activo');
			$('body').removeClass('hidden');
		});
		$('.filtro-autos').on('click',function() {
			$(this).toggleClass('hover');
			$('.lista-autos').toggleClass('activo');
		});
	}

	destructMenuMobile = function(){
		$('.hamburguesa, .desplegar > a, .regresar, .header .menu-autos div ul li a').off('click');
	}
	
	destructMenuDesctop = function(){
		$('.header .menu-autos div ul li').off('click');
		$('.desplegar').off('mouseover');
		$('.desplegar').off('mouseout');
		// $('.menu-autos .flex > div').off('mouseover');
		// $('.menu-autos .flex > div').off('mouseout');
		$('.btnBuscador > span').off('click');
	} 
	hoverdir = function(){
		$('.promociones .flex dd').each( function() { $(this).hoverdir(); } );
		$('.otras-promociones .flex dd').each( function() { $(this).hoverdir(); } );
		$('.intsgram').each( function() { $(this).hoverdir(); } );
		$('.descargas .flex dd').each( function() { $(this).hoverdir(); } );
		$('.card-descarga').each( function() { $(this).hoverdir(); } );
		$('.prevandnext-notas .image').each( function() { $(this).hoverdir(); } );
	}

	$('.cover .slide').bxSlider({
		mode:'horizontal',
		infiniteLoop: false,
		responsive: true,
		hideControlOnEnd: true,
		touchEnabled: true,
		preventDefaultSwipeX: false,
		preventDefaultSwipeY: false,
		oneToOneTouch: false,
		prevSelector: '#prev',
		nextSelector: '#next'
	});

	coverModeloDesctop = function(){
		coverslider = $('.cover-modelo .slide').bxSlider({
			mode:'horizontal',
			infiniteLoop: false,
			responsive: true,
			hideControlOnEnd: true,
			touchEnabled: true,
			preventDefaultSwipeX: false,
			preventDefaultSwipeY: false,
			oneToOneTouch: false,
			prevSelector: '#prev',
			nextSelector: '#next'
		});
	}
	coverModeloMobile = function(){
		coverslider.destroySlider();
	}

	if($('main').hasClass('header-static')){
		$('header').addClass('static');
		$('main').addClass('rest-top')
		decideScroll();
		$(window).on('scroll',decideScroll);
	}
	else if($('section').hasClass('cover-modelo')){
		setSize = function(){
			medidas();
			if(anchura <= 767){
				if(core=== true){
					core = false
					coverModeloMobile();
				}
			}
			else if(anchura >= 768){
				if(core=== false){
					core = true
					coverModeloDesctop();
				}
			}
		}
	}
	else{
		$('header').removeClass('static');
		$('main').removeClass('rest-top')
	}

	$('.menu-categorias .container nav span > a').on('click', function(){
		var index = $(this).index();
		$('.menuModal').fadeIn();
		$('body').addClass('hidden');
		$('.menuModal .bx-pager-item:eq('+(index)+') > a').trigger('click');
	});

	var menuSecundario = $('.menu-autos').clone()

	$('.menuModal').html(menuSecundario);
	$('.menuModal').prepend('<div class="close"></div>');

	$('.menuModal .menu-autos > div ul').bxSlider({
		mode:'horizontal',
		infiniteLoop: false,
		responsive: true,
		hideControlOnEnd: true,
		touchEnabled: true,
		preventDefaultSwipeX: false,
		preventDefaultSwipeY: false,
		oneToOneTouch: false
	});

	$('.nuestra-gente .slide > div').bxSlider({
		mode:'horizontal',
		infiniteLoop: false,
		responsive: true,
		hideControlOnEnd: true,
		touchEnabled: true,
		preventDefaultSwipeX: false,
		preventDefaultSwipeY: false,
		oneToOneTouch: false,
		controls: false
	});
	
	$('.menuModal .close').on('click', function(){
		$('.menuModal').fadeOut();
		$('body').removeClass('hidden');
	});

	$('.vacante .boton').on('click', function(){
		$('.postulateModal').fadeIn();
		$('body').addClass('hidden');
	});

	$('.postulateModal .close').on('click', function(){
		$('.postulateModal').fadeOut();
		$('body').removeClass('hidden');
	});

	$('.error-page .close, .error-page .boton.secundario').on('click', function(){
		$('.error-page').fadeOut();
		$('body').removeClass('hidden');
	});

	$('.prueba .input-field > .boton').on('click', function(){
		$('.pruebaModal').fadeIn();
		$('body').addClass('hidden');
	});
	$('.pruebaModal .gracias > .boton').on('click', function(){
		$('.pruebaModal').fadeOut();
		$('body').removeClass('hidden');
	});

	deacargasModal = function(){
		$('.descargas .enviar, .card-descarga .enviar').on('click', function(){
			$('.descargasModal').fadeIn();
			$('body').addClass('hidden');
		});

		$('.descargasModal .close').on('click', function(){
			$('.descargasModal').fadeOut();
			$('body').removeClass('hidden');
		});

		$('.descargasModal .mail .boton').on('click', function(){
			$('.mail').fadeOut();
			$('.gracias').fadeIn();
		});

		$('.descargasModal .gracias .boton').on('click', function(){
			$('.descargasModal').fadeOut();
			$('body').removeClass('hidden');
			$('.gracias').fadeOut();
			$('.mail').fadeIn();
		});
	}

	//fancybox
	$('.fancybox-media').fancybox({
		width		: '90%',
		height		: '90%',
		openEffect  : 'none',
		closeEffect : 'none',
		helpers : {
			media : {}
		}
	});

	menuFotter = function(){
		$('.links-footer li > p').on('click', function(){
			if(!$(this).parent().hasClass('activo')){
				$('.links-footer li').removeClass('activo')		
				$('.links-footer li > p ~ ul').slideUp();
			}
			$(this).parent().toggleClass('activo');
			$('~ ul', this).slideToggle();
		});
	}

	menuFotterStop = function(){
		$('.links-footer li > p').off('click')
	}

	modelotarjeta = function(){
		$('.modelos-participantes .legales, .promociones-propietarios .legales').on('click', function(){
			$('~ .detalle', this).fadeIn();
		})
		$('.modelos-participantes .detalle .cerrar, .promociones-propietarios .detalle .cerrar').on('click', function(){
			$(this).parent().fadeOut();
		})

		var promociones = $('.promociones-propietarios .container .flex > div').length
			if (promociones % 2 == 1){

			}
			else{
				$('.proximos-eventos').addClass('activo')
			}
	}

	menuDescargables = function(){
		if($('.descargables .menu').length === 0){
			$('.descargables select').material_select('destroy');

			$('<div class="menu"><ul>').insertBefore('.descargas');

			$.each($('#filtro option'), function( index ) {
				var text = $('#filtro option:eq('+index+')').text();
				var filter = $('#filtro option:eq('+index+')').data('filter');
				$('.descargables .menu ul').append($("<li><a>"+text+"</a></li>"));
				$('.descargables .menu ul li:eq(0)').addClass('activo');
				$('.descargas > div').hide();
				$('.descargas > div:eq(0)').show();
			});

			$('#filtro').remove();
		}

		$('.descargables .menu ul li').on('click', function(e){
			e.preventDefault();
			var index = $(this).index();
			$('.descargables .menu ul li').removeClass('activo');
			$(this).addClass('activo');
			$('.descargas > div').hide();
			$('.descargas > div:eq('+(index)+')').fadeIn('slow');
		});
	}

	mobileMenuDescargables = function(){

		$('<select name="filtro" id="filtro" class="fill-descargas" />').insertBefore('.descargas');

		$.each($('.descargables .menu ul li'), function( index ) {
			var text = $('.descargables .menu ul li:eq('+index+')').text();
			var filter = $('.descargables .menu ul li:eq('+index+')').data('filter');
			$('.descargables #filtro').append($("<option value="+index+" />").text(text));
		});

		$('.descargables .menu').remove();

		$('.fill-descargas').on('change',function() {
			var index = $(this).val();
			$('.descargables .menu ul li').removeClass('activo');
			$(this).addClass('activo');
			$('.descargas > div').hide();
			$('.descargas > div:eq('+(index)+')').fadeIn('slow');
		});

		$('.descargables select').material_select();
	}

	menuServicios = function(){
		if($('.precios-servicio .menu').length === 0){
			$('.precios-servicio select').material_select('destroy');

			$('<div class="menu"><ul>').insertBefore('.servicios');

			$.each($('#filtro option'), function( index ) {
				var text = $('#filtro option:eq('+index+')').text();
				var filter = $('#filtro option:eq('+index+')').data('filter');
				$('.precios-servicio .menu ul').append($("<li><a>"+text+"</a></li>"));
				$('.precios-servicio .menu ul li:eq(0)').addClass('activo');
				$('.servicios > div').hide();
				$('.servicios > div:eq(0)').show();
			});

			$('#filtro').remove();
		}

		$('.precios-servicio .menu ul li').on('click', function(e){
			e.preventDefault();
			var index = $(this).index();
			$('.precios-servicio .menu ul li').removeClass('activo');
			$(this).addClass('activo');
			$('.servicios > div').hide();
			$('.servicios > div:eq('+(index)+')').fadeIn('slow');
		});
	}

	mobileMenuServicios = function(){

		$('<select name="filtro" id="filtro" class="fill-servicios" />').insertBefore('.servicios');

		$.each($('.precios-servicio .menu ul li'), function( index ) {
			var text = $('.precios-servicio .menu ul li:eq('+index+')').text();
			var filter = $('.precios-servicio .menu ul li:eq('+index+')').data('filter');
			$('.precios-servicio #filtro').append($("<option value="+index+" />").text(text));
		});

		$('.precios-servicio .menu').remove();

		$('.fill-servicios').on('change',function() {
			var index = $(this).val();
			$('.precios-servicio .menu ul li').removeClass('activo');
			$(this).addClass('activo');
			$('.servicios > div').hide();
			$('.servicios > div:eq('+(index)+')').fadeIn('slow');
		});

		$('.precios-servicio select').material_select();
	}

	menuPreguntas = function(){
		if($('.consulta-categoria .menu').length === 0){
			$('.consulta-categoria select').material_select('destroy');

			$('<div class="menu"><ul>').insertBefore('.preguntas');

			$.each($('#filtro option'), function( index ) {
				var text = $('#filtro option:eq('+index+')').text();
				var filter = $('#filtro option:eq('+index+')').data('filter');
				$('.consulta-categoria .menu ul').append($("<li><a>"+text+"</a></li>"));
				$('.consulta-categoria .menu ul li:eq(0)').addClass('activo');
				$('.consulta-categoria .preguntas > div').hide();
				$('.consulta-categoria .preguntas > div:eq(0)').show();
			});

			$('#filtro').remove();
		}

		$('.consulta-categoria .menu ul li').on('click', function(e){
			e.preventDefault();
			var index = $(this).index();
			$('.consulta-categoria .menu ul li').removeClass('activo');
			$(this).addClass('activo');
			$('.consulta-categoria .preguntas > div').hide();
			$('.consulta-categoria .preguntas > div:eq('+(index)+')').fadeIn('slow');
		});
	}

	mobileMenuPreguntas = function(){

		$('<select name="filtro" id="filtro" class="fill-preguntas" />').insertBefore('.preguntas');

		$.each($('.consulta-categoria .menu ul li'), function( index ) {
			var text = $('.consulta-categoria .menu ul li:eq('+index+')').text();
			var filter = $('.consulta-categoria .menu ul li:eq('+index+')').data('filter');
			$('.consulta-categoria #filtro').append($("<option value="+index+" />").text(text));
		});

		$('.consulta-categoria .menu').remove();

		$('.fill-preguntas').on('change',function() {
			var index = $(this).val();
			$('.consulta-categoria .menu ul li').removeClass('activo');
			$(this).addClass('activo');
			$('.consulta-categoria .preguntas > div').hide();
			$('.consulta-categoria .preguntas > div:eq('+(index)+')').fadeIn('slow');
		});

		$('.consulta-categoria select').material_select();
	}

	$('.resultados input[type=text]').on('keyup', function(){
		var cuantos = $(this).val().length
		if(cuantos >= 1){
			$('.resultados form > span').fadeOut();
			$('.resultados form > button').fadeIn();
		}
		else{
			$('.resultados form > button').fadeOut();
			$('.resultados form > span').fadeIn();
		}
	});
	$('.resultados form > button').on('click', function(){
		$('.resultados form > button').fadeOut();
		$('.resultados form > span').fadeIn();
	})

	$('.buscar input[type=text]').on('keyup', function(){
		var cuantos = $(this).val().length
		if(cuantos >= 1){
			$('.buscar form > span').fadeOut();
			$('.buscar form > button').fadeIn();
			$('.buscar form > ul').fadeIn();
		}
		else{
			$('.buscar form > button').fadeOut();
			$('.buscar form > ul').fadeOut();
			$('.buscar form > span').fadeIn();

		}
	});
	$('.buscar form > button').on('click', function(){
		$('.buscar form > button').fadeOut();
		$('.buscar form > ul').fadeOut();
		$('.buscar form > span').fadeIn();
	})

	$('.codigo input[type=text]').on('keyup', function(){
		var cuantos = $(this).val().length
		if(cuantos >= 1){
			$('.codigo > span').fadeOut();
			$('.codigo > button').fadeIn();
			$('.codigo > dl').slideDown();
		}
		else{
			$('.codigo > button').fadeOut();
			$('.codigo > dl').slideUp();
			$('.codigo > span').fadeIn();
			$('.codigo > dl dd').removeClass();
		}
	});
	$('.codigo > button').on('click', function(){
		$('.codigo > button').fadeOut();
		$('.codigo > dl').slideUp();
		$('.codigo > span').fadeIn();
		$('.codigo > dl dd').removeClass();
	});
	$('.codigo > dl dd').on('click', function(){
		$('.codigo > dl dd').removeClass('activo');
		$(this).addClass('activo');
		$('.codigo > dl dd:not(.activo)').addClass('none');
	});

	$('.buscador input[type=text]').on('keyup', function(){
		var cuantos = $(this).val().length
		if(cuantos >= 1){
			$('.buscador form > span').fadeOut();
			$('.buscador form > button').fadeIn();
			$('.buscador > dl').slideDown();
		}
		else{
			$('.buscador form > button').fadeOut();
			$('.buscador > dl').slideUp();
			$('.buscador form > span').fadeIn();
			$('.buscador > dl dd').removeClass();
		}
	});
	$('.buscador form > button').on('click', function(){
		$('.buscador form > button').fadeOut();
		$('.buscador > dl').slideUp();
		$('.buscador form > span').fadeIn();
		$('.buscador > dl dd').removeClass();
	})
	$('.buscador > dl dd').on('click', function(){
		$('.buscador > dl dd').removeClass('activo');
		$(this).addClass('activo');
	});
	$('.buscador > dl .tabla .link').on('click', function(){
		$(this).parent().parent().parent().parent().children('.datos').addClass('activo');
		$('.buscador .datos .link').on('click', function(){
			$('.buscador .datos').removeClass('activo');
		});
	});

	$('.botones .boton').on('click', function(){
		var clase = $(this).data('clase');
		$('.botones .tabla').fadeOut( "slow", function() {
			$('.botones .bienvenido').fadeIn();
			$('.conten .'+(clase)+'').fadeIn( "fast", function() {
				$('.conten').addClass('activo');
			});
		});
	});
	$('.conten .link, .registrate .boton, .listo .boton, .restablecer .boton, .enviado .boton').on('click', function(){
		var clase = $(this).data('clase');
		$('.conten > div').fadeOut("fast");
		$('.conten .'+(clase)+'').fadeIn("slow");
	});

	$('.preguntas li > b, .preguntas li > i').on('click', function(){
		if(!$(this).parent().hasClass('activo')){
			$('.preguntas li').removeClass('activo')		
			$('.preguntas li > b ~ div').slideUp();
		}
		$(this).parent().toggleClass('activo');
		$('~ div', this).slideToggle();
	});

	$('.cookies .boton').on('click', function(){
		$('.cookies').removeClass('fadeInUp');
		$('.cookies').addClass('fadeOutDown');
	});


	$('.vacantes select, .talento select, .flotillas select, .ideal select, .prueba select, .distribuidores select, .precios-servicio select, .refacciones-servicio select').material_select();
	$('.datepicker').pickadate({
		selectMonths: true, // Creates a dropdown to control month
		selectYears: 15 // Creates a dropdown of 15 years to control year
	});

	var options = [ 
		{selector: '.experiencia', offset: 500, callback: function(){
			$('.colum').addClass("animacion");
		}}
	]; 
	Materialize.scrollFire(options);

	$('.ideal select').on('change',function() {
		var index = $(this).val();
		$('.modelo > div').hide();
		$('.modelo > div:eq('+(index)+')').fadeIn('slow');
	});

	// $('.nuestras-promociones .validate').on('change', function(){
 //        if(!$(this).hasClass('valid')){
	// 		//$('.nuestras-promociones .boton').removeClass('disabled');
	// 		console.log('valid');
	// 	}
	// 	else if(!$(this).hasClass('invalid')){
	// 		//$('.nuestras-promociones .boton').addClass('disabled');
	// 		console.log('invalid');
	// 	}
	// 	else if(!$(this).hasClass('validate')){
	// 		//$('.nuestras-promociones .boton').removeClass('disabled');
	// 		console.log('remover');
	// 	}
	// });

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

	}

	else{
		if(! /iPad/i.test(navigator.userAgent) ) {
			$('.descargas .mobile').css("display", "table");
			$('.card-descarga .mobile').css("display", "table");
			deacargasModal();
		}
		else{

		}
	}
})