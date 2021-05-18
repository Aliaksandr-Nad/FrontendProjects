import React from 'react';
import HomePage from './pages/home';
import PokedexPage from './pages/pokedex';

const routes = {
  '/': () => <HomePage />,
  '/pokedex': () => <PokedexPage />,
};

export default routes;
