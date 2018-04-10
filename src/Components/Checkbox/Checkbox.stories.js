import React from 'react';

import { storiesOf } from '@storybook/react';
import { Checkbox } from './Checkbox';
import { wInfo } from '../../../utils';
import { text, boolean } from '@storybook/addon-knobs/react';

storiesOf('Components/Checkbox', module).addWithJSX(
  'basic Checkbox',
  wInfo(`

  ### Notes

  This is a Checkbox

  ### Usage
  ~~~js
  <Checkbox
    label={'Enroll'}
    disabled={false}
    onClick={() => alert('hello there')}
  />
  ~~~

`)(() => (
    <Checkbox
      label={text('label', 'Enroll')}
      disabled={boolean('disabled', false)}
      onClick={() => alert('hello there')}
    />
  ))
);
