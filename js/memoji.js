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
