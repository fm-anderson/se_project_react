import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import headerLogo from '../../images/logoHeader.png';
import avatar from '../../images/avatar.png';
import './Header.css';

export default function Header({
  city,
  handleCreateModal,
  handleToggleSwitchChange,
}) {
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
        <ToggleSwitch handleToggleSwitchChange={handleToggleSwitchChange} />
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
