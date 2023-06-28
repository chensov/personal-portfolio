const btn = document.getElementById("button");
const modal = document.querySelector(".modal-container");
const modalBg = document.querySelector(".modal-bg");

btn.addEventListener("click", () => {
  modal.classList.add("modal-open");
});

modalBg.addEventListener("click", () => {
  location.href = "/";
});
