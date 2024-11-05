import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Swiper from 'swiper/bundle';

const swiperDevice = new Swiper(".mySwiper_device", {
    grabCursor: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next_device",
        prevEl: ".swiper-button-prev_device",
    },
    pagination: {
        el: ".swiper-pagination_device",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: "1",
            centeredSlides: true,
            spaceBetween: 0,
           
        },
        768: {
            slidesPerView: 3, // 3 cartes visibles en format desktop
            spaceBetween: 30,
        },
    },
});
