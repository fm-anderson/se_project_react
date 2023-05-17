import { useContext } from 'react';
import './WeatherCard.css';
// import { weatherOptions } from '../../utils/constants';
import CurrentTemperatureUnitContext from '../../contexts/CurrentTemperatureUnitContext';

export default function WeatherCard({ tempObj, skyCondition }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  return (
    <section className="weather">
      <div className="weather__info">
        {tempObj?.temp?.main}°{currentTemperatureUnit}
      </div>
      <img
        alt={`Sky condition: ${tempObj?.temp?.weather}`}
        className="weather__image"
        src={skyCondition}
      />
    </section>
  );
}
