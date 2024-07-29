import type { MenuItem } from './Menu.types';

import build from '@/assets/icons/build.svg?react';
import cloud from '@/assets/icons/cloud.svg?react';
import settings from '@/assets/icons/settings.svg?react';

export const items: MenuItem[] = [
  {
    url: '/',
    title: 'Главная',
    icon: build,
  },
  {
    url: '/services',
    title: 'Сервисы',
    icon: cloud,
  },
  {
    url: '/settings',
    title: 'Настройки',
    icon: settings,
  },
];
