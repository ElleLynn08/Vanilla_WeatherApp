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
}

let apiKey = "c33d4a80d9533a8t8944b0aef1f6cbo2";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query={Seattle}&key=c33d4a80d9533a8t8944b0aef1f6cbo2&units=imperial";

axios.get(apiUrl).then(displayTemperature);

//  let highLow = document.querySelector("#highLow");
//let highElement = Math.round(response.data.temperature.maximum);
//let lowElement = Math.round(response.data.temperature.minimum);
//highLow.innerHTML = `H: ${highElement}° L: ${lowElement}°`;
