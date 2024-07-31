import * as React from 'react';

export type User = {
  /** Идентификатор пользователя */
  id: number;

  /** Логин пользователя */
  username: string;

  /** Полное имя пользователя */
  fullname: string;

  /** Электронная почта */
  email: string;
};

export type AuthState = {
  /** Состояние авторизации */
  isAuthenticated: boolean;

  /** Состояние загрузки */
  isLoading: boolean;

  /** Сообщение об ошибке авторизации */
  error?: Error;

  /** Данные пользователя */
  user?: User;
};

export type AuthContextType = {
  /** Запрашивает код авторизации */
  login: () => void;

  /** Очищает сессию авторизации приложения */
  logout: () => void;
} & AuthState;

export type AuthProviderProps = {
  /** Дочерние компоненты */
  children: React.ReactNode;

  /** Контекст авторизации */
  context?: React.Context<AuthContextType>;
};

export type Action =
  | { type: 'INITIALISED'; user?: User }
  | { type: 'LOGIN_STARTED' }
  | { type: 'LOGIN_COMPLETE' }
  | { type: 'LOGOUT' }
  | { type: 'ERROR'; error: Error };
