import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Card from '../components/Card';

describe('<Card />', () => {
  test('Card mounts properly', () => {
    const wrapper = render(
      <Card type={''} venicle={''} id={''} description={''} fuel={''} model={''} avatar={''} />
    );
    expect(wrapper).toBeTruthy();
  });
  test('Card has prop', () => {
    render(
      <Card type={''} venicle={'test'} id={''} description={''} fuel={''} model={''} avatar={''} />
    );
    const cardProp = screen.getByText(/test/i);
    expect(cardProp).toBeTruthy();
  });
  test('Card img has alt', () => {
    render(
      <Card type={''} venicle={'test'} id={''} description={''} fuel={''} model={''} avatar={''} />
    );
    const cardProp = screen.getByAltText(/img/i);
    expect(cardProp).toBeTruthy();
  });
  test('Card has key', () => {
    render(
      <Card type={''} venicle={'test'} id={''} description={''} fuel={''} model={''} avatar={''} />
    );
    const cardProp = screen.getByAltText(/img/i);
    expect(cardProp).toBeTruthy();
  });
});
