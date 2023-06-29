import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './ItemModal.css';

export default function ItemModal({
  selectedCard,
  closeModal,
  name,
  handleClickOutsideModal,
  handleOpenModal,
}) {
  const { currentUser } = useContext(CurrentUserContext);
  const isOwn = selectedCard.owner === currentUser?._id;

  const capitalizeWord = (word) => {
    if (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
  };

  return (
    <div
      className={`modal modal_type_${name}`}
      onMouseDown={handleClickOutsideModal}
    >
      <div className="modal__preview-container">
        <button
          className="modal__preview-close"
          type="button"
          onClick={closeModal}
        ></button>
        <img
          className="modal__preview-image"
          src={selectedCard.imageUrl}
          alt={selectedCard.name}
        />
        <div className="modal__preview-text">
          <div>
            <div className="modal__preview-name">{selectedCard.name}</div>
            <div className="modal__preview-weather">
              Weather type: {capitalizeWord(selectedCard.weather)}
            </div>
          </div>
          {isOwn && (
            <button
              type="button"
              className="modal__preview-delete"
              onClick={() => handleOpenModal('confirmation')}
            >
              Delete item
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
