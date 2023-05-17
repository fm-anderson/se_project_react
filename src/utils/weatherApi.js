import {
  latitude,
  longitude,
  ApiKey,
  dayWeatherCards,
  nightWeatherCards,
} from './constants';

const processServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

export const getForecastWeather = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${ApiKey}`
  ).then(processServerResponse);
  return weatherApi;
};

export const parseWeatherData = (data) => {
  const weather = { temp: {} };
  weather.temp.main = Math.ceil(data.main.temp);
  weather.temp.F = `${Math.round(data.main.temp)}°F`;
  weather.temp.C = `${Math.round(((data.main.temp - 32) * 5) / 9)}°C`;
  weather.temp.weather = data.weather[0].main;
  return weather;
};

export const getWeatherCard = (data) => {
  if (Date.now() / 1000 > data.sys.sunrise) {
    if (data.weather[0].id >= 800 && data.weather[0].id <= 801) {
      return dayWeatherCards.sunny;
    } else if (data.weather[0].id >= 802 && data.weather[0].id <= 804) {
      return dayWeatherCards.cloudy;
    } else if (data.weather[0].id >= 701 && data.weather[0].id <= 781) {
      return dayWeatherCards.fog;
    } else if (data.weather[0].id >= 600 && data.weather[0].id <= 622) {
      return dayWeatherCards.snow;
    } else if (
      (data.weather[0].id >= 500 && data.weather[0].id <= 531) ||
      (data.weather[0].id >= 300 && data.weather[0].id <= 321)
    ) {
      return dayWeatherCards.rain;
    } else if (data.weather[0].id >= 200 && data.weather[0].id <= 232) {
      return dayWeatherCards.storm;
    }
  } else if (
    Date.now() / 1000 > data.sys.sunset ||
    Date.now() / 1000 < data.sys.sunrise
  ) {
    if (data.weather[0].id >= 800 && data.weather[0].id <= 801) {
      return nightWeatherCards.sunny;
    } else if (data.weather[0].id >= 802 && data.weather[0].id <= 804) {
      return nightWeatherCards.cloudy;
    } else if (data.weather[0].id >= 701 && data.weather[0].id <= 781) {
      return nightWeatherCards.fog;
    } else if (data.weather[0].id >= 600 && data.weather[0].id <= 622) {
      return nightWeatherCards.snow;
    } else if (
      (data.weather[0].id >= 500 && data.weather[0].id <= 531) ||
      (data.weather[0].id >= 300 && data.weather[0].id <= 321)
    ) {
      return nightWeatherCards.rain;
    } else if (data.weather[0].id >= 200 && data.weather[0].id <= 232) {
      return nightWeatherCards.storm;
    }
  }
};
