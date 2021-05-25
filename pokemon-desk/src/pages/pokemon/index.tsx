import React from 'react';

export interface PokemonProps {
  id: string | number;
}

const Pokemon: React.FC<PokemonProps> = ({ id }) => {
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};

export default Pokemon;
