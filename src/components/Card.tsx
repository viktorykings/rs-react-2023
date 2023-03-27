import React from 'react';
import { FormData } from './types';

const Card = (props: FormData) => {
  return (
    <div className="card">
    <img src={props.profilePic} alt="img" className="image" />
    <div className="info">
      <h5>{props.name}</h5>
      <p>{props.surname}</p>
      <p>{props.isBirthDateVis && props.birthDate}</p>
      <p>{props.region}</p>
      <p>{props.sex}</p>
      <p>{props.isBirthDateVis}</p>
    </div>
  </div>
  )
}

export default Card;
