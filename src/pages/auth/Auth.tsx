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
    if (isAuthenticated) {
      navigate('/', { replace: true });
      console.log(isAuthenticated)
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="auth">
      <div className="auth__block">
      <form className="auth__form">
          <h2>Добро пожаловать</h2>
          <input
            type="email"
            placeholder="e-mail"
            // value={email}
            // onChange={e => setEmail(e.target.value)}
            required
            className="form__input"
          />
          <div className="form__input-error">Укажите, пожалуйста, ваш email корректно</div>
          <div className="form__input-wrapper">
            <input
              type="password"
              placeholder="пароль"
              // value={password}
              // onChange={e => setPassword(e.target.value)}
              required
              className="form__input"
            />
            <button className="form__input-control" type="button" title="Показать пароль"
              aria-label="Показать пароль"></button>
            <div className="form__input-error">Введите пароль</div>
          </div>
          <div className="form__field-password">
            <div className="form__check">
              <input className="visually-hidden" type="checkbox" name="" id="check" checked />
              <label className="form__link" htmlFor="check">Запомнить меня</label>
            </div>
            <Link to="/auth">Забыли пароль?</Link>
          </div>
          <Button
            type="primary"
            onClick={login}
            >
            Войти
          </Button>
        </form>
        <div className="copyright">
          <img className="copyright__logo" src={logo} alt="логотип"/>
          <p className="copyright__text">2022–2024 OOO «Оператор Газпром ИД»</p>
        </div>
      </div>
    </div>
  );
}
