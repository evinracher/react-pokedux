import React, { useEffect } from 'react';
import Searcher from '../../components/Searcher';
import PokemonList from '../../components/PokemonList';
import './styles.css';
import { getPokemons } from '../../api/getPokemons';

function Home() {

  useEffect(() => {
    getPokemons()
      .then(response => console.log(response));
  }, []);

  return (
    <div className='Home'>
      <Searcher />
      <PokemonList />
    </div>
  );
}

export default Home;
