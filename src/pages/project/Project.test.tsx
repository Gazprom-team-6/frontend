import { render, screen } from '@testing-library/react'

import { Project } from '@/pages'
import { Wrapper } from '@/tests'

describe('Project', () => {
  it('отображает компонент Project', () => {
    render(<Project />, { wrapper: Wrapper })
    const title = screen.getByText('Проект')

    expect(title).toBeInTheDocument()
  })

  it('отображает список ссылок', () => {
    render(<Project />, { wrapper: Wrapper })
    const links = screen.getAllByRole('link')

    expect(links).toHaveLength(2)
  })
})
