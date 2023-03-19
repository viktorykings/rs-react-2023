import React from 'react';
import Card from './Card';
import Search from './Search';
import { MyProps, CardProps, cardState } from './types';

export default class Main extends React.Component<MyProps, cardState> {
  constructor(props: MyProps) {
    super(props);
    this.state = { data: [] };
  }
  cardsData: CardProps[] = [];
  // async fetchData(){
  //   const data = await fetch('https://64158b1d8b5d06e4a7b12b04.mockapi.io/cards/');
  //   console.log(data)
  // }
  componentDidMount(): void {
    fetch('https://64158b1d8b5d06e4a7b12b04.mockapi.io/cards/venicles', {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((data) => {
        console.log(data);
        this.setState({ data: data });
        console.log(this.state.data, 'statw');
        this.cardsData.push(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <main className="main">
        <Search />
        <div className="cards-container">
          {this.state.data.length
            ? this.state.data.map((el) => (
                <Card
                  key={el.id}
                  id={el.id}
                  venicle={el.venicle}
                  type={el.type}
                  description={el.description}
                  fuel={el.fuel}
                  model={el.model}
                  avatar={el.avatar}
                />
              ))
            : ''}
        </div>
      </main>
    );
  }
}
