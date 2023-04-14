import { combineReducers } from '@reduxjs/toolkit'
import cardsReducer from './cardsReducer'
import { searchReducer } from './searchReducer'
export const rootReducer = combineReducers({
    cards: cardsReducer,
    search: searchReducer
})
export type RootState = ReturnType<typeof rootReducer>