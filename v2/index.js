
// // Start typewriter effect for nav bar
// const nav1 = document.getElementById("nav-1");
// const nav2 = document.getElementById("nav-2");
// const nav3 = document.getElementById("nav-3");
// const nav4 = document.getElementById("nav-4");

// const nav1Text = "<span>&lt;a&gt;</span>Home<span>&lt;/a&gt;</span>";
// const nav2Text = "<span>&lt;a&gt;</span>Features<span>&lt;/a&gt;</span>";
// const nav3Text = "<span>&lt;a&gt;</span>Pricing<span>&lt;/a&gt;</span>";
// const nav4Text = "<span>&lt;a&gt;</span>Contact Us<span>&lt;/a&gt;</span>";

// let i = 0;
// let j = 0;
// let navs = [nav1, nav2, nav3, nav4];
// let navTexts = [nav1Text, nav2Text, nav3Text, nav4Text];

// function typeNavLinks() {
//   if (i < navs.length) {
//     if (j === 0) {
//       navs[i].innerHTML = "<span>&lt;a&gt;</span>";
//       navs[i].classList.add("show-tag");
//       navs[i].classList.add("typewriter");
//     }

//     const linkText = navTexts[i];
//     const newText = linkText.slice(0, j + 1);
//     const html = newText;
//     navs[i].innerHTML = html;

//     j++;

//     if (j > linkText.length) {
//       i++;
//       j = 0;
//     }
//   } else {
//     clearInterval(timer);
//     timer = null;
//   }
// }

// let timer = setInterval(typeNavLinks, 60);
// // End typewriter effect for nav bar



const navItems = [
  { elementId: "nav-1", text: "Home" },
  { elementId: "nav-2", text: "Features" },
  { elementId: "nav-3", text: "Pricing" },
  { elementId: "nav-4", text: "Contact Us" },
];

function typeNavLink(navItem, onComplete) {
  const navElement = document.getElementById(navItem.elementId);
  navElement.innerHTML = "<span>&lt;a&gt;</span>";
  navElement.classList.add("show-tag", "typewriter");

  let j = 0;
  const linkText = `<span>&lt;a&gt;</span>${navItem.text}<span>&lt;/a&gt;</span>`;

  const type = () => {
    const newText = linkText.slice(0, j + 1);
    navElement.innerHTML = newText;
    j++;

    if (j <= linkText.length) {
      setTimeout(type, 60);
    } else {
      onComplete();
    }
  };

  type();
}

function typeNavLinks(index = 0) {
  if (index < navItems.length) {
    typeNavLink(navItems[index], () => typeNavLinks(index + 1));
  }
}

typeNavLinks();

























