import React from 'react';
import Header from '../../components/header';
import Button from '../../components/button';
import Parallax from '../../components/parallax';

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
      <div>
        <Parallax />
      </div>
    </div>
  );
};

export default HomePage;
