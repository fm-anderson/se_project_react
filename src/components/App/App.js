import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import ItemModal from '../ItemModal/ItemModal';
import Profile from '../Profile/Profile';
import AddItemModal from '../AddItemModal/AddItemModal';
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

  const handleClickOutsideModal = (e) => {
    if (e.target.classList.contains('modal')) {
      closeModal();
    }
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
              <Profile
                handleSelectedCard={handleSelectedCard}
                handleCreateModal={handleCreateModal}
                tempObj={tempObj}
              />
            </Route>
          </Switch>
          <Footer />
          {activeModal === 'create' && (
            <AddItemModal
              closeModal={closeModal}
              handleClickOutsideModal={handleClickOutsideModal}
            />
          )}
          {activeModal === 'preview' && (
            <ItemModal
              name={'preview-card'}
              selectedCard={selectedCard}
              closeModal={closeModal}
              handleClickOutsideModal={handleClickOutsideModal}
            />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </BrowserRouter>
  );
}
