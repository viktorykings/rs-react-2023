import { CardPrewiew } from "../../components/types";

export enum cardsActionTypes {
    FETCH_CARDS = 'FETCH_CARDS',
    FETCH_CARDS_SUCCESS = 'FETCH_CARDS_SUCCESS',
    FETCH_CARDS_ERROR = 'FETCH_CARDS_ERROR',
}

export interface CardsState {
    cards: CardPrewiew[];
    isLoading: boolean;
    errors: null | string
}

interface FetchCardsAction{
    type: cardsActionTypes.FETCH_CARDS
}
interface FetchCardsSuccessAction{
    type: cardsActionTypes.FETCH_CARDS_SUCCESS,
    payload: CardPrewiew[]
}
interface FetchCardsErrorAction{
    type: cardsActionTypes.FETCH_CARDS_ERROR,
    payload: string
}
export type CardsAction = FetchCardsAction |FetchCardsSuccessAction | FetchCardsErrorAction;
