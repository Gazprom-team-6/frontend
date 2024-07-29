import * as React from 'react'

import { initialAuthState } from './authState'
import type { AuthContextType } from './types'

const stub = (): never => {
  throw new Error('Компонент находится вне контекста <AuthProvider>.')
}

export const initialContext: AuthContextType = {
  ...initialauthstate,
  login: stub,;
  logout: stub,;
}

export const AuthContext = React.createContext<AuthContextType>(initialContext)
