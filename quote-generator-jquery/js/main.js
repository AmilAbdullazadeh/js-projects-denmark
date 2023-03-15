$(document).ready(() => {

  function fetchData() {
    $.ajax({
      type: "GET",
      url: "https://geek-jokes.sameerkumar.website/api?format=json",
      success: (response, statusText) => {
        $("#joke").text(response.joke);
      },
      fail: (error, statusText) => {
        console.log(error);
      },
    });
  }

  fetchData()

  $("#btn").click(fetchData)

})