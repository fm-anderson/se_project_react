import { useEffect, useState } from 'react';
import { LoginValidation } from '../../utils/validation';
import ModalWithForm from '../ModalWithForm/ModalWithForm';

export default function LoginModal({
  name,
  closeModal,
  handleClickOutsideModal,
  handleLogin,
  setInvalidPassword,
  invalidPassword,
}) {
  const [loginValues, setLoginValues] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginValues({ ...loginValues, [name]: value });
    setInvalidPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(loginValues);
  };

  useEffect(() => {
    const { email, password } = loginValues;
    if (email && password) {
      setIsFormValid(LoginValidation(email, password));
    } else {
      setIsFormValid(false);
    }
  }, [loginValues]);

  return (
    <ModalWithForm
      name={name}
      title={'Log in'}
      buttonText={'Log in'}
      closeModal={closeModal}
      handleClickOutsideModal={handleClickOutsideModal}
      handleSubmit={handleSubmit}
      isFormValid={isFormValid}
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
      <label
        className={`modal__label ${
          invalidPassword ? 'modal__label-invalid' : ''
        }`}
      >
        Password
      </label>
      <input
        className={`modal__input ${
          invalidPassword ? 'modal__input-invalid' : ''
        }`}
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
