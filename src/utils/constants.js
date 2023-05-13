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
const ApiKey = 'c73d8e7e57062e271ebf1cd81727cad4';

const defaultClothingItems = [
  {
    _id: 0,
    name: 'Cap',
    weather: 'hot',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591',
  },
  {
    _id: 1,
    name: 'Hoodie',
    weather: 'warm',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8',
  },
  {
    _id: 2,
    name: 'Jacket',
    weather: 'cold',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad',
  },
  {
    _id: 3,
    name: 'Sneakers',
    weather: 'cold',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f',
  },
  {
    _id: 4,
    name: 'T-Shirt',
    weather: 'hot',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09',
  },
  {
    _id: 5,
    name: 'Winter coat',
    weather: 'cold',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4',
  },
];

const weatherOptions = [
  {
    url: sunnyD,
    day: true,
    type: 'Clear',
  },
  {
    url: cloudyD,
    day: true,
    type: 'Clouds',
  },
  {
    url: rainD,
    day: true,
    type: 'Rain',
  },
  {
    url: stormD,
    day: true,
    type: 'Thunderstorm',
  },
  {
    url: snowD,
    day: true,
    type: 'Snow',
  },
  { url: fogD, day: true, type: 'fog' },

  {
    url: sunnyN,
    day: false,
    type: 'Clear',
  },
  {
    url: cloudyN,
    day: false,
    type: 'Clouds',
  },
  {
    url: rainN,
    day: false,
    type: 'Rain',
  },
  {
    url: stormN,
    day: false,
    type: 'Thunderstorm',
  },
  {
    url: snowN,
    day: false,
    type: 'Snow',
  },
  {
    url: fogN,
    day: false,
    type: 'fog',
  },
];

export { latitude, longitude, ApiKey, defaultClothingItems, weatherOptions };
