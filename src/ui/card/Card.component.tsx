import { Link } from 'react-router-dom'

import type { CardProps } from './Card.types'

import './Card.style.css'

/**
 * Отображает ссылку в виде карточки с заголовком и описанием.
 *
 * @param url - URL адрес карточки.
 * @param title - Заголовок карточки.
 * @param description - Описание карточки.
 * @param footer - Нижняя часть карточки.
 * @param headerExtra - Дополнительное содержимое верхней части карточки.
 * @param footerExtra - Дополнительное содержимое нижней части карточки.
 */
export function Card({
url,
title,
description,
footer,
headerExtra,
footerExtra,
}: CardProps) {
  return (
    <div className="card">
      <Link
        role="link"
        className="card-content"
        to={url}
        target={url.startsWith('http') ? '_blank' : undefined}
      >
        <span className="card-title">
          {title}
        </span>
        {description && (
          <span className="card-description">
            {description}
          </span>
        )}
        {footer && (
          <span className="card-footer">
            {footer}
          </span>
        )}
      </Link>
      {headerExtra && (
        <span className="card-header-extra">
          {headerExtra}
        </span>
      )}
      {footerExtra && (
        <span className="card-footer-extra">
          {footerExtra}
        </span>
      )}
    </div>
  )
}
