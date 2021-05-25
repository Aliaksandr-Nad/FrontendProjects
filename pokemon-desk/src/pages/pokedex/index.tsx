import React, { useState } from 'react';
import PokemonCard from '../../components/pokemonCard';
import Layout from '../../components/layout';
import Heading from '../../components/heading';

import s from './style.module.scss';
import useData from '../../hook/getData';
import { IGetPokemonsResponse, PokemonRequest } from '../../interface/pokemons';

interface Props {
  title?: string;
}

interface IQuery {
  name?: string;
}

const PokedexPage: React.FC<Props> = ({ title }) => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({});

  const {
    data: { total, pokemons },
    isLoading,
    isError,
  } = useData<IGetPokemonsResponse>('getPokemons', query, [searchValue]);

  if (isLoading) {
    return <div>Loadind...</div>;
  }

  if (isError) {
    return <div>Something wrong!!!</div>;
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((state: IQuery) => ({
      ...state,
      name: e.target.value,
    }));
  };

  return (
    <>
      <div>
        <Heading type="h1">{total}</Heading>
        <Heading type="h1">{title}</Heading>
      </div>
      <div>
        <input type="text" value={searchValue} onChange={handleSearchChange} />
      </div>
      <div>
        <Layout className={s.contentWrap}>
          {!isLoading &&
            pokemons &&
            pokemons.map(({ id, name, stats: { attack, defense }, types, img }: PokemonRequest) => (
              <PokemonCard key={id} id={id} name={name} attack={attack} defense={defense} types={types} img={img} />
            ))}
        </Layout>
      </div>
    </>
  );
};

export default PokedexPage;
