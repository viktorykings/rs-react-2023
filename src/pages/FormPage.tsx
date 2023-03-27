import Form from '../components/Form';
import { MyProps, MainState, FormData } from '../components/types';
import React, { useState } from 'react';
import CardsContainer from '../components/CardsContainer';

const FormPage = () => {
  const [cards, setCards] = useState<FormData[]>([])
  const createCard = (newCard: FormData) => {
    setCards([...cards, newCard]);
  }
  return (
    <div className="container">
    <Form createCard={createCard} />
    <CardsContainer cards={cards} />
  </div>  )
}

export default FormPage

// export default class FormPage extends React.Component<MyProps, MainState> {
//   constructor(props: MyProps) {
//     super(props);
//     this.state = {
//       data: [],
//     };
//     this.createCard = this.createCard.bind(this);
//   }
//   createCard(newCard: FormData) {
//     this.setState({ data: [...this.state.data, newCard] });
//   }
//   render() {
//     return (
//       <div className="container">
//         <Form createCard={this.createCard} />
//         <CardsContainer data={this.state.data} />
//       </div>
//     );
//   }
// }
