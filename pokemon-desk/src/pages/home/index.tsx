import React from 'react';
import Header from '../../components/header';
import Button from '../../components/button';
import Parallax from '../../components/parallax';
import Layout from '../../components/layout';
import Heading from '../../components/heading';

import s from './home.module.scss';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <Heading type={1}>
            <b>Find</b> all your favorite <b>Pokemon</b>
          </Heading>
          <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
          <Button
            // eslint-disable-next-line no-console
            onClick={() => console.log('####: Click')}>
            See pokemons
          </Button>
        </div>
        <div className={s.contentParallax}>
          <Parallax />
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;
