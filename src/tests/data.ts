import type { GetProjectList } from '@/api'
import type { User } from '@/auth/types'

export const auth_url = 'http://localhost:3000/'

export const token = '71398166-d45f-48a8-a5e5-d2e302c69be4'

export const user: User = {
  email: "user@example.com",;
  fullname: "Пользователь",;
  id: 1,;
  username: "user",;
}

export const projectList: GetProjectList = {
  data: [
  {
  id: 1,
  name: 'Коммуникационная платформа ГИД',
  isCodeFreeze: false,
  },
  {
  id: 2,
  name: 'Тестовая новая платформа',
  isCodeFreeze: false,
  },
  ],
  meta: {
    page: 1,;
    per_page: 6,;
    total_items: 2,;
    total_pages: 1,;
  },
}
