import { useContext } from 'react';
import CurrentTemperatureUnitContext from '../../contexts/CurrentTemperatureUnitContext';
import './WeatherCard.css';

export default function WeatherCard({ tempObj, skyCondition }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  return (
    <section className="weather">
      <div className="weather__info">
        {tempObj && tempObj.temp[currentTemperatureUnit]}
      </div>
      <img
        alt={`Sky condition: ${tempObj?.temp?.weather}`}
        className="weather__image"
        src={skyCondition}
      />
    </section>
  );
}
