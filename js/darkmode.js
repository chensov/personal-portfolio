let darkMode = localStorage.getItem("darkMode");
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");
const darkModeToggle = document.querySelector("#dark-mode-toggle");

const enableDarkMode = () => {
  document.documentElement.classList.add("darkmode");
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  document.documentElement.classList.remove("darkmode");
  localStorage.setItem("darkMode", null);
};

darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");

  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
