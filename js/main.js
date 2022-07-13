new Swiper('.swiper', {
  slidesPerView: 4,
  spaceBetween: 30,
  slideClass: "swiper-slide",
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
new Swiper('.publications-swiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  slideClass: "swiper-slide",
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
// let mySwiper;
// mySwiper = new Swiper(slider, {
//     // Optional parameters
//    slidesPerView:4,
//     loop: true,
//     slideClass: "swiper-slide",
//     spaceBetween: 30,
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },

//     // And if we need scrollbar

//   });