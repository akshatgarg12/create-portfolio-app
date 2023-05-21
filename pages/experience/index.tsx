import ExperienceCard, {
  ExperienceCardProps,
} from "@/components/Cards/Experience";
import { GetStaticProps } from "next";
import { Fragment } from "react";
import ExperienceData from "@/config/experience.json";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { i18n } from "../../next-i18next.config";

import Head from "next/head";
import Subtext from "@/components/Subtext";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  // TODO: A LINKEDIN PLUGIN WOULD BE NICE
  const experiences = ExperienceData.jobs;
  return {
    props: {
      experiences,
      ...(await serverSideTranslations(locale ?? i18n.defaultLocale, [
        "common",
      ])),
    },
  };
};

export interface ExperiencePageProps {
  experiences: ExperienceCardProps[];
}

export default function ExperiencePage(props: ExperiencePageProps) {
  const { t } = useTranslation("common");
  const experienceLength = props.experiences.length;
  return (
    <>
      <Head>
        <title>{t("experience.title")}</title>
      </Head>
      <section className="bg-background min-h-[90vh] py-10">
        <Subtext text={t("experience.subtext")} />
        <section className="flex flex-col items-center p-4">
          {props.experiences.map(
            (experience: ExperienceCardProps, index: number) => (
              <Fragment key={index}>
                <ExperienceCard
                  companyName={experience.companyName}
                  jobTitle={experience.jobTitle}
                  duration={experience.duration}
                  description={experience.description}
                  companyLogo={experience.companyLogo}
                />
                {experienceLength !== index + 1 && (
                  <>
                    <span className="h-6 w-1 bg-border" />
                    <span className="h-4 w-4 rounded-full bg-border" />
                    <span className="h-6 w-1 bg-border" />
                  </>
                )}
              </Fragment>
            )
          )}
        </section>
      </section>
    </>
  );
}
