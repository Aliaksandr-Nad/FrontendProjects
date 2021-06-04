import React, { useState } from 'react';
import useData from '../../hook/getData';
import useDebounce from '../../hook/useDebounce';

import { IGetPokemonsResponse, PokemonRequest } from '../../interface/pokemons';

import PokemonCard from '../../components/pokemonCard';
import Layout from '../../components/layout';
import Heading from '../../components/heading';

import s from './style.module.scss';
import SearchBar from '../../components/searchBar';

interface IQuery {
  name?: string;
}

const PokedexPage = () => {
  const [searchValue, setSearchValue] = useState('Encuentra tu pokémon...');
  const [query, setQuery] = useState<IQuery>({});
  const debouncedValue = useDebounce(searchValue, 500);

  const { data, isLoading, isError } = useData<IGetPokemonsResponse>('getPokemons', query, [debouncedValue]);

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
      <Layout className={s.root}>
        <Heading type="h3">
          {data?.total} <b>Pokemons</b> for you to choose your favorite
        </Heading>
        <SearchBar value={searchValue} onChange={handleSearchChange} />
        <div className={s.contentWrap}>
          {!isLoading &&
            data?.pokemons &&
            data?.pokemons.map(({ id, name, stats: { attack, defense }, types, img }: PokemonRequest) => (
              <PokemonCard key={id} id={id} name={name} attack={attack} defense={defense} types={types} img={img} />
            ))}
        </div>
      </Layout>
    </>
  );
};

export default PokedexPage;
