



// Get all elements with the class "header-text"
const headings = document.querySelectorAll(".header-text");

// Loop through each element and replace its text content with span elements
headings.forEach(heading => {
  // Get the text content of the heading
  const text = heading.textContent;

  // Split the text content into an array of characters
  const characters = text.split("");

  // Create an array of span elements for each character
  const spanElements = characters.map(char => {
    const span = document.createElement("span");
    span.textContent = char;
    return span;
  });

  // Replace the text content of the heading with the span elements
  heading.textContent = "";
  spanElements.forEach(span => heading.appendChild(span));
});






let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function moveSlides(n) {
  slideIndex += n;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  if (slideIndex >= slides.length) slideIndex = 0;
  updateSlides();
}

function updateSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

function automaticSlider() {
  slideIndex++;
  if (slideIndex >= slides.length) slideIndex = 0;
  updateSlides();
  setTimeout(automaticSlider, 16000); // Change the time in milliseconds for slide duration
}

// Start the slider
updateSlides();
automaticSlider();


document.addEventListener('DOMContentLoaded', function () {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))

  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    tooltipTriggerEl.addEventListener('mouseover', function () {
      tooltipTriggerEl.classList.add('shake-animation');
      setTimeout(function () {
        tooltipTriggerEl.classList.remove('shake-animation');
      }, 200);
    });
  });

  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
});



// Get the back-to-top button element
const backToTopBtn = document.getElementById('back-to-top');

// Function to handle scrolling to the top of the page
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Function to show or hide the back-to-top button depending on the scroll position
function toggleBackToTopBtn() {
  const heroSection = document.querySelector('.hero-section');
  const heroSectionHeight = heroSection.offsetHeight;

  if (window.pageYOffset > heroSectionHeight) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
}

// Add an event listener to handle scroll events
window.addEventListener('scroll', toggleBackToTopBtn);



const nav = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('#hero-section, #about-me, #skills, #projects, #interests, #contact-me');

function handleSectionIntersection(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      const isDark = id === 'hero-section' || id === 'skills' || id === 'interests';

      nav.classList.toggle('bg-dark', isDark);
      nav.classList.toggle('bg-pink', !isDark);

      navLinks.forEach((navLink) => {
        navLink.classList.toggle('pink-font', isDark);
        navLink.classList.toggle('nav-btm-border-pink', isDark);
        navLink.classList.toggle('dark-font', !isDark);
        navLink.classList.toggle('nav-btm-border-dark', !isDark);
      });
    }
  });
}


const observer = new IntersectionObserver(handleSectionIntersection, {
  rootMargin: '0px 0px -100% 0px',
  threshold: 0,
});

sections.forEach((section) => {
  observer.observe(section);
});


navLinks.forEach((navLink) => {
  navLink.addEventListener('click', (event) => {
    event.preventDefault();

    const targetId = navLink.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});





// Get the modal element
var modal = document.getElementById('projectModal1');

// Get the carousel element
var carousel = modal.querySelector('.modal-body');

var swiper = new Swiper('.swiper-container', {
  loop: false,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 1,
  preloadImages: false,
  virtualTranslate: false
});





// When the modal is shown, start the carousel autoplay
modal.addEventListener('shown.bs.modal', function () {
  swiper.autoplay.start();
});

// When the modal is hidden, stop the carousel autoplay
modal.addEventListener('hidden.bs.modal', function () {
  swiper.autoplay.stop();
});




