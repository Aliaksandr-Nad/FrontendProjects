import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useData from '../../hook/getData';
import useDebounce from '../../hook/useDebounce';

import { IGetPokemonsResponse, PokemonRequest } from '../../interface/pokemons';

import PokemonCard from '../../components/pokemonCard';
import Layout from '../../components/layout';
import Heading from '../../components/heading';
import SearchBar from '../../components/searchBar';

import { ConfigEndpoint } from '../../config';
import { getPokemonsTypes, getTypesAction } from '../../store/pokemon';

import s from './style.module.scss';

interface IQuery {
  name?: string;
}

const PokedexPage = () => {
  const dispatch = useDispatch();
  const pokemonTypes = useSelector(getPokemonsTypes);
  const [searchValue, setSearchValue] = useState('Encuentra tu pokémon...');
  const [query, setQuery] = useState<IQuery>({});
  const debouncedValue = useDebounce(searchValue, 500);

  const { data, isLoading, isError } = useData<IGetPokemonsResponse>(ConfigEndpoint.GET_POKEMONS, query, [
    debouncedValue,
  ]);

  useEffect(() => {
    dispatch(getTypesAction());
  }, []);

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
        {pokemonTypes?.map((type) => (
          <Heading type="h5">{type}</Heading>
        ))}
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
