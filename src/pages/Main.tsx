import CardsContainer from '../components/CardsContainer';
import React, { useEffect, useState } from 'react';
import Search from '../components/Search';
import { FormData } from '../components/types';

const Main = () => {
  const [cards, setCards] = useState<FormData[]>([]);
  useEffect(() => {
    fetch('https://64158b1d8b5d06e4a7b12b04.mockapi.io/cards/venicles', {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        setCards(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [cards]);
  return (
    <main className="main">
      <Search />
      <CardsContainer cards={cards} />
    </main>
  );
};
export default Main;
