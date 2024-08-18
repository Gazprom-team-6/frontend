import type { MenuItem } from './Menu.types';

import apartment from '@/assets/icons/iconApartment.svg?react';
import team from '@/assets/icons/iconTeam.svg?react';
import project from '@/assets/icons/iconProject.svg?react';
import fileText from '@/assets/icons/iconFileText.svg?react';

export const items: MenuItem[] = [
  {
    id: 1,
    url: '/frontend/organisation-structure',
    title: 'Структура',
    icon: apartment,
  },
  {
    id: 2,
    url: '/frontend/staff',
    title: 'Сотрудники',
    icon: team,
  },
  {
    id: 3,
    url: '/frontend/all-teams',
    title: 'Команды',
    icon: project,
  },
  {
    id: 4,
    url: '/frontend/all-components',
    title: 'Компоненты',
    icon: fileText,
  },
];
