import ClothesSection from '../ClothesSection/ClothesSection';
import SideBar from '../SideBar/SideBar';
import './Profile.css';

export default function Profile({
  cards,
  handleSelectedCard,
  handleOpenModal,
  handleLike,
  handleSignOut,
}) {
  return (
    <div className="profile">
      <SideBar
        handleOpenModal={handleOpenModal}
        handleSignOut={handleSignOut}
      />
      <ClothesSection
        cards={cards}
        handleSelectedCard={handleSelectedCard}
        handleOpenModal={handleOpenModal}
        handleLike={handleLike}
      />
    </div>
  );
}
