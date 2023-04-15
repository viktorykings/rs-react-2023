import { combineReducers } from '@reduxjs/toolkit'
import cardsReducer from './cardsReducer'
import { formCardsReducer } from './formCardsReducer'
export const rootReducer = combineReducers({
    cards: cardsReducer,
    formCards: formCardsReducer
})
export type RootState = ReturnType<typeof rootReducer>