$(document).ready(function(){
	//Efecto en menú
	var nav = $(".navbar-fixed-top");

	//Recargar menu
	var distancia = $(".navbar-fixed-top").offset();

	if (distancia.top > 0) {
		nav.removeClass('normal').addClass('efecto');
	}

	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		if (scroll >= 300) {
			nav.removeClass('normal').addClass('efecto');
		}
		else{
			nav.removeClass('efecto').addClass('normal');
		}
	});
	//Imagen en modal
	$("section#pantallas a").on("click", function(){
		$("#modal img").attr("src", $(this).attr("data-image-url"));
	});

	//WayPoint (animacion elementos)
	$("section#app .anima1").waypoint(function(){		
		$('section#app .anima1').addClass('animated fadeInUp');
	},{
		offset: '60%'
	});
	$("section#app .anima2").waypoint(function(){		
		$('section#app .anima2').addClass('animated fadeInUp');
	},{
		offset: '60%'
	});
	$("section#app .anima3").waypoint(function(){		
		$('section#app .anima3').addClass('animated fadeInUp');
	},{
		offset: '60%'
	});
	$('section#caracteristicas #animaimg').waypoint(function () {
		$('section#caracteristicas #animaimg').addClass('animated fadeInDownBig');
	},{
		offset: '60%'
	});
	$('section#caracteristicas .anima1').waypoint(function () {
		$('section#caracteristicas .anima1').addClass('animated fadeInLeft');
	},{
		offset: '60%'
	});
	$('section#caracteristicas .anima2').waypoint(function () {
		$('section#caracteristicas .anima2').addClass('animated fadeInRight');
	},{
		offset: '60%'
	});
	$('section#pantallas .anima1').waypoint(function () {
		$('section#pantallas .anima1').addClass('animated fadeInRight');
	},{
		offset: '60%'
	});
	$('section#pantallas .anima2').waypoint(function () {
		$('section#pantallas .anima2').addClass('animated fadeInRight');
	},{
		offset: '60%'
	});
	$('section#pantallas .anima3').waypoint(function () {
		$('section#pantallas .anima3').addClass('animated fadeInRight');
	},{
		offset: '60%'
	});
	$('section#descargar .anima1').waypoint(function () {
		$('section#descargar .anima1').addClass('animated fadeInRight');
	},{
		offset: '60%'
	});
	$('section#descargar .anima2').waypoint(function () {
		$('section#descargar .anima2').addClass('animated fadeInRight');
	},{
		offset: '60%'
	});
	$('section#descargar .anima3').waypoint(function () {
		$('section#descargar .anima3').addClass('animated fadeInRight');
	},{
		offset: '60%'
	});

	/*Validacion formulario*/
	$('#soporteForm').bootstrapValidator({
		message: "Esto no es valido",
		feedbackIcons:{
			valid: 'glyphicon glyphicon-ok',
			invalid: 'glyphicon glyphicon-remove',
			validating: 'glyphicon glyphicon-refresh'
		},
		fields:{
			nombre:{
				validators:{
					notEmpty:{
						message: "Este es un campo obligatorio"
					},
				}
			},
			email:{
				validators:{
					notEmpty:{
						message:"Este es un campo obligatorio"
					},
					emailAddress:{
						message: "Eso no parece un correo electronico"
					}
				}
			},
			mensaje:{
				validators:{
					notEmpty:{
						message: "El mensaje no puede ir vacio"
					},
				}
			}
		}
	}).on('success.form.bv', function(e){
		e.preventDefault();
		var $form = $(e.target);
		var bv = $form.data('bootstrapValidator');

		$post($form.attr("action"), $form.serialize(),function(result){
			$('#correcto').fadeIn();
			console.log(result);
		}, 'json');
	})
});

//Smooth Scroll
smoothScroll.init({
    selector: '[data-scroll]', // Selector for links (must be a valid CSS selector)
    selectorHeader: '[data-scroll-header]', // Selector for fixed headers (must be a valid CSS selector)
    speed: 1000, // Velocidad del efecto
    easing: 'easeOutQuart', // Animación
    updateURL: false, // Actualizacion URl
    offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
    callback: function ( toggle, anchor ) {} // Function to run after scrolling
});