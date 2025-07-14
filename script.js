// Portfolio Filter
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.filter-btn.active').classList.remove('active');
    button.classList.add('active');

    const filter = button.getAttribute('data-filter');

    portfolioItems.forEach(item => {
      if (filter === 'all' || item.getAttribute('data-category') === filter) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// EmailJS Initialization
(function(){
  emailjs.init("SzkQKnyS-7IyV0ZlA");
})();

const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();

  emailjs.sendForm('Siyam_14321', 'template_wx3mz8s', this)
    .then(() => {
      formMessage.textContent = "Message sent successfully!";
      formMessage.style.color = "#0f0";
      contactForm.reset();
    }, (error) => {
      formMessage.textContent = "Failed to send message. Please try again.";
      formMessage.style.color = "#f00";
      console.error('EmailJS Error:', error);
    });
});

// Dark Mode Toggle
const themeSwitch = document.getElementById('themeSwitch');

themeSwitch.addEventListener('change', () => {
  if (themeSwitch.checked) {
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
});

// Load saved theme on page load
window.addEventListener('load', () => {
  if (localStorage.getItem('theme') === 'dark') {
    themeSwitch.checked = true;
    document.body.classList.add('dark');
  }
});

// Scroll Reveal Animation using IntersectionObserver
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      // Optional: unobserve after animation to improve performance
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

reveals.forEach(el => observer.observe(el));

// Floating icons animation (Hero section)
const icons = document.querySelectorAll('.floating-icon');

icons.forEach(icon => {
  let angle = Math.random() * 360;
  let radius = 50 + Math.random() * 30;
  let speed = 0.5 + Math.random() * 0.5;

  function animateIcon() {
    angle += speed;
    const x = radius * Math.cos(angle * Math.PI / 180);
    const y = radius * Math.sin(angle * Math.PI / 180);
    icon.style.transform = `translate(${x}px, ${y}px)`;
    requestAnimationFrame(animateIcon);
  }

  animateIcon();
});
