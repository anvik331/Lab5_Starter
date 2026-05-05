// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const faceImage = document.querySelector('#explore > img');
  const textArea = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('#explore button');

  let voices = [];
  function populateVoices() {
    voices = speechSynthesis.getVoices();
    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';
    voices.forEach(function(voice) {
      const option = document.createElement('option');
      option.value = voice.name;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }
  populateVoices();
  speechSynthesis.addEventListener('voiceschanged', populateVoices);
  talkButton.addEventListener('click', function() {
    const text = textArea.value;
    const utterance = new SpeechSynthesisUtterance(text);
    const selectedVoice = voices.find(function(voice) {
      return voice.name === voiceSelect.value;
    });
    utterance.voice = selectedVoice;
    utterance.onstart = function() {
      faceImage.src = 'assets/images/smiling-open.png';
      faceImage.alt = 'Open mouth face';
    };
    utterance.onend = function() {
      faceImage.src = 'assets/images/smiling.png';
      faceImage.alt = 'Smiling face';
    };
    speechSynthesis.speak(utterance);
  });
}