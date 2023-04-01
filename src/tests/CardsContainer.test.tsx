import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import CardsContainer from '../components/CardsContainer';
import { FormData } from '../components/types';

describe('<CardsContainer />', () => {
  const profilePic = 'blob:http://127.0.0.1:5173/cd51b1e8-7364-4422-8f1b-584d13de87f4';
  function create(): FormData {
    return {
      name: 'tst',
      surname: '',
      birthDate: '',
      isBirthDateVis: false,
      region: '',
      sex: 'm',
      personalData: false,
      profilePic: profilePic,
    };
  }
  const cardsArr: FormData[] = [];

  test('No cards if cards array empty', () => {
    render(<CardsContainer cards={cardsArr} />);
    const cardsRen = document.getElementsByClassName('card');
    expect(cardsRen.length).toBe(0);
  });
  test('Amount of cards is equal to cards array length', () => {
    for (let i = 0; i < 3; i++) {
      cardsArr.push(create());
    }
    console.log(cardsArr[0].profilePic[0]);
    render(<CardsContainer cards={cardsArr} />);
    const cardsRen = document.getElementsByClassName('card');
    expect(cardsRen.length).toBe(3);
  });
});
