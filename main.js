const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");

var swiper = new Swiper(".home", {
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    },
  },
});

$(document).ready(() => {
  let navText = [
    "<i class='bx bx-chevron-left'></i>",
    "<i class='bx bx-chevron-right'></i>",
  ];

  $("#popular").owlCarousel({
    items: 5,
    dots: false,
    nav: true,
    navText: navText,
    autoWidth:true,
    responsive: {
      500: {
        items: 2,
      },
      1280: {
        items: 4,
      },
      1600: {
        items: 6,
      },
    },
  });

  $("#series").owlCarousel({
    items: 5,
    autoWidth:true,
    dots: false,
    nav: true,
    navText: navText,
    responsive: {
      500: {
        items: 2,
      },
      1280: {
        items: 4,
      },
      1600: {
        items: 6,
      },
    },
  });

});
