import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CardsState, FetchCardsAction } from '../types/cards';
import { CardPrewiew } from '../../components/types';

const initialState: CardsState = {
  search: '',
  cards: [],
  isLoading: false,
  errors: null,
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    fetchCards(state, action: PayloadAction<FetchCardsAction>) {
      state.isLoading = true;
      state.search = action.payload.search;
    },
    fetchCardsSuccess(state, action: PayloadAction<CardPrewiew[]>) {
      state.isLoading = false;
      state.errors = null;
      state.cards = action.payload;
    },
    fetchCardsError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.errors = action.payload;
    },
  },
});
export default cardsSlice.reducer;
