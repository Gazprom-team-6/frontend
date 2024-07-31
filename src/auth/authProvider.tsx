import * as React from 'react';

import { useNavigate } from 'react-router-dom';

import { AuthContext } from './authContext';
import { initialAuthState } from './authState';
import { reducer } from './reducer';
import type { AuthContextType, AuthProviderProps } from './types';

/**
 * Предоставляет состояние и методы контекста авторизации дочерним компонентам.
 * Возвращает контекст авторизации.
 *
 * @param context — Содержит состояние и методы контекста авторизации.
 * @param children — Содержит дочерние компоненты.
 */
export function AuthProvider({
  children,
  context = AuthContext,
}: AuthProviderProps) {
  const [state, dispatch] = React.useReducer(reducer, initialAuthState);
  const navigate = useNavigate();

  const initialize = React.useCallback(async (): Promise<void> => {
    dispatch({
      type: 'INITIALISED',
      user: {
        id: 1,
        username: 'user',
        email: 'user@example.com',
        fullname: 'Пользователь',
      },
    });
  }, []);

  const login = React.useCallback((): void => {
    dispatch({ type: 'LOGIN_COMPLETE' });
  }, []);

  const logout = React.useCallback(() => {
    window.localStorage.removeItem('token');
    dispatch({ type: 'LOGOUT' });
    navigate('/auth', { replace: true });
  }, [navigate]);

  React.useEffect(() => {
    initialize();
  }, [initialize]);

  const contextValue = React.useMemo<AuthContextType>(() => {
    return {
      ...state,
      login,
      logout,
    };
  }, [
    state,
    login,
    logout,
  ]);

  return (
    <context.Provider value={contextValue}>
      {children}
    </context.Provider>
  );
}
