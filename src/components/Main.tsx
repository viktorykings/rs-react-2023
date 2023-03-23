import React from 'react';
import Card from './Card';
import Form from './Form';
import Search from './Search';
import { MyProps, FormData, cardState, FormState } from './types';

export default class Main extends React.Component<MyProps, FormState> {
  constructor(props: MyProps) {
    super(props);
    this.state = { data: [] };
    this.createCard = this.createCard.bind(this)
  }
  cardsData: FormData[] = [];
  componentDidMount(){
    console.log(this.state)
  }
  // componentDidMount(): void {
  //   fetch('https://64158b1d8b5d06e4a7b12b04.mockapi.io/cards/venicles', {
  //     method: 'GET',
  //     headers: { 'content-type': 'application/json' },
  //   })
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json();
  //       }
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       this.setState({ data: data });
  //       console.log(this.state.data, 'statw');
  //       this.cardsData.push(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  createCard (newCard: FormData) {
    this.setState({data: [...this.state.data, newCard]})
  }

  render() {
    return (
      <main className="main">
        <Search />
        <Form createCard={this.createCard} />
        <div className="cards-container">
          {this.state.data.length
            ? this.state.data.map((el, id) => (
                <Card
                  key={id}
                  name={el.name}
                  surname={el.surname}
                  birthDate={el.birthDate}
                  isBirthDateVis={el.isBirthDateVis}
                  region={el.region}
                  sex={el.sex}
                  profilePic={el.profilePic}
                  // model={el.model}
                  // avatar={el.avatar}
                />
              ))
            : ''}
        </div>
      </main>
    );
  }
}
