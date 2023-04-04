import CardsContainer from '../components/CardsContainer';
import FullInfoCard from '../components/FullInfoCard';
import React, { useEffect, useState } from 'react';
import Search from '../components/Search';
import { FormData } from '../components/types';
import data from '../components/data';

const Main = () => {
  const [cards, setCards] = useState<FormData[]>([]);
  const [isPending, setIsPending] = useState(true);
  const [isVisible, setisVisible] = useState(false);
  const [fullCard, setFullCard] = useState(null);

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
  const fetchSingleCard = (e: React.MouseEvent<HTMLElement>) => {
    console.log((e.target as Element).closest('.card')?.id)
    const id = (e.target as Element).closest('.card')?.id
    if(id){
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res => {
        return res.json()
      })
      .then(data => {
        console.log(data)
        setFullCard(data)
        setisVisible(true)
      })
    }

  }
  useEffect(() => {
    handleSearch();
  }, []);
  return (
    <main className="main">
      <Search />
      {isPending && <div>Loading...</div>}
      {cards && <CardsContainer cards={cards} fetchSingleCard={fetchSingleCard} />}
      {fullCard && isVisible && <FullInfoCard card={fullCard} />}
    </main>
  );
};
export default Main;
