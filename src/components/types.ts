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

export interface FormData {
  id:	number;
  name:	string;
  status:	string;
  species:	string;
  type:	string;
  gender:	string | null | undefined;
  origin:	{name: string};
  location:	{name: string};
  image:	string;
  errors?: Errors;
  personalData?: boolean;
  picList?: Blob[];
}
export interface CardPrewiew{
  id: number;
  name: string;
  image: string;
}
export interface SingleCard{
  card: FormData;
  handleCloseSingleCard: (e: React.MouseEvent<HTMLElement>) => void;
}
export interface MainState {
  cards: FormData[];
  fetchSingleCard?: (e: React.MouseEvent<HTMLElement>) => void
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
  saved: boolean;
}
export interface QueryValues{
  name: string
}