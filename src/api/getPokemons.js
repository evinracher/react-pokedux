import axiosConfig from "./config";
export const getPokemons = (limit = 151) =>
  axiosConfig.get(`/pokemon?limit=${limit}`)
    .then(response =>
      response.data
    );

export const getPokemonsWithDetails = (pokemons) => {
  return Promise.all(
    pokemons.map((pokemon) => axiosConfig.get(pokemon.url)))
    .then((pokemonResponses) => {
      return pokemonResponses.map((response) => response.data);
    });
};