window.addEventListener('load', () => {
  const progressBar = document.querySelector('.progress');

  // Simulate loading progress (replace with your actual loading logic)
  for (let i = 0; i <= 100; i++) {
    setTimeout(() => {
      progressBar.style.width = i + '%';
    }, i * 10); // Adjust delay as needed
  }

  // Hide progress bar after loading
  setTimeout(() => {
    progressBar.style.width = '100%';
    setTimeout(() => {
      document.getElementById('progress-bar').style.display = 'none';
    }, 500); // Delay before hiding
  }, 1000); // Total loading time
});


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