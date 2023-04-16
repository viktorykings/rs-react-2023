import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { fireEvent, screen } from '@testing-library/react'
import { describe, test, expect, beforeAll, afterEach, afterAll } from 'vitest';

// We're using our own custom render function and not RTL's render.
import { renderWithProviders } from './utils/test-utils'
import CardsContainer from '../components/CardsContainer';
import Search from '../components/Search';
import 'whatwg-fetch';

// We use msw to intercept the network request during the test,
// and return the response 'John Smith' after 150ms
// when receiving a get request to the `/api/user` endpoint
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
      })
]

const server = setupServer(...handlers)

// Enable API mocking before tests.
beforeAll(() => server.listen())

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers())

// Disable API mocking after the tests are done.
afterAll(() => server.close())
describe('search init state', () => {
  // test('fetches & receives cards', async () => {
  //   renderWithProviders(<CardsContainer />)
  
  //   // // should show no user initially, and not be fetching a user
  //   expect(screen.getByText(/Loading/i)).toBeTruthy()
  //   // expect(screen.queryByText(/Fetching user\.\.\./i)).not.toBeInTheDocument()
  
  //   // after clicking the 'Fetch user' button, it should now show that it is fetching the user
  //   // fireEvent.click(screen.getByRole('button', { name: /Fetch user/i }))
  //   // expect(screen.getByText(/no user/i)).toBeInTheDocument()
  
  //   // after some time, the user should be received
  //   expect(await screen.findByText(/Rick/i)).toBeTruthy()
  //   expect(screen.queryByText(/Loading/i)).not.toBeTruthy()
  //   // expect(screen.queryByText(/Fetching user\.\.\./i)).not.toBeInTheDocument()
  // })
  test('Uses preloaded state to render', () => {
  const initialTodos = {search: 'a'}

  const { getByRole } = renderWithProviders(<Search />, {
    preloadedState: {
      search: initialTodos
    }
  })
  expect((getByRole('searchbox') as HTMLInputElement).defaultValue).toBe('a')

})
})
