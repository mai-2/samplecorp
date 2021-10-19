"use strict";

var swiper = new Swiper('.swiper-container', {
  // Optional parameters
  slidesPerView: 'auto',
  spaceBetween: 20,
  breakpoints: {
    768: {
      spaceBetween: 40
    }
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});