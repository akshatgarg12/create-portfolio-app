import ExperienceCard, {
  ExperienceCardProps,
} from "@/components/Cards/Experience";
import { GetStaticProps } from "next";
import { Fragment } from "react";
import ExperienceData from "@/config/experience.json";

export const getStaticProps: GetStaticProps = async () => {
  // TODO: A LINKEDIN PLUGIN WOULD BE NICE
  const experiences = ExperienceData.jobs;
  return {
    props: {
      experiences,
    },
  };
};

export interface ExperiencePageProps {
  experiences: ExperienceCardProps[];
}

export default function ExperiencePage(props: ExperiencePageProps) {
  const experienceLength = props.experiences.length;

  return (
    <section className="bg-background min-h-screen py-10">
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
  );
}
