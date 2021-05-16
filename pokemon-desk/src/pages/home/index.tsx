import React from 'react';
import Header from '../../components/header';
import Button from '../../components/button';

import s from './home.module.scss';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
      <Button
        // eslint-disable-next-line no-console
        onClick={() => console.log('####: Click')}>
        See pokemons
      </Button>
    </div>
  );
};

export default HomePage;
