import { CardPrewiew, FormData } from "../../components/types"

export interface FormState {
    cards: CardPrewiew[] | FormData[]
}
export enum addCardActionTypes{
    ADD_CARD = 'ADD_CARD',
    ADD_CARD_SUCCESS = 'ADD_CARD_SUCCESS',
    ADD_CARD_ERROR = 'ADD_CARD_ERROR',
}

interface AddCardAction{
    type: addCardActionTypes.ADD_CARD
    payload: CardPrewiew | FormData
}
export type FormCardsAction = AddCardAction
