import { type Project } from "../../../pages/projects";
import { TbGitFork } from "react-icons/tb";
import { AiOutlineStar, AiFillGithub } from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";
import Link from "next/link";

const ProjectCard = (props: Project) => {
  return (
    <div className="flex flex-col p-3 w-full max-w-xl border border-1 border-border rounded-md bg-background text-text">
      <h2 className="font-bold">{props.name}</h2>
      <p>{props.description}</p>
      <div className="text-sm flex flex row space-x-3 my-2">
        {props.language && (
          <div className=" flex flex-row justify-center items-center space-x-0.5">
            <BiCodeAlt />
            <p>{props.language.toLocaleLowerCase()}</p>
          </div>
        )}
        <div className="flex flex-row justify-center items-center space-x-0.5">
          <AiOutlineStar />
          <p>{props.stargazers_count}</p>
        </div>
        <div className="ml-4 flex flex-row justify-center items-center space-x-0.5">
          <TbGitFork />
          <p>{props.forks}</p>
        </div>
        <Link
          href={props.html_url}
          className="font-light ml-4 flex flex-row justify-center items-center space-x-0.5"
        >
          <AiFillGithub />
          <p className="">view on github</p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
