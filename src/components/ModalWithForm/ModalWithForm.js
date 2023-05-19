import './ModalWithForm.css';

export default function ModalWithForm({
  children,
  title,
  closeModal,
  buttonText,
  name,
  handleClickOutsideModal,
  handleSubmit,
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
          <button className="modal__submit" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
