import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../App'
import React from 'react';

describe('<App />', () => {
  test('App mounts properly', () => {
    const wrapper = render(<App />)
    expect(wrapper).toBeTruthy()
  })
});