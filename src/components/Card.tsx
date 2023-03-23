import React from 'react';
import { CardProps, SearchState, FormData } from './types';

export default class Card extends React.Component<FormData, SearchState> {
  constructor(props: FormData) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <img src={`http://127.0.0.1:5173/${this.props.profilePic}`} alt="img" className="image" />
        <div className="info">
          <h5>{this.props.name}</h5>
          <p>{this.props.surname}</p>
          <p>{this.props.isBirthDateVis && this.props.birthDate}</p>
          <p>{this.props.region}</p>
          <p>{this.props.sex}</p>
          <p>{this.props.isBirthDateVis}</p>
        </div>
      </div>
    );
  }
}
