import sunnyD from '../images/day/sunny.png';
import cloudyD from '../images/day/cloudy.png';
import rainD from '../images/day/rain.png';
import stormD from '../images/day/storm.png';
import snowD from '../images/day/snow.png';
import fogD from '../images/day/fog.png';
import sunnyN from '../images/night/sunny.png';
import cloudyN from '../images/night/cloudy.png';
import rainN from '../images/night/rain.png';
import stormN from '../images/night/storm.png';
import snowN from '../images/night/snow.png';
import fogN from '../images/night/fog.png';

// ----- hard coded cities to test functionality -----

//Dubai
// const latitude = 25.276987;
// const longitude = 55.296249;

//Adelaide
// const latitude = -34.92123;
// const longitude = 138.599503;

//Augusta
// const latitude = 44.331493;
// const longitude = -69.788994;

//Chicago, US
const latitude = 41.8818;
const longitude = -87.6231;

// ----- hard coded cities to test functionality -----

const ApiKey = 'c73d8e7e57062e271ebf1cd81727cad4';

export const dayWeatherCards = {
  sunny: sunnyD,
  cloudy: cloudyD,
  rain: rainD,
  storm: stormD,
  snow: snowD,
  fog: fogD,
};

export const nightWeatherCards = {
  sunny: sunnyN,
  cloudy: cloudyN,
  rain: rainN,
  storm: stormN,
  snow: snowN,
  fog: fogN,
};

export { latitude, longitude, ApiKey };
