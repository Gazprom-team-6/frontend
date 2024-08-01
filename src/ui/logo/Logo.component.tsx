import { Link } from 'react-router-dom';
import LogoHeader from '@/assets/icons/iconHeader.svg?react'

import './Logo.style.css';

/**
 * Отображает логотип приложения в виде статичного блока.
 */
export function Logo() {
  return (
    <Link className="logo" to="/">
      <LogoHeader role="banner" />
    </Link>
  );
}
