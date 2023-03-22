import React from 'react';
import { CardProps, SearchState, FormData } from './types';

export default class Card extends React.Component<FormData, SearchState> {
  constructor(props: FormData) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        {/* <img src={this.props.avatar} alt="img" className="image" /> */}
        <div className="info">
          <h5>{this.props.name}</h5>
          {/* <p>{this.props.model}</p>
          <p>{this.props.description}</p>
          <p>{this.props.type}</p>
          <p>{this.props.fuel}</p> */}
        </div>
      </div>
    );
  }
}
