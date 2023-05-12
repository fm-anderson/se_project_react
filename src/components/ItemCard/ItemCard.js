import './ItemCard.css';

export default function ItemCard({ item, handleSelectedCard }) {
  return (
    <div className="card">
      <img
        className="card__image"
        src={item.link}
        alt={item.name}
        onClick={() => handleSelectedCard(item)}
      />
      <div className="card__name-container">
        <p className="card__name">{item.name}</p>
      </div>
    </div>
  );
}
