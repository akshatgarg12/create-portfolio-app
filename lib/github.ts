export const fetchProjectsFromGithub = async (projects: string[]) => {
  const repos = (
    await Promise.allSettled(
      projects.map((project) =>
        fetch(`https://api.github.com/repos/${project.toLocaleLowerCase()}`)
      )
    )
  ).filter((repo) => {
    if (repo.status === "fulfilled") return repo.value;
  });
  const reposData = (
    await Promise.all(repos.map((repo: any) => repo.value.json()))
  )
    .filter((repo: any) => {
      if (repo.message) console.error(repo);
      else return repo;
    })
    .map((repo: any) => {
      const {
        id,
        name,
        description,
        language,
        stargazers_count,
        forks,
        html_url,
      } = repo;
      return {
        id,
        name,
        description,
        language,
        stargazers_count,
        forks,
        html_url,
      };
    });
  return reposData;
};
