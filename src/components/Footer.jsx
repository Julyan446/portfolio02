import { profile } from '../data.js'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        © {new Date().getFullYear()} {profile.name}. Designed and built by hand. <a href="#top">Back to top</a>
      </div>
    </footer>
  )
}
