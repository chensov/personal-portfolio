const btn = document.getElementById("button");
const modal = document.querySelector(".modal-container");
const modalBg = document.querySelector(".modal-bg");
const modalBtn = document.querySelector("#close-modal");

modalBg.addEventListener("click", () => {
  location.href = "/";
});

modalBtn.addEventListener("click", () => {
  location.href = "/";
});
