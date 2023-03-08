var mySwiper = new Swiper("#swiper2", {
  slidesPerView: "auto",
  spaceBetween: 400,
  speed: 1000,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 4000,
    waitForTransition: true,
    disableOnInteraction: false,
  },
  flipEffect: {
    rotate: 30,
    slideShadows: false,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' +
        className +
        '">' +
        '<svg class="fp-arc-loader" width="16" height="16" viewBox="0 0 16 16">' +
        '<circle class="path" cx="8" cy="8" r="5.5" fill="none" transform="rotate(-90 8 8)" stroke="#9541ba"' +
        'stroke-opacity="1" stroke-width="1.5px"></circle>' +
        '<circle cx="8" cy="8" r="3" fill="#9541ba"></circle>' +
        "</svg></span>"
      );
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
