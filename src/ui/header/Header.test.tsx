import { render, screen } from '@testing-library/react'

import { Wrapper } from '@/tests'
import { Header } from '@/ui'

describe('Header', () => {
  it('отображает компонент Header', () => {
    render(<Header />, { wrapper: Wrapper })
    const header = screen.queryByRole('banner')

    expect(header).toBeInTheDocument()
  })
})
