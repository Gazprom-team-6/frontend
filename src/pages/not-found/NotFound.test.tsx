import { act, render, screen } from '@testing-library/react';

import { NotFound } from '@/pages';
import { Wrapper } from '@/tests';

describe('NotFound', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('отображает компонент NotFound с начальным значением обратного отсчета', () => {
    render(<NotFound />, { wrapper: Wrapper });
    const title = screen.getByRole('heading');
    const text = screen.getByRole('note');
    const textContent = 'Переход на страницу авторизации через 20 сек.';

    expect(title).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(text.textContent).toBe(textContent);
  });

  it('интервал корректно уменьшает значение обратного отсчета', () => {
    render(<NotFound />, { wrapper: Wrapper });
    act(() => vi.advanceTimersByTime(5000));
    const title = screen.getByRole('heading');
    const text = screen.getByRole('note');
    const textContent = 'Переход на страницу авторизации через 15 сек.';

    expect(title).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(text.textContent).toBe(textContent);
  });

  it('осуществляет переход на главную страницу при завершении обратного отсчета', () => {
    render(<NotFound />, { wrapper: Wrapper });
    act(() => vi.advanceTimersByTime(20_000));

    expect(window.location.pathname).toBe('/');
  });
});
