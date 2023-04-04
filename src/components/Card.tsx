import React from 'react';
import { FormData } from './types';

const Card = (props: FormData) => {
  return (
    <div className="card">
      <img src={props.image} alt="img" className="image" />
      <div className="info">
        <h5>{props.name}</h5>
        <p>{props.status}</p>
        <p>{props.species}</p>
        <p>{props.type}</p>
        <p>{props.location.name}</p>
        <p>{props.origin.name}</p>
        <p>{props.gender}</p>
      </div>
    </div>
  );
};

export default Card;
