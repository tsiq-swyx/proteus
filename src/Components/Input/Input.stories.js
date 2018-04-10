import React from 'react';

import { storiesOf } from '@storybook/react';
import { wInfo } from '../../../utils';

import '../../Colors/Colors.css';

import { Input } from './Input';

class Section extends React.Component {
  state = { text: this.props.text || 'Zethus Suen' };
  onChange = e => this.setState({ text: e.target.value });
  render() {
    return (
      <div
        style={{
          marginTop: 10,
          marginBottom: 30,
          display: 'inline-grid',
          gridTemplateColumns: '1fr',
          gridRowGap: '10px'
        }}
      >
        {this.props.children({ state: this.state, onChange: this.onChange })}
      </div>
    );
  }
}

storiesOf('Components/Input', module)
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
        {({ state, onChange }) => (
          <React.Fragment>
            <Input
              label={'Input Label'}
              placeholder={null}
              onChange={onChange}
              value={state.text}
              size={30}
            />
            <Input
              placeholder={'Placeholder'}
              onChange={onChange}
              value={state.text}
              size={30}
            />
            <Input
              label={'Input Disabled'}
              placeholder={null}
              onChange={onChange}
              value={state.text}
              size={30}
              disabled
            />
          </React.Fragment>
        )}
      </Section>
    ))
  )
  .addWithJSX(
    'colored inputs',
    wInfo(`

  ### Notes

  This is a basic Input component. You can supply a bunch of various options, please see the proptypes and descriptions

  ### Usage

  ~~~
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
  ~~~

`)(() => (
      <Section value="12345234222">
        {({ state, onChange }) => (
          <React.Fragment>
            <Input
              label={'SSN'}
              value={state.text}
              onChange={onChange}
              size={20}
              styleColor="danger"
              subtitle="Use ###-##-####"
            />
            <Input
              label={'SSN'}
              value={state.text}
              onChange={onChange}
              size={20}
              styleColor="success"
              subtitle="Use ###-##-####"
            />
            <Input
              label={'SSN'}
              value={state.text}
              onChange={onChange}
              size={20}
              styleColor="warning"
              subtitle="Use ###-##-####"
            />
          </React.Fragment>
        )}
      </Section>
    ))
  );
