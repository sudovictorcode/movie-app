let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let close = document.querySelector('#close-icon')


window.addEventListener('scroll',() =>{
    header.classList.toggle('shadow', window.scrollY > 0);
});

menu.addEventListener('click', () =>{

    navbar.classList.toggle('active')
});
window.onscroll = () =>{

    navbar.classList.remove('active')
}


var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});


// swiper   
var swiper = new Swiper(".coming-container", {  
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 55000,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidePerview: 2,
        },
        568: {
            slidePerview: 3,
        },
        768: {
            slidePerview: 4,
        },
        968: {
            slidePerview: 5,
        },

    },
});