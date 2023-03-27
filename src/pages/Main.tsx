import CardsContainer from '../components/CardsContainer';
import React, { useEffect, useState } from 'react';
import Search from '../components/Search';
import { MyProps, MainState, FormData } from '../components/types';

const Main = () => {
  const [cards, setCards] = useState<FormData[]>([])

  useEffect(() => {
    fetch('https://64158b1d8b5d06e4a7b12b04.mockapi.io/cards/venicles', {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        setCards(data);
        console.log(cards, 'statw');
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])
  return (
      <main className="main">
        <Search />
        <CardsContainer cards={cards} />
      </main>
  )
}
export default Main;

// export default class Main extends React.Component<MyProps, MainState> {
//   constructor(props: MyProps) {
//     super(props);
//     this.state = {
//       data: [
//         {
//           name: 'string',
//           surname: 'string',
//           birthDate: 'string',
//           isBirthDateVis: true,
//           region: 'string',
//           sex: 'string | null | undefined',
//           profilePic: 'string',
//           personalData: true,
//           male: false,
//           female: false,
//           other: false,
//         },
//       ],
//     };
//   }
//   cardsData: FormData[] = [];

//   componentDidMount(): void {
//     fetch('https://64158b1d8b5d06e4a7b12b04.mockapi.io/cards/venicles', {
//       method: 'GET',
//       headers: { 'content-type': 'application/json' },
//     })
//       .then((res) => {
//         if (res.ok) {
//           return res.json();
//         }
//       })
//       .then((data) => {
//         console.log(data);
//         this.setState({ data: data });
//         console.log(this.state.data, 'statw');
//         this.cardsData.push(data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   render() {
//     return (
//       <main className="main">
//         <Search />
//         <CardsContainer data={this.state.data} />
//       </main>
//     );
//   }
// }
