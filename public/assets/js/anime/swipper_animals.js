// import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Swiper from 'swiper/bundle';

const swiper = new Swiper(".mySwiper", {
 
  effect: "coverflow",
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // Paramètres pour les écrans inférieurs à 768px (mobiles et tablettes en mode portrait)
    0: {
      slidesPerView: "auto",
      centeredSlides: true,
      initialSlide: 4,
      spaceBetween: 0,
      coverflowEffect: {
        rotate: 100,        // Angle de rotation des slides
        stretch: 0,         // Distance entre les slides
        depth: 0,         // Profondeur pour un effet doux
        modifier: 1.2,      // Ajustement de la perspective
        slideShadows: false // Pas d'ombres pour alléger sur mobile
      },
    },

    //Paramètres pour les écrans supérieurs à 768px (desktop et tablettes)
    768: {
      centeredSlides: true,
      slidesPerView: 3,
      initialSlide: 5,
      spaceBetween: 0,
      coverflowEffect: {
        rotate: 0,
        stretch: 20,
        depth: 100,
        modifier: 4,
        slideShadows: true // Avec ombres pour un effet plus profond
      },
    },
  },
});
