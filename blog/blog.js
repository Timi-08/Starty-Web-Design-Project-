// Scroll effect for navbar - changes background color on scroll
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Navigation Toggle for mobile view
const navLinks = document.querySelector('nav ul');
const toggleButton = document.createElement('button');
// toggleButton.textContent = "☰";
toggleButton.style.fontSize = "2rem";
toggleButton.style.background = "none";
toggleButton.style.border = "none";
toggleButton.style.color = "white";
toggleButton.style.cursor = "pointer";
toggleButton.style.display = "hidden"

document.querySelector('nav').prepend(toggleButton);

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Comment Form Validation
const commentForm = document.querySelector('.comment-form');
commentForm.addEventListener('submit', (e) => {
    const comment = document.querySelector('#comment').value;
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;

    if (!comment || !name || !email) {
        e.preventDefault();
        alert("Please fill in all fields.");
    }
});

// Auto-close mobile nav when link is clicked
const navItems = document.querySelectorAll('nav a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('active');
        }
    });
});

// script.js
document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector('.sidebar'); // Select the sidebar
    const sidebarOffsetTop = sidebar.offsetTop; // Get the initial position of the sidebar

    window.addEventListener('scroll', function () {
        // Check if the user has scrolled past the initial position of the sidebar
        if (window.scrollY > sidebarOffsetTop) {
            // Add the 'sticky' class when scrolling past the sidebar
            sidebar.classList.add('static');
        } else {
            // Remove the 'sticky' class if the user scrolls back to the top
            sidebar.classList.remove('static');
        }
    });
});
// JavaScript for interactive features

// Handling the Search Bar
document.querySelector('.search-bar button').addEventListener('click', function() {
    const query = document.querySelector('.search-bar input').value.toLowerCase();
    const posts = document.querySelectorAll('.recent-posts li, .categories-list li');
  
    posts.forEach(function(post) {
      const postTitle = post.textContent.toLowerCase();
  
      if (postTitle.includes(query)) {
        post.style.display = 'block';  // Show post if it matches the search query
      } else {
        post.style.display = 'none';  // Hide post if it doesn't match the search query
      }
    });
  });
  
  // Optional: Handle pressing "Enter" in the search bar for search action
  document.querySelector('.search-bar input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent form submission
      document.querySelector('.search-bar button').click();
    }
  });
  // Change sidebar's style on scroll
window.addEventListener('scroll', function () {
    const sidebar = document.querySelector('.sidebar');
    const scrollPosition = window.scrollY;
  
    // If scrolled down more than 100px, add a stronger shadow to the sidebar
    if (scrollPosition > 100) {
      sidebar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.2)";
    } else {
      sidebar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    }
  });
  
  // Handle the search bar behavior
  document.querySelector('.search-bar button').addEventListener('click', function () {
    const query = document.querySelector('.search-bar input').value.toLowerCase();
    const posts = document.querySelectorAll('.recent-posts li, .categories-list li');
  
    posts.forEach(function (post) {
      const postTitle = post.textContent.toLowerCase();
  
      // Show or hide post based on whether the title contains the search query
      if (postTitle.includes(query)) {
        post.style.display = 'block';  // Show matching post
      } else {
        post.style.display = 'none';  // Hide non-matching post
      }
    });
  });
  
  // Handle "Enter" key press for search functionality
  document.querySelector('.search-bar input').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault();  // Prevent form submission
      document.querySelector('.search-bar button').click();  // Trigger the search
    }
  });
  
  
  