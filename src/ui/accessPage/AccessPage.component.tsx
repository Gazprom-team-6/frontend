import type { AccessPageProps } from './AccessPage.types';
import logo from '@/assets/logo.svg';
import copyright from '@/assets/icons/iconCopyright.svg'

import './AccessPage.style.css';

import { Typography } from 'antd';
const { Title, Text } = Typography;

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
        <Title level={4} style={{ fontFamily: 'Inter', fontWeight: '600', margin: '0' }}>{title}</Title>
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
          <Text type="secondary" style={{fontFamily: 'Inter'}}>2022-2024 OOO «Оператор Газпром ИД»</Text>
        </div>
      </div>
    </div>
  );
}
