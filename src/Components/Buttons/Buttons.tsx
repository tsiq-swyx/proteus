import * as React from 'react';
import './Buttons.css';

export enum ButtonSizes {
  default = 'default',
  small = 'small',
  large = 'large'
}

export enum ButtonTypes {
  primary = 'primary',
  success = 'success',
  destructive = 'destructive',
  subdued = 'subdued',
  ghost = 'ghost'
}

export interface Props {
  /** this dictates what the button will say  */
  label: string;
  /** this dictates what the button will do  */
  onClick: () => void;
  /**
   * Options for the button styling
   *
   * @default {size: default, type: primary}
   **/
  type?: {
    size: ButtonSizes;
    type: ButtonTypes;
  };
  /**
   * Disables onclick
   *
   * @default false
   **/
  disabled?: boolean;
}
const noop = () => {}; // tslint:disable-line
const defaulttype = {
  size: ButtonSizes.default,
  type: ButtonTypes.primary
};
export const Button = (props: Props) => {
  const {
    label,
    onClick,
    type: { size = defaulttype.size, type = defaulttype.type } = defaulttype,
    disabled = false
  } = props;
  const disabledclass = disabled ? 'Button-disabled' : '';

  return (
    <button
      className={`Button Button-${size} Button-${type} ${disabledclass}`}
      onClick={!disabled ? onClick : noop}
    >
      {label}
    </button>
  );
};
