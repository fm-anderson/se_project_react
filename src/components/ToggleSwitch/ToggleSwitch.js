import { useState } from 'react';
import './ToggleSwitch.css';

export default function ToggleSwitch() {
  const [isChecked, setIsChecked] = useState(false);

  function handleToggleSwitchChange() {
    setIsChecked(!isChecked);
  }

  return (
    <div className="switch">
      <input
        className="switch__input"
        id={'toggle_switch'}
        type="checkbox"
        onChange={handleToggleSwitchChange}
      />
      <label className="switch__label" htmlFor={'toggle_switch'}>
        <span className={`switch__button`} />
        <div className="switch__states">
          <span
            className={`switch__f ${
              isChecked ? 'switch__grey' : 'switch__white'
            }`}
          >
            F
          </span>
          <span
            className={`switch__c ${
              !isChecked ? 'switch__grey' : 'switch__white'
            }`}
          >
            C
          </span>
        </div>
      </label>
    </div>
  );
}
