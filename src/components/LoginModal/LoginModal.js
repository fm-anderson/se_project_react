import { useState } from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';

export default function LoginModal({
  name,
  closeModal,
  handleClickOutsideModal,
  handleLogin,
}) {
  const [loginValues, setLoginValues] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginValues({ ...loginValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(loginValues);
  };

  return (
    <ModalWithForm
      name={name}
      title={'Log in'}
      buttonText={'Log in'}
      closeModal={closeModal}
      handleClickOutsideModal={handleClickOutsideModal}
      handleSubmit={handleSubmit}
    >
      <label className="modal__label">Email</label>
      <input
        className="modal__input"
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        required
        minLength="1"
        maxLength="30"
        value={loginValues.email || ''}
        onChange={handleInputChange}
      />
      <label className="modal__label">Password</label>
      <input
        className="modal__input"
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        required
        minLength="8"
        maxLength="30"
        value={loginValues.password || ''}
        onChange={handleInputChange}
      />
    </ModalWithForm>
  );
}
