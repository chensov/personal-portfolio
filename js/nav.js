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
const chevronDown = document.querySelector("sroll-down");
window.addEventListener("scroll", function () {
  scrollPosition = window.scrollY;

  if (scrollPosition > 100) {
    hamburger.classList.remove("hidden");
    ul.classList.add("hidden");
    darkModeToggle.classList.add("hidden");
    mobileNav.classList.remove("hidden");
    chevronDown.classList.remove("hidden");
  } else if (scrollPosition < 100) {
    ul.classList.remove("hidden");
    hamburger.classList.add("hidden");
    darkModeToggle.classList.remove("hidden");
    mobileNav.classList.add("hidden");
    chevronDown.classList.add("hidden");
  }
});

//Hamburger menu icon

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
