var cargado = 1;
var activado = false;

$(document).ready(function(){
	startParticles();

	$(window).scroll(function () {
		if ($(window).scrollTop() + $(window).height() + 10 >= $(document).height() && activado == true) {
			cargarNoticias();
		}
	});
	

//Activar-desactivar scroll
$(".toggle").click(function(){
	if (activado == false) {
		$("#desactivado").hide();
		$("#activado").show();
		activado = true;
		$("#boton").hide();
	} else {
		$("#activado").hide();
		$("#desactivado").show();
		activado = false;
		$("#boton").show();
	}
});


	//Cambiar imagen modal
	$("body").on("click", ".imagenes", function(){
		var id = $(this).attr('id');
		$("#imagenModal").attr("src","img/"+id+"Big.png");

	});
});

//Metodos
function cargarNoticias() {
	if (cargado < 3) {
		$("#gif").show();
		$.getJSON("https://rawgit.com/JuanAntonioBieto/Pagina-de-noticias/master/json/" + cargado + ".json", function (jsonObject) {
			añadirNoticias(jsonObject);
			$("#gif").hide();
		}); 
		cargado++;
		if (cargado > 2){
			$('#boton').text('No hay más noticias');
			$("#boton").show();
		}
	}	
};


function añadirNoticias(json) {
	$.each(json, function (i, item) {
		$("#contenedor5").append(
			'<div class="container-fluid noticias">' +
			'<div class="row" >' +
			'<div class="col-sm-4">' + 
			'<img data-toggle="modal" data-target="#myModal" class="img-responsive imagenes" id="imagen'  + (((cargado - 2)*3 + i + 1)+ 4) + '"src="' + item.imgbig +'"alt="imagen">' +
			'</div>' +
			'<div class="col-sm-8">' +
			'<h2 class="titulos">' + item.title + '</h2>' +
			'<p class="textos text-justify">' + item.description + '</p>' +
			'<p class="fechas">' + item.datetime + '</p>' +
			'</div>' +
			'</div>' +
			'</div>');

	})
};			

function startParticles() {
    particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 160,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ef3c32"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "../img/particle.png",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 5,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": false,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "bottom-left",
                    "random": false,
                    "straight": true,
                    "out_mode": "out",
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": false,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": false,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true,
            "config_demo": {
                "hide_card": false,
                "background_color": "#b61924",
                "background_image": "",
                "background_position": "50% 50%",
                "background_repeat": "no-repeat",
                "background_size": "cover"
            }
        
    });
}