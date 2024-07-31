import type { AccessPageProps } from './AccessPage.types';
import logo from '@/assets/logo.svg';
import copyright from '@/assets/icons/iconCopyright.svg'

import './AccessPage.style.css';

/**
 * Отображает базовую структуру страницы с заголовком и дочерними элементами.
 *
 * @param title - Заголовок страницы.
 * @param children - Дочерние элементы страницы.
 */
export function AccessPage({
  title, children,
}: AccessPageProps) {
  return (
    <div className="access-page">
      <div className="access-page__block">
        <h1 className="access-page__title">{title}</h1>
        {children}
      </div>
      <div className="copyright">
        <img
          className="copyright__logo"
          src={logo}
          alt="логотип"
        />
        <div className="copyright__block">
          <img className="copyright__icon"
            src={copyright}
            alt="копирайт"
          />
          <p className="copyright__text">2022-2024 OOO «Оператор Газпром ИД»</p>
        </div>
      </div>
    </div>
  );
}
