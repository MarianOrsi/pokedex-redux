import { UserActions } from '../actions/user';

const initialState = {
  isLoggedIn: false
}

export const user = (state = initialState, action) => {
  switch(action.type) {
    case UserActions.USER_LOGIN:
      return {
        ...state,
        isLoggedIn: true
      }
    default:
      return state;
  }
}