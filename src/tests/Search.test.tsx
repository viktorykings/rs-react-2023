import { describe, test, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import Search from '../components/Search';

describe('<Search />', () => {
  test('Search mounts properly', () => {
    const wrapper = render(<Search />);
    expect(wrapper).toBeTruthy();
  });
  test('The input field and its props', () => {
    render(<Search />);
    const input = document.querySelector('input') as HTMLInputElement | null;

    expect(input).toBeTruthy();

    // is empty
    expect(input?.textContent).toBe('');

    if (input) {
      // test the input text
      input.textContent = 'hello world';
      expect(input.textContent).toBe('hello world');

      // test the type prop
      expect(input.type).toBe('search');

      // test the value prop
      fireEvent.change(input, {
        target: {
          value: 'hello',
        },
      });
      expect(input.value).toBe('hello');
    }
  });
});
