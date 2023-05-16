import headerLogo from '../../images/logoHeader.png';
import avatar from '../../images/avatar.png';
import './Header.css';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';

export default function Header({ city, handleCreateModal }) {
  const currentDate = new Date().toLocaleString('default', {
    month: 'long',
    day: 'numeric',
  });

  return (
    <header className="header">
      <div className="header__info-container">
        <img className="header__logo" src={headerLogo} alt="logo" />
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
        <div className="header__username">Terrence Tegegne</div>
        <img className="header__useravatar" src={avatar} alt="avatar" />
      </div>
    </header>
  );
}
