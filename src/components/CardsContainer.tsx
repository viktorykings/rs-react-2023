import React from 'react';
import Card from './Card';
import { MainState } from './types';

export const CardsContainer = ({ cards }: MainState) => {
  return (
    <div className="cards-container">
      {cards.length &&
        cards.map((el, id) => (
          <Card
            key={el.id}
            id={el.id}
            name={el.name}
            status={el.status}
            species={el.species}
            type={el.type}
            location={el.location}
            origin={el.origin}
            gender={el.gender}
            image={el.image}
          />
        ))}
    </div>
  );
};
export default CardsContainer;
