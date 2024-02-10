const kick = document.getElementById("kick");
const snare = document.getElementById("snare");
const hiHat = document.getElementById("hihat");
const tomb1 = document.getElementById("tomb1");
const tomb2 = document.getElementById("tomb2");
const clowbell = document.getElementById("clowbell");
const crash1 = document.getElementById("crash1");
const crash2 = document.getElementById("crash2");
const crash3 = document.getElementById("crash3");
const tamb = document.getElementById("tamb");

const sounds = {
  kick,
  snare,
  hiHat,
  tomb1,
  tomb2,
  clowbell,
  crash1,
  crash2,
  crash3,
  tamb,
};

const keys = {
  c: "kick",
  v: "snare",
  b: "hihat",
  d: "tomb1",
  x: "tamb",
  f: "tomb2",
  g: "clowbell",
  s: "crash1",
  h: "crash2",
  j: "crash3",
};

const audioBoxes = document.querySelectorAll(".audio-box");

audioBoxes.forEach((box) => {
  box.addEventListener("click", () => {
    const key = box.getAttribute("data-key");
    const audio = document.getElementById(key);
    if (audio) {
      audio.currentTime = 0;
      audio.play();
      box.classList.add("active");
      setTimeout(() => {
        box.classList.remove("active");
      }, 300);
    }
  });
});

document.addEventListener("keydown", function (event) {
  const key = event.key.toLowerCase();
  const audioId = keys[key];
  const audio = document.getElementById(audioId);
  if (audio) {
    audio.currentTime = 0;
    audio.play();
    const box = document.querySelector(`.audio-box[data-key="${audioId}"]`);
    if (box) {
      box.classList.add("active");
      setTimeout(() => {
        box.classList.remove("active");
      }, 300);
    }
  }
});
