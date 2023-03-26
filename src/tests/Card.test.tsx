import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Card from '../components/Card';

describe('<Card />', () => {
  test('Card mounts properly', () => {
    const wrapper = render(
      <Card
        name={'test'}
        surname={''}
        birthDate={''}
        isBirthDateVis={false}
        region={''}
        sex={''}
        personalData={false}
        profilePic={''}
        male={false}
        female={false}
        other={false}
      />
    );
    expect(wrapper).toBeTruthy();
  });
  test('Card has prop', () => {
    render(
      <Card
        name={'test'}
        surname={''}
        birthDate={''}
        isBirthDateVis={false}
        region={''}
        sex={''}
        personalData={false}
        profilePic={''}
        male={false}
        female={false}
        other={false}
      />
    );
    const cardProp = screen.getByText(/test/i);
    expect(cardProp).toBeTruthy();
  });
  test('Card img has alt', () => {
    render(
      <Card
        name={'test'}
        surname={''}
        birthDate={''}
        isBirthDateVis={false}
        region={''}
        sex={''}
        personalData={false}
        profilePic={''}
        male={false}
        female={false}
        other={false}
      />
    );
    const cardProp = screen.getByAltText(/img/i);
    expect(cardProp).toBeTruthy();
  });
  test('Card has key', () => {
    render(
      <Card
        name={'test'}
        surname={''}
        birthDate={''}
        isBirthDateVis={false}
        region={''}
        sex={''}
        personalData={false}
        profilePic={''}
        male={false}
        female={false}
        other={false}
      />
    );
    const cardProp = screen.getByAltText(/img/i);
    expect(cardProp).toBeTruthy();
  });
});
