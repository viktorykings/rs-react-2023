import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import SuccessModal from '../components/SuccessModal';

describe('<SuccessModal />', () => {
  test('SuccessModal shows up if saved sucessfully', () => {
    render(<SuccessModal saved={true} />);
    const div = document.querySelector('.success-modal-visible');
    expect(div).toBeTruthy();
  });
  test('SuccessModal hidden up if not saved', () => {
    render(<SuccessModal saved={false} />);
    const div = document.querySelector('.success-modal');
    expect(div).toBeTruthy();
  });
});
