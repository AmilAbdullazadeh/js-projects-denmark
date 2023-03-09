const video = document.querySelector(".video");
const toggleBtn = document.querySelector(".toggleButton");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");
const sliders = document.querySelectorAll(".controls__slider");
const skipBtns = document.querySelectorAll("[data-skip]");

function togglePlay() {
  if (video.paused || video.ended) {
    video.play()
    toggleBtn.innerHTML = "❚ ❚";
  } else {
    video.pause()
    toggleBtn.innerHTML = "►";
  }
}

toggleBtn.addEventListener("click", togglePlay)

document.addEventListener("keydown", (e) => {
  e.code === "Space" && togglePlay();
})

function timeUpdate() {
  const { duration, currentTime } = video
  let calculatePercent = (currentTime / duration) * 100
  progressBar.style.flexBasis = `${calculatePercent}%`
}

video.addEventListener("timeupdate", timeUpdate)

function updateTime() {
  video.currentTime += Number(this.dataset.skip);
}

skipBtns.forEach(btn => {
  btn.addEventListener("click", updateTime)
})

let isMousedown = false

progress.addEventListener("mousedown", () => changeStatus(true));
progress.addEventListener("mouseup", () => changeStatus(false));
progress.addEventListener('mousemove', (e) => isMousedown && scrub(e))

function changeStatus(propsArg) {
  isMousedown = propsArg;
}

function scrub(e) { 
  let clickedTime = (e.offsetX / progress.offsetWidth) * video.duration
  video.currentTime = clickedTime
 }