export interface SearchState {
  search: string;
}

export interface SearchAction {
  type: searchActionTypes.ENTER_SEARCH_VALUE;
  payload: string;
}

export enum searchActionTypes {
  ENTER_SEARCH_VALUE = 'ENTER_SEARCH_VALUE',
}
