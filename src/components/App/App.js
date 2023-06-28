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
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import RegisterModal from '../RegisterModal/RegisterModal';
import LoginModal from '../LoginModal/LoginModal';
import { signup, signin, checkToken } from '../../utils/auth';

export default function App() {
  const [tempObj, setTempObj] = useState(0);
  const [city, setCity] = useState('');
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState({});
  const [activeModal, setActiveModal] = useState('');
  const [skyCondition, setSkyCondition] = useState();
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState('F');

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleSelectedCard = (card) => {
    setSelectedCard(card);
    setActiveModal('preview');
  };

  const handleOpenModal = (modal) => {
    setActiveModal(modal);
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

  const handleSignup = (data) => {
    setIsLoading(true);
    const { email, password } = data;
    console.log(`inside signup function | data: ${data}`);

    signup(data)
      .then((res) => {
        handleLogin({ email, password });
        console.log(res);
        closeModal();
      })
      .catch((err) => {
        console.error(`Error: ${err}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleLogin = ({ email, password }) => {
    setIsLoading(true);
    const user = { email, password };

    signin(user)
      .then((res) => {
        localStorage.setItem('jwt', res.token);
        checkToken(res.token).then((res) => {
          setCurrentUser(res);
          // console.log(currentUser);
          setIsLoggedIn(true);

          // TODO: Redirect user to /profile
        });
        closeModal();
      })
      .catch((err) => {
        console.error(`Error: ${err}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const confirmToken = () => {
    const jwt = localStorage.getItem('jwt');

    if (jwt) {
      checkToken(jwt)
        .then((res) => {
          setCurrentUser(res);
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.log('user not found', err.message);
        });
    }
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

  useEffect(() => {
    confirmToken();
  }, [localStorage.getItem('jwt')]);

  return (
    <BrowserRouter>
      <div className="App">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <Header
            city={city}
            handleOpenModal={handleOpenModal}
            isLoggedIn={isLoggedIn}
            currentUser={currentUser}
          />
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
              {isLoggedIn ? (
                <Profile
                  handleSelectedCard={handleSelectedCard}
                  handleOpenModal={handleOpenModal}
                  cards={cards}
                />
              ) : (
                <Redirect to="/" />
              )}
            </Route>
          </Switch>
          <Footer />
          {activeModal === 'signup' && (
            <RegisterModal
              name={'signup'}
              closeModal={closeModal}
              handleClickOutsideModal={handleClickOutsideModal}
              handleSignup={handleSignup}
            />
          )}
          {activeModal === 'login' && (
            <LoginModal
              name={'login'}
              closeModal={closeModal}
              handleClickOutsideModal={handleClickOutsideModal}
              handleLogin={handleLogin}
            />
          )}
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
              handleOpenModal={handleOpenModal}
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
