import CardsContainer from '../components/CardsContainer';
import React, { useEffect, useState } from 'react';
import Search from '../components/Search';
import { MyProps, MainState, FormData } from '../components/types';

const Main = () => {
  const [cards, setCards] = useState<FormData[]>([])
  console.log(cards, '1')
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
        console.log(data);
        setCards(data);
        console.log(cards, 'statw');
      })
      .catch((error) => {
        console.log(error);
      });
      console.log(cards, '2')
  }, [])
  return (
      <main className="main">
        <Search />
        <CardsContainer cards={cards} />
      </main>
  )
}
export default Main;
