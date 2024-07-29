import type * as React from 'react'

export type cardprops = {
  /** Описание карточки. */
  description?: string | react.reactnode;

  /** Нижняя часть карточки. */
  footer?: string | react.reactnode;

  /** Дополнительное содержимое нижней части карточки. */
  footerextra?: react.reactnode;

  /** Дополнительное содержимое верхней части карточки. */
  headerextra?: react.reactnode;

  /** Заголовок карточки. */
  title: string | react.reactnode;

  /** URL адрес карточки. */
  url: string;
}
