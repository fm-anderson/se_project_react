import avatar from '../../images/avatar.png';
import './SideBar.css';

export default function SideBar() {
  return (
    <div className="sidebar">
      <img className="sidebar__userAvatar" src={avatar} alt="avatar" />
      <div className="sidebar__username">Terrence Tegegne</div>
    </div>
  );
}
