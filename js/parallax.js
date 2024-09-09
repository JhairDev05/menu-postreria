$(document).ready(function(){

    $(window).scroll(function(){

        var windowWidth = $(window).width();

        if(windowWidth > 800) {//Este valor debe coincidir con mi nedia querie
            var scroll = $(window).scrollTop();//Aquí calculamos el tamaño del scroll

            $('header .textos').css({
                'transform': 'translate(0px,' + scroll / 2 + '%)'
            });

            $('.acercaDe article').css({
                'transform': 'translate(0px, -' + scroll / 4 + '%)'
            });
        }
    });

    $(window).resize(function(){
        var windowWidth = $(window).width();
        if(windowWidth < 800) {
            $('.acercaDe article').css({
                'transform': 'translate(0px, 0px)'
            });
        }
    })
});