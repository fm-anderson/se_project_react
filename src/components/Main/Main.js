import './Main.css';
import WeatherCard from '../WeatherCard/WeatherCard';
import ItemCard from '../ItemCard/ItemCard';
import { defaultClothingItems } from '../../utils/constants';

export default function Main({ temp, sky, handleSelectedCard }) {
  const weatherType = getWeatherType();
  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  function getWeatherType() {
    if (temp >= 86) {
      return 'hot';
    } else if (temp >= 66 && temp <= 85) {
      return 'warm';
    } else if (temp <= 65) {
      return 'cold';
    }
  }

  return (
    <main className="main">
      <WeatherCard temp={temp} sky={sky} />
      <section className="main__card-section">
        <p className="main__weather-text">
          Today is {temp}°F / You may want to wear:
        </p>
        <div className="main__card-items">
          {filteredCards.map((item) => (
            <ItemCard
              key={item._id}
              item={item}
              handleSelectedCard={handleSelectedCard}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
