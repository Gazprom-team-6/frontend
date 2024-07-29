import type * as React from 'react'

export type menuitem = {
  /** Заголовок пункта меню. */
  title: string;

  /** URL адрес пункта меню. */
  url: string;

  /** Иконка пункта меню. */
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string | undefined; }>
}
