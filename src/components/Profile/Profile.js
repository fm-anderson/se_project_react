import ClothesSection from '../ClothesSection/ClothesSection';
import SideBar from '../SideBar/SideBar';
import './Profile.css';

export default function Profile({
  cards,
  handleSelectedCard,
  handleOpenModal,
  currentUser,
}) {
  return (
    <div className="profile">
      <SideBar currentUser={currentUser} />
      <ClothesSection
        cards={cards}
        handleSelectedCard={handleSelectedCard}
        handleOpenModal={handleOpenModal}
      />
    </div>
  );
}
