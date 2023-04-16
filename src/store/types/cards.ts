import { CardPrewiew } from '../../components/types';

export enum cardsActionTypes {
  FETCH_CARDS = 'FETCH_CARDS',
  FETCH_CARDS_SUCCESS = 'FETCH_CARDS_SUCCESS',
  FETCH_CARDS_ERROR = 'FETCH_CARDS_ERROR',
}

export interface CardsState {
  search: string;
  cards: CardPrewiew[];
  isLoading: boolean;
  errors: null | string;
}

export interface FetchCardsAction {
  search: string;
}
interface FetchCardsSuccessAction {
  type: cardsActionTypes.FETCH_CARDS_SUCCESS;
  payload: CardPrewiew[];
  search: string;
}
interface FetchCardsErrorAction {
  type: cardsActionTypes.FETCH_CARDS_ERROR;
  payload: string;
  search: string;
}
export type CardsAction = FetchCardsAction | FetchCardsSuccessAction | FetchCardsErrorAction;
