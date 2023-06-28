import avatar from '../../images/avatar.png';
import './SideBar.css';

export default function SideBar({ currentUser }) {
  return (
    <div className="sidebar">
      <img
        className="sidebar__userAvatar"
        src={currentUser ? currentUser.data.avatar : avatar}
        alt="avatar"
      />
      <div className="sidebar__username">
        {currentUser ? currentUser.data.name : 'Terrence Tegegne'}
      </div>
    </div>
  );
}
