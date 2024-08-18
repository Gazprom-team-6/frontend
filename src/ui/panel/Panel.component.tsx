import * as React from 'react';

import { NavLink, useLocation } from 'react-router-dom';

import { items } from './Panel.constants';
import { isCurrentPage } from './Panel.utils';

import './Panel.style.css';

/**
 * Отображает панель профиля сотрудника.
 */
export function Panel() {
  const location = useLocation();
  const [current, setCurrent] = React.useState(location.pathname);

  React.useEffect(() => {
    setCurrent(location.pathname);
  }, [location]);

  return (
    <div role="navigation">
        <nav className="panel">
          {items.map(({ url, title }) => (
            <NavLink
              key={url}
              className={`panel__item${isCurrentPage(url, current) ? ' panel__item_current' : ''}`}
              to={url}
            >
              <p className="panel__title">{title}</p>
            </NavLink>
          ))}
        </nav>
      </div>
  );
}
