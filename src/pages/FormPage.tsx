import Form from '../components/Form';
import { FormData } from '../components/types';
import React, { useState } from 'react';
import CardsContainer from '../components/CardsContainer';
import Card from '../components/Card';
import { useAppDispatch, useAppSelector } from '../hooks/useTypesSelector';
import { getFormCards } from '../store/action-creator/formCards';

const FormPage = () => {
  const {cards} = useAppSelector(state => state.formCards)

  // const [cards, setCards] = useState<FormData[]>([]);

  return (
    <div className="container">
      <Form />
      <div className="cards-container" role="contentinfo">
        {cards.map((el) => <Card key={el.id} id={el.id} name={el.name} image={el.image} />)}
      </div>
    </div>
  );
};

export default FormPage;
