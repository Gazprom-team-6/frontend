import { initialAuthState } from './authState'

describe('auth/state', () => {
  it('начальное состояние имеет корректные значения', () => {
    const { isAuthenticated, isLoading } = initialAuthState

    expect(isAuthenticated).toBeFalsy()
    expect(isLoading).toBeTruthy()
  })
})
