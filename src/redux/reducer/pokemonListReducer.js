import getPokemonAPI from "../../components/api/api";

// action

const SET_POKEMON_LIST = "pokemonListReducer/SET_POKEMON_LIST";
const SET_COUNT_POKEMON = "pokemonListReducer/SET_COUNT_POKEMON";
const CHANGE_CURRENT_PAGE = "pokemonListReducer/CHANGE_CURRENT_PAGE";
const CHANGE_POKEMON_LIMITS = "pokemonListReducer/CHANGE_POKEMON_LIMITS";
const SHOW_POKEMON_INFO = "pokemonListReducer/SHOW_POKEMON_INFO";
const TOGGLE_IS_FETCHING = 'pokemonListReducer/TOGGLE_IS_FETCHING';
const TOGGLE_IS_DISABLED = 'pokemonListReducer/TOGGLE_IS_DISABLED';

// state

const initialState = {
  pokemonList: [],
  currentPage: 1,
  pokemonLimits: 20,
  countPokemons: null,
  isFetching: false,
  isDisabled: false,
};

// reducer

const pokemonListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMON_LIST:
      return {
        ...state,
        pokemonList: action.pokemonList,
      };
    case SET_COUNT_POKEMON:
      return {
        ...state,
        countPokemons: action.count,
      };
    case CHANGE_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.numPage,
      };
    case CHANGE_POKEMON_LIMITS:
      return {
        ...state,
        pokemonLimits: action.limits,
      };
    case SHOW_POKEMON_INFO:
      return {
        ...state,
        pokemonList: state.pokemonList.filter((p) => p.id === action.id),
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.booleanIsfetching,
      }
    case TOGGLE_IS_DISABLED:
      return {
        ...state,
        isDisabled: action.booleanIsDisabled,
      }
    default:
      return state;
  }
};

// action creater

const setPokemonToStateActionCreate = (pokemonList) => {
  return {
    type: SET_POKEMON_LIST,
    pokemonList,
  };
};

const setPokemonCountActionCreate = (count) => {
  return {
    type: SET_COUNT_POKEMON,
    count,
  };
};

export const changeCurrentPageActionCreate = (numPage) => {
  return {
    type: CHANGE_CURRENT_PAGE,
    numPage,
  };
};

export const changePokemonLimitsActionCreate = (limits) => {
  return {
    type: CHANGE_POKEMON_LIMITS,
    limits,
  };
};

export const showPokemonInfoActionCreate = (id) => {
  return {
    type: SHOW_POKEMON_INFO,
    id,
  };
};

const toggleIsFetchingActionCreate = (booleanIsfetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    booleanIsfetching,
  }
}

const toggleIsDisabledActionCreate = (booleanIsDisabled) => {
  return {
    type: TOGGLE_IS_DISABLED,
    booleanIsDisabled,
  }
}

// func 

const toggleFethingAndDisabled = (dispatch, boolean) => {
  dispatch(toggleIsFetchingActionCreate(boolean));
  dispatch(toggleIsDisabledActionCreate(boolean));
}

// thunk creater

export const getPokemonThunkCreate = (limit, page) => {
  return async (dispatch) => {
    toggleFethingAndDisabled(dispatch, true);
    let results = [];
    const response = await getPokemonAPI(`?limit=${limit}&offset=${page}`);
    dispatch(setPokemonCountActionCreate(response.data.count));
    response.data.results.forEach(async (element) => {
      let getPokemonData = await getPokemonAPI(`/${element.name}`);
      results = [...results, getPokemonData.data];
      if (results.length === limit) {
        dispatch(setPokemonToStateActionCreate(results));
      }
    });
    toggleFethingAndDisabled(dispatch, false);
  };
};

export default pokemonListReducer;
