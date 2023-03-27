import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import CardsContainer from '../components/CardsContainer';
import FormPage from '../pages/FormPage';
import { FormData } from '../components/types';

describe('<CardsContainer />', () => {
    function create(): FormData{
        return { name: 'tst',
        surname: '',
        birthDate: '',
        isBirthDateVis: false,
        region: '',
        sex: 'm',
        personalData: false,
        profilePic: '',
        male: false,
        female: false,
        other: false}
    }
    const cardsArr: FormData[] = []

  test('No cards if cards array empty', () => {
    render(<CardsContainer cards={cardsArr}/>)
    const cardsRen = document.getElementsByClassName('card')
    expect(cardsRen.length).toBe(0);
  });
  test('Amount of cards is equal to cards array length', ()=>{
    for(let i = 0; i < 3; i++){
        cardsArr.push(create())
    }
    render(<CardsContainer cards={cardsArr}/>)
    const cardsRen = document.getElementsByClassName('card')
    expect(cardsRen.length).toBe(3);
  })
});
