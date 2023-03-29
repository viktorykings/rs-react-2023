import Header from '../components/Header';
import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

describe('<Header />', () => {
  test('full app rendering/navigating', async () => {
    render(<Header />, { wrapper: BrowserRouter });
    expect(screen.getByText(/main/i)).toBeTruthy();
  });
  test('active class', () => {
    render(<Header />, { wrapper: BrowserRouter });
    const main = document.getElementsByTagName('a');
    expect(main[0].className).toBe('active');
    main[0].className = '';
    expect(main[0].className).toBe('');
  });
});
