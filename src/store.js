import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { user } from './reducers/user';
import { pokemon } from './reducers/pokemon';
import { UserActions } from './actions/user';
import { PokemonActions } from './actions/pokemon';
import axios from 'axios';
const pokeApi = 'https://pokeapi.co/api/v2/pokemon';

const initialState = {};

export const loginUser = () => dispatch => {
  return dispatch({ type: UserActions.USER_LOGIN });
}

export function fetchPokemon(input) {
  return async function fetchPokemonThunk(dispatch, getState) {
    const response = await axios.get(`${pokeApi}/${input}`);
    const pokemon = {
      name: response.data.name,
      image: response.data.sprites['front_default']
    };
    dispatch(savePokemonInfo(pokemon));
  };
}

export const savePokemonInfo = (pokemon) => dispatch => {
  return dispatch({ type: PokemonActions.LOAD_POKEMON, payload: pokemon });
}

export function initializeStore() {
  return createStore(combineReducers({user, pokemon}), initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
}