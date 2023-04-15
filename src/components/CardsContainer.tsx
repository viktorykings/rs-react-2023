import React, { useEffect } from 'react';
import Card from './Card';
import { MainState } from './types';
import {useAppSelector, useAppDispatch} from '../hooks/useTypesSelector';
import { useDispatch } from 'react-redux';
import { fetchCards } from '../store/action-creator/card';

const CardsContainer = ({ fetchSingleCard }: MainState) => {
  const {cards, isLoading, errors, search} = useAppSelector(state => state.cards)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchCards(search))
    console.log(cards)
  }, [])
  if(isLoading){
    return <h5>Loading....</h5>
  }
  if(errors){
    return <h5>{errors}</h5>
  }
  return (
    <div className="cards-container" role="contentinfo" onClick={fetchSingleCard}>
      {cards.map((el) => <Card key={el.id} id={el.id} name={el.name} image={el.image} />)}
    </div>
  );
};
export default CardsContainer;
