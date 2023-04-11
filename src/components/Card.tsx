import React from 'react';
import { CardPrewiew } from './types';

const Card = (props: CardPrewiew) => {
  return (
    <div className="card" id={props.id.toString()}>
      <img src={props.image} alt="img" className="image" />
      <div className="info">
        <h5>{props.name}</h5>
      </div>
    </div>
  );
};

export default Card;
