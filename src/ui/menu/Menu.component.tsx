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
  const [collapsed, setCollapsed] = React.useState(true);
  const [current, setCurrent] = React.useState(location.pathname);

  const handleMenuClick = () => {
    setCollapsed(value => !value);
  }

  const handleClick = (evt: React.MouseEvent<HTMLDivElement>) => {
    evt.stopPropagation();
  }

  React.useEffect(() => {
    setCurrent(location.pathname);
  }, [location]);

  return (
    <div role="navigation">
        <div className={`menu ${collapsed ? 'collapsed' : ''}`} onClick={handleMenuClick}>
          {items.map(({ id, url, title, icon: Icon }) => (
            <div key={id} role="button" onClick={handleClick} >
              <NavLink
              className={`menu__item${isCurrentPage(url, current) ? ' menu__item_current' : ''}`}
              to={url}
            >
              <span className="menu-item-icon"><Icon /></span>
              <span
                className="menu-item-text"
                style={{ width: collapsed ? '0' : '95px' }}
              >
                {title}
              </span>
            </NavLink>
            </div>
          ))}
        </div>
      </div>
  );
}