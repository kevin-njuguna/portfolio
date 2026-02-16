const skill = {
core: ["TypeScript", "Python", "SQL"],
  frameworks: ["Next.js", "React", "Express", "Node.js"],
  data: ["PostgreSQL", "MongoDB", "Redis"],
  infrastructure: ["Docker", "AWS", "CI/CD"],
  testing: ["Jest", "Playwright"],
}

const Skills = () => {
  return (
    <section className="mt-34">
        
        <h2 className="text-sm text-slate-400 font-semibold mb-12">TECHNICAL FOUNDATION</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12">
            <SkillColumn title="Core" items={skill.core} />
            <SkillColumn title="Frameworks" items={skill.frameworks} />
            <SkillColumn title="Data" items={skill.data} />
            <SkillColumn title="Infrastructure" items={skill.infrastructure} />
            <SkillColumn title="Testing" items={skill.testing} />
        </div>
    </section>
  )
}

const SkillColumn = ({title, items}: {title: string, items:string[]}) => {
    return(
        <div>
            <h3 className="text-[0.7rem] text-green-600 mb-4 uppercase tracking-wide">{title}</h3>

            <ul className="space-y-2">
                {items.map((item) => (
                    <li key={item} className="text-gray-400 text-sm">{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Skills