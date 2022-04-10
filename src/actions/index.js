import {
  SET_POKEMONS,
  SET_ERROR,
  CLEAR_ERROR,
  FETCH_POKEMONS_DETAILS,
  TOGGLE_LOADER,
  TOGGLE_FAVORITE
} from "./types";

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

export const fetchPokemonsDetails = (payload) => ({
  type: FETCH_POKEMONS_DETAILS,
  payload,
});

export const toggleFavorite = (payload) => ({
  type: TOGGLE_FAVORITE,
  payload,
});

export const toggleLoader = () => ({
  type: TOGGLE_LOADER
});