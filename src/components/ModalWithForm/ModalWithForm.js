import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './ModalWithForm.css';

export default function ModalWithForm({
  children,
  title,
  closeModal,
  buttonText,
  orButtonText,
  name,
  handleClickOutsideModal,
  handleSubmit,
  isRegisterFormValid,
  isFormValid,
  handleOpenModal,
  isAddFormValid,
  isEditProfileValid,
}) {
  const { isLoggedIn } = useContext(CurrentUserContext);

  const handleOrClick = (modal) => {
    switch (modal) {
      case 'signup':
        handleOpenModal('login');
        break;
      case 'login':
        handleOpenModal('signup');
        break;
      default:
        closeModal();
    }
  };

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
            {isLoggedIn ? (
              <button
                className={`modal__logged-user ${
                  isAddFormValid || isEditProfileValid
                    ? 'modal__logged-user-valid'
                    : ''
                }`}
              >
                {buttonText}
              </button>
            ) : (
              <>
                <button
                  className={`modal__submit ${
                    isFormValid || isRegisterFormValid
                      ? 'modal__submit-valid'
                      : ''
                  }`}
                  type="submit"
                >
                  {buttonText}
                </button>
                <button
                  type="button"
                  className="modal__or-button"
                  onClick={() => handleOrClick(name)}
                >
                  {orButtonText}
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
