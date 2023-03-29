import { describe, test, expect } from 'vitest';
import { chooseSex, validateEmpty, validateChoose, validateDates } from '../components/helpers';

describe('Helpers', () => {
  const card = {
    name: 'f',
    surname: '',
    birthDate: '',
    profilePic: '',
    isBirthDateVis: false,
    region: '',
    male: undefined,
    female: undefined,
    other: undefined,
    sex: '',
    personalData: false,
  };

  test('chooseSex returns correct value', () => {
    const inM = document.createElement('input[type=radio]') as HTMLInputElement;
    const inF = document.createElement('input[type=radio]') as HTMLInputElement;
    const inO = document.createElement('input[type=radio]') as HTMLInputElement;
    inM.id = 'm';
    inF.id = 'f';
    inO.id = 'o';
    let sex = chooseSex(inM.checked, inF.checked, inO.checked);
    expect(sex).toBe(null);
    inM.checked = true;
    sex = chooseSex(inM.checked, inF.checked, inO.checked);
    expect(sex).toBe('male');
    inM.checked = false;
    inF.checked = true;
    sex = chooseSex(inM.checked, inF.checked, inO.checked);
    expect(sex).toBe('female');
    inF.checked = false;
    inO.checked = true;
    sex = chooseSex(inM.checked, inF.checked, inO.checked);
    expect(sex).toBe('other');
  });
  test('Validates empty inputs', () => {
    const isValid = validateEmpty(card, true, {});
    expect(isValid).toBeFalsy();
  });
  test('Validate if checked/choosen', () => {
    const isValid = validateChoose(card, true, {});
    expect(isValid).toBeFalsy();
  });
  test('Validate dates', () => {
    card.birthDate = '2023-02-01';
    const isValid = validateDates(card, true, {});
    expect(isValid).toBeTruthy();
  });
});
