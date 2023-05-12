import './WeatherCard.css';
import { weatherOptions } from '../utils/constants';

export default function WeatherCard({ temp, sky }) {
  const filteredImage = weatherOptions.filter((item) => {
    return item.day === isDay() && item.type === sky;
  });
  const imageSrc = filteredImage[0].url || '';
  const imageAlt = filteredImage[0].type || '';

  function isDay() {
    const hours = new Date().getHours();
    return hours >= 6 && hours < 18;
  }

  return (
    <section className="weather">
      <div className="weather__info">{temp}°F</div>
      <img alt={imageAlt} className="weather__image" src={imageSrc} />
    </section>
  );
}
