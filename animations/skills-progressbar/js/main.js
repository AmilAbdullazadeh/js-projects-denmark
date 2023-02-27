const skillElements = document.querySelectorAll(".progressbar");

const skillList = [
  { name: "html", percantage: 90 },
  { name: "css", percantage: 80 },
  { name: "javascript", percantage: 60 },
  { name: "react", percantage: 50 }
];

//IIFE
(() => {
  skillElements.forEach((element, index) => {
    setTimeout(() => {
      skillList.forEach(item => {
        "progress-" + item.name === element.id && (element.style.width = item.percantage + "%")
      })
    }, index * 500);
  })
})()