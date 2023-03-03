const swiper = new Swiper("#swiper1", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  spaceBetween: 24,
  slidesPerView: "auto",
  slidesOffsetAfter: 70,
  centerSlides: true,
});

const swiper2 = new Swiper("#swiper2", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  spaceBetween: 80,
  slidesPerView: "auto",
  slidesOffsetAfter: 70,
  centerSlides: true,
});
