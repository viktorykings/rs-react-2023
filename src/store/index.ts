import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers';
import { rickAndMortyApi } from '../services/rickAndMorty';

export function setupStore() {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rickAndMortyApi.middleware),
  });
}

const store = setupStore();
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof setupStore>;
