import ExperienceCard, { ExperienceCardProps } from "@/components/ExperienceCard";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  // TODO: A LINKEDIN PLUGIN WOULD BE NICE
  const experiences = [
    {
      companyName: "Builder.io",
      jobTitle: "Software Engineer Intern",
      duration: "6 months",
      description: "Designed and Developed solution for frontend migration from nextjs to Qwik",
      companyLogo: "/logos/builderio.svg",
    },
    {
      companyName: "Microsoft",
      jobTitle: "Software Engineer Intern",
      duration: "3 months",
      description: ["Developed Python scripts with OOP to parse disk layout data from INI files.", "Designed user-friendly web interface to present parsed data, improving system usability.", "Exposed parsed data with REST API and multi-parameter querying, enhancing system flexibility and functionality.", "Collaborated with mentors and managers to ensure high quality and user experience", "Gained software engineering skills, including SDLC, agile methodologies, and version control through the project."],
      companyLogo: "/logos/ms.png",
    },
    {
      companyName: "Microsoft Engage 2021",
      jobTitle: "Software Engineer Mentee",
      duration: "2 months",
      description: ["Built Teams-like video conferencing app with webRTC APIs for mesh peer-to-peer connection.", "Developed user-friendly app features for teams, group messaging, invites, and video/audio controls.", "Deployed project and incorporated feedback to improve the app.", "Successfully delivered video conferencing app on time with ongoing support and enhancements."],
      companyLogo: "/logos/ms.png",
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
      <section className="flex flex-col items-center p-4">
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
