const toggleBtn = document.querySelector("#toggle");
const refreshBtn = document.querySelector("#refresh");
const clearBtn = document.querySelector("#clear");
const body = document.querySelector("body");
const theme = localStorage.getItem("theme");

theme === "dark" && body.classList.add("dark")

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (theme === "dark") {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
});

refreshBtn.addEventListener("click", () => {
  location.reload();
});

clearBtn.addEventListener("click", () => {
    localStorage.clear()
});

