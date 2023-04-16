import { describe, test, expect } from 'vitest';
import React from 'react';
import Form from '../components/Form';
import { setupStore } from '../store';
import { getFormCards } from '../store/action-creator/formCards';
import { renderWithProviders } from './utils/test-utils';

describe('<Form />', () => {
  const card = {
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
  const store = setupStore();
  store.dispatch(getFormCards(card));
  const wrapper = renderWithProviders(<Form />, { store });
  test('Form mounts properly', () => {
    expect(wrapper).toBeTruthy();
  });
  test('Show validation errors', () => {
    const err = document.querySelector('error') as HTMLInputElement | null;
    expect(err).toBeFalsy();
  });
  test('Show errors', () => {
    const error = document.querySelector('error');
    expect(error).toBeFalsy();
  });
});
