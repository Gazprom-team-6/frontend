import * as React from 'react';

import { NavLink, useLocation } from 'react-router-dom';

import { items } from './Menu.constants';
import { isCurrentPage } from './Menu.utils';

import './Menu.style.css';

/**
 * Отображает главное меню приложения.
 */
export function Menu() {
  const location = useLocation();
  const [current, setCurrent] = React.useState(location.pathname);

  React.useEffect(() => {
    setCurrent(location.pathname);
  }, [location]);

  return (
    <div role="navigation">
        <div className="menu">
          {items.map(({ url, icon: Icon }) => (
            <NavLink
              key={url}
              className={`menu__item${isCurrentPage(url, current) ? ' menu__item_current' : ''}`}
              to={url}
            >
              <Icon />
            </NavLink>
          ))}
        </div>
      </div>
  );
}
