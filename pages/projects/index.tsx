import { GetStaticProps } from "next"
import {TbGitFork} from 'react-icons/tb'
import { AiOutlineStar, AiFillGithub} from 'react-icons/ai'
import { BiCodeAlt } from 'react-icons/bi'
import Link from "next/link"

export const getStaticProps : GetStaticProps = async () => {
  const username = 'akshatgarg12'
  const response = await fetch(`https://api.github.com/users/${username}/repos`)
  const repos = await response.json()
  return {
    props : {
      repos
    }
  }
}

export interface Project{
  id : string
  name: string
  description : string
  language : string
  stargazers_count : number
  forks : number
  html_url: string // points to project on github
}

export interface ProjectsPageProps {
  repos: Project[]
}
export default function ProjectsPage(props : ProjectsPageProps) {
  return ( 
    <div className="min-h-screen bg-altBackground">
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4 max-w-5xl m-auto">
      {
        props.repos.slice(1,6).map((repo) => (
          <>
            <div className="flex flex-col p-3 w-full max-w-xl border border-1 border-border rounded-md bg-background text-text">
              <h2 className="font-bold">{repo.name}</h2>
              <p>{repo.description}</p>
              <div className="text-sm flex flex row space-x-3 my-2">
                <div className=" flex flex-row justify-center items-center space-x-0.5">
                  <BiCodeAlt />
                  <p>{repo.language.toLocaleLowerCase()}</p>
                </div>
                <div className="flex flex-row justify-center items-center space-x-0.5">
                  <AiOutlineStar />
                  <p>{repo.stargazers_count}</p>
                </div>
                <div className="ml-4 flex flex-row justify-center items-center space-x-0.5">
                  <TbGitFork />
                  <p>{repo.forks}</p>
                </div>
                <Link href={repo.html_url} className="font-light ml-4 flex flex-row justify-center items-center space-x-0.5">
                  <AiFillGithub />
                  <p className="">view on github</p>
                </Link>
              </div>
             
            </div>
          </>
        ))
      }
    </div>
    </div>
  )
}
