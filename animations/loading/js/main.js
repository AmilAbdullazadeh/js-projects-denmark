const preloader = document.createElement("div")
preloader.classList.add("preloader");
preloader.innerHTML = `<div class="b-ico-preloader"></div><div class="spinner"></div>`
document.body.appendChild(preloader);

setTimeout(() => {
    preloader.className += " fade"
}, 3000)