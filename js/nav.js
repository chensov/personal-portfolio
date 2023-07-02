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
  }
});

//Hamburger menu icon

document.addEventListener("click", function handleClickOutsideBox(event) {
  if (!mobileNav.contains(event.target) && !rightSection.contains(event.target)) {
    mobileNav.classList.add("hidden");
    hamCheckBox.checked = false;
  }
});
const mobileNav = document.getElementById("mobile-nav");
const hamCheckBox = document.getElementById("toggle");

hamCheckBox.addEventListener("click", () => {
  if (hamCheckBox.checked) {
    mobileNav.classList.remove("hidden");
  } else {
    mobileNav.classList.add("hidden");
  }
});
