import getUrlWithParamsConfig from './getUrlWithParamsConfig';
import { ConfigEndpoint } from '../config';

describe('getUrlWithParamsConfig', () => {
  test('getPokemons without params => returns new object with fields {method, protocol, host, pathname}', () => {
    const url = getUrlWithParamsConfig(ConfigEndpoint.GET_POKEMONS);

    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemons',
        query: {},
      },
      body: {},
    });
  });

  test('getPokemons with params {name: Pikachu} => returns new object with fields {method, protocol, host, pathname and query which contain name: Pikachu}', () => {
    const url = getUrlWithParamsConfig(ConfigEndpoint.GET_POKEMONS, { name: 'Pikachu' });

    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemons',
        query: { name: 'Pikachu' },
      },
      body: {},
    });
  });

  test('getPokemons with params {id: 25} => returns new object with fields {method, protocol, host, pathname that ends in 25}', () => {
    const url = getUrlWithParamsConfig(ConfigEndpoint.GET_POKEMON, { id: 25 });

    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemon/25',
        query: {},
      },
      body: {},
    });
  });
});
