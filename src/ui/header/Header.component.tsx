import { Account } from './components';
import logo from '@/assets/icon.jpg';

import { Logo } from '@/ui';

import './Header.style.css';

/**
 * Отображает заголовок приложения в виде логотипа.
 */
export function Header() {
  return (
    <div className="header">
      {/* <Logo /> */}
      <img
        src={logo}
        alt="Логотип"
        width="80px"
      />
      <div className="header-details">
        <Account />
      </div>
    </div>
  );
}
