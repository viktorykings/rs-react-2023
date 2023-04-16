import { combineReducers } from '@reduxjs/toolkit'
import { searchReducer } from './searchReducer'
import { formCardsReducer } from './formCardsReducer'
import { rickAndMortyApi } from '../../services/rickAndMorty'
export const rootReducer = combineReducers({
    search: searchReducer,
    formCards: formCardsReducer,
    [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer
})
export type RootState = ReturnType<typeof rootReducer>