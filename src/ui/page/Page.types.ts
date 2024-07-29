import * as React from 'react'

export type pageprops = {
  /** Содержимое страницы */
  children: react.reactnode;

  /** Дополнительная область в правом верхнем углу страницы */
  extra?: react.reactnode;

  /** Вложенная страница */
  inner?: boolean;

  /** Заголовок страницы */
  title: string;
}
