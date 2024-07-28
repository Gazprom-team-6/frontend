import { render, screen } from '@testing-library/react';

import { Settings } from '@/pages';

describe('Settings', () => {
  it('отображает компонент Settings', () => {
    render(<Settings />);
    const title = screen.getByText('Настройки');

    expect(title).toBeInTheDocument();
  });
});
