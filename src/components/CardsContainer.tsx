import React from 'react';
import Card from './Card';
import { MainState } from './types';

export const CardsContainer = ({ cards }: MainState) => {
  return (
    <div className="cards-container">
      {cards.length &&
        cards.map((el, id) => (
          <Card
            key={id}
            name={el.name}
            surname={el.surname}
            isBirthDateVis={el.isBirthDateVis}
            region={el.region}
            sex={el.sex}
            birthDate={el.birthDate}
            profilePic={el.profilePic}
            personalData={el.personalData}
          />
        ))}
    </div>
  );
};
export default CardsContainer;
