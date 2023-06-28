import { useContext } from 'react';
import ItemCard from '../ItemCard/ItemCard';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './ClothesSection.css';

export default function ClothesSection({
  cards,
  handleSelectedCard,
  handleOpenModal,
}) {
  const { currentUser } = useContext(CurrentUserContext);

  const filteredCards = cards.filter((item) => {
    return item.owner === currentUser?._id;
  });

  return (
    <div className="clothes-section">
      <div className="clothes-section__header">
        <h2 className="clothes-section__header-text">Your Items</h2>
        <button
          className="clothes-section__add-button"
          type="button"
          onClick={() => handleOpenModal('create')}
        >
          + Add new
        </button>
      </div>
      <div className="clothes-section__cards-container">
        {Array.isArray(filteredCards) &&
          filteredCards.map((item) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                handleSelectedCard={handleSelectedCard}
              />
            );
          })}
      </div>
    </div>
  );
}
