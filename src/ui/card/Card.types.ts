import type * as React from 'react';

export type CardProps = {
  /** URL адрес карточки. */
  url: string;

  /** Заголовок карточки. */
  title: string | React.ReactNode;

  /** Описание карточки. */
  description?: string | React.ReactNode;

  /** Нижняя часть карточки. */
  footer?: string | React.ReactNode;

  /** Дополнительное содержимое верхней части карточки. */
  headerExtra?: React.ReactNode;

  /** Дополнительное содержимое нижней части карточки. */
  footerExtra?: React.ReactNode;
};
