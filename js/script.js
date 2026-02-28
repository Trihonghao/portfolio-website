// Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Contact form alert
const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Message sent successfully!");
  form.reset();
});