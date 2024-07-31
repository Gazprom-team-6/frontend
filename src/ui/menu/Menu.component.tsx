import * as React from 'react';

import { Link, useLocation } from 'react-router-dom';

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

  React.useEffect(() => {
    setCurrent(location.pathname);
  }, [location]);

  return (
    <div
      role="navigation"
      className={`menu${collapsed ? ' collapsed' : ''}`}
    >
      <div className="menu-wrapper">
        <div className="menu-container">
          {items.map(({ url, title, icon: Icon }) => (
            <Link
              key={url}
              className={`menu-item${isCurrentPage(url, current) ? ' current' : ''}`}
              to={url}
            >
              <span className="menu-item-icon"><Icon /></span>
              <span
                className="menu-item-text"
                style={{ width: collapsed ? '0' : '129px' }}
              >
                {title}
              </span>
            </Link>
          ))}
        </div>
        <button
          type="button"
          className="menu-trigger"
          aria-label="Toggle sidebar"
          onClick={() => setCollapsed(value => !value)}
        >
          <span
            className="menu-trigger-icon"
            style={{ transform: `rotate(${collapsed ? 45 : 225}deg)` }}
          />
        </button>
      </div>
    </div>
  );
}
