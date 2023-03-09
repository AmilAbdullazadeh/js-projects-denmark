const form = document.querySelector("#form");
const fullname = document.querySelector("#fullname");
const email = document.querySelector("#email");
const zip = document.querySelector("#zip");
const country = document.querySelector("#country");


form.addEventListener("submit", (e) => {
  e.preventDefault()

  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

  let isEmailValid = emailRegex.test(email.value);
  let data = {}

  if (fullname.value === "") {
    alert("Fullname field is invalid");
  } else if (email.value === "" || !isEmailValid) {
    alert("Email field is invalid");
  } else if (zip.value === "") {
    alert("Zip field is invalid");
  } else if (country.value === "") {
    alert("Country field is invalid");
  } else {
    data = {
      fullname: fullname.value,
      email: email.value,
      zip: zip.value,
      country: country.value,
    };
  }

  console.log(data);

  return data

})