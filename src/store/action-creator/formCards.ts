import { Dispatch } from 'redux';
import { FormCardsAction, addCardActionTypes } from '../types/formCards';
import { FormData } from '../../components/types';

export const getFormCards = (newCard: FormData) => {
  return (dispatch: Dispatch<FormCardsAction>) => {
    dispatch({ type: addCardActionTypes.ADD_CARD, payload: { ...newCard } });
  };
};
