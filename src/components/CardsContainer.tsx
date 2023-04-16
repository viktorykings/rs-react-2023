import React, { useState } from 'react';
import Card from './Card';
import { useAppSelector } from '../hooks/useTypesSelector';
import { rickAndMortyApi } from '../services/rickAndMorty';
import FullInfoCard from './FullInfoCard';
import { FormData } from './types';

const CardsContainer = () => {
  const { search } = useAppSelector((state) => state.search);
  const {
    data: characters,
    error,
    isLoading,
  } = rickAndMortyApi.useGetCharackterByNameQuery(search);

  const [isVisible, setisVisible] = useState(false);
  const [fullCard, setFullCard] = useState<null | FormData>(null);

  const handleCloseSingleCard = (e: React.MouseEvent<HTMLElement>) => {
    const target = (e.target as HTMLElement).classList.contains('backdrop');
    const closeBtn = (e.target as HTMLElement).classList.contains('close-btn');
    if (target || closeBtn) {
      setisVisible(false);
    }
  };
  const showFullCard = (e: React.MouseEvent<HTMLElement>) => {
    const id = (e.target as Element).closest('.card')?.id;
    if (id && characters) {
      setFullCard(characters.results[parseInt(id) - 1]);
      setisVisible(true);
    }
  };
  if (isLoading) {
    return <h5>Loading....</h5>;
  }
  if (error) {
    return <h5>Failed to fetch</h5>;
  }
  return (
    <div className="cards-container" role="contentinfo" onClick={showFullCard}>
      {characters &&
        characters.results.map((el) => (
          <Card key={el.id} id={el.id} name={el.name} image={el.image} />
        ))}
      {isVisible && fullCard && (
        <FullInfoCard card={fullCard} handleCloseSingleCard={handleCloseSingleCard} />
      )}
    </div>
  );
};
export default CardsContainer;
