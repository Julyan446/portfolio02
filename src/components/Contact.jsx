import { profile } from '../data.js'

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="contact">
          <h2>Let's build something together</h2>
          <p className="sub">
            Feel free to reach out for projects, collaborations or opportunities.
          </p>
          <div className="cta">
            <a className="btn primary" href={`mailto:${profile.email}`}>{profile.email}</a>
            <a className="btn ghost" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            {profile.linkedin && (
              <a className="btn ghost" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            )}
            <a className="btn ghost" href={`tel:${profile.phone}`}>{profile.phone}</a>
          </div>
        </div>
      </div>
    </section>
  )
}