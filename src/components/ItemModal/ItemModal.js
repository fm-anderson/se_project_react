import './ItemModal.css';

export default function ItemModal({ selectedCard, closeModal }) {
  const capitalizeWord = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    <div className={`modal`}>
      <div className="modal__container">
        <button
          className="modal__preview-close"
          type="button"
          onClick={closeModal}
        ></button>
        <img
          className="modal__preview-image"
          src={selectedCard.link}
          alt={selectedCard.name}
        />
        <div className="modal__preview-text">
          <div className="modal__preview-name">{selectedCard.name}</div>
          <div className="modal__preview-weather">
            Weather type: {capitalizeWord(selectedCard.weather)}
          </div>
        </div>
      </div>
    </div>
  );
}
