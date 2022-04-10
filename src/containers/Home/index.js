import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader';
import Searcher from '../../components/Searcher';
import PokemonList from '../../components/PokemonList';
import { getPokemons } from '../../api/getPokemons';
import { fetchPokemons } from '../../slices/pokemon';
import { setError, toggleLoader } from '../../slices/general';
import './styles.css';

function Home() {
  const dispatch = useDispatch();
  const pokemons = useSelector(state => state.pokemons.pokemons);
  const loading = useSelector(state => state.general.loading);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

  return (
    <div className='Home'>
      <Loader active={loading} />
      <Searcher />
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default Home;
