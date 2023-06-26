import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import ItemModal from '../ItemModal/ItemModal';
import AddItemModal from '../AddItemModal/AddItemModal';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';
import CurrentTemperatureUnitContext from '../../contexts/CurrentTemperatureUnitContext';
import {
  getForecastWeather,
  parseWeatherData,
  getWeatherCard,
} from '../../utils/weatherApi';
import { getClothingItems, addClothingItem, deleteCard } from '../../utils/api';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import RegisterModal from '../RegisterModal/RegisterModal';

export default function App() {
  const [tempObj, setTempObj] = useState(0);
  const [city, setCity] = useState('');
  const [cards, setCards] = useState([]);
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

  const handleConfirmationModal = () => {
    setActiveModal('confirmation');
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

  const handleAddItemSubmit = ({ name, imageUrl, weather }) => {
    addClothingItem({ name, imageUrl, weather })
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCardDelete = () => {
    deleteCard(selectedCard.id)
      .then(() => {
        setCards(cards.filter((item) => item.id !== selectedCard.id));
        closeModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (!activeModal) return;
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEsc);
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

  useEffect(() => {
    getClothingItems()
      .then((data) => {
        setCards(data);
        closeModal();
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <Header city={city} handleCreateModal={handleCreateModal} />
          <Switch>
            <Route exact path="/">
              <Main
                handleSelectedCard={handleSelectedCard}
                skyCondition={skyCondition}
                tempObj={tempObj}
                cards={cards}
              />
            </Route>
            <Route path="/profile">
              <Profile
                handleSelectedCard={handleSelectedCard}
                handleCreateModal={handleCreateModal}
                cards={cards}
              />
            </Route>
          </Switch>
          <Footer />
          {/* <RegisterModal /> */}
          {activeModal === 'create' && (
            <AddItemModal
              closeModal={closeModal}
              handleClickOutsideModal={handleClickOutsideModal}
              handleAddItemSubmit={handleAddItemSubmit}
            />
          )}
          {activeModal === 'preview' && (
            <ItemModal
              name={'preview-card'}
              selectedCard={selectedCard}
              closeModal={closeModal}
              handleClickOutsideModal={handleClickOutsideModal}
              handleConfirmationModal={handleConfirmationModal}
            />
          )}
          {activeModal === 'confirmation' && (
            <ConfirmationModal
              closeModal={closeModal}
              handleCardDelete={handleCardDelete}
            />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </BrowserRouter>
  );
}
