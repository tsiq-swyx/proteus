import React from 'react';

import { storiesOf } from '@storybook/react';
import { Prototype } from './Prototype';
import { wInfo } from '../../utils';
import { text, boolean } from '@storybook/addon-knobs/react';

storiesOf('Components/Prototype', module).addWithJSX(
  'basic Prototype',
  wInfo(`

  ### Notes

  This is a Prototype

  ### Usage
  ~~~js
  <Prototype
    label={'Enroll'}
    disabled={false}
    onClick={() => alert('hello there')}
  />
  ~~~

`)(() => (
    <Prototype
      label={text('label', 'Enroll')}
      disabled={boolean('disabled', false)}
      onClick={() => alert('hello there')}
    />
  ))
);
