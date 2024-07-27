import * as React from 'react';

import { useNavigate } from 'react-router-dom';

import { useAuth } from '@/auth';
import { Button } from '@/ui';

import './Auth.style.css';

/**
 * Компонент Auth отображает страницу аутентификации.
 * Начальная точка входа пользователя в приложение.
 */
export function Auth() {
  const navigate = useNavigate();
  const { isAuthenticated, login } = useAuth();

  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="auth">
      <div className="auth-text">
        Добро пожаловать в PaaS.<br />
        Нажмите “авторизоваться” чтобы перейти к платформе.
      </div>
      <Button
        type="primary"
        onClick={login}
      >
        Авторизоваться
      </Button>
    </div>
  );
}
