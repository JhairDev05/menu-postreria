const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnDerecha = document.querySelector("#btnDerecha");
const btnIzquierda = document.querySelector("#btnIzquierda");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function moverDerecha() {
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 1s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 1000);
}

function moverIzquierda() {
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0%";
    slider.style.transition = "all 1s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 1000);
}

btnDerecha.addEventListener('click', function(){
    moverDerecha();
});

btnIzquierda.addEventListener('click', function(){
    moverIzquierda();
});

setInterval(function(){
    moverDerecha();
}, 5000);