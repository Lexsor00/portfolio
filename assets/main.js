// Script para mis servicios

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = entry.target.getAttribute('data-delay');
            setTimeout(() => {
                entry.target.classList.remove('hidden');
                entry.target.classList.add('fade-in');
                setTimeout(() => {
                    entry.target.classList.add('show');
                }, 50);
            }, delay * 200); 
        } else {
            entry.target.classList.remove('fade-in', 'show');
            entry.target.classList.add('hidden');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.item--animado').forEach(el => {
    observer.observe(el);
});

// Script para Carrusel de proyects

let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');

nextButton.onclick = function(){
    showSlider('next');
}
prevButton.onclick = function(){
    showSlider('prev');
}
let unAcceppClick;
const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.carousel .list .item');
    if(type === 'next'){
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    }else{
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
    }
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(()=>{
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 900)
}

// Variables para el primer menú
var enlace = document.querySelector('.des__link');
var cerrarMenu = document.getElementById('cerrar-menu');
var menu = document.getElementById('menu');

// Variables para el segundo menú
var enlaceMenu2 = document.querySelector('.abrir-menu2');
var cerrarMenu2 = document.getElementById('cerrar-menu2');
var menu2 = document.getElementById('menu2');

// Abre o cierra el primer menú al hacer clic en el enlace
enlace.addEventListener('click', function(event) {
    event.preventDefault();
    menu.classList.add('menu-visible');
});

// Cierra el primer menú al hacer clic en el botón de cerrar
cerrarMenu.addEventListener('click', function() {
    menu.classList.remove('menu-visible'); 
});

// Abre o cierra el segundo menú al hacer clic en el enlace
enlaceMenu2.addEventListener('click', function(event) {
    event.preventDefault();
    menu2.classList.add('menu-visible');
});

// Cierra el segundo menú al hacer clic en el botón de cerrar
cerrarMenu2.addEventListener('click', function() {
    menu2.classList.remove('menu-visible'); 
});