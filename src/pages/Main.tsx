import CardsContainer from '../components/CardsContainer';
import React, { useEffect, useState } from 'react';
import Search from '../components/Search';
import { FormData } from '../components/types';
import data from '../components/data';

const Main = () => {
  const [cards, setCards] = useState<FormData[]>([]);
  const [isPending, setIsPending] = useState(true);

  const handleSearch = () => {
    fetch("https://rickandmortyapi.com/api/character/?page=20")
      .then((res) =>{
        if(!res.ok){
          throw new Error('Failed to fetch')
        }
        return res.json()
      })
      .then((data) => {
        setCards(data.results);
        console.log(data)
        setIsPending(false);
      })
    }
  useEffect(() => {
    handleSearch();
  }, []);
  return (
    <main className="main">
      <Search />
      {isPending && <div>Loading...</div>}
      {cards && <CardsContainer cards={cards} />}
    </main>
  );
};
export default Main;
