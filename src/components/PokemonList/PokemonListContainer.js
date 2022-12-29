import { connect } from "react-redux";
import {
  getPokemonThunkCreate,
  changeCurrentPageActionCreate,
  changePokemonLimitsActionCreate,
  showPokemonInfoActionCreate,
} from "../../redux/reducer/pokemonListReducer";
import PokemonList from "./PokemonList";

const mapStateToProps = (state) => {
  return {
    pokemonList: state.pokemonListPage.pokemonList,
    pokemonLimits: state.pokemonListPage.pokemonLimits,
    currentPage: state.pokemonListPage.currentPage,
    countPokemons: state.pokemonListPage.countPokemons,
    isFetching: state.pokemonListPage.isFetching,
    isDisabled: state.pokemonListPage.isDisabled,
  };
};

const PokemonListContainer = connect(mapStateToProps, {
  getPokemonThunkCreate,
  changeCurrentPageActionCreate,
  changePokemonLimitsActionCreate,
  showPokemonInfoActionCreate,
})(PokemonList);

export default PokemonListContainer;
