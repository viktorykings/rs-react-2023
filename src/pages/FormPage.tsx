import Form from '../components/Form';
import React from 'react';
import Card from '../components/Card';
import { useAppSelector } from '../hooks/useTypesSelector';

const FormPage = () => {
  const { cards } = useAppSelector((state) => state.formCards);

  return (
    <div className="container">
      <Form />
      <div className="cards-container" role="contentinfo">
        {cards.map((el) => (
          <Card key={el.id} id={el.id} name={el.name} image={el.image} />
        ))}
      </div>
    </div>
  );
};

export default FormPage;
