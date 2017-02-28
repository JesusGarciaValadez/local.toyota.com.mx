//variables
var url = 'http://'+document.location.hostname+'/';
var core = null;
var clase1 = $('.menu-select').data('clase1');
var	clase2 = $('.menu-select2').data('clase2');
var cookies = localStorage.getItem("cookiesAcuerdo");
var activoModelo = localStorage.getItem("activoModelo");
var activoPadre = localStorage.getItem("activoPadre");
if($(window).width() <= 767){
	core = true
}else{
	core = false
}

init = function(){

	anclasArray = [];

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
				destructMenuDesctop();
				menumobile();
				filtroblogMobile();
				panoramico();
				dragMobile();
				menuFotter();
				mobileMenuSelect();
				mobileMenuPropietarios();
				mobileMenuConoceToyota();
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
				destructMenuMobile();
				menudesktop();
				filtroblog();
				panoramico();
				drag();
				menuFotterStop();
				menuSelect();
				menuPropietarios();
				menuConoceToyota();
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
		$('.version .container > a, .configuracion .btnregresar > a, .financiamiento .btnregresar > a, .financiamiento .btnregresar .re').removeClass('link regresar');
		$('.version .container > a, .configuracion .btnregresar > a, .financiamiento .btnregresar > a, .financiamiento .btnregresar .re').addClass('boton secundario');
	}

	resetElementos = function(){
		$('.links-footer li > ul').css("display", "block");
		$('.header .menu-autos > div ul li > div, .configura-modelos div ul li > div').css("display", "block");
		$('.descargas .mobile').css("display", "none");
		$('body').removeClass('hidden');
		$('.version .container > a, .configuracion .btnregresar > a, .financiamiento .btnregresar > a, .financiamiento .btnregresar .re').removeClass('boton secundario');
		$('.version .container > a, .configuracion .btnregresar > a, .financiamiento .btnregresar > a, .financiamiento .btnregresar .re').addClass('link regresar');
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

		if(activoPadre === '' || activoPadre === undefined || activoPadre === null ){
			$('.configura-modelos li').removeClass('activo');
			$('.configura-modelos li').eq(0).addClass('activo');
		}else{
			$('.configura-modelos li').removeClass('activo');
			$('.configura-modelos li:eq('+(activoPadre)+')').addClass('activo');
			$('.configura-modelos li:eq('+(activoPadre)+') .flex > div:eq('+(activoModelo)+')').parent().toggleClass('activo');
			$('.configura-modelos li:eq('+(activoPadre)+') .flex > div:eq('+(activoModelo)+')').addClass('activo');
		}
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
		if(activoPadre === '' || activoPadre === undefined || activoPadre === null ){
			$('.configura-modelos li').removeClass('activo');
			$('.configura-modelos li').eq(0).addClass('activo');
		}else{
			$('.configura-modelos li > a').removeClass('activo');
			$('.configura-modelos li:eq('+(activoPadre)+') > a').addClass('activo');
			$('.configura-modelos li:eq('+(activoPadre)+') > div').slideDown();
			$('.configura-modelos li:eq('+(activoPadre)+') .flex > div:eq('+(activoModelo)+')').parent().toggleClass('activo');
			$('.configura-modelos li:eq('+(activoPadre)+') .flex > div:eq('+(activoModelo)+')').addClass('activo');
		}
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
		var activo = $('.configura-modelos div ul li.activo > a').text();
		$('.modelo h6 b').append(activo);
	} 

	configuraCotiza = function(){
		$('.configura-modelos .flex > div').on('click', function(){
			var nombre = $(this).find('p').text();
			var activoPadre = $(this).parents('li').index();
			var activo = $(this).index();
			localStorage.setItem("nombreModelo", nombre);
			localStorage.setItem("activoModelo", activo);
			localStorage.setItem("activoPadre", activoPadre);
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
			var activo = $(this).parents('.all').index();
			localStorage.setItem("nombreVersion", nombre);
			localStorage.setItem("precioVersion", precio);
			localStorage.setItem("activoVersion", activo);
		});

		$('.interior .tipos > div ').on('click',function(){
			var nombre = $(this).data( "options" ).nombre;
			var img = $(this).data( "options" ).imagen;
			var activo = $(this).index();
			localStorage.setItem("interiorNombre", nombre);
			localStorage.setItem("interiorImg", img);
			localStorage.setItem("activo", activo)

			$('.interior .tipos > div').removeClass('activo');
			$(this).addClass('activo');
			
			$('.interiores > span').empty();
			$('.interiores > span').append(nombre);

			$('.interior .img > img').attr("src", '../images/autos/interiores/corolla/tipo/'+img+'.jpg');
		});		

		$('.interaccion .accesorios .seleccionar').on('click', function(){
			$(this).parent().parent().toggleClass('activo');

			var activos = $('.accesorios .flex > div.activo .info');
			var arry = [];
			
			$.each(activos, function(k,v){
				arry.push($(v).find('p').text().split('$'));
			})
			
			$(this).toggleClass('activo');

			var activos = $('.interaccion .accesorios .seleccionar.activo').length;

			localStorage.setItem("accesorios", JSON.stringify(arry));
			$('.interaccion .menu ul li.acc a span').empty();
			$('.interaccion .menu ul li.acc a').append('<span> ('+arry.length+')</span>');
		});

		$('.resumen .servicios .mai, .financiamiento .servicios .mai').on('click', function(){
			$('.mailModal').fadeIn();
			$('body').addClass('hidden');
		});

		$('.mailModal .close, .mailModal .gracias .boton').on('click', function(){
			$('.mailModal').fadeOut();
			$('#mail')[0].reset();
			$('#mail label').removeClass('active');
			$('.mailModal .gracias').hide();
			$('.mailModal .mail').show();
			$('body').removeClass('hidden');
		});

		$('.configuracion .head .boton, .resumen .cotizar .boton').on('click', function(){
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
		        imagePath: '../images/autos/modelos360/corolla/'+color+'/',
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
			
			$('.configuracion .colores360 > div').on('click',function(){
				$('.configuracion .colores360 > div').removeClass('active');
				$(this).addClass('active');
				var colorActive = $('.configuracion .colores360 > div.active').index();
				$('.menu360 span').text(cars_n[colorActive]);
				$('.threesixty > img').attr("src", '../images/autos/modelos360/corolla/'+cars[colorActive]+'/1.jpg');
				reel360Gal(cars[colorActive]);

				localStorage.setItem("exteriorColor", cars[colorActive]);
				localStorage.setItem("exteriorNombre", cars_n[colorActive]);
			});
		}
		rellenar = function(){
			var nombreModelo = localStorage.getItem("nombreModelo");
			var nombreVersion = localStorage.getItem("nombreVersion");
			var precioVersion = localStorage.getItem("precioVersion");
			var activoVersion = localStorage.getItem("activoVersion");
			var exteriorColor = localStorage.getItem("exteriorColor");
			var exteriorNombre = localStorage.getItem("exteriorNombre");
			var interiorNombre = localStorage.getItem("interiorNombre");
			var interiorImg = localStorage.getItem("interiorImg");
			var accesorios = localStorage.getItem("accesorios");

			$('.interaccion .menu ul li.acc a span').empty();

			try{
				$('.interaccion .menu ul li.acc a').append('<span> ('+JSON.parse(accesorios).length+')</span>');
			}catch(e){

			}

			$('.version h3 b').empty();
			$('.version h3').append($('<b>'+nombreModelo+'</b>'));

			$('.version .flex .confi').removeClass('activo');
			$('.version .flex > div:eq('+(activoVersion)+') .confi').addClass('activo');

			if(exteriorColor === '' || exteriorColor === undefined || exteriorColor === null ){
				var exteriorColor = 'grisMetalico';
				var exteriorNombre = 'Gris Metálico';
			}
			if(interiorImg === '' || interiorImg === undefined || interiorImg === null ){
				var interiorNombre = 'Piel Negro';
				var interiorImg = 'pielNegro';
			}
			if($('.configura-cotiza .interaccion > div').hasClass('exterior')){
				if(exteriorColor === '' || exteriorColor === undefined || exteriorColor === null ){
					reel360Gal(cars[0]);
					$('.configuracion .colores360 > div:eq(0)').addClass('active');
				}else{
					$('.threesixty > img').attr("src", '../images/autos/modelos360/corolla/'+exteriorColor+'/1.jpg');
					reel360Gal(exteriorColor);
					$('.menu360 span').text(exteriorNombre);
					$('.configuracion .colores360 div.'+exteriorColor+'').addClass('active');
				}
			}else{
				$('.configuracion .head .img').addClass('activo');
			}

			if($('.configura-cotiza .interaccion > div').hasClass('interior')){
				var elemento = localStorage.getItem("activo")

				$('.interaccion .menu ul li.ext').addClass('listo')
				$('.interaccion .menu ul li.ext a').empty();
				$('.interaccion .menu ul li.ext a').append(exteriorNombre);

				$('.interior .tipos > div:eq('+elemento+')').trigger('click');
			}
			if($('.configura-cotiza .interaccion > div').hasClass('accesorios')){
				$('.interaccion .menu ul li.ext').addClass('listo')
				$('.interaccion .menu ul li.ext a').empty();
				$('.interaccion .menu ul li.ext a').append(exteriorNombre);
				$('.interaccion .menu ul li.int').addClass('listo')
				$('.interaccion .menu ul li.int a').empty();
				$('.interaccion .menu ul li.int a').append(interiorNombre);

			    try {
					var access = JSON.parse(localStorage.getItem("accesorios"));
					var index = "";
					for(var o = 0; o < $('.accesorios .flex > div').children().length; o++){
						for(var i = 0; i < access.length; i++) {
						   if(access[i][0] === $('.accesorios .flex > div:eq('+o+') .info p:eq(0)').html()) {
						     $('.accesorios .flex > div:eq('+o+')').addClass('activo');
						     $('.accesorios .flex > div:eq('+o+') .seleccionar').addClass('activo');
						   }
						}	
					}
			    } catch (e) {
			       
			    }
			}
			if($('.configura-cotiza .interaccion > div').hasClass('resumen')){
				$('.interaccion .menu ul li.ext').addClass('listo')
				$('.interaccion .menu ul li.ext a').empty();
				$('.interaccion .menu ul li.ext a').append(exteriorNombre);
				$('.interaccion .menu ul li.int').addClass('listo')
				$('.interaccion .menu ul li.int a').empty();
				$('.interaccion .menu ul li.int a').append(interiorNombre);
				$('.interaccion .menu ul li.acc').addClass('listo')
			}

			$('.configuracion .head .precio b, .resumen .precio b, .cotizarModal .head .precio b, .financiamiento .head .precio b').empty();
			$('.configuracion .head .precio b, .resumen .precio b, .cotizarModal .head .precio b, .financiamiento .head .precio b').append(precioVersion);

			$('.configuracion .head h4, .resumen .tabla .celda h4, .cotizarModal .head h4, .financiamiento .head h4').empty();
			$('.configuracion .head h4, .resumen .tabla .celda h4, .cotizarModal .head h4, .financiamiento .head h4').append(nombreVersion);

		    try {
		        var elemento = JSON.parse(accesorios);
				var cuantos = elemento.length;
		    } catch (e) {
		       
		    }

			var i = 0;

			$('.resumen .tabla.ext .seleccion span:eq(1), .cotizarModal .tabla.ext .seleccion span:eq(1), .financiamiento .tabla.ext .seleccion span:eq(1)').empty();
			$('.resumen .tabla.ext .seleccion span:eq(1), .cotizarModal .tabla.ext .seleccion span:eq(1), .financiamiento .tabla.ext .seleccion span:eq(1)').append(exteriorNombre);
			$('.resumen .tabla.ext .seleccion span.color, .cotizarModal .tabla.ext .seleccion span.color, .financiamiento .tabla.ext .seleccion span.color').removeClass(''+exteriorColor+'')
			$('.resumen .tabla.ext .seleccion span.color, .cotizarModal .tabla.ext .seleccion span.color, .financiamiento .tabla.ext .seleccion span.color').addClass(''+exteriorColor+'')

			$('.resumen .tabla.int .seleccion span:eq(1), .cotizarModal .tabla.int .seleccion span:eq(1), .financiamiento .tabla.int .seleccion span:eq(1)').empty();
			$('.resumen .tabla.int .seleccion span:eq(1), .cotizarModal .tabla.int .seleccion span:eq(1), .financiamiento .tabla.int .seleccion span:eq(1)').append(interiorNombre);
			$('.resumen .tabla.int .seleccion span.img img, .cotizarModal .tabla.int .seleccion span.img img, .financiamiento .tabla.int .seleccion span.img img').remove();
			$('.resumen .tabla.int .seleccion span.img, .cotizarModal .tabla.int .seleccion span.img, .financiamiento .tabla.int .seleccion span.img').append('<img src="../images/autos/interiores/corolla/tipo/thumbs/'+interiorImg+'.jpg">');

			while(i<=cuantos){
				if(typeof elemento[i] !== 'undefined'){
					$('.resumen .tabla.acc').append('<div class="fila"><div class="celda"><div class="seleccion"><span>'+elemento[i][0]+'</span><span class="eliminar">ELIMINAR</span></div></div><div class="celda"><div><p><b>$'+elemento[i][1]+'</b></p></div></div></div>');

					$('.cotizarModal .tabla.acc').append('<div class="fila"><div class="celda"><div class="seleccion"><span>'+elemento[i][0]+'</span></div></div><div class="celda"><div><p><b>$'+elemento[i][1]+'</b></p></div></div></div>');

					$('.financiamiento .tabla.acc').append('<div class="fila"><div class="celda"><div class="seleccion"><span>'+elemento[i][0]+'</span></div></div><div class="celda"><div><p><b>$'+elemento[i][1]+'</b></p></div></div></div>');
				}
				i++
			}

			$('.resumen .tabla.acc .eliminar').on('click', function(){

				var access = JSON.parse(localStorage.getItem("accesorios"));
				var index = "";

				for(var i = 0; i < access.length; i++) {
				   if(access[i][0] === $(this).prev().html()) {
				     index = i;
				     console.log(i);
				   }
				}

				access.splice(index,1);
				localStorage.setItem("accesorios",JSON.stringify(access));

				$(this).parents('.fila').remove();
				$('.interaccion .menu ul li.acc a span').empty();
				$('.interaccion .menu ul li.acc a').append('<span> ('+access.length+')</span>');
			});
		}
		$('.financiamiento .financiar .plan').addClass('activo animacion');
		if($('.configura-cotiza .interaccion > div').hasClass('exterior')){
			coloresCar();
		}
		rellenar();
	}

	//Panoramico
	panoramico = function(){

		$('.panoramico .container .contenido .boton').on('click', function(){
			
			$('.interiorModal').fadeIn();
			$('body').addClass('hidden');

			pano=new pano2vrPlayer("contenedorView");
			pano.readConfigUrlAsync("../images/modelos/corolla/pano.xml");

			$('.interiorModal .boton').delay(2800).fadeOut(1600);

		});

		$('.interiorModal .close').on('click', function(){
			$('.interiorModal').fadeOut();
			$('body').removeClass('hidden');
			$('.interiorModal .boton').delay(600).fadeIn(400);
		});

	}

	//Drag
	drag = function(){
		var icon = $('.como-funciona .content-drag .icon'),
			steps = 10,
			dd = new Dragdealer('carro-drag',{
				snap: true,
				horizontal: true,
				steps: steps,
				speed: 0.3,
				loose: false,
				animationCallback: function(x, y) {
					var percent = parseInt(steps * (x*100), 10);
					icon.css({'background-position-x': (6000 * x * 9/10 + 600) + 'px'});
				}
			}).setStep(1);
	}

	//Drag
	dragMobile = function(){
		var icon = $('.como-funciona .content-drag .icon'),
			steps = 10,
			dd = new Dragdealer('carro-drag',{
				snap: true,
				horizontal: true,
				steps: steps,
				speed: 0.3,
				loose: false,
				animationCallback: function(x, y) {
					var percent = parseInt(steps * (x*100), 10);
					icon.css({'background-position-x': (3000 * x * 9/10 + 300) + 'px'});
				}
			}).setStep(1);
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

	menuConoceToyota  = function(){
		$('.menu-conoce-toyota .titulo > div').remove();
		$('.menu-conoce-toyota .datos > div').remove();
	}

	mobileMenuConoceToyota = function(){

		var name = $('.cover-somos-toyota h1').text();
		var activo = $('.menu-conoce-toyota nav ul li.activo').text();

		$('.menu-conoce-toyota .titulo').append($('<div class="seccion"><span>'+activo+'</span></div>'));
		$('.menu-conoce-toyota .datos').append($('<div class="close"></div><div class="titulo"><span>'+name+'</span></div>'));

		$('.menu-conoce-toyota .seccion').on('click', function(){
			$('.menufixed').addClass('activo');
			$('body').addClass('hidden');
		});
		$('.menu-conoce-toyota .close').on('click', function(){
			$('.menufixed').removeClass('activo');
			$('body').removeClass('hidden');
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
		//coverslider.destroySlider();
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
		//$(window).on('scroll',menufixed);

		$(document).on('scroll', function() {
			var altura, anclas, posScroll;
			posScroll = $(window).scrollTop();
			altura = 60;
			anclas = $('.anclas').length;
			menuSupProducto();
			menufixed();
		});

	}
	else if($('section').hasClass('configura-cotiza')){
		configuraCotiza();
	}
	else{

	}

	$('.cookies').on('click',function(){
		var acuerdo = 'acuerdo';
		localStorage.setItem("cookiesAcuerdo", acuerdo);
	});

	if(cookies === '' || cookies === undefined || cookies === null ){
		$('.cookies').css("display", "block");
	}else{

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

	$('.cover .slide, .consejos-propietarios .slide, .autos-concepto .slide').bxSlider({
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

	$('.de-nosotros .slide').bxSlider({
		mode:'horizontal',
		infiniteLoop: false,
		responsive: true,
		hideControlOnEnd: true,
		touchEnabled: true,
		preventDefaultSwipeX: false,
		preventDefaultSwipeY: false,
		oneToOneTouch: false,
		prevSelector: '#prev',
		nextSelector: '#next',
		slideWidth: 393,
		minSlides: 3,
		maxSlides: 3
	});

	$('.reconocimientos .slide').bxSlider({
		mode:'horizontal',
		infiniteLoop: false,
		responsive: true,
		hideControlOnEnd: true,
		touchEnabled: true,
		preventDefaultSwipeX: false,
		preventDefaultSwipeY: false,
		oneToOneTouch: false,
		prevSelector: '#prevR',
		nextSelector: '#nextR',
		slideWidth: 393,
		minSlides: 3,
		maxSlides: 3
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

	$('.reto-medioambiental .slide').bxSlider({
		mode:'fade',
		controls: false,
		infiniteLoop: false,
		responsive: true,
		hideControlOnEnd: true,
		touchEnabled: true,
		preventDefaultSwipeX: false,
		preventDefaultSwipeY: false,
		oneToOneTouch: false
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

	
	// $('.prueba .input-field > .boton').on('click', function(){
	// 	if(!$('.prueba .input-field > .boton').hasClass('disabled')){
	// 		$('.pruebaModal').fadeIn();
	// 		$('body').addClass('hidden');
	// 	}
	// });
	$('.pruebaModal .gracias > .boton').on('click', function(){
		$('.pruebaModal').fadeOut();
		$('body').removeClass('hidden');
		$('#agenda')[0].reset();
		$('#agenda label').removeClass('active');
		//$('.codigo > button').trigger( "click" );
	});

	deacargasModal = function(){
		$('.descargas .enviar, .card-descarga .enviar').on('click', function(){
			$('#descargas')[0].reset();
			$('#descargas label').removeClass('active');
			$('.descargasModal').fadeIn();
			$('body').addClass('hidden');
		});

		$('.descargasModal .close').on('click', function(){
			$('.descargasModal').fadeOut();
			$('body').removeClass('hidden');
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

	countAnclas = function(){
		var anclas, menuSup;
		menuSup = $('.menuSup').length;
		anclas = $('.anclas').length;

		if (menuSup !== 0){
			return $('.anclas').each(function(index){
				return anclasArray.push($('a.anclas:eq(' + index + ')').attr('name'));
			});
		}
	};

	menuSupProducto = function(){
		var anclas, menuSup, posScroll;
		posScroll = $(window).scrollTop();
		menuSup = $('.menuSup').length;
		anclas = $('.anclas').length;

		if (menuSup !== 0){
			return $('.anclas').each(function(index){
				var next, prev;
				prev = index - 1;

				if (prev === -1){
					prev = 0;
				}
				
				next = index + 1;

				if ($('a.anclas[name="' + anclasArray[index] + '"]').offset().top < posScroll + 1){
					$('.menuSup a[href="#' + anclasArray[index] + '"]').parent().addClass('activo');
					$('.menuSup a[href="#' + anclasArray[index] + '"]').parent().prevAll().removeClass('activo');
					return $('.menuSup a[href="#' + anclasArray[index] + '"]').parent().nextAll().removeClass('activo');
				} else if ($('a.anclas[name="' + anclasArray[0] + '"]').offset().top > posScroll){
					return $('.menuSup a[href*="#"]').parent().removeClass('activo');
				}
			});
		}
	};

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
			$('.buscar .pregunta').fadeOut();
			$('.buscar .pregunta >').removeClass('activo');
			$('.buscar .pregunta .informacion').addClass('activo');
		}
	});
	$('.buscar form > button').on('click', function(){
		$('.buscar form > button').fadeOut();
		$('.buscar form > ul').fadeOut();
		$('.buscar form > span').fadeIn();
	});
	$('.buscar form > ul li').on('click', function(){
		$('.buscar form > button').fadeOut();
		$('.buscar form > ul').fadeOut();
		$('.buscar form > span').fadeIn();
		$('.buscar .pregunta').fadeIn();
		$('.buscar .pregunta >').removeClass('activo');
		$('.buscar .pregunta .informacion').addClass('activo');
	});
	$('.buscar .informacion .boton').on('click', function(){
		var si = $('.informacion input[type="radio"]#si:checked').length
		var no = $('.informacion input[type="radio"]#no:checked').length
		if(si >= 1){
			$('.buscar .pregunta >').removeClass('activo');
			$('.buscar .pregunta .gracias').addClass('activo');
		}
		if(no >= 1){
			$('.buscar .pregunta >').removeClass('activo');
			$('.buscar .pregunta .losentimos').addClass('activo');
		}
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
			$('.buscador .lista').slideDown();
		}
		else{
			$('.buscador form > button').fadeOut();
			$('.buscador .lista').slideUp();
			$('.buscador form > span').fadeIn();
			$('.buscador .lista li').removeClass();
		}
	});
	$('.buscador form > button').on('click', function(){
		$('.buscador form > button').fadeOut();
		$('.buscador .lista').slideUp();
		$('.buscador form > span').fadeIn();
		$('.buscador .lista li').removeClass();
	});
	$('.buscador .lista li').on('click', function(){
		$('.buscador .lista li').removeClass('activo');
		$(this).addClass('activo');
	});
	$('.buscador .lista .tabla .link').on('click', function(){
		$('.buscador .datos').addClass('activo');
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

	$.validator.setDefaults({
	    errorClass: 'invalid',
	    validClass: "valid",
	});

	$("#comentario").validate({
	    errorPlacement: function (error, element) {
	        $(element)
	            .closest("form")
	            .find("label[for='" + element.attr("id") + "']")
	            .attr('data-error', error.text());
	    },
	    submitHandler: function (form) {
			$('.comentario .gracias').fadeIn();
	    }
	});

	$("#mail").validate({
	    errorPlacement: function (error, element) {
	        $(element)
	            .closest("form")
	            .find("label[for='" + element.attr("id") + "']")
	            .attr('data-error', error.text());
	    },
	    submitHandler: function (form) {
			$('.mailModal .mail').fadeOut();
			$('.mailModal .gracias').fadeIn();
	    }
	});
	
	$('.comentario .gracias .boton').on('click', function(){
		$('#comentario')[0].reset();
		$('#comentario label').removeClass('active');
		$('#comentario textarea').css('height', 'auto');
		$('.comentario .gracias').fadeOut();
	});

	$("#descargas").validate({
	    rules: {
            email: {
				required: true,
				email: true
            }
	    },
	    messages: {
            email: "Ingresa un correo válido"
        },
	    errorPlacement: function (error, element) {
	        $(element)
	            .closest("form")
	            .find("label[for='" + element.attr("id") + "']")
	            .attr('data-error', error.text());
	    },
	    submitHandler: function (form) {
			$('.mail').fadeOut();
			$('.gracias').fadeIn();
	    }
	});

	$("#agenda").validate({
	    rules: {
            tel: {
				required: true,
				number: true
            }
	    },
	    errorPlacement: function (error, element) {
	        $(element)
	            .closest("form")
	            .find("label[for='" + element.attr("id") + "']")
	            .attr('data-error', error.text());
	    },
	    submitHandler: function (form) {
			$('.pruebaModal').fadeIn();
			$('body').addClass('hidden');
	    }
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
		countAnclas();
		menuSupProducto();
	}

	$(window).resize(function(){
		setSize();
	});

	inicio();

	//genera movimiento sutil del scroll	
	// $('.scroll').on('click', function(e) {  		
	// 	event.preventDefault();
	// 	var $link = $(this);  
	// 	var anchor  = $link.attr('href'); 
	// 	var general =  $(anchor).offset().top
	// 	//general = general - 100;
	// 	$('html, body').stop().animate({scrollTop: general}, 1000);
	// });
	$('a.scroll').on('click', function(){
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
		&& location.hostname == this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');

			if ($target.length) {
				var targetOffset = $target.offset().top;
				$('html,body').animate({scrollTop: targetOffset}, 1000);
				return false;
			}
		}
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