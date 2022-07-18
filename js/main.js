let aboutSlider = document.querySelector('.about-swiper');


new Swiper(aboutSlider, {
  slidesPerView: 4,
  spaceBetween: 30,
  slideClass: "swiper-slide",
  loop: true,
  navigation: {
    nextEl: '.about-next',
    prevEl: '.about-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    }
  }
})


const slider = document.querySelector('.publications-swiper')
const partnerSlider = document.querySelector('.partner-swiper')


let mySwiper = new Swiper(slider, {
  slidesPerView: 3,
  spaceBetween: 30,
  slideClass: "publications__item",
  loop: true,
  navigation: {
    nextEl: '.publications-next',
    prevEl: '.publications-prev',
  },
})

let partnerSwiper = new Swiper(partnerSlider, {
  slidesPerView: 6,

  spaceBetween: 30,
  slideClass: "partner__slide",
  loop: true,
  navigation: {
    nextEl: '.partner-next',
    prevEl: '.partner-prev',
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