import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

import { AuthProvider } from '@/auth';
import { AuthContext } from '@/auth/authContext';
import type { AuthContextType } from '@/auth/types';

const queryClient = new QueryClient();

type AppProps = {
  /** Дочерние компоненты */
  children: React.ReactNode;

  /** Маршруты для роутера */
  routes?: RouteObject[];
};

type WrapperProps = {
  /** Дочерние компоненты */
  children: React.ReactNode;

  /** Контекст авторизации */
  context?: React.Context<AuthContextType>;

  /** Маршруты для роутера */
  routes?: RouteObject[];
};

export function App({
  children,
  routes = [],
}: AppProps) {
  return useRoutes([
    {
      path: '/',
      element: children,
      children: routes,
    }
  ]);
}

export function Wrapper({
  children,
  context = AuthContext,
  routes = [],
}: WrapperProps) {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AuthProvider context={context}>
          <App routes={routes} >
            {children}
          </App>
        </AuthProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}
