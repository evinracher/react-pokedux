import { SET_POKEMONS, SET_ERROR, CLEAR_ERROR } from "./types";
import { getPokemons } from "../api/getPokemons";
import axiosConfig from "../api/config";

export const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload
});

export const setError = (payload) => ({
  type: SET_ERROR,
  payload,
});

export const clearError = (payload) => ({
  type: CLEAR_ERROR,
  payload,
});

export const getPokemonsDetails = () => (dispatch) => (
  getPokemons()
    .then(data => {
      const pokemonList = data.results;
      const requests = pokemonList.map(pokemon => {
        return axiosConfig.get(pokemon.url);
      });
      return Promise.all(requests);
    })
    .then(response => {
      console.log(response);
      dispatch(setPokemons(response.map(pokemon => pokemon.data)));
    })
    .catch(error => {
      dispatch(setError({ message: "An error has ocurred.", error }));
    })
);