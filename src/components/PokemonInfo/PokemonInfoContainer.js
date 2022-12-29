import { connect } from "react-redux";
import PokemonInfo from "./PokemonInfo";

const mapStateToProps = (state) => {
  return {
    pokemonList: state.pokemonListPage.pokemonList,
  };
};
const PokemonInfoContainer = connect(mapStateToProps, {})(PokemonInfo);

export default PokemonInfoContainer;
