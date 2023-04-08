import React from 'react';
import Card from './Card';
import { MainState } from './types';

const CardsContainer = ({ cards, fetchSingleCard }: MainState) => {
  return (
    <div className="cards-container" onClick={fetchSingleCard}>
      {cards &&
        cards.map((el) => (
          <Card
            key={el.id}
            id={el.id}
            name={el.name}
            image={el.image}
          />
        ))}
    </div>
  );
};
export default CardsContainer;
