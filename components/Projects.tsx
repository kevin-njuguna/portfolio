import ProjectCard from "./ProjectCard"

const projects = [
  {
    title: "Resumind",
    subtitle: "AI Resume Analyzer",
    description:
      "Intelligent resume analysis platform using AI to extract skills, evaluate strengths, and provide actionable feedback.",
    stack: ["Next.js", "TypeScript", "OpenAI", "Tailwind", "Node"],
    highlights: [
      "Resume parsing & skill extraction",
      "AI-generated feedback",
      "Modern responsive UI",
    ],
    github: "https://github.com/kevin-njuguna/ai-resume-analyzer",
    live: "https://ai-resume-analyzer-eight-umber.vercel.app/",
  },
  {
    title: "Tasky",
    subtitle: "Fullstack Task Management App",
    description:
      "JWT-secured task manager with user authentication, profile system, and task lifecycle (active, completed, deleted).",
    stack: ["React", "TypeScript", "Express", "Prisma", "PostgreSQL"],
    highlights: [
      "JWT authentication",
      "Protected routes",
      "Cloudinary avatar uploads",
    ],
    github: "https://github.com/kevin-njuguna/tasky-fullstack",
    live: "https://tasky-fullstack.vercel.app/",
  },
  {
    title: "Past Lens",
    subtitle: "Cultural Archiving Platform",
    description:
      "Digital platform for preserving stories, artifacts, and cultural history in structured collections.",
    stack: ["Next.js", "Node", "MongoDB", "Tailwind"],
    highlights: [
      "Media uploads",
      "Story collections",
      "Searchable archives",
    ],
    github: "https://github.com/Past-Lens/past_lens",
    live: "https://pastlens.vercel.app/",
  },
  {
    title: "Campaign Website",
    subtitle: "MUT President Campaign",
    description:
      "High-impact campaign website used for outreach, updates, and voter engagement during university elections.",
    stack: ["React", "Tailwind", "Vercel"],
    highlights: [
      "Mobile-first design",
      "Event updates",
      "Integral to election success",
    ],
    github: "https://github.com/WeshTech/Ianthetenth",
    live: "",
  },
  {
    title: "Zaph Tours",
    subtitle: "Travel & Tours Website",
    description:
      "Modern tourism website showcasing destinations, testimonials, and booking inquiries for a Kenyan travel company.",
    stack: ["Next.js", "TypeScript", "Material UI"],
    highlights: [
      "Featured destinations",
      "Newsletter signup",
      "Responsive layout",
    ],
    github: "https://github.com/kevin-njuguna/zaph-tours",
    live: "https://zaph-tours-opal.vercel.app/",
  },
]

export default function Projects() {
  return (
    <section className="mt-32">

      <h2 className="text-sm text-slate-400 font-semibold mb-12">
        PROJECTS
      </h2>

      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}

    </section>
  )
}
