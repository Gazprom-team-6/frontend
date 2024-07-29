import { Outlet } from 'react-router-dom'

import { AuthProvider } from '@/auth'

/**
 * Компонент RootLayout обеспечивает доступ к методам и состоянию
 * системы авторизации со стороны компонентов приложения.
 *
 * Элемент Outlet отображает дочерние элементы маршрута.
 */
export function RootLayout() {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
}
