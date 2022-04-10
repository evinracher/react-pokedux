import { combineReducers } from "redux";
import pokemonReducer from "./pokemonReducer";
import generalReducer from "./generalReducer";

const rootReducer = combineReducers({
  pokemons: pokemonReducer,
  general: generalReducer
});

export default rootReducer;