import React from 'react';

import { storiesOf } from '@storybook/react';
import { wInfo } from '../../utils';

// const Section = props => (
//   <div style={{ marginTop: 10, marginBottom: 30 }}>{props.children}</div>
// );

const Block = props => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      margin: 10
    }}
  >
    <div
      style={{
        width: 50,
        height: 50,
        backgroundColor: '#fff',
        filter: props.layer
        // border: `1px solid lightgrey`
      }}
    />
    <div style={{ width: 20 }} />
    {props.children}
    <div style={{ width: 20 }} />
    {props.bg}
  </div>
);

storiesOf('Globals/Layers', module).addWithJSX(
  'Layer levels',
  wInfo(`

  ### Notes

  These are base color variables we use

`)(() => (
    <div style={{ backgroundColor: '#eee', padding: 10 }}>
      <Block layer={'var(--layer-3)'}>Modals</Block>
      <Block layer={'var(--layer-2)'}>Alerts, Toasts, Dropdowns</Block>
      <Block layer={'var(--layer-1)'}>Cards</Block>
      <Block layer={'var(--layer-0)'}>Navigation bar, Hero</Block>
    </div>
  ))
);
