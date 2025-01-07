$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  });
});

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    // Threshold for scroll detection
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

window.addEventListener("scroll", function () {
  const mainMenu = document.querySelector(".main-menu");
  if (window.scrollY > 50) {
    // Adjust the scroll position as needed
    mainMenu.classList.add("scrolled");
  } else {
    mainMenu.classList.remove("scrolled");
  }
});

const navLinks = document.querySelectorAll(".nav-bar a");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navLinks.forEach((link) => link.classList.add("scrolled"));
  } else {
    navLinks.forEach((link) => link.classList.remove("scrolled"));
  }
});

window.addEventListener("scroll", function () {
  const navIcons = document.querySelectorAll(".nav-bar i");
  if (window.scrollY > 50) {
    // Adjust the scroll position as needed
    navIcons.forEach((icon) => icon.classList.add("scrolled"));
  } else {
    navIcons.forEach((icon) => icon.classList.remove("scrolled"));
  }
});

$(".bottom-slider").slick({
  slidesToShow: 9,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});
