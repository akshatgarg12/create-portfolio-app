import ProjectCard from "@/components/ProjectCard"
import { GetStaticProps } from "next"

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
        ))
      }
    </div>
    </div>
  )
}
