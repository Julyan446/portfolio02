import { profile } from '../data.js'

export default function Header() {
  return (
    <header>
      <div className="wrap">
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#work">Projects</a></li>
          </ul>
          <a className="btn primary" href="#contact">Get in touch</a>
        </nav>
      </div>
    </header>
  )
}
