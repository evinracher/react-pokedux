import axiosConfig from "./config";
export const getPokemons = (limit = 151) => axiosConfig.get(`/pokemon?limit=${limit}`);