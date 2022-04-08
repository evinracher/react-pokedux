import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Searcher from '../../components/Searcher';
import PokemonList from '../../components/PokemonList';
import { fetchPokemonsDetails, setError } from '../../actions';
import { getPokemons } from '../../api/getPokemons';
import './styles.css';

function Home() {
  const dispatch = useDispatch();
  const pokemons = useSelector(state => state.pokemons);
  useEffect(() => {
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
      <Searcher />
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default Home;
