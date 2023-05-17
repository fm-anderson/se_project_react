import './FormAdd.css';

export default function FormAdd({
  handleNameChange,
  handleImageUrlChange,
  handleWeatherChange,
  name,
  imageUrl,
}) {
  return (
    <>
      <label className="modal__label" id="modal-namelabel">
        Name
        <input
          className="modal__input"
          id="name"
          type="text"
          name="name"
          value={name}
          minLength="1"
          maxLength="30"
          placeholder="Name"
          required
          onChange={handleNameChange}
        />
      </label>
      <label className="modal__label" id="modal-imagelabel">
        Image
        <input
          className="modal__input"
          id="modal-link"
          type="url"
          name="link"
          value={imageUrl}
          placeholder="Image URL"
          required
          onChange={handleImageUrlChange}
        />
      </label>
      <p className="modal__weather">Select the Weather type:</p>
      <div className="modal__radio-block">
        <div className="modal__radio-buttons">
          <input
            className="modal__radio-button"
            type="radio"
            id="hot"
            value="hot"
            name="weather"
            required
            onChange={handleWeatherChange}
          />
          <label className="modal__radio-description">Hot</label>
        </div>
        <div className="modal__radio-buttons">
          <input
            className="modal__radio-button"
            type="radio"
            id="warm"
            value="warm"
            name="weather"
            required
            onChange={handleWeatherChange}
          />
          <label className="modal__radio-description">Warm</label>
        </div>
        <div className="modal__radio-buttons">
          <input
            className="modal__radio-button"
            type="radio"
            id="cold"
            value="cold"
            name="weather"
            required
            onChange={handleWeatherChange}
          />
          <label className="modal__radio-description">Cold</label>
        </div>
      </div>
    </>
  );
}
