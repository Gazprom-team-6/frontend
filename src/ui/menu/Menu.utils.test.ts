import { isCurrentPage } from './Menu.utils'

describe('Menu/utils/isCurrentPage', () => {
  it('возвращает true, если url равен "/" и path равен "/"', () => {
    const url = '/'
    const path = '/'
    const result = isCurrentPage(url, path)

    expect(result).toBe(true)
  })

  it('возвращает false, если url равен "/" и path не равен "/"', () => {
    const url = '/'
    const path = '/about'
    const result = isCurrentPage(url, path)

    expect(result).toBe(false)
  })

  it('возвращает true, если url не равен "/" и path начинается с url', () => {
    const url = '/products'
    const path = '/products/123'
    const result = isCurrentPage(url, path)

    expect(result).toBe(true)
  })

  it('возвращает false, если url не равен "/" и path не начинается с url', () => {
    const url = '/products'
    const path = '/about'
    const result = isCurrentPage(url, path)

    expect(result).toBe(false)
  })
})
