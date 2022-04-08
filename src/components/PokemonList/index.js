import React from 'react';
import PokemonCard from './PokemonCard';
import { Grid } from 'semantic-ui-react';

const PokemonList = ({ pokemons = [] }) => {
  return (
    <Grid className='PokemonList'>
      {pokemons.map(pokemon => (
        <PokemonCard pokemon={pokemon} key={pokemon?.name} />
      ))}
    </Grid>
  );
};

export default PokemonList;