import { describe, test, expect } from 'vitest'
import { render, fireEvent } from '@testing-library/react'
import React from 'react';
import Main from '../components/Main';

describe('<Main />', () => {
      test('Main mounts properly', () => {
    const wrapper = render(<Main />)
    expect(wrapper).toBeTruthy()
  })
});

