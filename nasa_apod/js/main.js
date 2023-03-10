const config = {
    NASA_API_KEY: 'yJwx3NLHdwWnIxvVXHSp7bUyXidnqanuiHaLIeYC'
}

const title = document.querySelector("#title")
const date = document.querySelector("#date")
const picture = document.querySelector("#picture");
const explanation = document.querySelector('#explanation')

const url = "https://api.nasa.gov/planetary/apod?api_key="
const api_key = config.NASA_API_KEY

const fetchNasaAPOD = async() => {
    try {
        const response = await fetch(`${url}${api_key}`);
        const data = await response.json();
        displayData(data);
    } catch (error) {
        alert(error)
    }
}

fetchNasaAPOD()

function displayData(data) {
    const { title: TITLE, date: DATE, explanation: EXP, hdurl: PIC_URL } = data;
    title.textContent = TITLE;
    date.textContent = DATE;
    picture.src = PIC_URL;
    explanation.textContent = EXP;
}