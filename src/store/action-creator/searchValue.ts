import { Dispatch } from 'redux';
import { SearchAction, searchActionTypes } from '../types/search';

export const saveSearchValue = (search: string) => {
  return (dispatch: Dispatch<SearchAction>) => {
    dispatch({ type: searchActionTypes.ENTER_SEARCH_VALUE, payload: search });
  };
};
