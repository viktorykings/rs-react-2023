import { Errors, FormData, FormDataBoo, FormDataStr } from './types';

export function chooseSex(
  male: boolean | null | undefined,
  female: boolean | null | undefined,
  other: boolean | null | undefined
) {
  if (!male && !female && !other) {
    return null;
  }
  if (male) {
    return 'male';
  }
  if (female) {
    return 'female';
  }
  if (other) {
    return 'other';
  }
}
export function validateEmpty(newCard: FormData, isValid: boolean, errors: Errors) {
  const { name, surname, birthDate, profilePic, region } = newCard;
  console.log(profilePic);
  if (name!.trim().length < 4) {
    errors.name = 'Name must have length of 4 or higher!';
    isValid = false;
  }
  if (surname!.trim().length < 1) {
    errors.surname = 'Field must not be empty!';
    isValid = false;
  }
  if (birthDate!.trim().length < 1) {
    errors.birthDate = 'Field must not be empty!';
    isValid = false;
  }
  if (!profilePic) {
    errors.profilePic = 'Add file';
    isValid = false;
  }
  if (!region) {
    errors.region = 'Value must be choosen';
    isValid = false;
  }

  return isValid;
}
export function validateFormData(newCard: FormData) {
  const errors: Errors = {};
  let isValid = true;
  isValid = validateEmpty(newCard, isValid, errors);
  isValid = validateChoose(newCard, isValid, errors);
  isValid = validateDates(newCard, isValid, errors);
  return { isValid, errors };
}
export function validateChoose(newCard: FormData, isValid: boolean, errors: Errors) {
  const { personalData, male, female, other } = newCard;
  const sex = chooseSex(male, female, other);
  if (!sex) {
    errors.sex = 'Value must be choosen';
    isValid = false;
  }
  if (!personalData) {
    errors.personalData = 'You must accept the terms of use';
    isValid = false;
  }
  return isValid;
}
export function validateDates(newCard: FormData, isValid: boolean, errors: Errors) {
  const { birthDate } = newCard;
  if (!birthDate) return (isValid = false);
  const currDate = Date.now();
  const inputDate = Date.parse(birthDate);
  if (currDate < inputDate) {
    errors.birthDate = 'Enter correct date';
    isValid = false;
  }
  return isValid;
}

export function genStrings(...args: string[]): FormDataStr | null {
  let isPropExist = true;
  for (let i = 0; i < args.length; i++) {
    if (args[i] === null || args[i] === undefined) {
      isPropExist = false;
    }
  }
  if (isPropExist) {
    return {
      name: args[0],
      surname: args[1],
      birthDate: args[2],
      region: args[3],
      profilePic: args[4],
      // sex: args[9],
    };
  } else return null;
}
export function genBooleans(...args: boolean[]): FormDataBoo | null {
  let isPropExist = true;
  for (let i = 0; i < args.length; i++) {
    if (args[i] === null || args[i] === undefined) {
      isPropExist = false;
    }
  }
  if (isPropExist) {
    return {
      isBirthDateVis: args[0],
      male: args[1],
      female: args[2],
      other: args[3],
      personalData: args[4],
    };
  } else return null;
}
export function getClassName(page: string) {
  switch (page) {
    case 'main':
      return 'active';
    case 'about':
      return 'active';
    case 'form':
      return 'active';
  }
}
