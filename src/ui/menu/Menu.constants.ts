import type { MenuItem } from './Menu.types';

import apartment from '@/assets/icons/iconApartment.svg?react';
import team from '@/assets/icons/iconTeam.svg?react';
import project from '@/assets/icons/iconProject.svg?react';
import fileText from '@/assets/icons/iconFileText.svg?react';

export const items: MenuItem[] = [
  {
    url: '/organisation-structure',
    title: 'Структура',
    icon: apartment,
  },
  {
    url: '/staff',
    title: 'Сотрудники',
    icon: team,
  },
  {
    url: '/all-teams',
    title: 'Команды',
    icon: project,
  },
  {
    url: '/all-components',
    title: 'Компоненты',
    icon: fileText,
  },
];
