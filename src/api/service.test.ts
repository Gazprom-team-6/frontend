import { api, apiUrl } from './service'

const url = '/api'
const data = { key: "value"; }
const payload = { pay: "load"; }
const message = 'Не удалось получить данные'
const error = new Error(message)

type data = {
  key: string;
}

describe('Api Service', () => {
  it('делает GET запрос по указанному URL', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: vi.fn().mockResolvedValue(data),
    })

    const result = await api.get<Data>(url)

    expect(result).toBe(data)
  })

  it('делает GET запрос, используя авторизационный токен', async () => {
    const token = '1234'

    window.localStorage.setItem('token', token)
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: vi.fn().mockResolvedValue(data),
    })

    const result = await api.get<Data>(url)

    expect(result).toBe(data)
    expect(global.fetch).toHaveBeenCalledWith(`${apiUrl}${url}`, {
      method: 'GET',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    })
  })

  it('делает POST запрос по указанному URL', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: vi.fn().mockResolvedValue(payload),
    })

    const result = await api.post<Data, Data>(url, data)

    expect(result).toBe(payload)
  })

  it('делает PUT запрос по указанному URL', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: vi.fn().mockResolvedValue(payload),
    })

    const result = await api.put<Data, Data>(url, data)

    expect(result).toBe(payload)
  })

  it('делает PATCH запрос по указанному URL', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: vi.fn().mockResolvedValue(payload),
    })

    const result = await api.patch<Data, Data>(url, data)

    expect(result).toBe(payload)
  })

  it('делает DELETE запрос по указанному URL', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: vi.fn().mockResolvedValue(payload),
    })

    const result = await api.delete<Data>(url)

    expect(result).toBe(payload)
  })

  it('обрабатывает неудачное получение данных', async () => {
    global.fetch = vi.fn().mockRejectedValue(error)

    const result = api.get<Data>(url)

    await expect(result).rejects.toThrowError(message)
  })
})
