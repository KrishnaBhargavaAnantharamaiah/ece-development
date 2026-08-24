import { useState } from 'react'

const motto = 'TO EXPLORE THE UNIVERSE, USING THE POWER OF EVOLUTIONARY COMPUTATION!'

const explorationAreas = [
  { number: '01', title: 'Deep Space Missions', text: 'Computational strategies for missions that travel far beyond Earth and operate across extreme environments.' },
  { number: '02', title: 'Planetary Exploration', text: 'Evolutionary approaches for exploration, navigation, optimisation and scientific discovery on other worlds.' },
  { number: '03', title: 'Celestial Systems', text: 'Research and engineering concepts for asteroids, moons, planets and the wider Solar System.' },
  { number: '04', title: 'Autonomous Exploration', text: 'Adaptive computational methods designed to help exploration systems respond to changing conditions.' },
]

const capabilities = [
  'Evolutionary Computation', 'Mission Optimisation', 'Space Technology Research', 'Autonomous Exploration',
  'Planetary Systems', 'Asteroid & Celestial Exploration', 'Long-Duration Missions', 'Computational Space Research',
]

const nicCodes = [
  ['26201', 'Manufacture of desktop computers, laptop computers, hand-held computers, mainframe computers and computer servers'],
  ['30301', 'Manufacture of airplanes'],
  ['30302', 'Manufacture of helicopters'],
  ['30304', 'Manufacture of spacecraft and launch vehicles, satellites, planetary probes, orbital stations, shuttles, ICBM and similar missiles'],
  ['30305', 'Manufacture of parts and accessories of the aircraft and spacecraft of this class'],
  ['35104', 'Electric power generation and transmission by nuclear power plants'],
  ['26302', 'Manufacture of telephone and facsimile equipment, including telephone answering machines, PBX'],
  ['26107', 'Manufacture of microprocessors'],
  ['29101', 'Manufacture of passenger cars'],
  ['26209', 'Manufacture of computers and peripheral equipment n.e.c.'],
  ['69100', 'Legal activities'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="site-shell">
      <header className="nav">
        <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark"><span /></span>
          <span><strong>EVOLUTIONARY</strong><strong>COMPUTATION</strong><small>ENTERPRISES</small></span>
        </a>
        <button className="menu-button" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}><span /><span /><span /></button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#mission" onClick={() => setMenuOpen(false)}>Mission</a><a href="#exploration" onClick={() => setMenuOpen(false)}>Exploration</a><a href="#technology" onClick={() => setMenuOpen(false)}>Technology</a><a href="#codes" onClick={() => setMenuOpen(false)}>11 NIC Codes</a><a href="#about" onClick={() => setMenuOpen(false)}>About</a><a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="stars stars-a" /><div className="stars stars-b" /><div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
          <div className="planet planet-earth"><span className="continent c1" /><span className="continent c2" /><span className="continent c3" /></div><div className="planet planet-moon" />
          <div className="spacecraft"><i /><b /><em /></div>
          <div className="hero-content">
            <p className="eyebrow"><span /> DEEP SPACE EXPLORATION COMPANY</p>
            <h1>EXPLORING<br /><span>THE UNIVERSE.</span></h1>
            <p className="hero-copy">Evolutionary Computation Enterprises is a deep space exploration company applying the power of evolutionary computation to the greatest frontier of all.</p>
            <div className="motto">{motto}</div>
            <div className="hero-actions"><a className="button primary" href="#mission">Explore Our Mission <span>↗</span></a><a className="button secondary" href="#technology">Our Technology</a></div>
          </div>
          <div className="hero-status"><span className="status-dot" /> EXPLORATION STATUS <b>BEYOND EARTH</b></div><div className="scroll-cue">SCROLL TO EXPLORE <span>↓</span></div>
        </section>

        <section id="mission" className="section mission-section"><div className="section-label">01 / OUR MISSION</div><div className="mission-grid"><div><p className="kicker">A NEW FRONTIER FOR COMPUTATION</p><h2>From <span>Evolution</span><br />to Exploration.</h2></div><div className="mission-text"><p>Evolutionary Computation Enterprises has entered a new era. We are no longer an AI company. We are building our identity around <strong>Deep Space Exploration</strong>.</p><p>Our mission is to investigate how evolutionary computation can contribute to the difficult, open-ended problems of exploring the Universe — from mission planning and optimisation to autonomous systems and extreme-environment exploration.</p><p className="quote">“The next frontier is not another application. It is the Universe itself.”</p></div></div></section>

        <section id="exploration" className="section dark-section"><div className="section-label">02 / EXPLORATION</div><div className="section-heading"><div><p className="kicker">WHERE WE ARE GOING</p><h2>The <span>Deep Space</span><br />Agenda.</h2></div><p>Our exploration programme is designed around computational research, engineering, experimentation and the pursuit of knowledge across increasingly distant environments.</p></div><div className="exploration-grid">{explorationAreas.map((area) => <article className="exploration-card" key={area.number}><span className="card-number">{area.number}</span><div className="card-icon">✦</div><h3>{area.title}</h3><p>{area.text}</p><span className="card-arrow">↗</span></article>)}</div></section>

        <section id="technology" className="section technology-section"><div className="section-label">03 / TECHNOLOGY</div><div className="technology-grid"><div><p className="kicker">THE COMPUTATIONAL ENGINE</p><h2>Evolutionary<br /><span>Computation</span></h2><p className="lead">Our foundational discipline remains Evolutionary Computation — now directed toward the challenges of deep-space exploration.</p><p>Evolutionary algorithms can search enormous solution spaces, adapt to changing constraints and discover unconventional solutions. These properties make evolutionary methods an exciting research foundation for future space missions.</p></div><div className="capability-panel"><div className="panel-glow" />{capabilities.map((item, index) => <div className="capability" key={item}><span>{String(index + 1).padStart(2, '0')}</span>{item}<b>+</b></div>)}</div></div></section>

        <section id="codes" className="section codes-section">
          <div className="section-label">04 / UDYAM &amp; INDUSTRY FOUNDATION</div>
          <div className="codes-grid">
            <div>
              <p className="kicker">11 NIC INDUSTRY CODES</p>
              <h2>One Industrial<br /><span>Foundation.</span></h2>
              <div className="certificate-card">
                <div className="certificate-seal">MSME</div>
                <div><strong>UDYAM REGISTRATION CERTIFICATE</strong><small>EVOLUTIONARY COMPUTATION ENTERPRISES</small><small>UDYAM-KR-03-0660650</small></div>
              </div>
            </div>
            <div>
              <p className="lead">The Udyam Registration Certificate confirms the enterprise as a <strong>Micro</strong> enterprise with <strong>Manufacturing</strong> as its major activity. The registered 11 NIC Industry Codes will be applied within the new Deep Space Exploration direction.</p>
              <div className="nic-table">{nicCodes.map(([code, description], index) => <div className="nic-row" key={code}><span>{String(index + 1).padStart(2, '0')}</span><strong>{code}</strong><p>{description}</p></div>)}</div>
              <div className="certificate-meta"><span><b>Udyam No.</b> UDYAM-KR-03-0660650</span><span><b>Major Activity</b> Manufacturing</span><span><b>Enterprise Type</b> Micro</span><span><b>Registration Date</b> 16/02/2026</span><span><b>Incorporation</b> 28/08/2025</span></div>
            </div>
          </div>
        </section>

        <section id="about" className="section about-section"><div className="section-label">05 / ABOUT ECE</div><div className="about-grid"><div><p className="kicker">OUR NEW IDENTITY</p><h2>Built for the<br /><span>Cosmic Frontier.</span></h2></div><div><p>Evolutionary Computation Enterprises is pursuing a long-term vision of becoming a deep space exploration company. Our work brings together evolutionary computation, scientific thinking, engineering and exploration.</p><p>We look toward the Moon, Mars, asteroids, the outer Solar System and the wider Universe — with Evolutionary Computation as a core intellectual and technological foundation.</p><div className="motto-large">{motto}</div></div></div></section>

        <section id="contact" className="contact-section"><div className="contact-stars" /><p className="kicker">THE JOURNEY BEGINS HERE</p><h2>LOOK UP.<br /><span>GO FURTHER.</span></h2><p>Evolutionary Computation Enterprises<br />Deep Space Exploration Company</p><a className="button primary" href="mailto:founderandceo.ece@gmail.com">Contact Evolutionary Computation Enterprises <span>↗</span></a><footer><span>© 2026 EVOLUTIONARY COMPUTATION ENTERPRISES</span><span>{motto}</span></footer></section>
      </main>
    </div>
  )
}
export default App
