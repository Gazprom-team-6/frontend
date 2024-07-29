import { act, renderHook, waitFor } from '@testing-library/react'

import { useAuth } from './useAuth'

import * as auth from '@/auth'
import { Wrapper, data } from '@/tests'

describe('auth/useAuth', () => {
  it('метод login отправляет запрос на авторизацию', async () => {
    const { result } = renderHook(() => useAuth(), { wrapper: Wrapper })

    await act(() => result.current.login())
    expect(window.location.href).toBe(data.auth_url)
  })

  it('метод logout останавливает сессию пользователя', () => {
    window.localStorage.setItem('token', 'token')
    vi.spyOn(auth, 'useAuth').mockImplementation(() => ({
      isAuthenticated: true,
      isLoading: false,
      error: undefined,
      user: undefined,
      login: vi.fn(),
      exchange: vi.fn(),
      logout: vi.fn(),
    }))
    const { result } = renderHook(() => useAuth(), { wrapper: Wrapper })

    act(() => result.current.logout())
    const token = window.localStorage.getItem('token')

    expect(token).toBeNull()
    expect(result.current.isAuthenticated).toBeFalsy()
    expect(result.current.error).toBeUndefined()
    expect(result.current.user).toBeUndefined()
  })

  it('авторизация осуществляется корректно при наличии кода авторизации в URL', async () => {
    Object.defineProperty(document, 'location', {
      value: {
        search: '?code=123',
        pathname: '/auth'
      },
      writable: true
    })
    window.localStorage.removeItem('token')
    const { result } = renderHook(() => useAuth(), { wrapper: Wrapper })

    await waitFor(() => expect(result.current.isAuthenticated).toBeTruthy())

    expect(result.current.isAuthenticated).toBeTruthy()
    expect(result.current.isLoading).toBeFalsy()
    expect(result.current.error).toBeUndefined()
    expect(result.current.user).toStrictEqual(data.user)
  })

  it('корректно обрабатывает ошибку авторизации', async () => {
    const apiError = new Error('Неверный запрос')

    global.fetch = vi.fn().mockRejectedValue(apiError)
    const { result } = renderHook(() => useAuth(), { wrapper: Wrapper })

    await waitFor(() => expect(result.current.isLoading).toBeFalsy())

    expect(result.current.isAuthenticated).toBeTruthy()
    expect(result.current.user).toEqual(data.user)
    expect(result.current.error).toBeUndefined()
  })

  it('предотвращает повторную авторизацию при перерисовке провайдера', () => {
    const fetchSpy = vi.fn().mockResolvedValue({})

    global.fetch = fetchSpy
    const { result, rerender } = renderHook(() => useAuth(), { wrapper: Wrapper })

    act(() => rerender())

    expect(fetchSpy).toHaveBeenCalledTimes(0)
    expect(result.current.isAuthenticated).toBeTruthy()
    expect(result.current.user).toEqual(data.user)
    expect(result.current.error).toBeUndefined()
  })
})
