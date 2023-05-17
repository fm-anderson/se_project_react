import ClothesSection from '../ClothesSection/ClothesSection';
import SideBar from '../SideBar/SideBar';
import { defaultClothingItems } from '../../utils/constants';
import './Profile.css';

export default function Profile({
  tempObj,
  handleSelectedCard,
  handleCreateModal,
}) {
  const weatherType = getWeatherType();

  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  function getWeatherType() {
    if (tempObj?.temp?.main >= 86) {
      return 'hot';
    } else if (tempObj?.main >= 66 && tempObj?.temp?.main <= 85) {
      return 'warm';
    } else if (tempObj?.temp?.main <= 65) {
      return 'cold';
    }
  }

  return (
    <div className="profile">
      <SideBar />
      <ClothesSection
        handleSelectedCard={handleSelectedCard}
        filteredCards={filteredCards}
        handleCreateModal={handleCreateModal}
      />
    </div>
  );
}
