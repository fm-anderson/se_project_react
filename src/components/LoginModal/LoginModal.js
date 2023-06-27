import ModalWithForm from '../ModalWithForm/ModalWithForm';

export default function LoginModal({
  name,
  closeModal,
  handleClickOutsideModal,
}) {
  return (
    <ModalWithForm
      name={name}
      title={'Log in'}
      buttonText={'Log in'}
      closeModal={closeModal}
      handleClickOutsideModal={handleClickOutsideModal}
    >
      <label className="modal__label">Email</label>
      <input
        className="modal__input modal__input_type_text"
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        required
        minLength="1"
        maxLength="30"
      />
      <label className="modal__label">Password</label>
      <input
        className="modal__input modal__input_type_text"
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        required
        minLength="8"
        maxLength="30"
      />
    </ModalWithForm>
  );
}
