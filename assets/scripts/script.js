// Fade out loading screen on window load
window.addEventListener("load", function () {
  const loadingContainer = document.getElementById("loading-container");
  loadingContainer.style.opacity = 0;
  setTimeout(function () {
    loadingContainer.style.display = "none";
  }, 500); // Adjust the duration of the fade out transition
});

// Menu open/close logic
const menuBtn = document.querySelector(".menu-btn");
const menuArea = document.querySelector(".menu-area");
const closeBtn = document.querySelector(".navClose .close-btn");

// Open menu function
function openMenu() {
  menuArea.classList.add("active");
  menuBtn.style.display = "none";
}

// Close menu function
function closeMenu() {
  menuArea.classList.remove("active");
  menuBtn.style.display = "flex";
}

// Add event listeners
menuBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);

// Optional: Close menu with ESC key for accessibility
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && menuArea.classList.contains("active")) {
    closeMenu();
  }
});

// Optional: Hide menu on window resize if desktop
window.addEventListener("resize", function () {
  if (window.innerWidth > 900) {
    menuArea.classList.remove("active");
    menuBtn.style.display = "flex";
  }
});
