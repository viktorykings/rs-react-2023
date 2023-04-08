import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import FullInfoCard from '../components/FullInfoCard';

describe('<FullInfoCard />', () => {
  const profilePic = 'blob:http://127.0.0.1:5173/cd51b1e8-7364-4422-8f1b-584d13de87f4';
  const cardData={
    id:1,
    name:'test',
    status:'string',
    species:'',
    type:'string',
    gender:null,
    origin:{name:''},
    location:{name:''},
    image:'',
  }
  const handleCloseSingleCard  = () => void
  test('FullInfoCard mounts properly', () => {
    const wrapper = render(
      <FullInfoCard
        card={cardData}
        handleCloseSingleCard={handleCloseSingleCard}
      />
    );
    expect(wrapper).toBeTruthy();
  });
  test('FullInfoCard has prop', () => {
    render(
      <FullInfoCard
        card={cardData}
        handleCloseSingleCard={handleCloseSingleCard}
      />
    );
    const FullInfoCardProp = screen.getByText(/test/i);
    expect(FullInfoCardProp).toBeTruthy();
  });
  test('FullInfoCard img has alt', () => {
    render(
      <FullInfoCard
        card={cardData}
        handleCloseSingleCard={handleCloseSingleCard}
      />
    );
    const FullInfoCardProp = screen.getByAltText(/img/i);
    expect(FullInfoCardProp).toBeTruthy();
  });
  test('FullInfoCard has key', () => {
    render(
      <FullInfoCard
        card={cardData}
        handleCloseSingleCard={handleCloseSingleCard}
      />
    );
    const FullInfoCardProp = screen.getByAltText(/img/i);
    expect(FullInfoCardProp).toBeTruthy();
  });
});
