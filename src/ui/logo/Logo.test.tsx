import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import { Logo } from '@/ui'

describe('Logo', () => {
  it('отображает компонент Logo', () => {
    render(<Logo />, { wrapper: BrowserRouter })
    const logo = screen.getByRole('banner')

    expect(logo).toBeInTheDocument()
  })
})
