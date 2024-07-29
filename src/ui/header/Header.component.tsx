import { Account } from './components'

import { Logo } from '@/ui'

import './Header.style.css'

/**
 * Отображает заголовок приложения в виде логотипа.
 */
export function Header() {
  return (
    <div className="header">
      <Logo />
      <div className="header-details">
        <Account />
      </div>
    </div>
  );
}
