import { skills } from '../data.js'

export default function About() {
  return (
    <section id="about">
      <div className="wrap about">
        <div>
          <h2>About me</h2>
          <p>
            I am an IT student passionate about UI/UX design and frontend development. I enjoy creating
            clean, responsive, and user-friendly websites that combine design and functionality.
          </p>
          <p>
            I focus on building well-structured layouts and improving user experience, while continuously
            learning new tools and technologies to enhance my skills.
          </p>
        </div>
        <div className="skills">
          {skills.map((g) => (
            <div key={g.group}>
              <h3>{g.group}</h3>
              <div className="chips">
                {g.items.map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}