import * as React from 'react';

import './Input.css';

export interface Props {
  /** value of the field */
  value: string;
  /** disabled or not */
  disabled?: boolean;
  /** label of the field */
  label?: string;
  /** size of the input field in characters */
  size?: number;
  /** subtitle of the field */
  subtitle?: string;
  /** if you leave placeholder empty, it takes the label and prefixes with "Enter"  */
  placeholder?: string | null;
  /**
   * Options for the input styling: ['bw', 'border', 'full']
   *
   * @default bw
   **/
  styleOption?: InputStyleOptions;
  /**
   * Color for the styling if 'border' or 'full' is selected under options. ['brand','danger','success','warning']
   *
   * @default primary
   **/
  styleColor?: InputStyleColor;
  /** optional onchange handler - should mutate the value of the field  */
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

export interface State {
  value: string;
}
export enum InputStyleColor {
  brand = 'brand',
  danger = 'danger',
  success = 'success',
  warning = 'warning'
}
export enum InputStyleOptions {
  bw = 'bw',
  border = 'border',
  full = 'full'
}

export class Input extends React.Component<Props, State> {
  render() {
    let {
      label = null,
      subtitle = null,
      placeholder = null,
      onChange,
      value,
      size,
      styleOption = InputStyleOptions.bw,
      styleColor = InputStyleColor.brand,
      disabled = false
    } = this.props;
    if (!placeholder && label) {
      placeholder = 'Enter ' + label.toLowerCase();
    }
    const disabledClass = disabled ? 'Input-disabled' : '';
    const styleClass = {
      [InputStyleOptions.bw]: '',
      [InputStyleOptions.border]: 'Input-border',
      [InputStyleOptions.full]: 'Input-full'
    }[styleOption];
    const inputColor = {
      '--input-color': `var(--${styleColor}-default)`,
      '--input-color-light': `var(--${styleColor}-light)`,
      '--input-color-dark': `var(--${styleColor}-dark)`
    };
    return (
      <div
        className={`Input ${disabledClass} ${styleClass}`}
        style={inputColor}
      >
        {label && (
          <span className={`InputLabel ${disabledClass}`}>{label}</span>
        )}
        <input
          type="text"
          placeholder={placeholder || ''}
          onChange={onChange}
          value={value}
          size={size}
          disabled={disabled}
        />
        {subtitle && (
          <span className={`InputSubtitle ${disabledClass} ${styleClass}`}>
            {subtitle}
          </span>
        )}
      </div>
    );
  }
}
