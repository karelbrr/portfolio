import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useGithubProjects } from '@/hooks/use-github-projects';
import React from 'react';

// Create a new QueryClient for each test
const createTestQueryClient = () => new QueryClient({
  defaultOptions: {
    queries: {
      retry: false, // Turn off retries for tests
    },
  },
});

export function renderWithClient(ui: React.ReactElement) {
  const testQueryClient = createTestQueryClient();
  const { rerender, ...result } = renderHook(() => useGithubProjects('karelbrr'), {
    wrapper: ({ children }) => (
      <QueryClientProvider client={testQueryClient}>{children}</QueryClientProvider>
    ),
  });
  return {
    ...result,
    rerender: () => rerender(),
  };
}

describe('useGithubProjects Hook', () => {
  beforeEach(() => {
    // Reset fetch mock
    global.fetch = jest.fn();
  });

  it('fetches and filters out forks correctly', async () => {
    const mockData = [
      { id: 1, name: 'original-repo', html_url: 'http://link1', updated_at: '2023-01-01', description: 'desc', fork: false },
      { id: 2, name: 'forked-repo', html_url: 'http://link2', updated_at: '2023-01-02', description: 'desc', fork: true },
    ];

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const { result } = renderWithClient(<></>);

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    // Should only return the non-forked repo
    expect(result.current.projects).toHaveLength(1);
    expect(result.current.projects?.[0].name).toBe('original-repo');
  });

  it('handles API errors gracefully', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      statusText: 'Not Found',
    });

    const { result } = renderWithClient(<></>);

    await waitFor(() => expect(result.current.isError).toBe(true));
    expect(result.current.error?.message).toBe('Failed to fetch GitHub repositories: Not Found');
  });
});
