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
  const [err, setErr] = useState(null);

  const handleSearch = async (name: string) => {
    setIsPending(true);
    const data = await fetchCards(name).catch((e) => {
      setErr(e.message);
    });
    if (data) {
      setCards(data.results);
      setErr(null);
    }
    setIsPending(false);
  };
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
  useEffect(() => {
    handleSearch('');
  }, []);
  return (
    <main className="main">
      <Search handleSearch={handleSearch} />
      {isPending && <div>Loading...</div>}
      {!isPending && !err && cards && (
        <CardsContainer cards={cards} fetchSingleCard={fetchSingleCard} />
      )}
      {!isPending && fullCard && isVisible && (
        <FullInfoCard card={fullCard} handleCloseSingleCard={handleCloseSingleCard} />
      )}
      {!isPending && err && <p>{err}</p>}
    </main>
  );
};
export default Main;
