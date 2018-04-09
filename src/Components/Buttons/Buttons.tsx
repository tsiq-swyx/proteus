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

export const PrimaryButton = (props: Props) => (
  <Button
    type={{ type: ButtonTypes.primary, size: ButtonSizes.default }}
    {...props}
  />
);
export const SuccessButton = (props: Props) => (
  <Button
    type={{ type: ButtonTypes.success, size: ButtonSizes.default }}
    {...props}
  />
);
export const DestructiveButton = (props: Props) => (
  <Button
    type={{ type: ButtonTypes.destructive, size: ButtonSizes.default }}
    {...props}
  />
);
export const SubduedButton = (props: Props) => (
  <Button
    type={{ type: ButtonTypes.subdued, size: ButtonSizes.default }}
    {...props}
  />
);
export const GhostButton = (props: Props) => (
  <Button
    type={{ type: ButtonTypes.ghost, size: ButtonSizes.default }}
    {...props}
  />
);
