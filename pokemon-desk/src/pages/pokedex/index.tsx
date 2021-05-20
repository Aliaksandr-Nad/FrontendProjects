import React from 'react';
import Header from '../../components/header';
import PokemonCard from '../../components/pokemonCard';
import Layout from '../../components/layout';
import Heading from '../../components/heading';

import pokemons from '../../pokemons';

import s from './style.module.scss';

interface Props {
  title?: string;
}

const PokedexPage: React.FC<Props> = ({ title }) => {
  return (
    <>
      <Header />
      <div>
        <Heading type="h1">{title}</Heading>
      </div>
      <div>
        <Layout className={s.contentWrap}>
          {pokemons.map(({ id, name, stats: { attack, defense }, types, img }) => (
            <PokemonCard key={id} id={id} name={name} attack={attack} defense={defense} types={types} img={img} />
          ))}
        </Layout>
      </div>
    </>
  );
};

export default PokedexPage;
