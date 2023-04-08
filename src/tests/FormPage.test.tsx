import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import FormPage from '../pages/FormPage';

describe('<FormPage />', () => {
  test('FormPage mounts properly', () => {
    const wrapper = render(<FormPage />);
    expect(wrapper).toBeTruthy();
  });
  test('create card', () => {
    
  })
});
