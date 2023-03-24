export type MyProps = object;
export interface CardProps {
  type: string;
  venicle: string;
  id: string | number;
  description: string;
  fuel: string;
  model: string;
  avatar: string;
}
export type MyGroupType = {
  [key: string]: CardProps;
};
export type MyState = { page: string };
export type SearchState = { value: string };
export interface FormSetState {
  createCard: (newCard: FormData) => void;
}
export interface FormData {
  name: string;
  surname: string;
  birthDate: string;
  isBirthDateVis: boolean;
  region: string;
  male?: HTMLInputElement | null;
  female?: HTMLInputElement | null;
  other?: HTMLInputElement | null;
  sex: string | null | undefined;
  profilePic: string;
  errors?: Errors;
}
export interface MainState {
  data: FormData[];
}
export interface FormState {
  data: FormData[];
  errors: Errors;
}
export interface Errors {
  [key: string]: string;
}
