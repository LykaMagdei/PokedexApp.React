import axios from "axios";

const getPokemonAPI = (url) => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon${url}`);
};

export default getPokemonAPI;
