import CardsContainer from '../components/CardsContainer';
import FullInfoCard from '../components/FullInfoCard';
import React, { useState } from 'react';
import Search from '../components/Search';
import fetchCards from './fetch';

const Main = () => {
  const [isVisible, setisVisible] = useState(false);
  const [fullCard, setFullCard] = useState(null);

  const fetchSingleCard = async (e: React.MouseEvent<HTMLElement>) => {
    const id = (e.target as Element).closest('.card')?.id;
    if (id) {
      const data = await fetchCards('', id);
      setFullCard(data);
      setisVisible(true);
    }
  };
  const handleCloseSingleCard = (e: React.MouseEvent<HTMLElement>) => {
    const target = (e.target as HTMLElement).classList.contains('backdrop');
    const closeBtn = (e.target as HTMLElement).classList.contains('close-btn');
    if (target || closeBtn) {
      setisVisible(false);
    }
  };

  return (
    <main className="main">
      <Search />
      <CardsContainer fetchSingleCard={fetchSingleCard} />
      {isVisible && fullCard && (
        <FullInfoCard card={fullCard} handleCloseSingleCard={handleCloseSingleCard} />
      )}
    </main>
  );
};
export default Main;
