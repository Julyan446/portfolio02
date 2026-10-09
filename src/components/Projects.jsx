import ProjectCard from './ProjectCard.jsx'
import { projects } from '../data.js'

export default function Projects() {
  return (
    <section id="work">
      <div className="wrap">
        <h2>Selected projects</h2>
        <p className="sub">A few things I've built recently.</p>
        <div className="projects">
          {projects.map((p) => <ProjectCard key={p.title} {...p} />)}
        </div>
      </div>
    </section>
  )
}
