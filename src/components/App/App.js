import './App.css';
import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import FormAdd from '../FormAdd/FormAdd';
import ItemModal from '../ItemModal/ItemModal';
import { getForecastWeather, parseWeatherData } from '../../utils/weatherApi';

export default function App() {
  const [temp, setTemp] = useState(0);
  const [sky, setSky] = useState('Clear');
  const [city, setCity] = useState('');
  const [selectedCard, setSelectedCard] = useState({});
  const [activeModal, setActiveModal] = useState('');

  const handleSelectedCard = (card) => {
    setSelectedCard(card);
    setActiveModal('preview');
  };

  const handleCreateModal = () => {
    setActiveModal('create');
  };

  const onClose = () => {
    setActiveModal('');
  };

  const handleEsc = (e) => {
    if (e.keyCode === 27) {
      setActiveModal('');
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEsc);
  }, [activeModal]);

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
      <Header city={city} handleCreateModal={handleCreateModal} />
      <Main temp={temp} sky={sky} handleSelectedCard={handleSelectedCard} />
      <Footer />
      {activeModal === 'create' && (
        <ModalWithForm
          title={'New garment'}
          buttonText={'Add garment'}
          onClose={onClose}
          name={'create'}
        >
          <FormAdd />
        </ModalWithForm>
      )}
      {activeModal === 'preview' && (
        <ItemModal selectedCard={selectedCard} onClose={onClose} />
      )}
    </div>
  );
}
