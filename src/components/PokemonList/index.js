import React from 'react';
import PokemonCard from './PokemonCard';
import { Grid } from 'semantic-ui-react';
const PokemonList = () => {
  const pokemons = Array(20).fill({});
  return (
    <Grid className='PokemonList'>
      {pokemons.map(pokemon => (
        <PokemonCard key={pokemon?.id} />
      ))}
    </Grid>
  );
};

export default PokemonList;