import Card from '../components/Card';
import Form from '../components/Form';
import { MyProps, MainState, FormData } from '../components/types';
import React, { Component } from 'react';
import CardsContainer from '../components/CardsContainer';

export default class FormPage extends React.Component<MyProps, MainState> {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      data: []
    };
    this.createCard = this.createCard.bind(this);
  }
  createCard(newCard: FormData) {
    this.setState({ data: [...this.state.data, newCard] });
  }
  render() {
    return (
      <div className="container">
        <Form createCard={this.createCard} />
        <CardsContainer data={this.state.data} />
      </div>
    );
  }
}
