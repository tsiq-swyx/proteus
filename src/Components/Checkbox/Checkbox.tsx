import * as React from 'react';
import './Checkbox.css';
export interface Props {
  /** the state of the checkbox, true or false  */
  isChecked: boolean;
  /** this dictates what the button will say  */
  label: string;
  /** this dictates what the button will do  */
  onClick: () => void;
  /**
   * Disables onclick
   *
   * @default false
   **/
  disabled?: boolean;
}
const noop = () => {}; // tslint:disable-line
export const Checkbox = (props: Props) => {
  const { label, onClick, isChecked, disabled = false } = props;
  const disabledclass = disabled ? 'Checkbox_disabled' : '';
  return (
    <div
      className={`Checkbox ${disabledclass}`}
      onClick={!disabled ? onClick : noop}
    >
      <label className="Checkbox_label">
        <input type="checkbox" checked={isChecked} />
        <span />
      </label>
      <span>{label}</span>
    </div>
  );
};
