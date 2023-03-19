import { describe, test, expect } from 'vitest'
import { render, fireEvent } from '@testing-library/react'
import React from 'react';
import Card from '../components/Card';

describe('<Card />', () => {
      test('Card mounts properly', () => {
    const wrapper = render(<Card type={''} venicle={''} id={''} description={''} fuel={''} model={''} avatar={''} />)
    expect(wrapper).toBeTruthy()

  })
});

