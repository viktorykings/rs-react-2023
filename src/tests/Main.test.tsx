import { describe, test, expect, beforeAll, afterEach, afterAll } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import Main from '../pages/Main';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

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

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
describe('<Main />', () => {
  test('Main mounts properly', () => {
    const wr = render(<Main />);
    expect(wr).toBeTruthy();
  });
  test('dont show cards', async () => {
    render(<Main />);
    const out = await waitFor(() => {
      screen.getByText(/Rick/);
    });
    expect(out).toBeFalsy();
  });
});
