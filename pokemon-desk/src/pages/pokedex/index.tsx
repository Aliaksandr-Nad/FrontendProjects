import React from 'react';
import Header from '../../components/header';

interface Props {
  title?: string;
}

const PokedexPage: React.FC<Props> = ({ title }) => {
  return (
    <>
      <Header />
      <div>
        <h1>{title}</h1>
      </div>
    </>
  );
};

export default PokedexPage;
