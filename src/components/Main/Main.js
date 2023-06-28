import { useContext } from 'react';
import WeatherCard from '../WeatherCard/WeatherCard';
import ItemCard from '../ItemCard/ItemCard';
import CurrentTemperatureUnitContext from '../../contexts/CurrentTemperatureUnitContext';
import './Main.css';

export default function Main({
  cards,
  handleSelectedCard,
  tempObj,
  skyCondition,
}) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const weatherType = getWeatherType();

  const filteredCards = cards.filter((item) => {
    return item.weather?.toLowerCase() === weatherType;
  });

  function getWeatherType() {
    if (tempObj?.temp?.main >= 86) {
      return 'hot';
    } else if (tempObj?.temp?.main >= 66 && tempObj?.temp?.main <= 85) {
      return 'warm';
    } else if (tempObj?.temp?.main <= 65) {
      return 'cold';
    }
  }

  return (
    <main className="main">
      <WeatherCard skyCondition={skyCondition} tempObj={tempObj} />
      <section className="main__card-section">
        <p className="main__weather-text">
          Today is {tempObj && tempObj.temp[currentTemperatureUnit]} / You may
          want to wear:
        </p>
        <div className="main__card-items">
          {Array.isArray(filteredCards) &&
            filteredCards.map((item) => (
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
