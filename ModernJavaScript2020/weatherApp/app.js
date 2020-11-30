const cityForm = document.getElementById("city_form");
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('.time');
const icon = document.querySelector('.icon img');
let timeSrc = "";
const forecast = new Forecast();

// Updating the UI
const updateUI = (data) => {
    const cityData = data.cityDets
    const weather = data.weather
    console.log(weather)
    //Updating the template
    details.innerHTML = ` <h5 class="my-3">${cityData.EnglishName} </h5>
    <div class="my-3">${weather.WeatherText} </div>
    <div class="display4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg; C</span>
    </div>`;
    // Updating day night image

    if (weather.IsDayTime) {
        let timeSrc;
        timeSrc = "images/day.jpg"
        console.log("day")
        time.setAttribute("src", timeSrc)
    }
    else {
        let timeSrc;
        timeSrc = "images/night.jpg"
        console.log("Night")
        time.setAttribute("src", timeSrc)
    }
    //remove d-none class
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none')
    }
}
cityForm.addEventListener("submit", e => {
    e.preventDefault();
    const city = cityForm.city.value.trim();
    // Clear the form
    cityForm.reset();

    //Updating the UI
    forecast.updateCity(city)
        .then(data => {
            updateUI(data)
        }
        )
        .catch(
            err => console.log(err));
    localStorage.setItem('city', city)
});

if (localStorage.getItem('city')) {
    forecast.updateCity(localStorage.getItem('city'))
        .then(data => {
            updateUI(data)
        }
        )
        .catch(
            err => console.log(err));
}