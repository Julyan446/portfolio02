export default function ProjectCard({ title, size, metric, description, tags, links }) {
  const cls = size === 'feature' ? 'card feature' : size === 'wide' ? 'card wide' : 'card'
  return (
    <article className={cls}>
      {metric && <div className="metric">{metric}</div>}
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="tags">
        {tags.map((t) => <span key={t}>{t}</span>)}
      </div>
      <div className="links">
        {links.map((l) => <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>)}
      </div>
    </article>
  )
}
