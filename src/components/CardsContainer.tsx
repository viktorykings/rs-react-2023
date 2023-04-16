import React, { useEffect } from 'react';
import Card from './Card';
import { MainState } from './types';
import {useAppSelector, useAppDispatch} from '../hooks/useTypesSelector';
import { useDispatch } from 'react-redux';
import { fetchCards } from '../store/action-creator/card';
import { rickAndMortyApi } from '../services/rickAndMorty';

const CardsContainer = ({ fetchSingleCard }: MainState) => {
  // const {cards, isLoading, errors, search} = useAppSelector(state => state.cards)
  const {search} = useAppSelector(state => state.cards)
  // const dispatch = useAppDispatch()
  const { data: characters, error, isLoading } = rickAndMortyApi.useGetCharackterByNameQuery(search)
  console.log(characters);
  
  useEffect(() => {
    // dispatch(fetchCards(search))
    // console.log(cards)
  }, [])
  if(isLoading){
    return <h5>Loading....</h5>
  }
  if(error){
    return <h5>Failed to fetch</h5>
  }
  return (
    <div className="cards-container" role="contentinfo" onClick={fetchSingleCard}>
      {/* {cards && cards.map((el) => <Card key={el.id} id={el.id} name={el.name} image={el.image} />)} */}
      {/* {data && data.results.map((el) => <Card key={el.id} id={el.id} name={el.name} image={el.image} />)} */}
      {characters && characters.results.map((el) => <Card key={el.id} id={el.id} name={el.name} image={el.image} />)}
    </div>
  );
};
export default CardsContainer;
