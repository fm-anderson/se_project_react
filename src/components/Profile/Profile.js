import ClothesSection from '../ClothesSection/ClothesSection';
import SideBar from '../SideBar/SideBar';
import './Profile.css';

export default function Profile({
  cards,
  handleSelectedCard,
  handleOpenModal,
}) {
  return (
    <div className="profile">
      <SideBar handleOpenModal={handleOpenModal} />
      <ClothesSection
        cards={cards}
        handleSelectedCard={handleSelectedCard}
        handleOpenModal={handleOpenModal}
      />
    </div>
  );
}
