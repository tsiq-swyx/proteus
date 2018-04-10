import * as React from 'react';
import './Checkbox.css';

export enum CheckStatus {
  unchecked = 'unchecked',
  checked = 'checked',
  mixed = 'mixed'
}
export interface Props {
  /** the state of the checkbox, checked unchecked or mixed */
  checkStatus: CheckStatus;
  /** this dictates what the button will say  */
  label: string;
  /** this dictates what the button will do  */
  onChange: () => void;
  /**
   * Disables onChange
   *
   * @default false
   **/
  disabled?: boolean;
}
const noop = () => {}; // tslint:disable-line
export const Checkbox = (props: Props) => {
  const { label, onChange, checkStatus, disabled = false } = props;
  const disabledclass = disabled ? 'Checkbox_disabled' : '';
  const checkedclass = {
    [CheckStatus.unchecked]: null,
    [CheckStatus.checked]: 'CheckStatus_checked',
    [CheckStatus.mixed]: 'CheckStatus_mixed'
  }[checkStatus];
  return (
    <div className={`Checkbox ${disabledclass}`}>
      <label className={`Checkbox_label ${checkedclass}`}>
        <input
          type="checkbox"
          checked={!!checkedclass}
          onChange={!disabled ? onChange : noop}
        />
        <span />
      </label>
      <span>{label}</span>
    </div>
  );
};
