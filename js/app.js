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
const hamburger = document.querySelector(".hamburger");

window.addEventListener("scroll", function () {
  scrollPosition = window.scrollY;

  if (scrollPosition > 100) {
    hamburger.classList.remove("hidden");
    ul.classList.add("hidden");
    darkModeToggle.classList.add("hidden");
    mobileNav.classList.remove("hidden");
  } else if (scrollPosition < 100) {
    ul.classList.remove("hidden");
    hamburger.classList.add("hidden");
    darkModeToggle.classList.remove("hidden");
    mobileNav.classList.add("hidden");
  }
});

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

//Hamburger menu

const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");
const mobileNav = document.querySelector(".mobile-nav");

hamburger.addEventListener("click", () => {
  bar1.classList.toggle("animateBar1");
  bar2.classList.toggle("animateBar2");
  bar3.classList.toggle("animateBar3");
  mobileNav.classList.toggle("slide-out");
});
