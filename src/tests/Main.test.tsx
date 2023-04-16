import { describe, test, expect, beforeAll, afterEach, afterAll } from 'vitest';
import { screen } from '@testing-library/react';
import React from 'react';
import Main from '../pages/Main';
import { renderWithProviders } from './utils/test-utils';
import 'whatwg-fetch';
import { server } from '../mocks/server';

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
