import React from 'react';
import { SingleCard } from './types';

const FullInfoCard = ({ card, handleCloseSingleCard }: SingleCard) => {
  return (
    <div className="backdrop" data-testid="backdrop" onClick={handleCloseSingleCard}>
      <div className="card-full">
        <img src={card.image} alt="img" className="image" />
        <div className="info">
          <h5>{card.name}</h5>
          <p>{card.status}</p>
          <p>{card.species}</p>
          <p>{card.type}</p>
          <p>{card.location.name}</p>
          <p>{card.origin.name}</p>
          <p>{card.gender}</p>
        </div>
        <button className="close-btn">x</button>
      </div>
    </div>
  );
};

export default FullInfoCard;
