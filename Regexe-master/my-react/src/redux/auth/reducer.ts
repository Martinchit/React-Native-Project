import { LOGIN_SUCCESS, LoginActions, LOGOUT } from './actions';

// tslint:disable-next-line:interface-name
export interface AuthState {
  isAuthenticated: boolean;
}

const initialState = {
  isAuthenticated: false
};

export function authReducer(state: AuthState = initialState, action: LoginActions) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false
      };
    default:
      return state;
  }
}
