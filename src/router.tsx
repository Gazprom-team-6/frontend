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
  Project,
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
            element: <Project />,
            handle: { crumb: 'Главная' },
          },
          {
            path: 'services',
            element: <Services />,
            handle: { crumb: 'Сервисы' },
          },
          {
            path: 'settings',
            element: <Settings />,
            handle: { crumb: 'Настройки' },
          },
          {
            path: 'account',
            element: <Account />,
            handle: { crumb: 'Профиль' },
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
