import React from 'react';

import s from './home.module.scss';
import Header from '../../components/header';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
    </div>
  );
};

export default HomePage;
