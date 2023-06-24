// Navbar
const ul = document.querySelector("ul");
const li = document.querySelectorAll("li");

li.forEach((el) => {
  el.addEventListener("click", () => {
    ul.querySelector(".active").classList.remove("active");

    el.classList.add("active");
  });
});

let links = document.querySelectorAll(".main-nav li");
let bodyId = document.querySelector("body").id;

for (let link of links) {
  if (link.dataset.active === bodyId) {
    link.classList.add("active");
  }
}

//Show - Hide navBar

function debounce(func, wait = 10, immediate = true) {
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

let scrollPos = 10;
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

// window.addEventListener('scroll', checkPosition);
window.addEventListener("scroll", debounce(checkPosition));

// Memoji

const tooltip = document.getElementById("thanks");
const btn = document.getElementById("memoji-container");

li.forEach((el) => {
  el.addEventListener("click", () => {
    ul.querySelector(".active").classList.remove("active");

    el.classList.add("active");
  });
});

const overlay = document.getElementById("product-shape");
const container = document.getElementById("memoji-container");
const hoodieColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  overlay.style.fill = "#" + randomColor;
};

container.addEventListener("click", hoodieColor);

function showMessage() {
  tooltip.style.opacity = 1;
  tooltip.style.transform = "translateY(-20px)";
}

function hideMessage() {
  tooltip.style.opacity = 0;
  tooltip.style.transform = "translateY(0px)";
}

btn.addEventListener("click", () => {
  if (tooltip.style.opacity !== 0) {
    showMessage();
    setTimeout("hideMessage()", 1000);
  } else {
    hideMessage();
  }
});
