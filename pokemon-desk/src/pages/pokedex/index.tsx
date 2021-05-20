import React, { useEffect, useState } from 'react';
import PokemonCard, { pokemonTypes } from '../../components/pokemonCard';
import Layout from '../../components/layout';
import Heading from '../../components/heading';

import req from '../../utils/request';

import s from './style.module.scss';

interface Props {
  title?: string;
}

interface IGetPokemonsResponse {
  total: number;
  pokemons: IPokemons[];
}

interface IPokemons {
  id: number;
  name: string;
  stats: {
    attack: number;
    defense: number;
  };
  types: pokemonTypes[];
  img: string;
}

const usePokemons = () => {
  const [data, setData] = useState<IGetPokemonsResponse>({ total: 0, pokemons: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);

      try {
        setData(await req('getPokemons'));
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getPokemons();
  }, []);

  return { data, isLoading, isError };
};

const PokedexPage: React.FC<Props> = ({ title }) => {
  const {
    data: { total, pokemons },
    isLoading,
    isError,
  } = usePokemons();

  if (isLoading) {
    return <div>Loadind...</div>;
  }

  if (isError) {
    return <div>Something wrong!!!</div>;
  }

  return (
    <>
      <div>
        <Heading type="h1">{total}</Heading>
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
