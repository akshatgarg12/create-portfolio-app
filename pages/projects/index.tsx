import ProjectCard from "@/components/ProjectCard"
import { GetStaticProps } from "next"

export const getStaticProps : GetStaticProps = async () => {
  // config
  const username = 'akshatgarg12'
  const repos = ['The-Office', 'CodeDraw', 'Invester', 'GetFit', 'SSDiff', 'Microsoft-engage-project']
  const responses = await Promise.allSettled(repos.map((repo) => fetch(`https://api.github.com/repos/${username}/${repo}`)))
  const reposData = responses.map(async (response) => {
      if(response.status === 'fulfilled') {
       const data = await response.value?.json()
       // TODO: made this dynamic based on Project interface  
       const { id, name, description, language, stargazers_count, forks, html_url } = data
       return { id, name, description, language, stargazers_count, forks, html_url }
      }
  })
  return {
    props : {
      repos : reposData
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
