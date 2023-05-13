import './ItemModal.css';

export default function ItemModal({ selectedCard, closeModal }) {
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
            Weather type: {selectedCard.weather}
          </div>
        </div>
      </div>
    </div>
  );
}
