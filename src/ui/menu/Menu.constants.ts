import type { MenuItem } from './Menu.types';

import apartment from '@/assets/icons/iconApartment.svg?react';
import team from '@/assets/icons/iconTeam.svg?react';
import project from '@/assets/icons/iconProject.svg?react';
import fileText from '@/assets/icons/iconFileText.svg?react';

export const items: MenuItem[] = [
  {
    url: '/organisation-structure',
    icon: apartment,
  },
  {
    url: '/staff',
    icon: team,
  },
  {
    url: '/all-teams',
    icon: project,
  },
  {
    url: '/all-components',
    icon: fileText,
  },
];
