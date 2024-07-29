import * as React from 'react'

export type user = {
  /** Электронная почта */
  email: string;

  /** Полное имя пользователя */
  fullname: string;

  /** Идентификатор пользователя */
  id: number;

  /** Логин пользователя */
  username: string;
}

export type authstate = {
  /** Сообщение об ошибке авторизации */
  error?: error;

  /** Состояние авторизации */
  isauthenticated: boolean;

  /** Состояние загрузки */
  isloading: boolean;

  /** Данные пользователя */
  user?: user;
}

export type authcontexttype = {
  /** Запрашивает код авторизации */
  login: () => void;

  /** Очищает сессию авторизации приложения */
  logout: () => void;
} & AuthState

export type authproviderprops = {
  /** Дочерние компоненты */
  children: react.reactnode;

  /** Контекст авторизации */
  context?: react.context<authcontexttype>;
}

export type action =
| { type: "INITIALISED"; user?: user; }
| { type: "LOGIN_STARTED"; }
| { type: "LOGIN_COMPLETE"; }
| { type: "LOGOUT"; }
| { error: error; type: "ERROR"; }
