//variables
var url = 'http://'+document.location.hostname+'/';
var core = null;
var clase1 = $('.menu-select').data('clase1');
var	clase2 = $('.menu-select2').data('clase2');
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
				filtroblogMobile();
				menuFotter();
				mobileMenuSelect();
				mobileMenuPropietarios();
				if($('section').hasClass('cover-modelo')){
					coverModeloMobile();
				}
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
				menuSelect();
				menuPropietarios();
				if($('section').hasClass('cover-modelo')){
					coverModeloDesctop();
				}
			}
		}
	}

	moverElementos = function(){
		$('.links-footer li > ul').css("display", "none");
		$('.header .menu-autos > div ul li > div, .configura-modelos div ul li > div').css("display", "none");
		$('.btnBuscador, .configura-modelos div ul li > a').removeClass('activo');
		if($('.header .menu.activo, .menu-propietarios .menufixed.activo').hasClass('activo')){
			$('body').addClass('hidden');
		}
		$('.version .container > span, .configuracion .btnregresar > span, .financiamiento .btnregresar > span').removeClass('link regresar');
		$('.version .container > span, .configuracion .btnregresar > span, .financiamiento .btnregresar > span').addClass('boton secundario');
	}

	resetElementos = function(){
		$('.links-footer li > ul').css("display", "block");
		$('.header .menu-autos > div ul li > div, .configura-modelos div ul li > div').css("display", "block");
		$('.descargas .mobile').css("display", "none");
		$('body').removeClass('hidden');
		$('.version .container > span, .configuracion .btnregresar > span, .financiamiento .btnregresar > span').removeClass('boton secundario');
		$('.version .container > span, .configuracion .btnregresar > span, .financiamiento .btnregresar > span').addClass('link regresar');
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
		$('.configura-modelos div ul li').removeClass('activo');
		$('.configura-modelos div ul li').eq(0).addClass('activo');
		$('.configura-modelos div ul li').on('click', function(){
			$('.configura-modelos div ul li').removeClass('activo');
			$(this).addClass('activo');
		});
		$('.configura-modelos .flex > div').on('mouseover',function() {
			$(this).addClass('hover');
			$('.configura-modelos .flex').addClass('hover');
		}).on('mouseout',function() {
			$(this).removeClass('hover');
			$('.configura-modelos .flex').removeClass('hover');
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
		$('.configura-modelos div ul li > a').on('click', function(){
			var activo = $(this).text();
			$('.modelo h6 b').empty();
			$('.modelo h6 b').append(activo);

			if(!$(this).hasClass('activo')){
				$('.configura-modelos div ul li > a').removeClass('activo')		
				$('.configura-modelos div ul li > a ~ div').slideUp();
			}
			$(this).toggleClass('activo');
			$('~ div', this).slideToggle();
		});
	}

	destructMenuMobile = function(){
		$('.hamburguesa, .desplegar > a, .regresar, .header .menu-autos div ul li a, .configura-modelos div ul li > a').off('click');
		$('.modelo h6 b').empty();
	}
	
	destructMenuDesctop = function(){
		$('.header .menu-autos div ul li, .configura-modelos div ul li').off('click');
		$('.desplegar').off('mouseover');
		$('.desplegar').off('mouseout');
		$('.configura-modelos .flex > div').off('mouseover');
		$('.configura-modelos .flex > div').off('mouseout');
		$('.btnBuscador > span').off('click');
		var activo = $('.configura-modelos div ul li.activo a').text();
		$('.modelo h6 b').append(activo);
	} 

	configuraCotiza = function(){
		$('.ubicacion .input-field > .boton').on('click', function(){
			if(!$('.ubicacion .input-field > .boton').hasClass('disabled')){
				$('.ubicacion').fadeOut( "slow", function() {
					$('.modelo').fadeIn();
				});
			}
		});
		$('.configura-modelos .flex > div').on('click', function(){
			var nombre = $(this).find('p').text();

			$('.version h3 b').empty();
			$('.version h3').append($('<b>'+nombre+'</b>'));

			if(!$(this).hasClass('activo')){
				$('.configura-modelos .flex').removeClass('activo');
				$('.configura-modelos .flex > div').removeClass('activo');
			}
			$(this).parent().toggleClass('activo');
			$(this).toggleClass('activo');
			$('.modelo').fadeOut( "slow", function() {
				$('.version').fadeIn();
			});
			$('.version .container > span').on('click', function(){
				$('.version').fadeOut( "slow", function() {
					$('.modelo').fadeIn();
				});
			});
		});
		$('.version .menu ul li').on('click', function(){
			var clase = $(this).data('clase');
			$('.version .menu ul li').removeClass();
			$(this).addClass('activo');
			$('.version .flex > div').removeClass('activo');
			$('.version .flex > div:not(.'+clase+')').addClass('activo');
		});
		$('.version .flex .ver').on('click', function(){
			$(this).parent().toggleClass('activo');
		});
		$('.version .flex .confi').on('click', function(){

			var nombre = $(this).parent().find('h6').html();
			var precio = $(this).parent().find('span b').text();

			$('.configuracion .head .precio b, .resumen .precio b, .cotizarModal .head .precio b, .financiamiento .head .precio b').empty();
			$('.configuracion .head .precio b, .resumen .precio b, .cotizarModal .head .precio b, .financiamiento .head .precio b').append(precio);

			$('.configuracion .head h4, .resumen .tabla .celda h4, .cotizarModal .head h4, .financiamiento .head h4').empty();
			$('.configuracion .head h4, .resumen .tabla .celda h4, .cotizarModal .head h4, .financiamiento .head h4').append(nombre);

			$('.version .flex .confi').removeClass('activo');
			$(this).addClass('activo');
			$('.version').fadeOut( "slow", function() {
				$('.configuracion').fadeIn();
			});
			$('.configuracion .btnregresar > span').on('click', function(){
				$('.configuracion').fadeOut( "slow", function() {
					$('.version').fadeIn();
				});
			});
		});

		$('.interior .tipos > div ').on('click',function(){
			var nombre = $(this).data( "options" ).nombre;
			var img = $(this).data( "options" ).imagen;

			$('.interior .tipos > div').removeClass('activo');
			$(this).addClass('activo');
			
			$('.interiores > span').empty();
			$('.interiores > span').append(nombre);

			$('.interior .img > img').attr("src", 'images/autos/interiores/corolla/tipo/'+img+'.jpg');
		});		

		$('.interaccion .menu ul li').on('click',function(){
			rellenar();
			var index = $(this).index();
			var on = index+1
			var nombre = $('.interaccion > div.activo').find('span:eq(0)').text();
			var numero = $('.interaccion .accesorios .seleccionar.activo').length;

			$('.interaccion .menu ul li.activo').addClass('listo');
			$('.configuracion .head .img').addClass('activo');
			
			if($('.interaccion .menu ul li').hasClass('activo')){
				$(this).removeClass('listo');
			}

			if($('.interaccion .menu ul li.acc').hasClass('listo')){
				$('.interaccion .menu ul li.acc a span').empty();
				$('.interaccion .menu ul li.acc a').append('<span> ('+numero+')</span>');
			}
			
			$('.interaccion .menu ul li:not(.acc, .res).activo a').empty();
			$('.interaccion .menu ul li:not(.acc, .res).activo a').append(nombre);
			$('.interaccion .menu ul li').removeClass('activo');
			$(this).addClass('activo');
			$('.interaccion > div:not(.menu)').removeClass('activo animacion');
			$('.interaccion > div:eq('+on+')').addClass('activo').delay(150).queue(function(){
			    $(this).addClass('animacion').dequeue();
			});
			if($('.interaccion .menu ul li.ext').hasClass('activo')){
				$('.configuracion .head .img').removeClass('activo');
			}
		});

		$('.interaccion .accesorios .seleccionar').on('click', function(){
			$(this).parent().parent().toggleClass('activo');
			$(this).toggleClass('activo');
		});

		$('.resumen .tabla .editar').on('click', function(){
			var clase = $(this).parents('.tabla').attr('class').split(' ')[1];
			
			if(clase == 'cambiar'){
				$('.configuracion .btnregresar .link').trigger('click');
			}
			$('.interaccion .menu .'+clase+'').trigger('click');
		});

		$('.resumen .servicios .mai, .financiamiento .servicios .mai').on('click', function(){
			$('.mailModal').fadeIn();
			$('body').addClass('hidden');
		});

		$('.mailModal .close').on('click', function(){
			$('.mailModal').fadeOut();
			$('body').removeClass('hidden');
		});

		$('.configuracion .head .boton, .resumen .cotizar .boton').on('click', function(){
			rellenar();
			$('.cotizarModal').fadeIn();
			$('body').addClass('hidden');
		});

		$('.cotizarModal .close').on('click', function(){
			$('.cotizarModal').fadeOut();
			$('body').removeClass('hidden');
		});

		$('.cotizarModal .head .link').on('click', function(){
			$(this).toggleClass('activo');
			$('.cotizarModal .cotiza .info').slideToggle();
		});

		$('.resumen .cambiar .link, .resumen .cotizar .link').on('click', function(){
			$('.configuracion').fadeOut( "slow", function() {
				$('.financiamiento').fadeIn();
			});
			$('.financiamiento .btnregresar .con').on('click', function(){
				$('.financiamiento').fadeOut( "slow", function() {
					$('.configuracion').fadeIn();
				});
			});
		});

		$('.financiamiento .cotiza .head .link').on('click', function(){
			$(this).toggleClass('activo');
			$('.financiamiento .cotiza .historia').slideToggle();
		});

		$('.financiamiento .plan .seleccionar').on('click', function(){
			$('.financiamiento .plan .seleccionar').removeClass('activo');
			$(this).addClass('activo');
			$('.financiamiento .financiar > div').removeClass('activo animacion');
			$('.financiamiento .financiar .elejir').addClass('activo').delay(150).queue(function(){
				$(this).addClass('animacion').dequeue();
		    });
		    $('.financiamiento .btnregresar .con').removeClass('activo');
		    $('.financiamiento .btnregresar .re').addClass('activo');
			$('.financiamiento .btnregresar .re').on('click', function(){
				$('.financiamiento .financiar > div').removeClass('activo animacion');
				$('.financiamiento .financiar .plan').addClass('activo').delay(150).queue(function(){
					$(this).addClass('animacion').dequeue();
			    });
			    $('.financiamiento .btnregresar .re').removeClass('activo');
		    	$('.financiamiento .btnregresar .con').addClass('activo');
			});
		});

		$('.financiamiento .financiar .pago ul li').on('click', function(){
			$('.financiamiento .financiar .pago ul li').removeClass('activo');
			$(this).addClass('activo');
		});

		$('.financiamiento .financiar .enganche ul li').on('click', function(){
			var numero = $(this).children('span').text();

			$('.financiamiento .financiar .enganche ul li').removeClass('activo');
			$(this).addClass('activo');
			$('.financiamiento .financiar .enganche .en b').empty();
			$('.financiamiento .financiar .enganche .en b').append(''+numero+' %');
		});

		$('.financiamiento .financiar .plazo dl dd').on('click', function(){
			var index = $(this).index();

			$('.financiamiento .financiar .plazo dl dd').removeClass('activo');
			$(this).addClass('activo');
			$('.financiamiento .financiar .elejido dl').removeClass('activo');
			$('.financiamiento .financiar .elejido dl:eq('+(index)+')').addClass('activo');
			$('.financiamiento .financiar .elejir span').removeClass('disabled');
			$('.financiamiento .financiar .elejir .boton').on('click', function(){
				$('.financiamiento .financiar > div').removeClass('activo animacion');
				$('.financiamiento .financiar .resultado').addClass('activo').delay(150).queue(function(){
					$(this).addClass('animacion').dequeue();
			    });
			});
		});

		$('.financiamiento .financiar .resultado .boton').on('click', function(){
			$('.financiamiento .financiar > div').removeClass('activo animacion');
			$('.financiamiento .financiar .elejir').addClass('activo').delay(150).queue(function(){
				$(this).addClass('animacion').dequeue();
		    });
		});

		var sliderAcc = $('.accesorioModal .slide');

		$('.interaccion .accesorios .link').on('click', function(){
			var index = $(this).parents('.flex > div').index();
			$('.accesorioModal').fadeIn();
			sliderAcc.bxSlider({
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
			$('body').addClass('hidden');
			$('.accesorioModal .bx-pager-item:eq('+(index)+') > a').trigger('click');
			$('.accesorioModal .slide .boton').on('click', function(){
				var index = $(this).parents('.slide > dl').index();
				$('.interaccion .accesorios .flex > div:eq('+(index)+') .seleccionar').trigger('click');
			});
		});

		$('.accesorioModal .close').on('click', function(){
			$('.accesorioModal').fadeOut();
			$('body').removeClass('hidden');
			sliderAcc.destroySlider();
		});

		//ThreeSixty
		reel360Gal = function(color){	
			
			$('.car').ThreeSixty({
		        totalFrames: 36,
		        endFrame: 36,
		        //currentFrame: 1,

		        imgList: '.threesixty_images',
		        progress: '.spinner',
		        //imagePath: url+'images/autos/modelos360/corolla/'+color+'/',
		        imagePath: 'images/autos/modelos360/corolla/'+color+'/',
		        filePrefix: '',
		        ext: '.jpg',
		        height: 406,
		        width: 1000,
				disableSpin: true,
		        navigation: false,
		        dragging: false,
		        responsive: true
			});
		}

		coloresCar = function(){
			var cars = ['grisMetalico','rojo','azul','negro','plata'];
			var cars_n = ['Gris Metálico','Rojo','Azul','Negro','Plata'];
			var i = 0;
			var total = (cars.length)-1;

			while(i<=total){
				$('.configuracion .colores360').append('<div class="'+cars[i]+'">')
				i++
			}

			$('.configuracion .colores360 > div:eq(0)').addClass('active');
			
			$('.configuracion .colores360 > div').on('click',function(){
				$('.configuracion .colores360 > div').removeClass('active');
				$(this).addClass('active');
				var colorActive = $('.configuracion .colores360 > div.active').index();
				$('.menu360 span').text(cars_n[colorActive]);
				$('.threesixty > img').attr("src", 'images/autos/modelos360/corolla/'+cars[colorActive]+'/1.jpg');
				reel360Gal(cars[colorActive]);
			});
		}
		rellenar = function(){
			var extColor = $('.exterior .colores360 > div.active').attr('class').split(' ')[0];
			var extNombre = $('.exterior .menu360 > span').text();

			var intImg = $('.interior .tipos > div.activo > img').attr('src');
			var intNombre = $('.interior .interiores > span').text();

			var activos = $('.accesorios .flex > div.activo .info');
			var arry = [];
			$.each(activos, function(k,v){
				arry.push($(v).find('p').text().split('$'));
			})
			var elemento = arry;
			var cuantos = elemento.length;
			var i = 0;

			$('.resumen .tabla.acc .fila:not(.titulo), .cotizarModal .tabla.acc .fila:not(.titulo), .financiamiento .tabla.acc .fila:not(.titulo)').remove();

			$('.resumen .tabla.ext .seleccion span:eq(1), .cotizarModal .tabla.ext .seleccion span:eq(1), .financiamiento .tabla.ext .seleccion span:eq(1)').empty();
			$('.resumen .tabla.ext .seleccion span:eq(1), .cotizarModal .tabla.ext .seleccion span:eq(1), .financiamiento .tabla.ext .seleccion span:eq(1)').append(extNombre);
			$('.resumen .tabla.ext .seleccion span.color, .cotizarModal .tabla.ext .seleccion span.color, .financiamiento .tabla.ext .seleccion span.color').removeClass(''+extColor+'')
			$('.resumen .tabla.ext .seleccion span.color, .cotizarModal .tabla.ext .seleccion span.color, .financiamiento .tabla.ext .seleccion span.color').addClass(''+extColor+'')

			$('.resumen .tabla.int .seleccion span:eq(1), .cotizarModal .tabla.int .seleccion span:eq(1), .financiamiento .tabla.int .seleccion span:eq(1)').empty();
			$('.resumen .tabla.int .seleccion span:eq(1), .cotizarModal .tabla.int .seleccion span:eq(1), .financiamiento .tabla.int .seleccion span:eq(1)').append(intNombre);
			$('.resumen .tabla.int .seleccion span.img img, .cotizarModal .tabla.int .seleccion span.img img, .financiamiento .tabla.int .seleccion span.img img').remove();
			$('.resumen .tabla.int .seleccion span.img, .cotizarModal .tabla.int .seleccion span.img, .financiamiento .tabla.int .seleccion span.img').append('<img src="'+intImg+'">');

			while(i<=cuantos){
				if(typeof elemento[i] !== 'undefined'){
					$('.resumen .tabla.acc').append('<div class="fila"><div class="celda"><div class="seleccion"><span>'+elemento[i][0]+'</span><span class="eliminar">ELIMINAR</span></div></div><div class="celda"><div><p><b>$'+elemento[i][1]+'</b></p></div></div></div>');
					$('.cotizarModal .tabla.acc').append('<div class="fila"><div class="celda"><div class="seleccion"><span>'+elemento[i][0]+'</span></div></div><div class="celda"><div><p><b>$'+elemento[i][1]+'</b></p></div></div></div>');
					$('.financiamiento .tabla.acc').append('<div class="fila"><div class="celda"><div class="seleccion"><span>'+elemento[i][0]+'</span></div></div><div class="celda"><div><p><b>$'+elemento[i][1]+'</b></p></div></div></div>');
				}
				i++
			}
			$('.resumen .tabla.acc .eliminar').on('click', function(){
				var carnal =  $(this).prev().text();
				$('.accesorios .flex > div.activo p:contains("'+carnal+'")').parent().parent().children('.seleccionar').trigger('click');
				
				var numero = $('.interaccion .accesorios .seleccionar.activo').length;
				$('.interaccion .menu ul li.acc a span').empty();
				$('.interaccion .menu ul li.acc a').append('<span> ('+numero+')</span>');

				$(this).parents('.fila').remove();
			});
		}
		$('.interaccion > div:eq(1)').addClass('activo animacion');
		$('.financiamiento .financiar .plan').addClass('activo animacion');
		reel360Gal('grisMetalico');
		coloresCar();
		rellenar();
	}


	hoverdir = function(){
		$('.promociones .flex dd').each( function() { $(this).hoverdir(); } );
		$('.otras-promociones .flex dd').each( function() { $(this).hoverdir(); } );
		$('.intsgram').each( function() { $(this).hoverdir(); } );
		$('.descargas .flex dd').each( function() { $(this).hoverdir(); } );
		$('.card-descarga').each( function() { $(this).hoverdir(); } );
		$('.prevandnext-notas .image').each( function() { $(this).hoverdir(); } );
	}

	menuPropietarios = function(){
		$('.menu-propietarios .datos > div').remove();
		$('.menu-propietarios .carro').off('click');
	}

	mobileMenuPropietarios = function(){
		
		var name = $('.menu-propietarios .hola').html();

		$('.menu-propietarios .datos').append($('<div class="close"></div>'+name+''));

		$('.menu-propietarios .carro').on('click', function(){
			$('.menufixed').addClass('activo');
			$('body').addClass('hidden');
		});
		$('.menu-propietarios .close').on('click', function(){
			$('.menufixed').removeClass('activo');
			$('body').removeClass('hidden');
		});
	}

	filtroblog = function(){

		$('.menu-blog .titulo > div').remove();
		$('.menu-blog .datos > div').remove();

		$('.filtro-autos').off('click');
		$('.filtro-autos').removeClass('activo');
		$('.filtro-autos').on('mouseover',function() {
			$(this).addClass('activo');
		}).on('mouseout',function() {
			$(this).removeClass('activo');
		});
	}

	filtroblogMobile = function(){

		var name = $('.cover-blog h1, .cover-nota h1').text();
		var activo = $('.menu-blog nav ul li.activo').text();

		$('.menu-blog .titulo').append($('<div><span>'+name+'</span></div>'));
		$('.menu-blog .titulo').append($('<div class="seccion"><span>'+activo+'</span></div>'));
		$('.menu-blog .datos').append($('<div class="close"></div><div class="titulo"><span>'+name+'</span></div>'));

		$('.menu-blog .seccion').on('click', function(){
			$('.menufixed').addClass('activo');
			$('body').addClass('hidden');
		});
		$('.menu-blog .close').on('click', function(){
			$('.menufixed').removeClass('activo');
			$('body').removeClass('hidden');
		});

		$('.filtro-autos').off('mouseover');
		$('.filtro-autos').off('mouseout');
		$('.filtro-autos').on('click', function(){
			$(this).toggleClass('activo');
		});
	}

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

	menufixed = function(){
		medidas();
		var clase = $('.menufixed').data('clase');
		var valor = $('.'+(clase)+'').offset().top;
		
		if (alturaScroll >= valor) {
			$('.menufixed').addClass('fixed');
		} else {
			$('.menufixed').removeClass('fixed');
		}
	}

	if($('main').hasClass('header-static')){
		$('header').addClass('static');
		$('html').css("overflow", "visible");
		$(window).on('scroll',menufixed);
	}
	else if($('section').hasClass('configura-cotiza')){
		configuraCotiza();
	}
	else{

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

	$('.cover .slide, .consejos-propietarios .slide').bxSlider({
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

	$('.nuestra-gente .slide').bxSlider({
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
		if(!$('.prueba .input-field > .boton').hasClass('disabled')){
			$('.pruebaModal').fadeIn();
			$('body').addClass('hidden');
		}
	});
	$('.pruebaModal .gracias > .boton').on('click', function(){
		$('.pruebaModal').fadeOut();
		$('body').removeClass('hidden');
		$('.codigo > button').trigger( "click" );
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
	
	menuSelect = function(){
		if($('.'+clase1+' .menu').length === 0){
			$('.'+clase1+' .menu select').material_select('destroy');

			$('<div class="menu"><ul>').insertBefore('.'+clase2+'');

			$.each($('.fill-'+clase2+' option'), function( index ) {
				var text = $('.fill-'+clase2+' option:eq('+index+')').text();
				var filter = $('.fill-'+clase2+' option:eq('+index+')').data('filter');
				$('.'+clase1+' .menu ul').append($("<li><a>"+text+"</a></li>"));
				$('.'+clase1+' .menu ul li:eq(0)').addClass('activo');
				$('.'+clase1+' .'+clase2+' > div').hide();
				$('.'+clase1+' .'+clase2+' > div:eq(0)').show();
			});

			$('.fill-'+clase2+'').remove();
		}

		$('.'+clase1+' .menu ul li').on('click', function(e){
			e.preventDefault();
			var index = $(this).index();
			$('.'+clase1+' .menu ul li').removeClass('activo');
			$(this).addClass('activo');
			$('.'+clase1+' .'+clase2+' > div').hide();
			$('.'+clase1+' .'+clase2+' > div:eq('+(index)+')').fadeIn('slow');
		});
	}

	mobileMenuSelect = function(){
		$('<select name="filtro" class="fill-'+clase2+'" />').insertBefore('.'+clase2+'');

		$.each($('.'+clase1+' .menu ul li'), function( index ) {
			var text = $('.'+clase1+' .menu ul li:eq('+index+')').text();
			var filter = $('.'+clase1+' .menu ul li:eq('+index+')').data('filter');
			$('.'+clase1+' .fill-'+clase2+'').append($("<option value="+index+" />").text(text));
		});

		$('.'+clase1+' .menu').remove();

		$('.fill-'+clase2+'').on('change',function() {
			var index = $(this).val();
			$('.'+clase1+' .menu ul li').removeClass('activo');
			$(this).addClass('activo');
			$('.'+clase1+' .'+clase2+' > div').hide();
			$('.'+clase1+' .'+clase2+' > div:eq('+(index)+')').fadeIn('slow');
		});

		$('.'+clase1+' select').material_select();
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
	});

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
	});

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
			$('.input-field .boton').addClass('disabled');
		}
	});
	$('.codigo > button').on('click', function(){
		$('.codigo > button').fadeOut();
		$('.codigo > dl').slideUp();
		$('.codigo > span').fadeIn();
		$('.codigo > dl dd').removeClass();
		$('.input-field .boton').addClass('disabled');
	});
	$('.codigo > dl dd').on('click', function(){
		$('.codigo > dl dd').removeClass('activo');
		$('.codigo ~ .input-field .boton').removeClass('disabled');
		$(this).addClass('activo');
		$('.codigo > dl dd:not(.activo)').addClass('none');
	});

	$('.resumen .distribuidor .ver span').on('click', function(){
		
		if(!$('.resumen .distribuidor > dl dd.none').hasClass('none')){
			$('.resumen .distribuidor > dl dd:not(.activo)').addClass('none');
			$('.resumen .distribuidor .ver').removeClass('activo');
		}
		else{
			$('.resumen .distribuidor > dl dd:not(.activo)').removeClass('none');
			$('.resumen .distribuidor .ver').addClass('activo');
		}
	});
	$('.resumen .distribuidor > dl dd').on('click', function(){
		$('.resumen .distribuidor > dl dd').removeClass('activo');
		$(this).addClass('activo');
		$('.resumen .distribuidor > dl dd:not(.activo)').addClass('none');
		$('.resumen .distribuidor .ver').removeClass('activo');
	});

	$('.cotizarModal .distribuidor .ver span').on('click', function(){
		
		if(!$('.cotizarModal .distribuidor > dl dd.none').hasClass('none')){
			$('.cotizarModal .distribuidor > dl dd:not(.activo)').addClass('none');
			$('.cotizarModal .distribuidor .ver').removeClass('activo');
		}
		else{
			$('.cotizarModal .distribuidor > dl dd:not(.activo)').removeClass('none');
			$('.cotizarModal .distribuidor .ver').addClass('activo');
		}
	});
	$('.cotizarModal .distribuidor > dl dd').on('click', function(){
		$('.cotizarModal .distribuidor > dl dd').removeClass('activo');
		$(this).addClass('activo');
		$('.cotizarModal .distribuidor > dl dd:not(.activo)').addClass('none');
		$('.cotizarModal .distribuidor .ver').removeClass('activo');
	});

	$('.financiamiento .distribuidor .ver span').on('click', function(){
		
		if(!$('.financiamiento .distribuidor > dl dd.none').hasClass('none')){
			$('.financiamiento .distribuidor > dl dd:not(.activo)').addClass('none');
			$('.financiamiento .distribuidor .ver').removeClass('activo');
		}
		else{
			$('.financiamiento .distribuidor > dl dd:not(.activo)').removeClass('none');
			$('.financiamiento .distribuidor .ver').addClass('activo');
		}
	});
	$('.financiamiento .distribuidor > dl dd').on('click', function(){
		$('.financiamiento .distribuidor > dl dd').removeClass('activo');
		$(this).addClass('activo');
		$('.financiamiento .distribuidor > dl dd:not(.activo)').addClass('none');
		$('.financiamiento .distribuidor .ver').removeClass('activo');
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
	});
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


	$('.vacantes select, .talento select, .flotillas select, .ideal select, .prueba select, .distribuidores select, .precios-servicio select, .refacciones-servicio select, .cotizarModal select, .financiamiento .elejir select').material_select();
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