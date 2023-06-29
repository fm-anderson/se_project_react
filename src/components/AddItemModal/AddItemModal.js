import { useState, useEffect } from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import FormAdd from '../FormAdd/FormAdd';
import { NewItemValidation } from '../../utils/validation';

const AddItemModal = ({
  isOpen,
  closeModal,
  handleClickOutsideModal,
  handleAddItem,
}) => {
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [weather, setWeather] = useState('');
  const [isAddFormValid, setIsAddFormValid] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    handleAddItem({ name, imageUrl, weather });
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

  NewItemValidation(name, imageUrl, weather);

  useEffect(() => {
    if (name != '' && imageUrl != '' && weather != '') {
      setIsAddFormValid(true);
    } else {
      setIsAddFormValid(false);
    }
  }, [name, imageUrl, weather]);

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
      isAddFormValid={isAddFormValid}
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
