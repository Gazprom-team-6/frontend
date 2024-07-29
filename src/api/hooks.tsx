import { useQuery } from '@tanstack/react-query'

import { api } from '@/api'
import type { GetProjectList } from '@/api'

/**
 * Хук API, для получения списка проектов.
 * Возвращает данные в формате React Query.
 */
export function useProjects() {
  return useQuery<GetProjectList | null>({
    queryKey: ['projects'],
    queryFn: async () => {
      const url = '/projects';

      return api.get<GetProjectList>(url);
    },
  });
}
