// Navbar
const ul = document.querySelector("ul");
const li = document.querySelectorAll("li");

li.forEach((el) => {
  el.addEventListener("click", () => {
    ul.querySelector(".active").classList.remove("active");

    el.classList.add("active");
  });
});

//navbar

function debounce(func, wait = 0, immediate = true) {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

let scrollPos = 0;
const nav = document.querySelector(".navbar");

function checkPosition() {
  let windowY = window.scrollY;
  if (windowY < scrollPos) {
    // Scrolling UP
    nav.classList.add("is-visible");
    nav.classList.remove("is-hidden");
  } else {
    // Scrolling DOWN
    nav.classList.add("is-hidden");
    nav.classList.remove("is-visible");
  }
  scrollPos = windowY;
}

let links = document.querySelectorAll(".main-nav li");
let bodyId = document.querySelector("body").id;

for (let link of links) {
  if (link.dataset.active === bodyId) {
    link.classList.add("active");
  }
}
