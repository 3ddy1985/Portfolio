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



// const letters = document.querySelectorAll(".hero-heading span");

// letters.forEach(letter => {
//   letter.setAttribute("draggable", "true");
//   letter.addEventListener("dragstart", dragStart);
//   letter.addEventListener("dragend", dragEnd);
// });

// let initialX = 0;
// let initialY = 0;

// function dragStart(e) {
//   initialX = e.clientX - e.target.offsetLeft;
//   initialY = e.clientY - e.target.offsetTop;
//   e.dataTransfer.setData("text/plain", e.target.id);
// }

// function dragEnd(e) {
//   e.target.style.left = e.clientX - initialX + "px";
//   e.target.style.top = e.clientY - initialY + "px";
//   e.target.style.position = "absolute";
// }



