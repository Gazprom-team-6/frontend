import { initialContext } from './authContext';

describe('auth/context', () => {
  it('начальное значение контекста имеет корректные значения', () => {
    const { login, logout } = initialContext;
    const error = /^Компонент находится вне контекста <AuthProvider>.$/;

    expect(() => login()).toThrowError(error);
    expect(() => logout()).toThrowError(error);
  });
});
