import { renderHook, waitFor } from '@testing-library/react';

import { useProjects } from '@/api';
import { Wrapper, data } from '@/tests';

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('useProjects', () => {
  it('возвращает список проектов', async () => {
    vi.runAllTimersAsync();
    const { result } = renderHook(
      () => useProjects(),
      { wrapper: Wrapper },
    );

    vi.advanceTimersToNextTimer();
    await waitFor(() => expect(result.current.isSuccess).toBeTruthy());

    expect(result.current.data).toEqual(data.projectList);
  });
});