import { combineReducers } from "redux";
import pokemons from "../slices/pokemon";
import general from "../slices/general";

const rootReducer = combineReducers({
  pokemons,
  general
});

export default rootReducer;