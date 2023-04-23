import Image from "next/image";

export interface DurationType {
  start: string;
  end: string;
}
export interface ExperienceCardProps {
  companyName: string;
  jobTitle: string;
  duration: DurationType | string;
  description: string | string[];
  companyLogo: string;
}

const ExperienceCard = (props: ExperienceCardProps) => {
  return (
    <div className="p-4 flex flex-row rounded-lg border-border border-2 max-w-2xl w-full bg-altBackground text-text">
      <div
        className="w-32 h-full m-auto flex items-center"
        style={{ minWidth: "70px" }}
      >
        <Image
          src={props.companyLogo}
          className="m-auto"
          alt={props.companyName}
          width={100}
          height={100}
          priority
        />
      </div>
      <div className="flex flex-col ml-4 justify-center">
        <div className="flex flex-col items-start sm:flex-row sm:items-center">
          <h1 className="text-base font-semibold">{props.jobTitle}</h1>
          <h1 className="text-xs font-light sm:ml-4">
            {typeof props.duration === "string"
              ? `${props.duration}`
              : `${props.duration.start} - ${props.duration.end}`}
          </h1>
        </div>
        <div className="flex flex-row font-normal text-sm">
          <ul className="list-none">
            {props.description instanceof Array ? (
              props.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))
            ) : (
              <li>{props.description}</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
