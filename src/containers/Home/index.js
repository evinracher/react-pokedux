import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Searcher from '../../components/Searcher';
import PokemonList from '../../components/PokemonList';
import { getPokemons } from '../../api/getPokemons';
import { setPokemons } from '../../actions';
import './styles.css';

const mapStateToProps = state => ({
  pokemons: state.pokemons
});

const mapDispatchToProps = dispatch => ({
  setPokemons: value => dispatch(setPokemons(value))
});

function Home({ pokemons, setPokemons }) {

  useEffect(() => {
    getPokemons()
      .then(response => {
        setPokemons(response.data.results);
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
