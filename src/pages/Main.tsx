import CardsContainer from '../components/CardsContainer';
import React from 'react';
import Search from '../components/Search';

const Main = () => {
  return (
    <main className="main">
      <Search />
      <CardsContainer />
    </main>
  );
};
export default Main;
