import { useEffect, useState } from 'react';
import req from '../utils/request';
import { IGetPokemonsResponse } from '../interface/pokemons';

const useData = <T>(endpoint: string, query: object, deps: any[] = []) => {
  const [data, setData] = useState<T | IGetPokemonsResponse>({ total: 0, pokemons: [] });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const getData = async (): Promise<void> => {
      setIsLoading(true);

      try {
        setData(await req<T>(endpoint, query));
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, deps);

  return { data, isLoading, isError };
};

export default useData;
