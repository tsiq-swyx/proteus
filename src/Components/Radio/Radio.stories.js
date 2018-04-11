import React from 'react';

import { storiesOf } from '@storybook/react';
import { Radio } from './Radio';
import { wInfo } from '../../../utils';
import { text, boolean } from '@storybook/addon-knobs/react';

class TestRadio extends React.Component {
  state = { value: this.props.initialValue };
  onChange = e => this.setState({ value: e.target.value });
  render() {
    const { choices, onChange, disabled } = this.props;
    return (
      <Radio
        choices={choices}
        value={this.state.value}
        onChange={this.onChange}
        disabled={disabled}
      />
    );
  }
}
const choices = ['Nautilus', 'Cuttlefish', 'Octopus'];

storiesOf('Components/Radio', module).addWithJSX(
  'basic Radio',
  wInfo(`

  ### Notes

  This is a Radio. it doesnt have internal state so clicking wont change anything

  ### Usage
  ~~~js
  <Radio
    label={'Enroll'}
    disabled={false}
    onClick={() => alert('hello there')}
  />
  ~~~

`)(() => {
    return (
      <div style={{ display: 'flex' }}>
        <h3>basic </h3>
        <Radio
          choices={choices}
          value={choices[0]}
          onChange={() => alert('hi')}
        />
        <div style={{ width: 100 }} />
        <h3>working </h3>
        <TestRadio
          choices={choices}
          initialValue={choices[0]}
          disabled={boolean('disabled', false)}
        />
      </div>
    );
  })
);
