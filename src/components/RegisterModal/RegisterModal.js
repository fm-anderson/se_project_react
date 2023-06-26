import ModalWithForm from '../ModalWithForm/ModalWithForm';
import './RegisterModal.css';

export default function RegisterModal({
  name,
  closeModal,
  handleClickOutsideModal,
}) {
  return (
    <ModalWithForm
      name={name}
      title={'Sign up'}
      buttonText={'Next'}
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
        minLength="9"
        maxLength="30"
      />

      <label className="modal__label">Name</label>
      <input
        className="modal__input modal__input_type_text"
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        required
        minLength="2"
        maxLength="30"
      />

      <label className="modal__label">Avatar URL</label>
      <input
        className="modal__input modal__input_type_text"
        type="url"
        name="avatar"
        id="avatar"
        placeholder="Avatar URL"
        required
      />
    </ModalWithForm>
  );
}
