import { Link } from 'react-router-dom'

import './Logo.style.css'

import LogoImage from '@/assets/logo.svg?react'

/**
 * Отображает логотип приложения в виде статичного блока.
 */
export function Logo() {
  return (
    <Link className="logo" to="/">
      <LogoImage role="banner" />
    </Link>
  );
}
