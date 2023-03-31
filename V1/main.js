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
  const slides = document.querySelectorAll(".slide");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  function showSlide(n) {
    if (n >= slides.length) {
      slideIndex = 0;
    }
    if (n < 0) {
      slideIndex = slides.length - 1;
    }
    slides.forEach((slide) => {
      slide.style.display = "none";
    });
    slides[slideIndex].style.display = "flex";
  }

  function changeSlide(n) {
    showSlide((slideIndex += n));
  }

  prevButton.addEventListener("click", () => changeSlide(-1));
  nextButton.addEventListener("click", () => changeSlide(1));

  function autoSlide() {
    changeSlide(1);
    setTimeout(autoSlide, 5000);
  }

  showSlide(slideIndex);
  autoSlide();

