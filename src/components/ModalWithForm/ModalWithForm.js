import './ModalWithForm.css';

export default function ModalWithForm({
  children,
  title,
  closeModal,
  buttonText,
  name,
}) {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <button className="modal__close" type="button" onClick={closeModal} />
        <h3 className="modal__title">{title}</h3>
        <form className="modal__form" name={`${name}-form`}>
          {children}
          <button className="modal__submit" type="submit" disabled>
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
