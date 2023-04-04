import React from 'react';
import Card from './Card';
import { MainState } from './types';

export const CardsContainer = ({ cards, fetchSingleCard }: MainState) => {
  return (
    <div className="cards-container" onClick={fetchSingleCard}>
      {cards.length &&
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
