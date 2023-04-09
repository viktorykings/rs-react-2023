import { describe, test, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import Main from '../pages/Main';

import { setupServer } from 'msw/node';
import { rest } from 'msw';
import 'whatwg-fetch';
import fetchCards from '../pages/fetch';
import CardsContainer from '../components/CardsContainer';

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

const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/character/', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(characters));
  })
);

describe('API calls', () => {
  test('fetch card data', async () => {
    const data = await fetchCards('');
    expect(data).toBeTruthy();
  });
  test('fetch single card data', async () => {
    const data = await fetchCards('', '1');
    expect(data).toBeTruthy();
  });
  test('handles server error', async () => {
    server.use(
      rest.get('https://rickandmortyapi.com/api/character/', (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    try {
      await fetchCards('null', 'null');
    } catch (error) {
      let message = 'msg';
      if (error instanceof Error) message = error.message;
      expect(message).toBe('Failed to fetch');
    }
  });
  test('showing loader', () => {
    const { getByText } = render(<Main />);
    const el = getByText('Loading...');
    expect(el).toBeTruthy();
  });
  test('returns clicked el id', async () => {
    render(<CardsContainer cards={characters} />);
    const elId = (screen.getByText(/Rick/) as Element)?.closest('.card')?.id;
    await waitFor(() => expect(elId).toBe('1'));
  });
});
