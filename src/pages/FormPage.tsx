import Form from '../components/Form';
import { FormData } from '../components/types';
import React, { useState } from 'react';
import CardsContainer from '../components/CardsContainer';

const FormPage = () => {
  const [cards, setCards] = useState<FormData[]>([]);
  const createCard = (newCard: FormData) => {
    setCards([...cards, newCard]);
  };
  return (
    <div className="container">
      <Form createCard={createCard} />
      <CardsContainer cards={cards} />
    </div>
  )
}

export default FormPage;
