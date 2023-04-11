function search(city) {
  let apiKey = "c33d4a80d9533a8t8944b0aef1f6cbo2";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayTemperature);
}
function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
}

function displayTemperature(response) {
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;

  let temperatureElement = document.querySelector("#temperature");
  temperatureElement = Math.round(response.data.temperature.current);
  temperature.innerHTML = `${temperatureElement}`;

  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.condition.description;
  let feelsLikeElement = document.querySelector("#feelsLike");
  feelsLikeElement = Math.round(response.data.temperature.feels_like);
  feelsLike.innerHTML = `Feels like: ${feelsLikeElement}°`;

  let windElement = document.querySelector("#windSpeed");
  windElement = Math.round(response.data.wind.speed);
  windSpeed.innerHTML = `Wind: ${windElement} mph`;

  let humidityElement = document.querySelector("#humidity");
  humidityElement = Math.round(response.data.temperature.humidity);
  humidity.innerHTML = `Humidity: ${humidityElement}%`;

  fahrenheitTemperature = response.data.temperature.current;

  let iconElement = document.querySelector("#weatherIcon");
  iconElement.setAttribute(
    "src",
    `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
  );
  iconElement.setAttribute("alt", response.data.condition.description);
}

function displayCelsiusTemperature(event) {
  event.preventDefault();
  let celsiusTemperature = ((fahrenheitTemperature - 32) * 5) / 9;
  let temperatureElement = document.querySelector("#temperature");
  fahrenheitLink.classList.remove("active");
  celsiusLink.classList.add("active");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}
function displayFahrenheitTemperature(event) {
  event.preventDefault();
  fahrenheitLink.classList.add("active");
  celsiusLink.classList.remove("active");
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}
function displayLocation(position) {
  let apiKey = "c33d4a80d9533a8t8944b0aef1f6cbo2";
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let url = `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=imperial`;
  axios.get(url).then(displayTemperature);
}
function displayForecast() {
  let forecastElement = document.querySelector("#forecast");

  let forecastHTML = `<div class = "row">`;

  let days = ["Thursday", "Friday", "Saturday", "Sunday", "Monday"];
  
  days.forEach(function (day) {
    forecastHTML =
      forecastHTML +
      `
            <div class="col-2">
              <div class="forecast-date">${day}</div>
              <img
                src="https://api/weather/icons/few-clouds-day.png"
                alt="#"
                width="30"
              />
              <div class="forecast-temperature">
                <span class="forecast-temperature-max">70°</span>
                <span class="forecast-temperature-min">36°</span>
              </div>
            
          </div>`;
  });

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

function displayGeolocation(event) {
  event.preventDefault;
  navigator.geolocation.getCurrentPosition(displayLocation);
}

let now = new Date();
let currentDate = document.querySelector("#currentDate");

let date = now.getDate();
let year = now.getFullYear();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}

let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let months = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];
currentDate.innerHTML = `${day} </br> 
${date} ${month} ${year} </br>
Time: ${hours}:${minutes}`;

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let fahrenheitTemperature = null;

let celsiusLink = document.querySelector("#celsiusLink");
celsiusLink.addEventListener("click", displayCelsiusTemperature);

let fahrenheitLink = document.querySelector("#fahrenheitLink");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

let button = document.querySelector("#geolocation");
button.addEventListener("click", displayGeolocation);

search("Seattle");
displayForecast();

// below is in forecast data:
//  let highLow = document.querySelector("#highLow");
//let highElement = Math.round(response.data.temperature.maximum);
//let lowElement = Math.round(response.data.temperature.minimum);
//highLow.innerHTML = `H: ${highElement}° L: ${lowElement}°`;
