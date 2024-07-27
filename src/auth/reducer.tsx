import type { Action, AuthState } from './types';

export function reducer(state: AuthState, action: Action): AuthState {
  switch (action.type) {
    case 'INITIALISED':
      return {
        ...state,
        isAuthenticated: !!action.user,
        isLoading: false,
        error: undefined,
        user: action.user,
      };

    case 'LOGIN_STARTED':
      return {
        ...state,
        isLoading: true,
      };

    case 'LOGIN_COMPLETE':
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        error: undefined,
      };

    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: undefined,
      };

    case 'ERROR':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    default:
      return state;
  }
}
