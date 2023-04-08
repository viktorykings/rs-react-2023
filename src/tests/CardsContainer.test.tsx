import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import CardsContainer from '../components/CardsContainer';
import { FormData } from '../components/types';

describe('<CardsContainer />', () => {
  function create(): FormData {
    return {
      id:1,
      name:'test',
      status:'string',
      species:'',
      type:'string',
      gender:null,
      origin:{name:''},
      location:{name:''},
      image:'',
    };
  }
  const fetchSingleCard  =  (e: React.MouseEvent<HTMLElement>) => e;
  const cardsArr: FormData[] = [];
  test('cardsContainer mounts', () => {
    const wrapper = render(<CardsContainer cards={cardsArr} fetchSingleCard={fetchSingleCard} />);
    const div = document.querySelector('.cards-container');
    expect(wrapper).toBeTruthy();
    expect(div).toBeTruthy();
  });
  test('No cards if cards array empty', () => {
    render(<CardsContainer cards={cardsArr} fetchSingleCard={fetchSingleCard} />);
    const cardsRen = document.getElementsByClassName('card');
    expect(cardsRen.length).toBe(0);
  });
  test('Amount of cards is equal to cards array length', () => {
    for (let i = 0; i < 3; i++) {
      cardsArr.push(create());
    }
    render(<CardsContainer cards={cardsArr} fetchSingleCard={fetchSingleCard} />);
    const cardsRen = document.getElementsByClassName('card');
    expect(cardsRen.length).toBe(3);
  });
});
