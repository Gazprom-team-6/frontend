import { renderHook } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from './authProvider';
import { useAuth } from './useAuth';

import { data } from '@/tests';

type WrapperProps = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: WrapperProps) => (
  <BrowserRouter>
    <AuthProvider>
      {children}
    </AuthProvider>
  </BrowserRouter>
);

describe('auth/provider', () => {
  it('возвращает корректные значения начального состояния контекста', async () => {
    window.localStorage.setItem('token', 'token');
    const { result } = renderHook(() => useAuth(), { wrapper: Wrapper });

    expect(result.current.isAuthenticated).toBeTruthy();
    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.error).toBeUndefined();
    expect(result.current.user).toEqual(data.user);
  });
});
