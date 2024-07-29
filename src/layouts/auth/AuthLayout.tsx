import { Outlet } from 'react-router-dom'

import { useAuth } from '@/auth'
import { Loader } from '@/ui'

import './AuthLayout.style.css'

/**
 * Компонент AuthLayout отображает корневой компонент
 * для маршрутов, связанных с авторизацией.
 *
 * Элемент Outlet отображает дочерние элементы маршрута.
 */
export function AuthLayout() {
  const { isLoading } = useAuth();

  if (isLoading) {
    return (
      <Loader />
    );
  }

  return (
    <div className="auth-layout">
      <Outlet />
    </div>
  );
}

