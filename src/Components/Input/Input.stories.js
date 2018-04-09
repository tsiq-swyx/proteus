import React from 'react';

import { storiesOf } from '@storybook/react';
import { wInfo } from '../../../utils';

import '../../Colors/Colors.css';

import { Input } from './Input';

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

storiesOf('Components/Inputs', module)
  .addWithJSX(
    'black and white inputs',
    wInfo(`

  ### Notes

  This is a basic Input component. You can supply a bunch of various options, please see the proptypes and descriptions

  ### Usage

  ~~~
  <Input
    label={'Input Label'}
    placeholder={null}
    onChange={e => console.log(e.target.value)}
    value="Zethus Suen"
    size={30}
  />
  <Input
    placeholder={'Placeholder'}
    onChange={e => console.log(e.target.value)}
    size={30}
  />
  <Input
    label={'Input Disabled'}
    placeholder={null}
    onChange={e => console.log(e.target.value)}
    value="Value Disabled"
    size={30}
    disabled
  />

  ~~~

`)(() => (
      <Section>
        <Input
          label={'Input Label'}
          placeholder={null}
          onChange={e => console.log(e.target.value)}
          value="Zethus Suen"
          size={30}
        />
        <Input
          placeholder={'Placeholder'}
          onChange={e => console.log(e.target.value)}
          size={30}
        />
        <Input
          label={'Input Disabled'}
          placeholder={null}
          onChange={e => console.log(e.target.value)}
          value="Value Disabled"
          size={30}
          disabled
        />
      </Section>
    ))
  )
  .addWithJSX(
    'border colored inputs',
    wInfo(`

  ### Notes

  This is a basic Input component. You can supply a bunch of various options, please see the proptypes and descriptions

  ### Usage

  ~~~
  <Input
    label={'SSN'}
    onChange={e => console.log(e.target.value)}
    value="12345234222"
    size={20}
    styleOption="border"
    styleColor="danger"
    subtitle="Use ###-##-####"
  />
  <Input
    label={'SSN'}
    onChange={e => console.log(e.target.value)}
    value="12345234222"
    size={20}
    styleOption="border"
    styleColor="success"
    subtitle="Use ###-##-####"
  />
  <Input
    label={'SSN'}
    onChange={e => console.log(e.target.value)}
    value="12345234222"
    size={20}
    styleOption="border"
    styleColor="warning"
    subtitle="Use ###-##-####"
  />

  ~~~

`)(() => (
      <Section>
        <Input
          label={'SSN'}
          onChange={e => console.log(e.target.value)}
          value="12345234222"
          size={20}
          styleOption="border"
          styleColor="danger"
          subtitle="Use ###-##-####"
        />
        <Input
          label={'SSN'}
          onChange={e => console.log(e.target.value)}
          value="12345234222"
          size={20}
          styleOption="border"
          styleColor="success"
          subtitle="Use ###-##-####"
        />
        <Input
          label={'SSN'}
          onChange={e => console.log(e.target.value)}
          value="12345234222"
          size={20}
          styleOption="border"
          styleColor="warning"
          subtitle="Use ###-##-####"
        />
      </Section>
    ))
  )
  .addWithJSX(
    'full colored inputs',
    wInfo(`

  ### Notes

  This is a basic Input component. You can supply a bunch of various options, please see the proptypes and descriptions

  ### Usage

  ~~~
  <Input
    label={'Username'}
    onChange={e => console.log(e.target.value)}
    value="zethussuen123"
    size={20}
    styleOption="full"
    styleColor="danger"
    subtitle="Username already in use"
  />
  <Input
    label={'Username'}
    onChange={e => console.log(e.target.value)}
    value="zethussuen123"
    size={20}
    styleOption="full"
    styleColor="success"
    subtitle="Username available"
  />
  <Input
    label={'Username'}
    onChange={e => console.log(e.target.value)}
    value="zethussuen123"
    size={20}
    styleOption="full"
    styleColor="warning"
    subtitle="May not be supported"
  />

  ~~~

`)(() => (
      <Section>
        <Input
          label={'Username'}
          onChange={e => console.log(e.target.value)}
          value="zethussuen123"
          size={20}
          styleOption="full"
          styleColor="danger"
          subtitle="Username already in use"
        />
        <Input
          label={'Username'}
          onChange={e => console.log(e.target.value)}
          value="zethussuen123"
          size={20}
          styleOption="full"
          styleColor="success"
          subtitle="Username available"
        />
        <Input
          label={'Username'}
          onChange={e => console.log(e.target.value)}
          value="zethussuen123"
          size={20}
          styleOption="full"
          styleColor="warning"
          subtitle="May not be supported"
        />
      </Section>
    ))
  );
