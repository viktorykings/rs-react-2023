import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './reducers'
import { rickAndMortyApi } from '../services/rickAndMorty'
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rickAndMortyApi.middleware)
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
