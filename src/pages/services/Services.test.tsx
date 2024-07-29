import { render, screen } from '@testing-library/react'

import { Services } from '@/pages'

describe('Services', () => {
  it('отображает компонент Services', () => {
    render(<Services />)
    const title = screen.getByText('Сервисы')

    expect(title).toBeInTheDocument()
  })
})
