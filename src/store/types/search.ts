import { CardPrewiew, FormData } from "../../components/types"

export interface SearchState {
    search: CardPrewiew[] | FormData[],
    isLoading: boolean,
    errors: string | null
}
export enum SearchActionTypes{
    FETCH_SEARCH = 'FETCH_SEARCH',
    FETCH_SEARCH_SUCCESS = 'FETCH_SEARCH_SUCCESS',
    FETCH_SEARCH_ERROR = 'FETCH_SEARCH_ERROR',
}

interface FetchSearchAction{
    type: SearchActionTypes.FETCH_SEARCH
}
interface FetchSearchSuccessAction{
    type: SearchActionTypes.FETCH_SEARCH_SUCCESS
    payload: CardPrewiew[] | FormData[]
}
interface FetchSearchErrorAction{
    type: SearchActionTypes.FETCH_SEARCH_ERROR
    payload: string
}

export type SearchAction = FetchSearchAction | FetchSearchSuccessAction | FetchSearchErrorAction