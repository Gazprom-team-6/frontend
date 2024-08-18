import * as React from 'react';

export type PageProps = {
  /** Заголовок страницы */
  title?: string;

  /** Дополнительная область в правом верхнем углу страницы */
  extra?: React.ReactNode;

  /** Содержимое страницы */
  children: React.ReactNode;

  /** Вложенная страница */
  inner?: boolean;
};
