import ModalWithForm from '../ModalWithForm/ModalWithForm';
import './RegisterModal.css';

export default function RegisterModal() {
  return (
    <ModalWithForm title={'Sign up'} buttonText={'Next'}>
      <label className="modal__label">
        Email*
        <input
          className="modal__input"
          type="email"
          placeholder="Email"
          required
          name="email"
          id="inputEmail"
          minLength="1"
          maxLength="30"
        />
      </label>
      <label className="modal__label">
        Password*
        <input
          className="modal__input"
          placeholder="Password"
          required
          name="password"
          id="inputPassword"
          type="password"
        />
      </label>
      <label className="modal__label">
        Name*
        <input
          className="modal__input"
          type="text"
          placeholder="Name"
          name="name"
          id="inputName"
          required
          minLength="1"
          maxLength="30"
        />
      </label>
      <label className="modal__label">
        Avatar
        <input
          className="modal__input"
          placeholder="Avatar URL"
          name="avatarUrl"
          id="inputAvatarUrl"
          type="url"
        />
      </label>
    </ModalWithForm>
  );
}
