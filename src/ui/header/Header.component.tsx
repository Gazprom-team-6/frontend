import { Account, SearchLine } from './components';

import { Logo } from '@/ui';

import './Header.style.css';

/**
 * Отображает заголовок приложения в виде логотипа.
 */
export function Header() {
  return (
    <div className="header">
      <Logo />
      <SearchLine />
      <Account />
    </div>
  );
}
