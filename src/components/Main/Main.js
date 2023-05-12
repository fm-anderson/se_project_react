import './Main.css';
import WeatherCard from '../WeatherCard';

export default function Main({ temp, sky }) {
  return (
    <main className="main">
      <WeatherCard temp={temp} sky={sky} />
    </main>
  );
}
