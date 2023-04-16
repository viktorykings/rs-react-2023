import { describe, test, expect } from 'vitest';
import React from 'react';
import FormPage from '../pages/FormPage';
import { setupStore } from '../store';
import { getFormCards } from '../store/action-creator/formCards';
import { renderWithProviders } from './utils/test-utils';

describe('<FormPage />', () => {
  const character =   {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: 'type',
    gender: 'Male',
    origin: {
      name: 'Earth',
      url: 'https://rickandmortyapi.com/api/location/1',
    },
    location: {
      name: 'Earth',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    episode: [
      'https://rickandmortyapi.com/api/episode/1',
      'https://rickandmortyapi.com/api/episode/2',
    ],
    url: 'https://rickandmortyapi.com/api/character/1',
    created: '2017-11-04T18:48:46.250Z',
  }
  test('FormPage mounts properly', () => {
    const store = setupStore()
    store.dispatch(getFormCards(character))
    const wrapper = renderWithProviders(<FormPage />, { store })
    expect(wrapper).toBeTruthy();
  });
});
