import * as React from 'react';

import { useNavigate } from 'react-router-dom';
import { AccessPage } from '@/ui/accessPage';

import { useAuth } from '@/auth';
import { Button } from '@/ui';

import './ForgetPassword.style.css';

import { Typography, Form, Input } from 'antd';
const { Text } = Typography;

/**
 * Компонент Auth отображает страницу аутентификации.
 * Начальная точка входа пользователя в приложение.
 */
export function ForgetPassword() {
  const navigate = useNavigate();
  const { isAuthenticated, login } = useAuth();

  React.useEffect(() => {
    console.log(isAuthenticated);
    if (isAuthenticated) {
      navigate('/', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleButtonClick = () => {
    // тут запрос для отправки на почту ссылки на смену пароля
    navigate("/reset-password");
  }

  return (
    <AccessPage title="Забыли пароль?">
      <Form className="forget-password__form">
        <div className="form__inputs form__inputs_forget-password">
          <Text style={{ fontFamily: 'Inter', textAlign: 'start' }}>Введите ваш адрес электронной почты, который<br/> вы использовали при регистрации.</Text>
          <Form.Item style={{ textAlign: 'start', marginBottom: '0' }}>
            <Input placeholder="E-mail" style={{ fontFamily: 'Inter', padding: '9px 12px', borderRadius: '8px' }} />
          </Form.Item>
          <Text style={{ fontFamily: 'Inter', textAlign: 'start' }}>На указанный адрес электронной почты будет отправлено письмо для восстановления пароля.</Text>
        </div>
        <Button
          type="primary"
          onClick={handleButtonClick}
        >
          Отправить
        </Button>
      </Form>
    </AccessPage>
  );
}
