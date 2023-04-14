import { Dispatch } from "redux"
import { SearchAction, SearchActionTypes } from "../types/search"

export const fetchSearch = (name: string) => {
    return async (dispatch: Dispatch<SearchAction>)=> {
        try{
            dispatch({type: SearchActionTypes.FETCH_SEARCH})
            const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
            const data = await res.json();
            dispatch({type: SearchActionTypes.FETCH_SEARCH_SUCCESS, payload: data.results})
        } catch (e){
            dispatch({type: SearchActionTypes.FETCH_SEARCH_ERROR, payload: 'Failed to find'})
        }
    }
}