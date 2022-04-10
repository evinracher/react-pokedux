import { SET_POKEMONS, SET_ERROR, CLEAR_ERROR, TOGGLE_LOADER, TOGGLE_FAVORITE } from "../actions/types";

const initialState = {
  pokemons: [],
  error: '',
  loading: false,
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload
      };
    case SET_ERROR:
      return { ...state, error: action.payload.message };
    case CLEAR_ERROR:
      return { ...state, error: '' };
    case TOGGLE_LOADER:
      return { ...state, loading: !state.loading };
    case TOGGLE_FAVORITE:
      return {
        ...state, pokemons: state.pokemons.map(pokemon => {
          if (pokemon.id === action.payload) {
            return { ...pokemon, favorite: !pokemon.favorite };
          } else {
            return pokemon;
          }
        })
      };
    default:
      return state;
  }
};

export default pokemonReducer;