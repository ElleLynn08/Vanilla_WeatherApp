function displayTemperature(response) {
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement = Math.round(response.data.temperature.current);
  temperature.innerHTML = `${temperatureElement}°`;
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

  let iconElement = document.querySelector("#weatherIcon");
  iconElement.setAttribute(
    "src",
    `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
  );
}

let apiKey = "c33d4a80d9533a8t8944b0aef1f6cbo2";
let city = "Tokyo";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;

axios.get(apiUrl).then(displayTemperature);

//  let highLow = document.querySelector("#highLow");
//let highElement = Math.round(response.data.temperature.maximum);
//let lowElement = Math.round(response.data.temperature.minimum);
//highLow.innerHTML = `H: ${highElement}° L: ${lowElement}°`;
// current date and time

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
