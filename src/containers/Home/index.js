import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader';
import Searcher from '../../components/Searcher';
import PokemonList from '../../components/PokemonList';
import { fetchPokemonsDetails, setError, toggleLoader } from '../../actions';
import { getPokemons } from '../../api/getPokemons';
import './styles.css';

function Home() {
  const dispatch = useDispatch();
  const pokemons = useSelector(state => state.pokemons);
  const loading = useSelector(state => state.loading);

  useEffect(() => {
    dispatch(toggleLoader());
    getPokemons()
      .then((res) => {
        dispatch(fetchPokemonsDetails(res.results));
      })
      .catch((error) => {
        dispatch(setError({ message: 'An error has been occurred', error }));
      });
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
