import { render, screen } from '@testing-library/react';

import * as auth from '@/auth';
import { Account } from '@/pages';
import { Wrapper } from '@/tests';

describe('Account', () => {
  it('отображает компонент Account, если пользователь авторизован', () => {
    vi.spyOn(auth, 'useAuth').mockImplementationOnce(() => ({
      isAuthenticated: true,
      isLoading: false,
      error: undefined,
      user: undefined,
      login: vi.fn(),
      exchange: vi.fn(),
      logout: vi.fn()
    }));

    render(<Account />, { wrapper: Wrapper });
    const title = screen.getByText('Личный кабинет');

    expect(title).toBeInTheDocument();
  });

  it('не отображает компонент Account, если пользователь не авторизован', () => {
    vi.spyOn(auth, 'useAuth').mockImplementationOnce(() => ({
      isAuthenticated: false,
      isLoading: false,
      error: undefined,
      user: undefined,
      login: vi.fn(),
      exchange: vi.fn(),
      logout: vi.fn()
    }));

    render(<Account />, { wrapper: Wrapper });
    const title = screen.queryByText('Личный кабинет');

    expect(title).toBeNull();
  });
});
