import { render } from '@testing-library/react';

import { AuthLayout } from '@/layouts';
import { Wrapper } from '@/tests';

describe('AuthLayout', () => {
  it('отображает компонент AuthLayout', () => {
    render(<AuthLayout />, { wrapper: Wrapper });
    const loader = document.querySelector('.loader');

    expect(loader).not.toBeInTheDocument();
  });
});
