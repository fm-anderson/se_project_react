import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './SideBar.css';

export default function SideBar() {
  const { currentUser, noAvatar } = useContext(CurrentUserContext);

  return (
    <div className="sidebar">
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
  );
}
