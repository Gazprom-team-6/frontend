import { render, screen } from '@testing-library/react'

import { Wrapper } from '@/tests'
import { Card } from '@/ui'

describe('Card', () => {
  it('отображает компонент Card', () => {
    render(
      <Card
        url="/"
        title="Test Title"
        description="Test Description"
      />,
      { wrapper: Wrapper },
    )
    const title = screen.getByText('Test Title')
    const description = screen.getByText('Test Description')

    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
  })

  it('отображает компонент Card с дополнительным содержимым', () => {
    render(
      <Card
        url="/"
        title="Test Title"
        description="Test Description"
        footer="Test Footer"
        headerExtra="Test Header Extra"
        footerExtra="Test Footer Extra"
      />,
      { wrapper: Wrapper },
    )
    const title = screen.getByText('Test Title')
    const description = screen.getByText('Test Description')
    const footer = screen.getByText('Test Footer')
    const headerExtra = screen.getByText('Test Header Extra')
    const footerExtra = screen.getByText('Test Footer Extra')

    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(footer).toBeInTheDocument()
    expect(headerExtra).toBeInTheDocument()
    expect(footerExtra).toBeInTheDocument()
  })
})
