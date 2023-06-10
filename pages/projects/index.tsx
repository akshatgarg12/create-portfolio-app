import ProjectCard from "@/components/Cards/Project";
import { GetStaticProps } from "next";
import ProjectsData from "@/config/projects.json";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { i18n } from "../../next-i18next.config";

import Head from "next/head";
import Subtext from "@/components/Subtext";
import Link from "next/link";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const repos = await Promise.allSettled(
    ProjectsData.projects.map((repo) =>
      fetch(`https://api.github.com/repos/${repo.toLocaleLowerCase()}`)
    )
  );
  const filterResponse = repos.filter(
    (repo: any) => repo.status === "fulfilled"
  );
  const reposData = (
    await Promise.allSettled(
      filterResponse.map((repo: any) => repo.value.json())
    )
  )
    .filter((repo: any) => {
      if (repo.value.message) console.error(repo);
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
      <div className="min-h-[90vh] bg-background py-10 text-text">
        <Subtext text={t("projects.subtext")} />
        <h5 className="text-center">
          <Link
            className="text-link"
            href={"https://github.com/" + ProjectsData.github_username}
            target="blank"
          >
            GitHub Profile @ {ProjectsData.github_username}
          </Link>
        </h5>
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
