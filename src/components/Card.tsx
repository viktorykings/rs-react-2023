import React from 'react';
import { CardProps, SearchState } from './types';

export default class Card extends React.Component<CardProps, SearchState> {
  constructor(props: CardProps) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <img src={this.props.avatar} alt="img" className="image" />
        <div className="info">
          <h5>{this.props.venicle}</h5>
          <p>{this.props.model}</p>
          <p>{this.props.description}</p>
          <p>{this.props.type}</p>
          <p>{this.props.fuel}</p>
        </div>
      </div>
    );
  }
}
