import './ConfirmationModal.css';

export default function ConfirmationModal({ closeModal, handleCardDelete }) {
  return (
    <div className="modal modal__confirm-container">
      <button
        className="modal__close"
        type="button"
        onClick={closeModal}
      ></button>
      <div className="modal__confirm-message">
        <p className="modal__confirm-text">
          Are you sure you want to delete this item?
        </p>
        <p className="modal__confirm-text">This action is irreversable.</p>
      </div>
      <p className="modal__confirm-yes" onClick={handleCardDelete}>
        Yes, delete item
      </p>
      <p className="modal__confirm-cancel" onClick={closeModal}>
        Cancel
      </p>
    </div>
  );
}
