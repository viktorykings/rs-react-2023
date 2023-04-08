import { describe, test, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import Search from '../components/Search';

describe('<Search />', () => {
  const handleSearch = () => void
  test('Search mounts properly', () => {
    const wrapper = render(<Search handleSearch={handleSearch} />);
    expect(wrapper).toBeTruthy();
  });
  test('The input field is exist', () => {
    render(<Search handleSearch={handleSearch} />);
    const input = document.querySelector('input') as HTMLInputElement | null;
    expect(input).toBeTruthy();
  });
  test('The input field is empty', () => {
    render(<Search handleSearch={handleSearch} />);
    const input = document.querySelector('input') as HTMLInputElement | null;
    expect(input?.textContent).toBe('');
  });
  test('The input field is changing', () => {
    render(<Search handleSearch={handleSearch} />);
    const input = document.querySelector('input') as HTMLInputElement | null;
    if (input) {
      input.textContent = 'hello world';
      expect(input.textContent).toBe('hello world');

      expect(input.type).toBe('search');

      fireEvent.change(input, {
        target: {
          value: 'hello',
        },
      });
      expect(input.value).toBe('hello');
    }
  });
});
