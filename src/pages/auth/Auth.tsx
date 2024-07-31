import * as React from 'react';

import { useNavigate, Link } from 'react-router-dom';
import { AccessPage } from '@/ui/accessPage';

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
    console.log(isAuthenticated);
    if (isAuthenticated) {
      navigate('/', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return (
    <AccessPage title="Добро пожаловать">
      <form className="auth__form">
        <div className="form__inputs">
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
          <div className="form__input-wrapper">
            <input
              type="password"
              placeholder="Пароль"
              // value={password}
              // onChange={e => setPassword(e.target.value)}
              className="form__input"
              required
            />
            <button
              className="form__input-control"
              type="button"
              title="Показать пароль"
              aria-label="Показать пароль"
            />
            <div className="form__text-error">Введите пароль</div>
            <div className="form__password-block">
              <label className="form__check">
                <input
                  className="form__checkbox-hide"
                  type="checkbox"
                  name=""
                  id="check"
                /><span className="form__checkbox" />Запомнить пароль
              </label>
              <Link to="/forget-password" className="form__link">Забыли пароль?</Link>
            </div>
          </div>
        </div>
        <Button
          type="primary"
          onClick={login}
        >
          Войти
        </Button>
      </form>
    </AccessPage>
  );
}
