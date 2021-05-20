import React from 'react';
import { useRoutes } from 'hookrouter';
import routes from './routes';
import PokedexPage from './pages/pokedex';

const App = () => {
  const match = useRoutes(routes);

  return match || <PokedexPage title="404" />;
};

export default App;
