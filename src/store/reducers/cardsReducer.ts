import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CardsAction, CardsState, FetchCardsAction, cardsActionTypes } from '../types/cards';
import { CardPrewiew } from '../../components/types';

const initialState: CardsState = {
    search: '',
    cards: [],
    isLoading: false,
    errors: null
}

// const cardsReducer = (state = initialState, action: CardsAction): CardsState => {
//     switch(action.type){
//         case cardsActionTypes.FETCH_CARDS:
//             return {search: action.search, cards: [], isLoading: true, errors: null}
//         case cardsActionTypes.FETCH_CARDS_SUCCESS:
//             return {search: action.search, cards: action.payload, isLoading: false, errors: null}
//         case cardsActionTypes.FETCH_CARDS_ERROR:
//             return {search: action.search, cards: [], isLoading: false, errors: action.payload}
//         default:
//         return state
//     }
// }
export const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers:{
        fetchCards(state, action: PayloadAction<FetchCardsAction>){
            state.isLoading = true
            state.search = action.payload.search
        },
        fetchCardsSuccess(state, action: PayloadAction<CardPrewiew[]>){
            state.isLoading = false
            state.errors = null
            state.cards = action.payload
        },
        fetchCardsError(state, action: PayloadAction<string>){
            state.isLoading = false;
            state.errors = action.payload
        },
    }
})
// export default cardsReducer;
export default cardsSlice.reducer