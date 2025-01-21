// Scroll effect for navbar - changes background color on scroll
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Navigation Toggle for mobile view
const navLinks = document.querySelector("nav ul");
const toggleButton = document.createElement("button");
// toggleButton.textContent = "☰";
toggleButton.style.fontSize = "2rem";
toggleButton.style.background = "none";
toggleButton.style.border = "none";
toggleButton.style.color = "white";
toggleButton.style.cursor = "pointer";
toggleButton.style.display = "hidden";

document.querySelector("nav").prepend(toggleButton);

toggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Comment Form Validation
const commentForm = document.querySelector(".comment-form");
commentForm.addEventListener("submit", (e) => {
  const comment = document.querySelector("#comment").value;
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;

  if (!comment || !name || !email) {
    e.preventDefault();
    alert("Please fill in all fields.");
  }
});

// Auto-close mobile nav when link is clicked
const navItems = document.querySelectorAll("nav a");
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      navLinks.classList.remove("active");
    }
  });
});

// script.js
document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".sidebar"); // Select the sidebar
  const sidebarOffsetTop = sidebar.offsetTop; // Get the initial position of the sidebar

  window.addEventListener("scroll", function () {
    // Check if the user has scrolled past the initial position of the sidebar
    if (window.scrollY > sidebarOffsetTop) {
      // Add the 'sticky' class when scrolling past the sidebar
      sidebar.classList.add("sticky");
    } else {
      // Remove the 'sticky' class if the user scrolls back to the top
      sidebar.classList.remove("sticky");
    }
  });
});
