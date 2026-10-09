import { profile } from '../data.js'
import StrokeText from './StrokeText.jsx'
import GlareHover from './GlareHover.jsx'

export default function Hero() {
  return (
    <div className="hero">
      <div className="wrap">
        <div>
  
          <h1 className="rise">
            <StrokeText
              text={profile.name}
              strokeColor="#3B82F6"
              fillColor="#F8FAFC"
              strokeWidth={1.4}
              drawDuration={1.6}
              fillDelay={0.2}
              stagger={0.05}
              ease="power2.out"
              trigger="mount"
              fillMode="wipe"
              fontSize={128}
              fontWeight={800}
              letterSpacing={-4}
              reverse={false}
            />
          </h1>
          <p className="lede rise">
            I'm an IT student passionate about UI/UX design and frontend development.
            I enjoy creating clean, responsive and user-friendly websites that combine design and functionality.
          </p>
          <div className="cta rise">
            <a className="btn primary" href="#work">View projects</a>
            <a className="btn ghost" href="#contact">Contact me</a>
          </div>
        </div>
        <div className="hero-photo rise">
          <GlareHover
            width="100%"
            height="100%"
            background="#0d1424"
            borderRadius="16px"
            borderColor="#1c2742"
            glareColor="#ffffff"
            glareOpacity={0.3}
            glareAngle={-30}
            glareSize={300}
            transitionDuration={800}
            playOnce={false}
          >
            <img src="/myphoto.png" alt={`${profile.name}`} />
          </GlareHover>
        </div>
      </div>
    </div>
  )
}