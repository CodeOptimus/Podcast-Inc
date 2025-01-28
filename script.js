const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-items');

// Function to toggle the SVG path
function toggleSVGPath(isOpen) {
  const svgPath = hamburger.querySelector('path'); 
  if (isOpen) {
    svgPath.setAttribute(
      'd',
      'M2 4L14 14M2 14L14 4' // Cross icon path
    );
  } else {
    svgPath.setAttribute(
      'd',
      'M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75ZM2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8Zm0 4.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z' 
    );
  }
}

// Toggle menu visibility and icon state
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('open'); 
  const isOpen = navMenu.classList.contains('open');
  toggleSVGPath(isOpen);
});




const audio = document.getElementById("audio");
const playPauseButton = document.querySelector(".play-pause");
const playIcon = document.querySelector(".play-icon");
const pauseIcon = document.querySelector(".pause-icon");
const visualizerBars = document.querySelectorAll(".visualizer span");

let isPlaying = false;

// Play/Pause Functionality
playPauseButton.addEventListener("click", () => {
  if (isPlaying) {
    audio.pause();
    playIcon.style.display = "block";
    pauseIcon.style.display = "none";
    stopVisualizer();
  } else {
    audio.play();
    playIcon.style.display = "none";
    pauseIcon.style.display = "block";
    startVisualizer();
  }
  isPlaying = !isPlaying;
});

// Start Visualizer Animation
function startVisualizer() {
  visualizerBars.forEach((bar) => {
    bar.style.animationPlayState = "running";
  });
}

// Stop Visualizer Animation
function stopVisualizer() {
  visualizerBars.forEach((bar) => {
    bar.style.animationPlayState = "paused";
  });
}



document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper', {
      loop: true, // Enable looping
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 5000, // Auto-slide every 5 seconds
      },
      effect: 'fade', // Optional: choose different effects like 'slide', 'fade', etc.
      slidesPerView: 1, // Default for mobile view
    spaceBetween: 20, // Add spacing between slides
    breakpoints: {
      768: {
        slidesPerView: 2, // Show 2 slides for tablets
      },
      1024: {
        slidesPerView: 3, // Show 3 slides for laptops
      },
    },
    });
  });
  