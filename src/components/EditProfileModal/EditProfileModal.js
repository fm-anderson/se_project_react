import { useContext, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ModalWithForm from '../ModalWithForm/ModalWithForm';

export default function EditProfileModal({
  handleUpdateProfile,
  name,
  handleClickOutsideModal,
  closeModal,
}) {
  const { currentUser } = useContext(CurrentUserContext);
  const [profileValues, setProfileValues] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileValues({ ...profileValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateProfile(profileValues);
  };

  return (
    <ModalWithForm
      title={'Edit Profile'}
      name={name}
      buttonText={'Save changes'}
      handleSubmit={handleSubmit}
      closeModal={closeModal}
      handleClickOutsideModal={handleClickOutsideModal}
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
