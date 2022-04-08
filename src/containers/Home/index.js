import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Searcher from '../../components/Searcher';
import PokemonList from '../../components/PokemonList';
import { getPokemonsDetails } from '../../actions';
import './styles.css';

function Home() {
  const dispatch = useDispatch();
  const pokemons = useSelector(state => state.pokemons);
  useEffect(() => {
    dispatch(getPokemonsDetails());
  }, []);

  return (
    <div className='Home'>
      <Searcher />
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default Home;
