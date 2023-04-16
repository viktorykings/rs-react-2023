import React from 'react';
import Card from './Card';
import { MainState } from './types';
import {useAppSelector, useAppDispatch} from '../hooks/useTypesSelector';
import { rickAndMortyApi } from '../services/rickAndMorty';

const CardsContainer = ({ fetchSingleCard }: MainState) => {
  const {search} = useAppSelector(state => state.search)
  const { data: characters, error, isLoading } = rickAndMortyApi.useGetCharackterByNameQuery(search)

  if(isLoading){
    return <h5>Loading....</h5>
  }
  if(error){
    return <h5>Failed to fetch</h5>
  }
  return (
    <div className="cards-container" role="contentinfo" onClick={fetchSingleCard}>
      {characters && characters.results.map((el) => <Card key={el.id} id={el.id} name={el.name} image={el.image} />)}
    </div>
  );
};
export default CardsContainer;
