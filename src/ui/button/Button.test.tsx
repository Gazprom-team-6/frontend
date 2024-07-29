import { fireEvent, render, screen } from '@testing-library/react'

import { Button } from '@/ui'

const spy = vi.fn()

describe('Button', () => {
  it('отображает компонент Button с корректным классом и содержимым', () => {
    render(<Button type="primary" onClick={spy}>Test</Button>)
    const button = screen.getByText('Test')

    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('button-primary')
  })

  it('вызывает функцию onClick при клике на кнопку', () => {
    render(<Button onClick={spy}>Test</Button>)
    const button = screen.getByText('Test')

    fireEvent.click(button)

    expect(button).toBeInTheDocument()
    expect(spy).toHaveBeenCalledTimes(1)
  })
})
