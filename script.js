// Global audio elements
const clickSound = new Audio('assets/audio/button-press-382713.mp3');

// Wait until DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Background music control
  const bgAudio = document.getElementById('background-audio');
  const audioControl = document.getElementById('audio-control');
  if (bgAudio && audioControl) {
    audioControl.addEventListener('click', () => {
      // play or pause background audio
      if (bgAudio.paused) {
        bgAudio.play().catch(() => {});
        audioControl.textContent = 'Pause';
      } else {
        bgAudio.pause();
        audioControl.textContent = 'Play';
      }
    });
  }

  // Home page buttons
  const goodBtn = document.getElementById('good-btn');
  const badBtn = document.getElementById('bad-btn');
  if (goodBtn) {
    goodBtn.addEventListener('click', () => {
      clickSound.currentTime = 0;
      clickSound.play();
      setTimeout(() => {
        window.location.href = 'page1.html';
      }, 150);
    });
  }
  if (badBtn) {
    badBtn.addEventListener('click', () => {
      clickSound.currentTime = 0;
      clickSound.play();
      setTimeout(() => {
        window.location.href = 'page2.html';
      }, 150);
    });
  }

  // Page1 continue button
  const nextBtn = document.getElementById('next-to-page3');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      clickSound.currentTime = 0;
      clickSound.play();
      setTimeout(() => {
        window.location.href = 'page3.html';
      }, 150);
    });
  }

  // Page2 link back to page1
  const toPage1FromBad = document.getElementById('to-page1-from-bad');
  if (toPage1FromBad) {
    toPage1FromBad.addEventListener('click', () => {
      clickSound.currentTime = 0;
      clickSound.play();
      setTimeout(() => {
        window.location.href = 'page1.html';
      }, 150);
    });
  }
});
