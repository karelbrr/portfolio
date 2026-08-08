import { useQuery } from '@tanstack/react-query';

export interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  topics: string[];
  updated_at: string;
  homepage: string | null;
  fork: boolean;
}

export function useGithubProjects(username: string) {
  const query = useQuery({
    queryKey: ['github-projects', username],
    queryFn: async () => {
      if (!username) return [];

      const response = await fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch GitHub repositories: ${response.statusText}`);
      }

      const data: GithubRepo[] = await response.json();
      
      // Filter out forked repositories (you usually only want to show your original work)
      let filteredRepos = data.filter((repo) => !repo.fork);
      
      // OPTIONAL: Filter by a specific topic. 
      // If you add the topic "portfolio" to a repo on GitHub, only those will show up!
      // filteredRepos = filteredRepos.filter(repo => repo.topics.includes('portfolio'));
      
      return filteredRepos;
    },
    enabled: !!username,
    staleTime: 1000 * 60 * 5, // Cache the data for 5 minutes
  });

  return {
    ...query,
    projects: query.data,
  };
}
