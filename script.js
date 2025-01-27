// Select the button and body
const modeToggle = document.getElementById("mode-toggle");
const body = document.body;

// Check localStorage for saved mode
const savedMode = localStorage.getItem("theme");
if (savedMode === "dark") {
  body.classList.add("dark-mode");
  modeToggle.textContent = "🌙";
}

// Add click event to toggle mode
modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Save mode to localStorage
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    modeToggle.textContent = "🌙";
  } else {
    localStorage.setItem("theme", "light");
    modeToggle.textContent = "🌞";
  }
});
