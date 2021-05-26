import React from 'react';
import { useRoutes } from 'hookrouter';
import routes from './routes';
import PokedexPage from './pages/pokedex';
import Header from './components/header';

const App = () => {
  const match = useRoutes(routes);

  return match ? (
    <>
      <Header />
      {match}
    </>
  ) : (
    <PokedexPage />
  );
};

export default App;
