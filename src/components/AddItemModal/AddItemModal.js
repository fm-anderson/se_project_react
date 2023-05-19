import { useState, useEffect } from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import FormAdd from '../FormAdd/FormAdd';

const AddItemModal = ({
  isOpen,
  closeModal,
  handleClickOutsideModal,
  handleAddItemSubmit,
}) => {
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [weather, setWeather] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    handleAddItemSubmit({ name, imageUrl, weather });
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleImageUrlChange(e) {
    setImageUrl(e.target.value);
  }

  function handleWeatherChange(e) {
    setWeather(e.target.value);
  }

  useEffect(() => {
    setName('');
    setImageUrl('');
    setWeather('');
  }, [isOpen]);

  return (
    <ModalWithForm
      name="create"
      title={'New garment'}
      buttonText={'Add Garment'}
      handleSubmit={handleSubmit}
      closeModal={closeModal}
      handleClickOutsideModal={handleClickOutsideModal}
    >
      <FormAdd
        handleNameChange={handleNameChange}
        handleImageUrlChange={handleImageUrlChange}
        handleWeatherChange={handleWeatherChange}
        name={name}
        imageUrl={imageUrl}
      />
    </ModalWithForm>
  );
};

export default AddItemModal;
