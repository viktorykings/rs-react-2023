import { Dispatch } from "redux"
import { CardsAction, cardsActionTypes } from "../types/cards"

export const fetchCards = () => {
    return async (dispatch: Dispatch<CardsAction>)=> {
        try{
            dispatch({type: cardsActionTypes.FETCH_CARDS})
            const res = await fetch(`https://rickandmortyapi.com/api/character/`)
            const data = await res.json();
            dispatch({type: cardsActionTypes.FETCH_CARDS_SUCCESS, payload: data.results})
        } catch (e){
            dispatch({type: cardsActionTypes.FETCH_CARDS_ERROR, payload: 'Error occused'})
        }
    }
}