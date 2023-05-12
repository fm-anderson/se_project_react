import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import { getForecastWeather, parseWeatherData } from '../../utils/weatherApi';

import './App.css';

export default function App() {
  const [temp, setTemp] = useState(0);
  const [sky, setSky] = useState('Clear');
  const [city, setCity] = useState('');
  const [selectedCard, setSelectedCard] = useState({});

  const handleSelectedCard = (card) => {
    setSelectedCard(card);
  };

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const cityName = data && data.name;
        setCity(cityName);
        const temperature = parseWeatherData(data);
        setTemp(temperature);
        if (data.weather[0].id >= 700 && data.weather[0].id <= 781) {
          setSky('Clouds');
        } else if (data.weather[0].main === 'Drizzle') {
          setSky('Rain');
        } else {
          const skyCondition = data.weather[0].main;
          setSky(skyCondition);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <Header city={city} />
      <Main temp={temp} sky={sky} handleSelectedCard={handleSelectedCard} />
      <Footer />
    </div>
  );
}
