import { SearchAction, SearchState, searchActionTypes } from "../types/search"


const initialState: SearchState = {
    search: ''
}
export const searchReducer = (state = initialState, action: SearchAction): SearchState => {
    switch(action.type){
        case searchActionTypes.ENTER_SEARCH_VALUE:
            return{search: action.payload}
        default: return state
    }
}