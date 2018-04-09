import React from 'react';

import { storiesOf } from '@storybook/react';
import { wInfo } from '../../utils';

// import '../reset.css';
import './Typography.css';
const Section = props => (
  <div style={{ marginTop: 10, marginBottom: 30 }}>{props.children}</div>
);

storiesOf('Globals/Typography', module).addWithJSX(
  'Base Typography',
  wInfo(`

  ### Notes

  These are base Typography variables we use

`)(() => (
    <div>
      <Section>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <p>Body Content?</p>
        <p>Body Default?</p>
        <p>
          <small>Micro</small>
        </p>
        <p>
          <button>Button Default</button>
        </p>
        <p>
          <button className="Button-large" style={{ padding: 0 }}>
            Button Large
          </button>
        </p>
        <p>
          <button className="Button-small" style={{ padding: 0 }}>
            Button Small
          </button>
        </p>
      </Section>
    </div>
  ))
);
