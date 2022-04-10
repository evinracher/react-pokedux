import { SET_POKEMONS, TOGGLE_FAVORITE } from "../actions/types";

const initialState = {
  pokemons: [],
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload
      };
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