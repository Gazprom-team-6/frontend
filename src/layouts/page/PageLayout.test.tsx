import { render } from '@testing-library/react'

import * as auth from '@/auth'
import { PageLayout } from '@/layouts'
import { Wrapper } from '@/tests'

describe('PageLayout', () => {
  it('отображает компонент PageLayout', () => {
    vi.spyOn(auth, 'useAuth').mockImplementation(() => ({
      isAuthenticated: true,
      isLoading: false,
      error: undefined,
      user: undefined,
      login: vi.fn(),
      exchange: vi.fn(),
      logout: vi.fn(),
    }))
    const { container } = render(<PageLayout />, { wrapper: Wrapper })
    const layout = container.querySelector('.layout')

    expect(layout).toBeInTheDocument()
  })

  it('отображает состояние загрузки компонента PageLayout', () => {
    vi.spyOn(auth, 'useAuth').mockImplementation(() => ({
      isAuthenticated: false,
      isLoading: true,
      error: undefined,
      user: undefined,
      login: vi.fn(),
      exchange: vi.fn(),
      logout: vi.fn(),
    }))
    render(<PageLayout />, { wrapper: Wrapper })
    const loader = document.querySelector('.loader')

    expect(loader).toBeInTheDocument()
  })

  it('перенаправляет на страницу /auth, если пользователь не авторизован', () => {
    vi.spyOn(auth, 'useAuth').mockImplementation(() => ({
      isAuthenticated: false,
      isLoading: false,
      error: undefined,
      user: undefined,
      login: vi.fn(),
      exchange: vi.fn(),
      logout: vi.fn(),
    }))
    render(<PageLayout />, { wrapper: Wrapper })

    setTimeout(() => {
      expect(window.location.pathname).toBe('/auth')
    }, 400)
  })
})
