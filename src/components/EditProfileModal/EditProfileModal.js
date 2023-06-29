import { useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import { UpdateProfileValidation } from '../../utils/validation';

export default function EditProfileModal({
  handleUpdateProfile,
  name,
  handleClickOutsideModal,
  closeModal,
}) {
  const { currentUser } = useContext(CurrentUserContext);
  const [profileValues, setProfileValues] = useState({});
  const [isEditProfileValid, setIsEditProfileValid] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileValues({ ...profileValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateProfile(profileValues);
  };

  useEffect(() => {
    const { name, avatar } = profileValues;
    if (name && avatar) {
      setIsEditProfileValid(UpdateProfileValidation(name, avatar));
    } else {
      setIsEditProfileValid(false);
    }
  }, [profileValues]);

  return (
    <ModalWithForm
      title={'Edit Profile'}
      name={name}
      buttonText={'Save Changes'}
      handleSubmit={handleSubmit}
      closeModal={closeModal}
      handleClickOutsideModal={handleClickOutsideModal}
      isEditProfileValid={isEditProfileValid}
    >
      <label className="modal__label">Name</label>
      <input
        className="modal__input"
        type="text"
        name="name"
        id="name"
        placeholder={currentUser.name}
        minLength="1"
        maxLength="30"
        required
        value={profileValues.name || ''}
        onChange={handleInputChange}
      />
      <label className="modal__label">Avatar URL</label>
      <input
        className="modal__input"
        type="url"
        name="avatar"
        id="avatar"
        placeholder={currentUser.avatar}
        required
        value={profileValues.avatar || ''}
        onChange={handleInputChange}
      />
    </ModalWithForm>
  );
}
