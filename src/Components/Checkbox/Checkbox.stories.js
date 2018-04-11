import React from 'react';

import { storiesOf } from '@storybook/react';
import { Checkbox } from './Checkbox';
import { wInfo } from '../../../utils';
import { text, boolean } from '@storybook/addon-knobs/react';

const states = ['unchecked', 'checked', 'mixed'];
class TestCheckbox extends React.Component {
  state = { stateindex: 0 };
  handleChange = () => {
    // alert('button was clicked');
    this.setState(prevState => ({
      stateindex: prevState.stateindex === 2 ? 0 : prevState.stateindex + 1
    }));
  };
  render() {
    const { stateindex } = this.state;
    return (
      <Checkbox
        checkStatus={states[stateindex]}
        onChange={this.handleChange}
        disabled={this.props.disabled}
        {...this.props}
      />
    );
  }
}

storiesOf('Components/Checkbox', module).addWithJSX(
  'basic Checkbox',
  wInfo(`

  ### Notes

  This is a Checkbox

  ### Usage
  ~~~js
  <TestCheckbox
  />
  ~~~

`)(() => <TestCheckbox label="Enroll" disabled={boolean('disabled', false)} />)
);
