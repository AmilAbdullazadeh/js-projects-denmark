//! JQuery
$(document).ready(function () {
  function changeColor(randomColorProps) {
    $("#inputField").val(randomColorProps);
    $("#inputField").css("color", randomColorProps);
    $("#inputField").css("border-color", randomColorProps);
    $(".color-preview, .copy-btn").css("background-color", randomColorProps);
  }

  const storedColor = localStorage.getItem("randomColor");

  storedColor && changeColor(storedColor);

  $(".generate-btn").click(function () {
    let randomColor = "#";
    let characters = "0123456789abcdef";

    for (let index = 0; index < 6; index++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      randomColor += characters[randomIndex];
    }

    localStorage.setItem("randomColor", randomColor);

    changeColor(randomColor);
  });

  function add() {
    $(".alert-msg").addClass("slide-effect");
  }

  function remove() {
    $(".alert-msg").removeClass("slide-effect");
  }

  $(".copy-btn").click(function () {
    $("#inputField").select();
    document.execCommand("copy");

    const alertText = $(".code");
    const inputValue = $("#inputField").val();
    alertText.text(inputValue);

    add();

    setTimeout(remove, 2000);
  });
});
