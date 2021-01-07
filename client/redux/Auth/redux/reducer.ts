import { AuthState, AuthActions } from '../model';

const initialState = {
  isAuthDone: false,
};

const auth = (state = initialState, action: AuthActions): AuthState => {
  switch (action.type) {
    case 'CHECK_AUTH':
      return {
        ...state,
      };
    default:
      return state;
  }
};

export { auth };
