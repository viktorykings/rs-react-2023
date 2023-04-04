import React from 'react';
import { SingleCard } from './types';

const FullInfoCard = ({ card }: SingleCard) => {
  return (
    <div className='backdrop'>
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
        </div>
    </div>
  );
};

export default FullInfoCard;
