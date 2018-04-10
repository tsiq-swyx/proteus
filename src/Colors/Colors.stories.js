import React from 'react';

import { storiesOf } from '@storybook/react';
import { wInfo } from '../../utils';
// import { Button } from './Button';
// import { text, boolean } from '@storybook/addon-knobs/react';

const Section = props => (
  <div style={{ marginTop: 10, marginBottom: 30 }}>{props.children}</div>
);

const Block = props => (
  <div style={{ display: 'flex', alignItems: 'center', margin: 10 }}>
    <div
      style={{
        width: 100,
        height: 25,
        borderRadius: 5,
        backgroundColor: props.bg,
        border: `1px solid lightgrey`
      }}
    />
    <div style={{ width: 20 }} />
    {props.children}
    <div style={{ width: 20 }} />
    {props.bg}
  </div>
);

const Border = props => (
  <div style={{ display: 'flex', alignItems: 'center', margin: 10 }}>
    <div
      style={{
        width: 100,
        height: 25,
        borderRadius: 5,
        border: `1px solid ${props.bg}`
      }}
    />
    <div style={{ width: 20 }} />
    {props.children}
    <div style={{ width: 20 }} />
    {props.bg}
  </div>
);

storiesOf('Globals/Colors', module)
  .addWithJSX(
    'Base Colors',
    wInfo(`

  ### Notes

  These are base color variables we use

`)(() => (
      <div>
        <Section>
          <Block bg={'var(--danger-0)'}>Danger Default</Block>
          <Block bg={'var(--danger-1)'}>Danger Dark</Block>
          <Block bg={'var(--danger-2)'}>Danger Light</Block>
        </Section>
        <Section>
          <Block bg={'var(--success-0)'}>Success Default</Block>
          <Block bg={'var(--success-1)'}>Success Dark</Block>
          <Block bg={'var(--success-2)'}>Success Light</Block>
        </Section>
        <Section>
          <Block bg={'var(--warning-0)'}>Warning Default</Block>
          <Block bg={'var(--warning-1)'}>Warning Dark</Block>
          <Block bg={'var(--warning-2)'}>Warning Light</Block>
        </Section>
        <Section>
          <Block bg={'var(--ui-0)'}>UI 0</Block>
          <Block bg={'var(--ui-1)'}>UI 1</Block>
          <Block bg={'var(--ui-2)'}>UI 2</Block>
          <Block bg={'var(--ui-3)'}>UI 3</Block>
          <Block bg={'var(--ui-4)'}>UI 4</Block>
          <Block bg={'var(--ui-5)'}>UI 5</Block>
        </Section>
        <Section>
          <Block bg={'var(--text-0)'}>Text Default</Block>
          <Block bg={'var(--text-1)'}>Text Subtle</Block>
          <Block bg={'var(--text-2)'}>Text Inverse</Block>
        </Section>
      </div>
    ))
  )
  .addWithJSX(
    'Brand colors',
    wInfo(`

  ### Notes

  These can be customized by brands

`)(() => (
      <div>
        <Section>
          <Block bg={'var(--brand-0)'}>Brand Default</Block>
          <Block bg={'var(--brand-1)'}>Brand Dark</Block>
          <Block bg={'var(--brand-2)'}>Brand Light</Block>
        </Section>
        <Section>
          <Block bg={'var(--brand-3)'}>Brand Secondary</Block>
          <Block bg={'var(--brand-4)'}>Brand Tertiary</Block>
        </Section>
        <Section>
          <Border bg={'var(--border-0)'}>Border Brand UI</Border>
          <Border bg={'var(--border-1)'}>Border Brand Brand</Border>
          <Border bg={'var(--border-2)'}>Border Brand Success</Border>
          <Border bg={'var(--border-3)'}>Border Brand Warning</Border>
          <Border bg={'var(--border-4)'}>Border Brand Danger</Border>
        </Section>
      </div>
    ))
  );
