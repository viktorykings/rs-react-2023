import CardsContainer from '../components/CardsContainer';
import React, { useEffect, useState } from 'react';
import Search from '../components/Search';
import { FormData } from '../components/types';
import data from '../components/data';

const Main = () => {
  const [cards, setCards] = useState<FormData[]>([]);
  useEffect(() => {
    setCards(data);
  }, [cards]);
  return (
    <main className="main">
      <Search />
      <CardsContainer cards={cards} />
    </main>
  );
};
export default Main;
