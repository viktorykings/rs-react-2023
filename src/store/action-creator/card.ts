import { Dispatch } from "redux"
import { CardsAction, cardsActionTypes } from "../types/cards"

export const fetchCards = (name: string) => {
    return async (dispatch: Dispatch<CardsAction>)=> {
        try{
            dispatch({type: cardsActionTypes.FETCH_CARDS, search: name})
            console.log(name)
            const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
            const data = await res.json();
            dispatch({type: cardsActionTypes.FETCH_CARDS_SUCCESS, payload: data.results, search: name})
        } catch (e){
            dispatch({type: cardsActionTypes.FETCH_CARDS_ERROR, payload: 'Error occused'})
        }
    }
}