import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './SideBar.css';

export default function SideBar({ handleOpenModal, handleSignOut }) {
  const { currentUser, noAvatar } = useContext(CurrentUserContext);

  return (
    <div className="sidebar">
      <div className="sidebar__info">
        {currentUser ? (
          <img
            className="header__useravatar"
            src={currentUser.avatar}
            alt="avatar"
          />
        ) : (
          <p className="header__noavatar">{noAvatar}</p>
        )}
        <div className="sidebar__username">
          {currentUser ? currentUser.name : 'Please, log in.'}
        </div>
      </div>
      <div className="sidebar__container">
        <button
          className="sidebar__edit-profile sidebar__button"
          type="button"
          onClick={() => handleOpenModal('editProfile')}
        >
          Change Profile Data
        </button>
        <button
          className="sidebar__signout sidebar__button"
          type="button"
          onClick={handleSignOut}
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
