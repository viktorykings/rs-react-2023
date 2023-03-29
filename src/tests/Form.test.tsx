import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import Form from '../components/Form';
import { validateFormData } from '../components/helpers';
import { FormData } from '../components/types';

describe('<Form />', () => {
  const card = {
    name: 'f',
    surname: '',
    birthDate: '',
    profilePic: '',
    isBirthDateVis: false,
    region: '',
    male: false,
    female: false,
    other: false,
    sex: '',
    personalData: false,
  };

  function createCard(card: FormData) {
    const isValid = validateFormData(card);
    return isValid;
  }
  const wrapper = render(<Form createCard={() => createCard(card)} />);
  test('Form mounts properly', () => {
    expect(wrapper).toBeTruthy();
  });
  test('Form has text fields', () => {
    render(<Form createCard={() => createCard(card)} />);
    const input = document.querySelector('input[type=text]') as HTMLInputElement | null;
    expect(input?.textContent).toBe('');
    if (input) {
      input.textContent = 'hello';
      expect(input.textContent).toBe('hello');
    }
  });
  test('Form has data fields', () => {
    render(<Form createCard={() => createCard(card)} />);
    const input = document.querySelector('input[type=date]') as HTMLInputElement | null;
    expect(input?.textContent).toBe('');
    if (input) {
      input.textContent = '2023-09-03';
      expect(input.textContent).toBe('2023-09-03');
    }
  });
  test('Show validation errors', () => {
    render(<Form createCard={() => createCard(card)} />);
    const err = document.querySelector('error') as HTMLInputElement | null;
    expect(err).toBeFalsy();
  });
  test('all input types presents', () => {
    render(<Form createCard={() => createCard(card)} />);
    const inputs = document.getElementsByTagName('input');
    const select = document.getElementsByTagName('select');
    expect(inputs[0].type).toBe('text');
    expect(inputs[1].type).toBe('text');
    expect(inputs[2].type).toBe('date');
    expect(inputs[3].type).toBe('checkbox');
    expect(inputs[4].type).toBe('radio');
    expect(inputs[5].type).toBe('radio');
    expect(inputs[6].type).toBe('radio');
    expect(inputs[7].type).toBe('file');
    expect(select[0]).toBeTruthy();
  });
  test('Show errors', () => {
    render(<Form createCard={() => createCard(card)} />);
    const error = document.querySelector('error');
    expect(error).toBeFalsy();
  });
});
