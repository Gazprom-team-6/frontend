import { initialAuthState } from './authState'
import { reducer } from './reducer'
import { data } from '@/tests'
import type { Action, AuthState } from './types'

describe('auth/reducer', () => {
  it('возвращает состояние с `isAuthenticated: true`, если тип действия INITIALISED', () => {
    const action: Action = {
      type: 'INITIALISED',
      user: data.user,
    }
    const result: AuthState = reducer(initialAuthState, action)

    expect(result).toEqual({
      isAuthenticated: true,
      isLoading: false,
      error: undefined,
      user: data.user,
    })
  })

  it('возвращает состояние с `isLoading: true`, если указан тип действия LOGIN_STARTED', () => {
    const action: Action = { type: 'LOGIN_STARTED' }
    const result: AuthState = reducer(initialAuthState, action)

    expect(result).toEqual({
      isAuthenticated: false,
      isLoading: true,
      error: undefined,
    })
  })

  it('возвращает состояние с `isAuthenticated: true`, если тип действия LOGIN_COMPLETE', () => {
    const action: Action = { type: 'LOGIN_COMPLETE' }
    const result: AuthState = reducer(initialAuthState, action)

    expect(result).toEqual({
      isAuthenticated: true,
      isLoading: false,
      error: undefined,
    })
  })

  it('возвращает состояние с сообщением об ошибке, если указан тип действия ERROR', () => {
    const action: Action = {
      type: 'ERROR',
      error: new Error('Произошла ошибка'),
    }
    const result = reducer(initialAuthState, action)

    expect(result).toEqual({
      isAuthenticated: false,
      isLoading: false,
      error: new Error('Произошла ошибка'),
    })
  })

  it('возвращает начальное состояние, если указан тип действия LOGOUT', () => {
    const action: Action = { type: 'LOGOUT' }
    const result = reducer(initialAuthState, action)

    expect(result).toEqual(initialAuthState)
  })

  it('возвращает начальное состояние, если указан неверный тип действия', () => {
    const action = { type: 'UNKNOWN_ACTION' } as unknown as Action
    const result = reducer(initialAuthState, action)

    expect(result).toEqual(initialAuthState)
  })
})
