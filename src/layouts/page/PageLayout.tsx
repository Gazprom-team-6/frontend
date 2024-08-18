import * as React from 'react';

import { Outlet, useNavigate } from 'react-router-dom';

import { useAuth } from '@/auth';
import { Header, Loader, Menu } from '@/ui';

import './PageLayout.style.css';

/**
 * Компонент PageLayout отображает страницы приложения,
 * требующие наличия контекста авторизации.
 *
 * Элемент Outlet отображает дочерние элементы маршрута.
 */
export function PageLayout() {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useAuth();

  React.useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate('/frontend/auth');
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) {
    return (
      <Loader />
    );
  }

  return (
    <div className="layout">
      <Header />
      <div className="content">
        <Menu />
        <Outlet />
      </div>
    </div>
  );
}
