import * as React from 'react';

import { useNavigate, Link } from 'react-router-dom';

import { useAuth } from '@/auth';
import { Button } from '@/ui';
import logo from '@/assets/logo.svg';

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
    <div className="auth">
      <div className="auth__block">
        <h1 className="auth__title">Добро пожаловать</h1>
        <form className="auth__form">
          <div className="form__inputs">
            <div className="form__input-wrapper">
              <input
                type="email"
                placeholder="e-mail"
                // value={email}
                // onChange={e => setEmail(e.target.value)}
                className="form__input"
                required
              />
              <div className="form__text-error">Укажите, пожалуйста, ваш email корректно</div>
            </div>
            <div className="form__input-wrapper">
              <input
                type="password"
                placeholder="пароль"
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
                <Link to="/auth" className="form__link">Забыли пароль?</Link>
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
      </div>
      <div className="copyright">
        <img
          className="copyright__logo"
          src={logo}
          alt="логотип"
        />
        <div className="copyright__block">
          <div className="copyright__icon" />
          <p className="copyright__text">2022-2024 OOO «Оператор Газпром ИД»</p>
        </div>
      </div>
    </div>
  );
}
