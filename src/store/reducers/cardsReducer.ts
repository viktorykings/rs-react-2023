import { CardsAction, CardsState, cardsActionTypes } from '../types/cards';

const initialState: CardsState = {
    cards: [],
    isLoading: false,
    errors: null
}

const cardsReducer = (state = initialState, action: CardsAction): CardsState => {
    switch(action.type){
        case cardsActionTypes.FETCH_CARDS:
            return {cards: [], isLoading: true, errors: null}
        case cardsActionTypes.FETCH_CARDS_SUCCESS:
            return {cards: action.payload, isLoading: false, errors: null}
        case cardsActionTypes.FETCH_CARDS_ERROR:
            return {cards: [], isLoading: true, errors: action.payload}
        default:
        return state
    }
}
export default cardsReducer;