import { fireEvent, render, screen } from '@testing-library/react';

import { Wrapper } from '@/tests';
import { Menu } from '@/ui';

describe('Menu', () => {
  it('отображает компонент Menu', () => {
    render(<Menu />, { wrapper: Wrapper });
    const menu = screen.getByRole('navigation');

    expect(menu).toBeInTheDocument();
    expect(menu).toHaveClass('collapsed');
  });

  it('сворачивает меню при клике на кнопку', () => {
    render(<Menu />, { wrapper: Wrapper });
    const menu = screen.getByRole('navigation');
    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(menu).not.toHaveClass('collapsed');
  });
});
