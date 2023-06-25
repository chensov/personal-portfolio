let darkMode = localStorage.getItem("darkMode");
const sun = document.getElementsByClassName("bx bx-moon moon");
const moon = document.getElementsByClassName("bx bx-sun sun");
const darkModeToggle = document.getElementById("dark-mode-btn1");
const darkModeToggle2 = document.getElementById("dark-mode-btn2");
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

darkModeToggle2.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");

  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
