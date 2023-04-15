import { FormCardsAction, addCardActionTypes, FormState } from "../types/formCards"

const initialState: FormState = {
    cards: []
}
export const formCardsReducer = (state = initialState, action: FormCardsAction): FormState => {
    switch(action.type){
        case addCardActionTypes.ADD_CARD:
            return{...state, cards: [...state.cards, action.payload]}
        default: return state
    }
}