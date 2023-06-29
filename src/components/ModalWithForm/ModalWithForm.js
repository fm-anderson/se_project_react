import './ModalWithForm.css';

export default function ModalWithForm({
  children,
  title,
  closeModal,
  buttonText,
  name,
  handleClickOutsideModal,
  handleSubmit,
  isRegisterFormValid,
  isFormValid,
}) {
  return (
    <div
      className={`modal modal_type_${name}`}
      onMouseDown={handleClickOutsideModal}
    >
      <div className="modal__content">
        <button className="modal__close" type="button" onClick={closeModal} />
        <h3 className="modal__title">{title}</h3>
        <form
          className="modal__form"
          name={`${name}-form`}
          onSubmit={handleSubmit}
        >
          {children}
          <div>
            <button
              className={`modal__submit ${
                isFormValid || isRegisterFormValid ? 'modal__submit-valid' : ''
              }`}
              type="submit"
            >
              {buttonText}
            </button>
            <button className="modal__or-button">or Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}
