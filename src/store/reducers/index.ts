import { combineReducers } from '@reduxjs/toolkit'
import cardsReducer from './cardsReducer'
import { formCardsReducer } from './formCardsReducer'
import { rickAndMortyApi } from '../../services/rickAndMorty'
export const rootReducer = combineReducers({
    cards: cardsReducer,
    formCards: formCardsReducer,
    [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer
})
export type RootState = ReturnType<typeof rootReducer>