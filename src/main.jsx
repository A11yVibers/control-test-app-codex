import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const Arrow = () => <span aria-hidden="true">↗</span>

const ExternalLink = ({ href, children, className = '' }) => (
  <a className={className} href={href} target="_blank" rel="noreferrer">
    <span>{children}</span> <Arrow />
  </a>
)

const navItems = [
  ['About', 'about'],
  ['Research', 'research'],
  ['Publications', 'publications'],
  ['Contact', 'contact'],
]

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>

      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Elena Marquez, home">
          EM<span aria-hidden="true">.</span>
        </a>
        <nav aria-label="Primary navigation">
          <ul>
            {navItems.map(([label, id]) => (
              <li key={id}><a href={`#${id}`}>{label}</a></li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Computational social scientist</p>
            <h1 id="hero-title">Dr. Elena<br />Marquez</h1>
            <p className="hero-intro">I study how digital systems reshape communities, institutions, and public life.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#research">Explore my research <span aria-hidden="true">↓</span></a>
              <a className="button button-secondary" href="mailto:elena.marquez@example.edu">Email Elena</a>
            </div>
          </div>
          <figure className="portrait-wrap">
            <img
              className="portrait"
              src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&w=1000&q=85"
              alt="Dr. Elena Marquez smiling outdoors"
              width="1000"
              height="1250"
            />
            <figcaption>Associate Professor · Pacifica University</figcaption>
          </figure>
          <aside className="hero-note" aria-label="Current focus">
            <span aria-hidden="true">✦</span>
            <p><strong>Current focus</strong><br />Collective resilience in an algorithmic age</p>
          </aside>
        </section>

        <section className="section about" id="about" aria-labelledby="about-title">
          <div className="section-label"><span>01</span><p>About</p></div>
          <div className="section-content about-grid">
            <h2 id="about-title">Research rooted in people, powered by data.</h2>
            <div className="body-copy">
              <p>I am an Associate Professor of Communication and Data Science at Pacifica University. My work sits at the intersection of human behavior, technology, and social change.</p>
              <p>I combine large-scale computational methods with interviews and participatory research to understand not only what happens online, but why it matters in everyday life.</p>
              <dl className="facts">
                <div><dt>Based in</dt><dd>Seattle, Washington, United States</dd></div>
                <div><dt>Education</dt><dd>Doctor of Philosophy, Northwestern University</dd></div>
                <div><dt>Lab</dt><dd>Public Signals Lab</dd></div>
              </dl>
            </div>
          </div>
        </section>

        <section className="section research" id="research" aria-labelledby="research-title">
          <div className="section-label light"><span>02</span><p>Research</p></div>
          <div className="section-content">
            <div className="section-heading-row">
              <h2 id="research-title">Questions that guide my work</h2>
              <p>My research examines the hidden social infrastructure behind our digital lives.</p>
            </div>
            <ol className="research-list">
              <li>
                <span className="item-number">01</span>
                <div><h3>Digital communities</h3><p>How do online groups build trust, establish norms, and mobilize around shared goals?</p></div>
                <span className="topic-mark" aria-hidden="true">↗</span>
              </li>
              <li>
                <span className="item-number">02</span>
                <div><h3>Algorithmic public life</h3><p>How do recommendation systems influence what communities know, value, and debate?</p></div>
                <span className="topic-mark" aria-hidden="true">↗</span>
              </li>
              <li>
                <span className="item-number">03</span>
                <div><h3>Civic resilience</h3><p>What helps communities respond to uncertainty, misinformation, and rapid change?</p></div>
                <span className="topic-mark" aria-hidden="true">↗</span>
              </li>
            </ol>
            <div className="project-card">
              <p className="eyebrow">Current project · 2024–2027</p>
              <h3>The Civic Signals Project</h3>
              <p>A mixed-method study of how local communities identify trustworthy information during public emergencies. Supported by the National Science Foundation.</p>
              <ExternalLink href="https://www.nsf.gov/" className="text-link">Learn about the funder</ExternalLink>
            </div>
          </div>
        </section>

        <section className="section publications" id="publications" aria-labelledby="publications-title">
          <div className="section-label"><span>03</span><p>Publications</p></div>
          <div className="section-content">
            <div className="section-heading-row">
              <h2 id="publications-title">Selected writing</h2>
              <ExternalLink href="https://scholar.google.com/" className="text-link">View all on Google Scholar</ExternalLink>
            </div>
            <ol className="publication-list">
              <li>
                <p className="pub-meta">2025 · Journal article</p>
                <h3>Beyond virality: The quiet infrastructure of online collective action</h3>
                <p>Marquez, E., &amp; Okafor, N. <cite>Journal of Computer-Mediated Communication</cite>, 30(2).</p>
                <ExternalLink href="https://doi.org/10.0000/example.2025.001" className="publication-link">Read “Beyond virality”</ExternalLink>
              </li>
              <li>
                <p className="pub-meta">2024 · Journal article</p>
                <h3>Who gets heard? Algorithmic visibility in neighborhood networks</h3>
                <p>Marquez, E., Chen, L., &amp; Bello, T. <cite>New Media &amp; Society</cite>, 26(8), 4102–4124.</p>
                <ExternalLink href="https://doi.org/10.0000/example.2024.002" className="publication-link">Read “Who gets heard?”</ExternalLink>
              </li>
              <li>
                <p className="pub-meta">2023 · Book chapter</p>
                <h3>Methods for studying community resilience at scale</h3>
                <p>Marquez, E. In R. Singh (Ed.), <cite>Computational Methods for the Public Good</cite>. MIT Press.</p>
                <ExternalLink href="https://mitpress.mit.edu/" className="publication-link">View “Methods for studying community resilience”</ExternalLink>
              </li>
            </ol>
            <p className="sample-note"><strong>Note:</strong> Publications and researcher details on this demonstration site are fictional.</p>
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <p className="eyebrow">Start a conversation</p>
          <h2 id="contact-title">Research is a<br />collective practice.</h2>
          <p>I welcome conversations with researchers, students, community organizations, and journalists.</p>
          <a className="email-link" href="mailto:elena.marquez@example.edu">elena.marquez@example.edu <Arrow /></a>
          <ul className="social-links" aria-label="Research and social profiles">
            <li><ExternalLink href="https://scholar.google.com/">Google Scholar</ExternalLink></li>
            <li><ExternalLink href="https://orcid.org/">ORCID</ExternalLink></li>
            <li><ExternalLink href="https://github.com/">GitHub</ExternalLink></li>
            <li><ExternalLink href="https://www.linkedin.com/">LinkedIn</ExternalLink></li>
          </ul>
        </section>
      </main>

      <footer>
        <p>© 2026 Elena Marquez</p>
        <nav aria-label="Footer navigation">
          <ul>{navItems.map(([label, id]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ul>
        </nav>
        <a href="#home">Back to top <span aria-hidden="true">↑</span></a>
      </footer>
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)
