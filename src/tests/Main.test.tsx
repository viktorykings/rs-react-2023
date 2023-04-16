import { describe, test, expect, beforeAll, afterEach, afterAll } from 'vitest';
import { screen } from '@testing-library/react';
import React from 'react';
import Main from '../pages/Main';
import { renderWithProviders } from './utils/test-utils';
import 'whatwg-fetch';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const characters = [
  {
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
  },
];
export const handlers = [
  rest.get('https://rickandmortyapi.com/api/character/', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(characters));
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe('<Main />', () => {
  test('handles good response', async () => {
    renderWithProviders(<Main />);

    expect(screen.getByText(/Loading../)).toBeTruthy();
    await screen.findByText('Failed to fetch');
  });
});
