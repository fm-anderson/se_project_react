import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import headerLogo from '../../images/logoHeader.png';
import avatar from '../../images/avatar.png';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header({ city, handleCreateModal }) {
  const currentDate = new Date().toLocaleString('default', {
    month: 'long',
    day: 'numeric',
  });

  return (
    <header className="header">
      <div className="header__info-container">
        <Link to="/">
          <img className="header__logo" src={headerLogo} alt="logo" />
        </Link>
        <p className="header__info">
          {currentDate}, {city}
        </p>
      </div>
      <div className="header__user-container">
        <ToggleSwitch />
        <button
          className="header__add-button"
          type="button"
          onClick={handleCreateModal}
        >
          + Add Clothes
        </button>
        <Link className="header__userinfo-link" to="/profile">
          <div className="header__username">Terrence Tegegne</div>
          <img className="header__useravatar" src={avatar} alt="avatar" />
        </Link>
      </div>
    </header>
  );
}
