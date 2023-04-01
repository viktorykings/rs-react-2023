import { describe, test, expect } from 'vitest';
import errorsMsg from '../components/helpers';
import fileList from './mock';

describe('Errors msg obj', () => {
  test('errorsMsg exist', () => {
    expect(errorsMsg.name).toBeTruthy();
  });
  test('mock exist', () => {
    expect(fileList.length).toBe(1);
  });
});
