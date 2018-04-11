import * as React from 'react';

import './Radio.css';
export interface Props {
  /** array of choices  */
  choices: string[];
  /** selected value  */
  value: string;
  /** callback when it changes  */
  onChange: () => void;
  /**
   * Disables onclick
   *
   * @default false
   **/
  disabled?: boolean;
}
const noop = () => {}; // tslint:disable-line
export const Radio = (props: Props) => {
  const { choices, value, onChange, disabled = false } = props;
  const disabledclass = disabled ? 'Radio_disabled' : '';
  return (
    <form className={disabledclass}>
      {choices.map(choice => (
        <label key={choice} className="Radio_container">
          <input
            type="radio"
            name="fruit"
            value={choice}
            checked={choice === value}
            onChange={disabled ? noop : onChange}
          />
          {choice}
          <span className="Radio_checkmark" />
        </label>
      ))}
    </form>
  );
};
