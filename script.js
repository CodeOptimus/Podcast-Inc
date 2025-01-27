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
  