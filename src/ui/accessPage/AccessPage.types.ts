import * as React from 'react';

export type AccessPageProps = {
  /** Заголовок страницы */
  title: string;
  
  /** Содержимое страницы */
  children: React.ReactNode;
};
