import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

import { AuthProvider } from '@/auth'
import { AuthContext } from '@/auth/authContext'
import type { AuthContextType } from '@/auth/types'

const queryClient = new QueryClient()

type appprops = {
  /** Дочерние компоненты */
  children: react.reactnode;

  /** Маршруты для роутера */
  routes?: routeobject[];
}

type wrapperprops = {
  /** Дочерние компоненты */
  children: react.reactnode;

  /** Контекст авторизации */
  context?: react.context<authcontexttype>;

  /** Маршруты для роутера */
  routes?: routeobject[];
}

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
  ])
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
  )
}
