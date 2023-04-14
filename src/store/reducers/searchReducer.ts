import { SearchState, SearchAction, SearchActionTypes } from "../types/search"

const initialState: SearchState = {
    search: [],
    isLoading: false,
    errors: null
}
export const searchReducer = (state = initialState, action: SearchAction): SearchState => {
    switch(action.type){
        case SearchActionTypes.FETCH_SEARCH:
            return{...state, isLoading: true}
        case SearchActionTypes.FETCH_SEARCH_SUCCESS:
            return{...state, isLoading: false, search: action.payload}
        case SearchActionTypes.FETCH_SEARCH_ERROR:
            return{...state, isLoading: false, errors: action.payload}

        default: return state
    }
}