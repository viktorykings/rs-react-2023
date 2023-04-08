import CardsContainer from '../components/CardsContainer';
import FullInfoCard from '../components/FullInfoCard';
import React, { useEffect, useState } from 'react';
import Search from '../components/Search';
import { FormData } from '../components/types';

const Main = () => {
  const [cards, setCards] = useState<FormData[]>([]);
  const [isPending, setIsPending] = useState(true);
  const [isVisible, setisVisible] = useState(false);
  const [fullCard, setFullCard] = useState(null);

  const handleSearch = (name: string) => {
    if(name){
      fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
      .then((res) =>{
        if(!res.ok){
          throw new Error('Failed to fetch')
        }
        return res.json()
      })
      .then((data) => {
        setCards(data.results);
        setIsPending(false);
      })
      .catch(e=>console.log(e))
    }
    fetch("https://rickandmortyapi.com/api/character/?page=1")
      .then((res) =>{
        if(!res.ok){
          throw new Error('Failed to fetch')
        }
        return res.json()
      })
      .then((data) => {
        setCards(data.results);
        setIsPending(false);
      })
    }
    const fetchSingleCard = (e: React.MouseEvent<HTMLElement>) => {
      const id = (e.target as Element).closest('.card')?.id
      if(id){
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(res => {
          return res.json()
        })
        .then(data => {
          setFullCard(data)
          setisVisible(true)
        })
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
