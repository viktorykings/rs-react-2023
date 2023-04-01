export type MyProps = object;
export interface CardProps {
  type: string;
  venicle: string;
  id: string | number;
  description: string;
  fuel: string;
  model: string;
  avatar: string | File | Blob | MediaSource;
}
export type MyGroupType = {
  [key: string]: CardProps;
};
export type MyState = { page: string };
export type SearchState = { value: string };
export interface FormSetState {
  createCard: (newCard: FormData) => void;
}
export interface FormDataStr {
  name: string | null | undefined;
  surname: string | null | undefined;
  birthDate: string | null | undefined;
  region: string | null | undefined;
  // profilePic: Blob;
  profilePic: FileList;
}
export interface FormDataBoo {
  isBirthDateVis: boolean | undefined;
  male: boolean | undefined;
  female: boolean | undefined;
  other: boolean | undefined;
  personalData: boolean | undefined;
}
export interface FormData extends FormDataStr, FormDataBoo {
  sex: string | null | undefined;
  errors?: Errors;
}
export interface MainState {
  cards: FormData[];
}
export interface FormState {
  data: FormData[];
  errors: Errors;
  saved: boolean;
}
export interface Errors {
  [key: string]: string;
}
export interface ModalState {
  saved: string;
}
