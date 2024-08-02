import { createBrowserRouter } from 'react-router-dom';

import {
  AuthLayout,
  PageLayout,
  RootLayout,
} from './layouts';

import {
  Account,
  Auth,
  ForgetPassword,
  ResetPassword,
  NotFound,
  Profile,
  Services,
  Settings,
} from './pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <PageLayout />,
        handle: { crumb: 'Проект' },
        children: [
          {
            index: true,
            element: <Profile />,
            handle: { crumb: 'Профиль' },
          },
          {
            path: 'teams',
            element: <Profile />,
            handle: { crumb: 'Команды' },
          },
          {
            path: 'components',
            element: <Profile />,
            handle: { crumb: 'Компоненты' },
          },
          {
            path: 'organisation-structure',
            element: <Profile />,
            handle: { crumb: 'Организационная структура' },
          },
          {
            path: 'staff',
            element: <Profile />,
            handle: { crumb: 'Сотрудники' },
          },
          {
            path: 'all-teams',
            element: <Profile />,
            handle: { crumb: 'Все команды' },
          },
          {
            path: 'all-components',
            element: <Profile />,
            handle: { crumb: 'Все компоненты' },
          },
        ],
      },
      {
        path: 'auth',
        element: <AuthLayout />,
        children: [
          {
            index: true,
            element: <Auth />,
            handle: { crumb: 'Авторизация' },
          },
        ],
      },
      {
        path: 'forget-password',
        element: <AuthLayout />,
        children: [
          {
            index: true,
            element: <ForgetPassword />,
            handle: { crumb: 'Утерян пароль' },
          },
        ],
      },
      {
        path: 'reset-password',
        element: <AuthLayout />,
        children: [
          {
            index: true,
            element: <ResetPassword />,
            handle: { crumb: 'Восстановление пароля' },
          },
        ],
      },
    ],
  },
]);
