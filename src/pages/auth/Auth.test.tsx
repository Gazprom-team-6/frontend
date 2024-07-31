import { render, screen } from '@testing-library/react';

import { Auth } from './Auth';

import * as auth from '@/auth';
import { Wrapper } from '@/tests';

const authSpy = vi.spyOn(auth, 'useAuth');
const navigateSpy = vi.fn();

vi.mock('react-router-dom', async importOriginal => {
  return {
    ...await importOriginal<typeof import('react-router-dom')>(),
    useNavigate: () => navigateSpy,
  };
});

describe('Auth', () => {
  it('отображает компонент Auth с начальным состоянием', () => {
    render(<Auth />, { wrapper: Wrapper });
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Авторизоваться');
  });

  it('перенаправляет на главную страницу, если пользователь авторизован', async () => {
    window.localStorage.setItem('token', 'token');
    authSpy.mockImplementationOnce(() => ({
      isAuthenticated: true,
      isLoading: false,
      error: undefined,
      user: undefined,
      login: vi.fn(),
      exchange: vi.fn(),
      logout: vi.fn(),
    }));
    render(<Auth />, { wrapper: Wrapper });

    expect(navigateSpy).toHaveBeenCalledTimes(2);
    expect(navigateSpy).toHaveBeenCalledWith('/', { replace: true });
  });
});
