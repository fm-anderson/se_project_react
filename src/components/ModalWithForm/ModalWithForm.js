import './ModalWithForm.css';

export default function ModalWithForm({
  children,
  title,
  onClose,
  buttonText,
  name,
}) {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <button
          className="modal__close"
          type="button"
          onClick={onClose}
        ></button>
        <h3 className="modal__title">{title}</h3>
        <form className="modal__form" name={`${name}-form`}>
          {children}
        </form>
        <button className="modal__submit" type="submit" disabled>
          {buttonText}
        </button>
      </div>
    </div>
  );
}
