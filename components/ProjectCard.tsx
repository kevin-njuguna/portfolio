import { Github } from "lucide-react"
import { ArrowUpRight } from "lucide-react"

type Project = {
    title: string
    subtitle: string
    description: string
    stack: string[]
    highlights: string[]
    github: string
    live: string
}



const ProjectCard = ({title, subtitle, description, stack, highlights, github, live}: Project) => {
  return (
    <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-8 mb-12">
    <div className="absolute right-10 sm:right-10 md:right-14 lg:right-30 xl:right-60 2xl:right-90 flex gap-4">
    {github && (
        <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition" title="View Source">
            <Github size={18}/>
            
        </a>
    )}

    {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
            title="Live Site"
          >
            <ArrowUpRight size={18} />
          </a>
        )}
    </div>
        <h3 className="text-2xl font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-400 mb-4">{subtitle}</p>
        <p className="text-gray-300 mb-6 max-w-3xl">{description}</p>

        <div className="flex flex-wrap gap-2 mb-2">
        {stack.map((tech) => (
            <span key={tech} className="text-xs bg-zinc-800 px-3 py-1 rounded-full text-gray-300">
                {tech}
            </span>
        ))}
        </div>

        <ul className="space-y-2">
            {highlights.map((item) => (
                <li key={item} className="text-sm text-gray-400 list-disc marker:text-green-500 ">
                     {item}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ProjectCard