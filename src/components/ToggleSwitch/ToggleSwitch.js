import { useState, useContext } from 'react';
import './ToggleSwitch.css';
import CurrentTemperatureUnitContext from '../../contexts/CurrentTemperatureUnitContext';

export default function ToggleSwitch() {
  const [isChecked, setIsChecked] = useState(false);
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );

  const unitCheck = () => {
    if (currentTemperatureUnit === 'C') {
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }
    handleToggleSwitchChange();
  };

  return (
    <div className="switch">
      <input
        className="switch__input"
        id={'toggle_switch'}
        type="checkbox"
        onChange={unitCheck}
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
