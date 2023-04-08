import CardsContainer from '../components/CardsContainer';
import FullInfoCard from '../components/FullInfoCard';
import React, { useEffect, useState } from 'react';
import Search from '../components/Search';
import { FormData } from '../components/types';
import fetchCards from './fetch';

const Main = () => {
  const [cards, setCards] = useState<FormData[]>([]);
  const [isPending, setIsPending] = useState(true);
  const [isVisible, setisVisible] = useState(false);
  const [fullCard, setFullCard] = useState(null);

  const handleSearch = async (name: string) => {
    const data = await fetchCards(name).catch((e) => e.message)
    setCards(data.results);
    setIsPending(false);
  }
    const fetchSingleCard = async (e: React.MouseEvent<HTMLElement>) => {
      const id = (e.target as Element).closest('.card')?.id
      if(id){
        const data = await fetchCards('', id)
        setFullCard(data)
        setisVisible(true)
      }
    }
  const handleCloseSingleCard = (e: React.MouseEvent<HTMLElement>) => {
    const target = (e.target as HTMLElement).classList.contains('backdrop');
    const closeBtn = (e.target as HTMLElement).classList.contains('close-btn');
    if(target || closeBtn){
      setisVisible(false);
    }
  }
  useEffect(() => {
    handleSearch('');
  }, []);
  return (
    <main className="main">
      <Search handleSearch={handleSearch} />
      {isPending && <div>Loading...</div>}
      {cards && <CardsContainer cards={cards} fetchSingleCard={fetchSingleCard} />}
      {fullCard && isVisible && <FullInfoCard card={fullCard} handleCloseSingleCard={handleCloseSingleCard} />}
    </main>
  );
};
export default Main;
