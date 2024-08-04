import type * as React from 'react';

export type MenuItem = {
  /** URL адрес пункта меню. */
  url: string;

  /** Заголовок пункта меню. */
  title: string;

  /** Иконка пункта меню. */
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string | undefined }>;
};
