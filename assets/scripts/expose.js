// expose.js

window.addEventListener('DOMContentLoaded', init);
const jsConfetti = new JSConfetti();
function init() {
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose > img');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('#expose button');
  const audio = document.querySelector('audio');

  hornSelect.addEventListener('change', function() {
    // set the image and the sound
    if(hornSelect.value === 'air-horn'){
      hornImage.src = 'assets/images/air-horn.svg';
      hornImage.alt = 'Air Horn';
      audio.src = 'assets/audio/air-horn.mp3';
    } else if(hornSelect.value === 'car-horn'){
      hornImage.src = 'assets/images/car-horn.svg';
      hornImage.alt = 'Car Horn';
      audio.src = 'assets/audio/car-horn.mp3';
    } else if(hornSelect.value === 'party-horn'){
      hornImage.src = 'assets/images/party-horn.svg';
      hornImage.alt = 'Party Horn';
      audio.src = 'assets/audio/party-horn.mp3';
    }
  });
  volumeSlider.addEventListener('input', function() {
  const volume = Number(volumeSlider.value);
  audio.volume = volume / 100;
  //check how big the volume is 
  if (volume === 0) {
    volumeIcon.src = 'assets/icons/volume-level-0.svg';
    volumeIcon.alt = 'Volume level 0';
  } else if (volume < 33) {
    volumeIcon.src = 'assets/icons/volume-level-1.svg';
    volumeIcon.alt = 'Volume level 1';
  } else if (volume < 67) {
    volumeIcon.src = 'assets/icons/volume-level-2.svg';
    volumeIcon.alt = 'Volume level 2';
  } else {
    volumeIcon.src = 'assets/icons/volume-level-3.svg';
    volumeIcon.alt = 'Volume level 3';
  }
  });
  playButton.addEventListener('click', function() {
  audio.play();
  if (hornSelect.value === 'party-horn') {
    jsConfetti.addConfetti();
  }
});
}
