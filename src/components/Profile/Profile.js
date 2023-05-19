import ClothesSection from '../ClothesSection/ClothesSection';
import SideBar from '../SideBar/SideBar';
import './Profile.css';

export default function Profile({
  cards,
  handleSelectedCard,
  handleCreateModal,
}) {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection
        cards={cards}
        handleSelectedCard={handleSelectedCard}
        handleCreateModal={handleCreateModal}
      />
    </div>
  );
}
