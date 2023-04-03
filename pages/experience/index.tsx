import ExperienceCard, { ExperienceCardProps } from "@/components/ExperienceCard";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const experiences = [
    {
      companyName: "Builder.io",
      jobTitle: "Software Engineer Intern",
      duration: "6 months",
      description: "Designed and Developed solution for frontend migration from nextjs to Qwik",
      companyLogo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    },
    {
      companyName: "Builder.io",
      jobTitle: "Software Engineer Intern",
      duration: "6 months",
      description: "Designed and Developed solution for frontend migration from nextjs to Qwik",
      companyLogo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    },
    {
      companyName: "Builder.io",
      jobTitle: "Software Engineer Intern",
      duration: "6 months",
      description: "Designed and Developed solution for frontend migration from nextjs to Qwik",
      companyLogo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    }
  ]
  return {
    props: {
      experiences
    },
  };
};


export interface ExperiencePageProps {
  experiences : ExperienceCardProps[]
}

export default function ExperiencePage(props:ExperiencePageProps) {
  const experienceLength = props.experiences.length;

  return (
    <section className="bg-background min-h-screen py-10">
      <section className="flex flex-col items-center">
      {
        props.experiences.map((experience: ExperienceCardProps, index:number) => (
          <>
            <ExperienceCard
              key={index}
              companyName={experience.companyName}
              jobTitle={experience.jobTitle}
              duration={experience.duration}
              description={experience.description}
              companyLogo={experience.companyLogo}
            />
            {
              experienceLength !== index + 1 && 
              <>
                <span className="h-6 w-1 bg-border"></span>
                <span className="h-4 w-4 rounded-full bg-border"></span>
                <span className="h-6 w-1 bg-border"></span>
              </>
            }
          </>
        ))
      }
      </section>
    </section>
  )
}
