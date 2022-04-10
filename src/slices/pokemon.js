import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemons, getPokemonsWithDetails } from '../api/getPokemons';
import { toggleLoader, setError } from "./general";

const initialState = {
  pokemons: []
};

export const fetchPokemons = createAsyncThunk(
  'pokemon/fetchPokemons',
  async (_, { dispatch }) => {
    dispatch(toggleLoader());
    try {
      const response = await getPokemons();
      const pokemons = response.results;
      const pokemonsWithDetails = await getPokemonsWithDetails(pokemons);
      dispatch(setPokemons(pokemonsWithDetails));
    } catch (error) {
      console.error(error);
      dispatch(setError({ error: error, message: 'Error fetching pokemons' }));
    } finally {
      dispatch(toggleLoader());
    }
  }
);

export const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    setFavorite: (state, action) => {
      state.pokemons = state.pokemons.map(pokemon => {
        if (pokemon.id === action.payload) {
          return { ...pokemon, favorite: !pokemon.favorite };
        } else {
          return pokemon;
        }
      });
    }
  }
});

export const { setPokemons, setFavorite } = pokemonSlice.actions;

export default pokemonSlice.reducer;