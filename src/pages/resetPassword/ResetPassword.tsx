import * as React from 'react';

import { useNavigate } from 'react-router-dom';
import { AccessPage } from '@/ui/accessPage';

import { useAuth } from '@/auth';
import { Button } from '@/ui';

import './ResetPassword.style.css';

import { Typography } from 'antd';
const { Text } = Typography;

/**
 * Компонент Auth отображает страницу аутентификации.
 * Начальная точка входа пользователя в приложение.
 */
export function ResetPassword() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  React.useEffect(() => {
    console.log(isAuthenticated);
    if (isAuthenticated) {
      navigate('/frontend', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleButtonClick = () => navigate("/frontend/auth");

  return (
    <AccessPage title="Восстановление пароля">
      <form className="reset-password__form">
        <Text style={{ fontFamily: 'Inter', textAlign: 'start' }}>На Вашу электронную почту <span className="form__text-blue">name@example.com</span> отправлено письмо. 
        Пожалуйста, откройте<br/> его и попробуйте войти ещё раз.</Text>
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
