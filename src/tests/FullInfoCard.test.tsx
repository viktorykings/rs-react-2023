import { describe, test, expect, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import FullInfoCard from '../components/FullInfoCard';

describe('<FullInfoCard />', () => {
  const cardData = {
    id: 1,
    name: 'test',
    status: 'string',
    species: '',
    type: 'string',
    gender: null,
    origin: { name: '' },
    location: { name: '' },
    image: '',
  };
  const handleCloseSingleCard = vi.fn(() => 0);
  test('FullInfoCard mounts properly', () => {
    const wrapper = render(
      <FullInfoCard card={cardData} handleCloseSingleCard={handleCloseSingleCard} />
    );
    expect(wrapper).toBeTruthy();
  });
  test('FullInfoCard has prop', () => {
    render(<FullInfoCard card={cardData} handleCloseSingleCard={handleCloseSingleCard} />);
    const FullInfoCardProp = screen.getByText(/test/i);
    expect(FullInfoCardProp).toBeTruthy();
  });
  test('FullInfoCard img has alt', () => {
    render(<FullInfoCard card={cardData} handleCloseSingleCard={handleCloseSingleCard} />);
    const FullInfoCardProp = screen.getByAltText(/img/i);
    expect(FullInfoCardProp).toBeTruthy();
  });
  test('FullInfoCard has key', () => {
    render(<FullInfoCard card={cardData} handleCloseSingleCard={handleCloseSingleCard} />);
    const FullInfoCardProp = screen.getByAltText(/img/i);
    expect(FullInfoCardProp).toBeTruthy();
  });
  test('close modal when backdrop clicked', () => {
    const handleCloseSingleCard = vi.fn(() => 0);
    render(<FullInfoCard card={cardData} handleCloseSingleCard={handleCloseSingleCard} />);
    fireEvent.click(screen.getByTestId('backdrop'));
    expect(handleCloseSingleCard).toHaveBeenCalled();
  });
  test('close modal when close button clicked', () => {
    const handleCloseSingleCard = vi.fn(() => 0);
    render(<FullInfoCard card={cardData} handleCloseSingleCard={handleCloseSingleCard} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleCloseSingleCard).toHaveBeenCalled();
  });
});
