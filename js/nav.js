// Navbar
const ul = document.querySelector(".middle");
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
const rightSection = document.querySelector(".right");
const chevronDown = document.querySelector("sroll-down");
window.addEventListener("scroll", function () {
  scrollPosition = window.scrollY;

  if (scrollPosition > 100) {
    rightSection.classList.remove("hidden");

    ul.classList.add("hidden");
  } else if (scrollPosition < 100) {
    ul.classList.remove("hidden");
    rightSection.classList.add("hidden");
    hamCheckBox.checked = false;
    mobileNav.classList.add("hidden");
    mobileBg.classList.add("hidden");
  }
});

//Hamburger menu icon

const mobileBg = document.querySelector(".mobile-bg");
const mobileNav = document.getElementById("mobile-nav");
const hamCheckBox = document.getElementById("toggle");

hamCheckBox.addEventListener("click", () => {
  if (hamCheckBox.checked) {
    mobileNav.classList.remove("hidden");
    mobileBg.classList.remove("hidden");
  } else {
    mobileNav.classList.add("hidden");
    mobileBg.classList.add("hidden");
  }
});

mobileBg.addEventListener("click", () => {
  mobileNav.classList.add("hidden");
  hamCheckBox.checked = false;
  mobileBg.classList.add("hidden");
});
