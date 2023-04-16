import { Dispatch } from "redux"
import { CardsAction, cardsActionTypes } from "../types/cards"
import { AppDispatch } from "../../store"
import { cardsSlice } from "../../store/reducers/cardsReducer"

// export const fetchCards = (name: string) => {
//     return async (dispatch: Dispatch<CardsAction>)=> {
//         dispatch({type: cardsActionTypes.FETCH_CARDS, search: name})
//         fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
//         .then(async (res) => {
//             if (!res.ok) {
//                 const message = 'Failed to fetch';
//                throw new Error(message);
//            }
//             const data = await res.json()
//             dispatch({type: cardsActionTypes.FETCH_CARDS_SUCCESS, payload: data.results, search: name})
//         }).catch(e => {
//             dispatch({type: cardsActionTypes.FETCH_CARDS_ERROR, payload: 'Failed to fetch', search: name})
//         })
//     }
// }
export const fetchCards = (name: string) => async(dispatch: AppDispatch) => {
    try{
        dispatch(cardsSlice.actions.fetchCards({search: name}))
        const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
        if(!res.ok) throw new Error
        const data = await res.json()
        dispatch(cardsSlice.actions.fetchCardsSuccess(data.results))

    } catch(e){
        dispatch(cardsSlice.actions.fetchCardsError('Failed to fetch'))

    }
}