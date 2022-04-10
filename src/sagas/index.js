import { call, put, takeEvery } from 'redux-saga/effects';
import { setError, setPokemons, toggleLoader } from '../actions';
import { FETCH_POKEMONS_DETAILS } from '../actions/types';
import { getPokemonsWithDetails } from '../api/getPokemons';

function* fetchPokemonsWithDetails(action) {
  try {
    const pokemonsWithDetails = yield call(getPokemonsWithDetails, action.payload);
    yield put(setPokemons(pokemonsWithDetails));
    yield put(toggleLoader());
  } catch (error) {
    console.error(error);
    yield put(setError({ message: "Error getting pokemons details", error }));
  }
}

function* pokemonSaga() {
  yield takeEvery(FETCH_POKEMONS_DETAILS, fetchPokemonsWithDetails);
}

export default pokemonSaga;