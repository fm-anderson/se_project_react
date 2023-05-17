import ItemCard from '../ItemCard/ItemCard';
import './ClothesSection.css';

export default function ClothesSection({
  handleSelectedCard,
  filteredCards,
  handleCreateModal,
}) {
  return (
    <div className="clothes-section">
      <div className="clothes-section__header">
        <h2 className="clothes-section__header-text">Your Items</h2>
        <button
          className="clothes-section__add-button"
          type="button"
          onClick={handleCreateModal}
        >
          + Add new
        </button>
      </div>
      <div className="clothes-section__cards-container">
        {filteredCards.map((item) => {
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
