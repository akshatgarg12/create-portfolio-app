import ProjectCard from "@/components/Cards/Project";
import { GetStaticProps } from "next";
import ProjectsData from "@/config/projects.json";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { i18n } from "../../next-i18next.config";

import Head from "next/head";
import Subtext from "@/components/Subtext";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const username = ProjectsData.github_username;
  const repos = ProjectsData.projects.map((repo) => repo.toLowerCase());
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?per_page=100`
  );
  const data = await response.json();
  const reposData = data
    .filter((repo: any) => repos.includes(repo.name.toLowerCase()))
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
  return {
    props: {
      repos: reposData,
      ...(await serverSideTranslations(locale ?? i18n.defaultLocale, [
        "common",
      ])),
    },
  };
};

export interface Project {
  id: string;
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
  forks: number;
  html_url: string; // points to project on github
}

export interface ProjectsPageProps {
  repos: Project[];
}
export default function ProjectsPage(props: ProjectsPageProps) {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>{t("projects.title")}</title>
      </Head>
      <div className="min-h-screen bg-altBackground py-10">
        <Subtext text={t("projects.subtext")} />
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4 max-w-5xl m-auto">
          {props.repos.map((repo) => (
            <ProjectCard
              key={repo.id}
              id={repo.id}
              name={repo.name}
              description={repo.description}
              language={repo.language}
              stargazers_count={repo.stargazers_count}
              forks={repo.forks}
              html_url={repo.html_url}
            />
          ))}
        </div>
      </div>
    </>
  );
}
