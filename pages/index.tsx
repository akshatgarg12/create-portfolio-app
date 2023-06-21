import Image from "next/image";
import Link from "next/link";
import Contact from "@/components/Contact";
import HomeData from "@/config/home.json";
import { GetStaticProps } from "next";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { i18n } from "../next-i18next.config";
import FeedbackCard, { FeedbackCardProps } from "@/components/Cards/Feedback";
import { Fragment } from "react";
import ProjectCard from "@/components/Cards/Project";
import { fetchProjectsFromGithub } from "@/lib/github";
import ProjectsData from "@/config/projects.json";
import type { Project } from "./projects";
import { AiOutlineArrowRight } from "react-icons/ai";
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const reposData = HomeData.enableProjectsSection
    ? await fetchProjectsFromGithub(ProjectsData.projects.slice(0, 3))
    : [];
  return {
    props: {
      ...HomeData,
      ...(await serverSideTranslations(locale ?? i18n.defaultLocale, [
        "common",
      ])),
      repos: reposData,
    },
  };
};

export interface ContactType {
  email: string;
  github_username: string;
  github_url: string;
  linkedin_username: string;
  linkedin_url: string;
}
export interface HomePropsType {
  name: string;
  title: string;
  about: string;
  contact: ContactType;
  myImage: string;
  workedAt: string[];
  enableProjectsSection: boolean;
  enableFeedbackSection: boolean;
  feedbacks: FeedbackCardProps[];
  repos: Project[];
}

const Home = ({
  name,
  title,
  about,
  contact,
  myImage,
  workedAt,
  enableProjectsSection,
  enableFeedbackSection,
  feedbacks,
  repos,
}: HomePropsType) => {
  const { t } = useTranslation("common");
  const documentTitle = `${t("home.title")} | ${name}`;
  return (
    <>
      <Head>
        <title>{documentTitle}</title>
      </Head>
      <section className="py-20 bg-altBackground text-text text-center">
        <div className="flex flex-col md:flex-row-reverse md:justify-evenly items-center max-w-[800px] m-auto">
          <Image
            className="rounded-md"
            height={208}
            width={302}
            src={myImage}
            alt={"Photo of yours truly"}
          />
          <div
            className="flex flex-col items-center mt-10"
            style={{ marginLeft: 0 }}
          >
            <h3 className="text-2xl">
              {t("home.salutation") + " "}
              {name.split(" ").map((n, idx) => (
                <Fragment key={idx}>
                  <span className="text-link">{n[0]}</span>
                  {n.slice(1) + " "}
                </Fragment>
              ))}
              <br />
              <span className="text-link opacity-75">{title}</span>
            </h3>
            <div className="flex flex-row justify-center">
              <h4 className="m-auto opacity-75 font-normal">
                {t("home.workedAt") + " "}{" "}
              </h4>
              <div className="flex flex-row justify-center max-w-[70%]">
                {workedAt.map((companyLogo, idx) => (
                  <Image
                    key={idx}
                    height="85"
                    width="85"
                    style={{
                      height: "85px",
                      width: "85px",
                      objectFit: "contain",
                    }}
                    alt="company-logo"
                    src={companyLogo}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-30 flex flex-col items-center bg-background text-text">
        <div className="w-9/12 m-auto">
          <h2 className="mb-4 text-xl underline font-bold">
            {t("home.about")}
          </h2>
          <p className="text-lg">{about}</p>
        </div>
      </section>
      {enableProjectsSection && (
        <section className="py-30 flex flex-col items-center bg-altBackground text-text">
          <div className="w-9/12 m-auto">
            <h2 className="mb-4 text-xl underline font-bold">
              {t("home.projects")}
            </h2>
            <div className="sm:w-9/12 m-auto grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
              {repos.length &&
                repos.map((repo) => (
                  <ProjectCard
                    invert
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
            <Link href={"/projects"} className="text-link flex justify-center">
              Checkout more projects here{" "}
              <AiOutlineArrowRight className="m-auto mx-1" />
            </Link>
          </div>
        </section>
      )}
      {enableFeedbackSection && (
        <section className="py-30 flex flex-col items-center bg-background text-text">
          <div className="w-full m-auto">
            <div className="w-9/12 m-auto">
              <h2 className="mb-4 text-xl underline font-bold">
                {t("home.feedback")}
              </h2>
            </div>
            <div className="w-11/12 sm:w-9/12 m-auto grid grid-cols-1 lg:grid-cols-2">
              {feedbacks.map((feedback, idx) => (
                <FeedbackCard key={idx} {...feedback} />
              ))}
            </div>
          </div>
        </section>
      )}
      <section className="py-30 flex flex-col items-center bg-altBackground text-text">
        <div className="w-9/12 m-auto">
          <h2 className="mb-4 text-xl underline font-bold">
            {t("home.contact")}
          </h2>
          <Contact contact={contact} />
        </div>
      </section>
    </>
  );
};

export default Home;
