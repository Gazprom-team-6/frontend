import * as React from 'react';

import { useNavigate } from 'react-router-dom';

import { Button } from '@/ui';

import './NotFound.style.css';

/**
 * Компонент NotFound отображает страницу ошибки маршрутизации.
 * Переходит на страницу авторизации по истечении времени обратного отсчета.
 */
export function NotFound() {
  const [count, setCount] = React.useState(20);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/frontend/auth', { replace: true });
  };

  React.useEffect(() => {
    const interval = window.setInterval(() => {
      setCount(value => value - 1);
    }, 1000);

    if (count === 0) {
      handleNavigate();
    }

    return () => window.clearInterval(interval);
  }, [count, navigate]);

  return (
    <div className="not-found">
      <h1 role="heading" className="not-found-title">
        Страница не найдена
      </h1>
      <p role="note" className="not-found-text">
        Переход на страницу авторизации через {count} сек.
      </p>
      <Button onClick={handleNavigate}>
        Перейти
      </Button>
    </div>
  );
}
