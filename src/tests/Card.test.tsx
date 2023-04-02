import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Card from '../components/Card';

describe('<Card />', () => {
  const profilePic = 'blob:http://127.0.0.1:5173/cd51b1e8-7364-4422-8f1b-584d13de87f4';

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
        profilePic={profilePic}
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
        profilePic={profilePic}
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
        profilePic={profilePic}
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
        profilePic={profilePic}
      />
    );
    const cardProp = screen.getByAltText(/img/i);
    expect(cardProp).toBeTruthy();
  });
  test('B-day hidden if isBirthDateVis === false', () => {
    render(
      <Card
        name={'test'}
        surname={''}
        birthDate={'01'}
        isBirthDateVis={false}
        region={''}
        sex={''}
        personalData={false}
        profilePic={profilePic}
      />
    );
    expect(screen.queryByText(/01/i)).toBeFalsy();
  });
  test('B-day showed if isBirthDateVis === true', () => {
    render(
      <Card
        name={'test'}
        surname={''}
        birthDate={'01'}
        isBirthDateVis={true}
        region={''}
        sex={''}
        personalData={false}
        profilePic={profilePic}
      />
    );
    expect(screen.getByText(/01/i)).toBeTruthy();
  });
});
