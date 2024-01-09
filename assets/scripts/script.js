
// close and open menu function
const menuBtn = document.querySelector(".menu-btn");
const menuArea = document.querySelector(".menu-area");
const closeBtn = document.querySelector(".navClose button i");
const homeIcons = document.querySelector(".home-icons");


// close menu funtion
function closeMenu(){
  menuArea.style.display = "none";
  menuBtn.style.display = "block";
  homeIcons.style.display = "block";
}

// open menu function
function openMenu(){
  menuArea.style.display = "flex";
  menuBtn.style.display = "none";
}

// add event listeners
menuBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);