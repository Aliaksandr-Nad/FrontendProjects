import { useEffect, useState } from 'react';
import req from '../utils/request';
import { ConfigEndpoint } from '../config';

const useData = <T>(endpoint: ConfigEndpoint, query: object, deps: any[] = []) => {
  const [data, setData] = useState<T | null>(null);
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
