import * as React from 'react';

import { AuthContext } from './authContext';
import type { AuthContextType } from './types';

/**
 * ```js
 * const {
 *   // Состояние:
 *   isAuthenticated,
 *   isLoading,
 *   error,
 *   user,
 *   // Методы:
 *   login,
 *   logout,
 * } = useAuth();
 * ```
 *
 * Хук `useAuth` предназначен для использования в компонентах приложения
 * для получения состояния и методов системы аутентификации.
 */
export function useAuth(context = AuthContext): AuthContextType {
  return React.useContext<AuthContextType>(context);
}
