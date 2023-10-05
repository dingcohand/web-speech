const btnPlay = document.querySelector(".btn_play");
const speakForm = document.querySelector(".speak_form");
const textToSpeak = speakForm.querySelector("#textToSpeak");
const inputPitch = speakForm.querySelector("#pitch");
const inputRate = speakForm.querySelector("#rate");
const inputVolume = speakForm.querySelector("#volume");

const synth = window.speechSynthesis;

speakForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = textToSpeak.value;
  const pitch = inputPitch.value;
  const rate = inputRate.value;
  const volume = inputVolume.value;
  console.log(pitch, rate);
  speakText(text, pitch, rate, volume);
});

function speakText(text, pitch, rate, volume) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = rate;
  utterance.pitch = pitch;
  utterance.volume = volume;
  utterance.onend = () => {
    btnPlay.classList.remove("is_stop");
  };
  if (synth.speaking) {
    synth.pause();
    synth.cancel();
    btnPlay.classList.remove("is_stop");
  } else {
    synth.speak(utterance);
    btnPlay.classList.add("is_stop");
  }
}
