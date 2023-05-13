import './FormAdd.css';

export default function FormAdd() {
  return (
    <>
      <label className="modal__label" id="modal-namelabel">
        Name
        <input
          className="modal__input"
          id="modal-name"
          type="text"
          name="name"
          minLength="1"
          maxLength="30"
          placeholder="Name"
          required
        />
      </label>
      <label className="modal__label" id="modal-imagelabel">
        Image
        <input
          className="modal__input"
          id="modal-link"
          type="url"
          name="link"
          placeholder="Image URL"
          required
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
          />
          <label className="modal__radio-description">Hot</label>
        </div>
        <div className="modal__radio-buttons">
          <input
            className="modal__radio-button"
            type="radio"
            id="warm"
            value="warm"
          />
          <label className="modal__radio-description">Warm</label>
        </div>
        <div className="modal__radio-buttons">
          <input
            className="modal__radio-button"
            type="radio"
            id="cold"
            value="cold"
          />
          <label className="modal__radio-description">Cold</label>
        </div>
      </div>
    </>
  );
}
