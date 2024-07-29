import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'
import { apiUrl } from '@/api'
import { data } from '@/tests'

export const server = setupServer(
  http.get(
    `${apiUrl}/auth/link`,
    () => HttpResponse.json({ auth_url: 'http://localhost:3000' })
  ),
  http.post(
    `${apiUrl}/auth/exchange`,
    () => HttpResponse.json({ token: data.token })
  ),
  http.get(
    `${apiUrl}/auth/me`,
    () => HttpResponse.json(data.user)
  ),
  http.get(
    `${apiUrl}/projects`,
    () => HttpResponse.json(data.projectList)
  ),
)

beforeAll(() => {
  server.listen()
})

afterEach(() => {
  server.resetHandlers()
})

afterAll(() => {
  server.close()
})
