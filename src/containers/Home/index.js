import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Searcher from '../../components/Searcher';
import PokemonList from '../../components/PokemonList';
import axiosConfig from '../../api/config';
import { getPokemons } from '../../api/getPokemons';
import { setPokemons } from '../../actions';
import './styles.css';

function Home() {
  const dispatch = useDispatch();
  const pokemons = useSelector(state => state.pokemons);
  useEffect(() => {
    getPokemons()
      .then(data => {
        const pokemonList = data.results;
        const requests = pokemonList.map(pokemon => {
          return axiosConfig.get(pokemon.url);
        });
        return Promise.all(requests);
      })
      .then(response => {
        console.log(response)
        dispatch(setPokemons(response.map(pokemon => pokemon.data)));
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className='Home'>
      <Searcher />
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default Home;
