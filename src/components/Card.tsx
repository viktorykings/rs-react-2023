import React from 'react';
import { FormData } from './types';

const Card = (props: FormData) => {
  let file: Blob | MediaSource;
  let src = ''
  if(props.profilePic.length > 0){
    file = props.profilePic[0]
      src = URL.createObjectURL(file)
  }
  return (
    <div className="card">
    <img src={src} alt="img" className="image" />
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
