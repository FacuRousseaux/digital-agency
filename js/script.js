/* Mobile Menu */

const body = document.querySelector('.body');
const toggle = document.querySelector('.nav__toggle');
const navBar = document.querySelector('.nav__bar');

toggle.addEventListener("click", function() {
    if(body.classList.contains('overflow')) {
        body.classList.remove('overflow');
        navBar.classList.remove('mobile__active');
    } else {
        body.classList.add('overflow');
        navBar.classList.add('mobile__active');
        navBar.addEventListener('click', () => {
            body.classList.remove('overflow');
            navBar.classList.remove('mobile__active');
        })
    }

});


/* SWIPER SLIDER */

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    breakpoints: {
        768 : {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 3,
        },
        576: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 30,
        },
        428: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 30,
        }
    },
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});