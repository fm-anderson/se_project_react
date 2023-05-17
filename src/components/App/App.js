import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import FormAdd from '../FormAdd/FormAdd';
import ItemModal from '../ItemModal/ItemModal';
import Profile from '../Profile/Profile';
import CurrentTemperatureUnitContext from '../../contexts/CurrentTemperatureUnitContext';
import {
  getForecastWeather,
  parseWeatherData,
  getWeatherCard,
} from '../../utils/weatherApi';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

export default function App() {
  const [tempObj, setTempObj] = useState(0);
  const [city, setCity] = useState('');
  const [selectedCard, setSelectedCard] = useState({});
  const [activeModal, setActiveModal] = useState('');
  const [skyCondition, setSkyCondition] = useState();
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState('F');

  const handleSelectedCard = (card) => {
    setSelectedCard(card);
    setActiveModal('preview');
  };

  const handleCreateModal = () => {
    setActiveModal('create');
  };

  const closeModal = () => {
    setActiveModal('');
  };

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === 'F'
      ? setCurrentTemperatureUnit('C')
      : setCurrentTemperatureUnit('F');
  };

  useEffect(() => {
    if (!activeModal) return;
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEsc);
    // clean up function
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [activeModal]);

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const cityName = data && data.name;
        setCity(cityName);
        const temp = parseWeatherData(data);
        setTempObj(temp);
        const weatherCardImg = getWeatherCard(data);
        setSkyCondition(weatherCardImg);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit }}
        >
          <Header
            city={city}
            handleCreateModal={handleCreateModal}
            handleToggleSwitchChange={handleToggleSwitchChange}
          />
          <Switch>
            <Route exact path="/">
              <Main
                handleSelectedCard={handleSelectedCard}
                skyCondition={skyCondition}
                tempObj={tempObj}
              />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
          </Switch>
          <Footer />
          {activeModal === 'create' && (
            <ModalWithForm
              title={'New garment'}
              buttonText={'Add garment'}
              closeModal={closeModal}
              name={'create'}
            >
              <FormAdd />
            </ModalWithForm>
          )}
          {activeModal === 'preview' && (
            <ItemModal selectedCard={selectedCard} closeModal={closeModal} />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </BrowserRouter>
  );
}
