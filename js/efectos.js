$(document).ready(function(){
    //Efecto menú
    $('.menu a').each(function(index, elemento){
        $(this).css({
            'top': '-200px'
        });

        $(this).animate({
            top: '0'
        }, 1500 + (index * 500));//El index sirve para darle un tiempo entre cada elemento(el index empieza en 0 y luego lo multiplica por 500, después el index sigue con el siguiente elemento que sería 1 y lo multiplica por 500 y así se va sucesivamente)
    });
    
    // Retraso para mostrar el fondo del menú con animación

    if($(window).width() < 800) {
        $('#menu').css({
            'background-color': 'rgba(10, 20, 29, 0)',
            'top': '-200px',
            'transition': 'background-color 3s ease'
        }).delay(1500 + ($('.menu a').length * 500)).queue(function() {
            $(this).css({
                'background-color': 'rgba(10, 20, 29, .3)',
                'top': '0'
            }).dequeue();
        });
    }


    //Efecto header
    if($(window).width() > 800 ){
        $('header .textos').css({
            opacity: 0,
            marginTop: 0
        });

        $('header .textos').animate({
            opacity: 1,
            marginTop: '-52px'
        }, 1500);
    }

    //Scroll elementos menú
    var acercaDe = $('#acercaDe').offset().top,
        menu = $('#tituloComida').offset().top,
        galeria = $('#galeria').offset().top,
        ubicacion = $('#ubicacion').offset().top;

    $('#btnAcercaDe').on('click', function(e){
        e.preventDefault();
        var acercaDeScroll;
        if ($(window).width() > 800) {
            acercaDeScroll = acercaDe - 140;
        } else if ($(window).width() <= 800 && $(window).width() > 500) {
            acercaDeScroll = acercaDe + 300;
        } else if ($(window).width() <= 500 && $(window).width() > 350) {
            acercaDeScroll = acercaDe + 260;
        } else if ($(window).width() <= 350) {
            acercaDeScroll = acercaDe + 200;
        }
        $('html, body').animate({
            scrollTop: acercaDeScroll
        }, 500);
    });

    $('#btnMenu').on('click', function(e){
        e.preventDefault();
        var menuScroll;
        if ($(window).width() > 800) {
            menuScroll = menu;
        } else if ($(window).width() <= 800 && $(window).width() > 500) {
            menuScroll = menu + 200;
        } else if ($(window).width() <= 500 && $(window).width() > 350) {
            menuScroll = menu + 320;
        } else if ($(window).width() <= 350) {
            menuScroll = menu + 500;
        }
        $('html, body').animate({
            scrollTop: menuScroll
        }, 500);
    });

    $('#btnGaleria').on('click', function(e){
        e.preventDefault();
        var galeriaScroll;
        if ($(window).width() > 800) {
            galeriaScroll = galeria - 70;
        } else if ($(window).width() <= 800 && $(window).width() > 500) {
            galeriaScroll = galeria;
        } else if ($(window).width() <= 500) {
            galeriaScroll = galeria;
        } else if ($(window).width() <= 350) {
            galeriaScroll = galeria;
        }
        $('html, body').animate({
            scrollTop: galeriaScroll
        }, 500);
    });

    $('#btnUbicacion').on('click', function(e){
        e.preventDefault();
        var ubicacionScroll;
        if ($(window).width() > 800) {
            ubicacionScroll = ubicacion;
        } else if ($(window).width() <= 800 && $(window).width() > 500) {
            ubicacionScroll = ubicacion;
        } else if ($(window).width() <= 500) {
            ubicacionScroll = ubicacion;
        } else if ($(window).width() <= 350) {
            ubicacionScroll = ubicacion;
        }
        $('html, body').animate({
            scrollTop: ubicacionScroll
        }, 500);
    });
    
    
});