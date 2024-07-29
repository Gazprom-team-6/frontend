import { render, screen } from '@testing-library/react';
import type { RouteObject } from 'react-router-dom';

import { RootLayout } from '@/layouts';
import { Wrapper } from '@/tests';

describe('RootLayout', () => {
  it('отображает компонент RootLayout', () => {
    const content = 'Tested';
    const wrapper = ({ children }: { children: React.ReactNode }) => {
      const routes: RouteObject[] = [
        {
          index: true,
          element: <div>{content}</div>,
        }
      ];

      return <Wrapper routes={routes}>{children}</Wrapper>;
    };

    render(<RootLayout />, { wrapper });
    const element = screen.getByText(content);

    expect(element).toBeInTheDocument();
  });
});
