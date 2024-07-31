import * as React from 'react';

import { useNavigate } from 'react-router-dom';
import { AccessPage } from '@/ui/accessPage';

import { useAuth } from '@/auth';
import { Button } from '@/ui';

import './ResetPassword.style.css';

/**
 * Компонент Auth отображает страницу аутентификации.
 * Начальная точка входа пользователя в приложение.
 */
export function ResetPassword() {
  const navigate = useNavigate();
  const { isAuthenticated, login } = useAuth();

  React.useEffect(() => {
    console.log(isAuthenticated);
    if (isAuthenticated) {
      navigate('/', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleButtonClick = () => navigate("/auth");

  return (
    <AccessPage title="Восстановление пароля">
      <form className="reset-password__form">
        <p className="form__text">На Вашу электронную почту <span className="form__text-blue">name@example.com</span> отправлено письмо. 
        Пожалуйста, откройте его и попробуйте войти ещё раз.</p>
        <Button
          type="primary"
          onClick={handleButtonClick}
        >
          Попробовать ещё раз
        </Button>
      </form>
    </AccessPage>
  );
}
