import { describe, test, expect, vi } from 'vitest';
import { fireEvent } from '@testing-library/react';
import React from 'react';
import Search from '../components/Search';
import { renderWithProviders } from './utils/test-utils';
import { setupStore } from '../store';
import { saveSearchValue } from '../store/action-creator/searchValue';

describe('search init state', () => {
  const initialSearch = { search: 'a' };

  test('Uses preloaded state to render', () => {
    const { getByRole } = renderWithProviders(<Search />, {
      preloadedState: {
        search: initialSearch,
      },
    });
    expect((getByRole('searchbox') as HTMLInputElement).defaultValue).toBe('a');
  });
  test('The input field is exist', () => {
    const { getByRole } = renderWithProviders(<Search />, {
      preloadedState: {
        search: initialSearch,
      },
    });
    expect(getByRole('searchbox')).toBeTruthy();
  });
  test('The input field is changing', () => {
    const store = setupStore();
    store.dispatch(saveSearchValue('milk'));
    const { getByRole } = renderWithProviders(<Search />, { store });
    const input = getByRole('searchbox') as HTMLInputElement;
    fireEvent.change(input, {
      target: {
        value: 'hello',
      },
    });
    expect(input.value).toBe('hello');
  });

  test('Sets up initial state state with actions', () => {
    const store = setupStore();
    store.dispatch(saveSearchValue('milk'));

    const { getByRole } = renderWithProviders(<Search />, { store });
    expect((getByRole('searchbox') as HTMLInputElement).defaultValue).toBe('milk');
  });
  test('calls onClick prop when clicked', () => {
    const store = setupStore();
    const origDispatch = store.dispatch;
    const dispatch = vi.fn(origDispatch);

    const { getByRole } = renderWithProviders(<Search />, { store });
    fireEvent.keyDown(getByRole('searchbox'), { key: 'Enter', code: 'Enter', charCode: 13 });
    expect(dispatch).toHaveBeenCalledTimes(0);
  });
});
