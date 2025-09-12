const toggleBtn = document.getElementById("darkModeToggle");
const iconMoon = document.getElementById("icon-moon");
const iconSun = document.getElementById("icon-sun");

// Update which icon is visible based on current theme
function updateThemeIcons() {
  const isDark = document.body.classList.contains("dark-mode");
  iconMoon.style.display = isDark ? "none" : "inline";
  iconSun.style.display = isDark ? "inline" : "none";
}

// Set theme based on device time
function setThemeByTime() {
  const hour = new Date().getHours();
  if (hour >= 19 || hour < 7) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
  updateThemeIcons();
}

// Initialize theme on page load
setThemeByTime();

// Toggle theme manually on button click
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  updateThemeIcons();
});
