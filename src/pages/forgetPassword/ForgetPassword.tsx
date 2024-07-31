import * as React from 'react';

import { useNavigate } from 'react-router-dom';
import { AccessPage } from '@/ui/accessPage';

import { useAuth } from '@/auth';
import { Button } from '@/ui';

import './ForgetPassword.style.css';

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
      <form className="forget-password__form">
        <div className="form__inputs">
          <p className="form__text">Введите ваш адрес электронной почты, который вы использовали при регистрации.</p>
          <div className="form__input-wrapper">
            <input
              type="email"
              placeholder="E-mail"
              // value={email}
              // onChange={e => setEmail(e.target.value)}
              className="form__input"
              required
            />
            <div className="form__text-error">Укажите, пожалуйста, ваш email корректно</div>
          </div>
          <p className="form__text">На указанный адрес электронной почты будет отправлено письмо для восстановления пароля.</p>
        </div>
        <Button
          type="primary"
          onClick={handleButtonClick}
        >
          Отправить
        </Button>
      </form>
    </AccessPage>
  );
}
