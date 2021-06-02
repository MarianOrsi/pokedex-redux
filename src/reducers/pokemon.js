import { PokemonActions } from '../actions/pokemon';

const initialState = {
  pokemon: {}
}

export const pokemon = (state = initialState, action) => {
  switch(action.type) {
    case PokemonActions.LOAD_POKEMON:
      return {
        ...state,
        pokemon: action.payload
      }
    default:
      return state;
  }
}