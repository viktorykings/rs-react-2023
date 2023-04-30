import { PreloadedState, configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers';
import { rickAndMortyApi } from '../services/rickAndMorty';

export function setupStore(
  // preloadedState?: PreloadedState<RootState>
  ) {
  return configureStore({
    reducer: rootReducer,
    // preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rickAndMortyApi.middleware),
  });
}

// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rickAndMortyApi.middleware),
// });
const store = setupStore();
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof setupStore>;
