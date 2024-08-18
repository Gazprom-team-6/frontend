import type { PageProps } from './Page.types';

import './Page.style.css';

/**
 * Отображает базовую структуру страницы с заголовком и дочерними элементами.
 *
 * @param title - Заголовок страницы.
 * @param extra - Дополнительная область в правом верхнем углу страницы.
 * @param children - Дочерние элементы страницы.
 * @param inner - Флаг, указывающий на вложенность страницы.
 */
export function Page({
  title,
  extra,
  children,
  inner = false,
}: PageProps) {
  return (
    <div className={`page${inner ? ' inner' : ''}`}>
      {title && (
        <div className="page-header">      
        <div className="page-title">
          {title}
        </div>
        {extra && (
          <div className="page-extra">
            {extra}
          </div>
        )}
      </div>
      )}
      <div className="page-content">
        {children}
      </div>
    </div>
  );
}
