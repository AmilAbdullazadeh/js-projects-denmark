const nextBtn = document.querySelector(".btn-next");
const prevBtn = document.querySelector(".btn-prev");
const slides = document.querySelectorAll(".slide");

let currentIndex = 0;
let latestIndex = slides.length - 1;

nextBtn.addEventListener("click", () => {
  currentIndex === latestIndex ? (currentIndex = 0) : currentIndex++;

  slides.forEach((slide, index) => {
    let calculate = 100 * (index - currentIndex);
    slide.style.transform = `translateX(${calculate}%)`;
  });
  console.log("next currentIndex", currentIndex);
});

prevBtn.addEventListener("click", () => {
  currentIndex === 0 ? (currentIndex = latestIndex) : currentIndex--;

  slides.forEach((slide, index) => {
    let calculate = 100 * (index - currentIndex)
    slide.style.transform = `translateX(${calculate}%)`
  })
  console.log("prev currentIndex", currentIndex)
});
