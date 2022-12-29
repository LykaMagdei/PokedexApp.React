import { applyMiddleware, combineReducers, compose } from "redux";
import { legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import pokemonListReducer from "./reducer/pokemonListReducer";

const reducers = combineReducers({
  pokemonListPage: pokemonListReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
window.store = store;
export default store;
