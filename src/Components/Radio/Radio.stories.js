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
      <div>
        Selected value: {this.state.value}
        <Radio
          choices={choices}
          value={this.state.value}
          onChange={this.onChange}
          disabled={disabled}
        />
      </div>
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
    choices={choices}
    value={choices[0]}
    onChange={() => alert('hi')}
  />
  ~~~

`)(() => {
    return (
      <div style={{ display: 'flex' }}>
        <div>
          <h3>basic </h3>
          <Radio
            choices={choices}
            value={choices[0]}
            onChange={() => alert('hi')}
          />
        </div>
        <div style={{ width: 100 }} />
        <div>
          <h3>working </h3>
          <TestRadio
            choices={choices}
            initialValue={choices[0]}
            disabled={boolean('disabled', false)}
          />
        </div>
      </div>
    );
  })
);
