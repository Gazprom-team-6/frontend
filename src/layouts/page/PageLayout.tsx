import * as React from 'react'

import { Outlet, useNavigate } from 'react-router-dom'

import { useAuth } from '@/auth'
import { Header, Loader } from '@/ui'

import './PageLayout.style.css'

/**
 * Компонент PageLayout отображает страницы приложения,
 * требующие наличия контекста авторизации.
 *
 * Элемент Outlet отображает дочерние элементы маршрута.
 */
export function PageLayout() {
  const navigate = useNavigate()
  const { isAuthenticated, isLoading } = useAuth();

  React.useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate('/auth');
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) {
    return (
      <Loader />
    );
  }
  // нет меню

  return (
    <div className="layout">
      {/* <Menu /> */}
      <Header />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
