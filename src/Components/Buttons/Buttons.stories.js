import React from 'react';

import { storiesOf } from '@storybook/react';
import { wInfo } from '../../../utils';

import '../../Colors/Colors.css';

import { Button } from './Buttons';

const Section = props => (
  <div
    style={{
      marginTop: 10,
      marginBottom: 30,
      display: 'inline-grid',
      gridTemplateColumns: '1fr',
      gridRowGap: '10px'
    }}
  >
    {props.children}
  </div>
);

storiesOf('Components/Buttons', module)
  .addWithJSX(
    'default size',
    wInfo(`

  ### Notes

  These are all the color varieties for the default button size

  ### Usage

  ~~~
  <Button label="Action" type={{ type: 'success' }} />
  <Button label="Action" type={{ type: 'subdued' }} />
  <Button label="Action" type={{ type: 'ghost' }} />
  <Button label="Action" type={{ type: 'destructive' }} />
  <Button label="Action" />
  ~~~

`)(() => (
      <Section>
        <Button label="Action" type={{ type: 'success' }} />
        <Button label="Action" type={{ type: 'subdued' }} />
        <Button label="Action" type={{ type: 'ghost' }} />
        <Button label="Action" type={{ type: 'destructive' }} />
        <Button label="Action" />
      </Section>
    ))
  )
  .addWithJSX(
    'large size',
    wInfo(`

  ### Notes

  These are all the color varieties for the large button size

  ### Usage

  ~~~
  <Button label="Action" type={{ type: 'success', size: 'large' }} />
  <Button label="Action" type={{ type: 'subdued', size: 'large' }} />
  <Button label="Action" type={{ type: 'ghost', size: 'large' }} />
  <Button label="Action" type={{ type: 'destructive', size: 'large' }} />
  <Button label="Action" type={{ size: 'large' }} />
  ~~~

`)(() => (
      <Section>
        <Button label="Action" type={{ type: 'success', size: 'large' }} />
        <Button label="Action" type={{ type: 'subdued', size: 'large' }} />
        <Button label="Action" type={{ type: 'ghost', size: 'large' }} />
        <Button label="Action" type={{ type: 'destructive', size: 'large' }} />
        <Button label="Action" type={{ size: 'large' }} />
      </Section>
    ))
  )
  .addWithJSX(
    'small size',
    wInfo(`

  ### Notes

  These are all the color varieties for the small button size

  ### Usage

  ~~~
  <Button label="Action" type={{ type: 'success', size: 'small' }} />
  <Button label="Action" type={{ type: 'subdued', size: 'small' }} />
  <Button label="Action" type={{ type: 'ghost', size: 'small' }} />
  <Button label="Action" type={{ type: 'destructive', size: 'small' }} />
  <Button label="Action" type={{ size: 'small' }} />
  ~~~

`)(() => (
      <Section>
        <Button label="Action" type={{ type: 'success', size: 'small' }} />
        <Button label="Action" type={{ type: 'subdued', size: 'small' }} />
        <Button label="Action" type={{ type: 'ghost', size: 'small' }} />
        <Button label="Action" type={{ type: 'destructive', size: 'small' }} />
        <Button label="Action" type={{ size: 'small' }} />
      </Section>
    ))
  )
  .addWithJSX(
    'disabled',
    wInfo(`

  ### Notes

  These are all the color varieties for the disabled button

  ### Usage

  ~~~
  <Button label="Action" disabled type={{ type: 'success' }} />
  <Button label="Action" disabled type={{ type: 'subdued' }} />
  <Button label="Action" disabled type={{ type: 'ghost' }} />
  <Button label="Action" disabled type={{ type: 'destructive' }} />
  <Button label="Action" disabled />
  ~~~

`)(() => (
      <Section>
        <Button label="Action" disabled type={{ type: 'success' }} />
        <Button label="Action" disabled type={{ type: 'subdued' }} />
        <Button label="Action" disabled type={{ type: 'ghost' }} />
        <Button label="Action" disabled type={{ type: 'destructive' }} />
        <Button label="Action" disabled />
      </Section>
    ))
  );
