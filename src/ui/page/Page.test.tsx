import { render, screen } from '@testing-library/react'

import { Page } from '@/ui'

describe('Page', () => {
  it('отображает компонент Page и его элементы', () => {
    const title = 'Test Title'

    render(<Page title={title}>Test Children</Page>)
    const titleElement = screen.getByText(title)
    const childrenElement = screen.getByText('Test Children')

    expect(titleElement).toBeInTheDocument()
    expect(childrenElement).toBeInTheDocument()
  })

  it('отображает компонент Page без отступов', () => {
    const title = 'Test Title'

    render(<Page title={title} inner>Test Children</Page>)
    const element = document.querySelector('.page')

    expect(element).toHaveClass('inner')
  })

  it('отображает дополнительное содержимое в шапке компонента', () => {
    const title = 'Test Title'
    const extra = <span>Test Extra</span>
    const children = 'Test Children'

    render(<Page title={title} extra={extra}>{children}</Page>)
    const childrenElement = screen.getByText(children)
    const extraElement = screen.getByText('Test Extra')

    expect(childrenElement).toBeInTheDocument()
    expect(extraElement).toBeInTheDocument()
  })
})
