import { useState } from 'react'

const Arrow = () => <span aria-hidden="true">↗</span>

const publications = [
  {
    year: '2025',
    title: 'Mapping the Social Life of Climate Risk',
    citation: 'Chen, M., Okafor, J., & Ruiz, P. Journal of Computational Social Science, 8(2), 114–139.',
    type: 'Journal article',
  },
  {
    year: '2024',
    title: 'Whose Data Counts? Participation and Bias in Civic AI',
    citation: 'Chen, M. & Shah, N. Proceedings of the ACM on Human-Computer Interaction, 8(CSCW2).',
    type: 'Conference paper',
  },
  {
    year: '2023',
    title: 'Networks of Care in the Digital City',
    citation: 'Chen, M. New Media & Society, 25(11), 3012–3034.',
    type: 'Journal article',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Maya Chen, home">
          <span>MC</span> Maya Chen
        </a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">
          <span></span><span></span>
        </button>
        <nav className={menuOpen ? 'open' : ''} aria-label="Main navigation">
          {['About', 'Research', 'Publications', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy reveal">
            <p className="eyebrow">Computational social scientist · Berkeley, CA</p>
            <h1>Dr. Maya<br /><em>Chen</em></h1>
            <p className="hero-intro">I study how technology reshapes civic life—and how data can help us build more equitable, resilient communities.</p>
            <div className="hero-actions">
              <a className="button primary" href="#research">Explore my research <Arrow /></a>
              <a className="text-link" href="mailto:maya.chen@example.edu">maya.chen@example.edu <Arrow /></a>
            </div>
          </div>
          <div className="portrait-wrap reveal">
            <div className="portrait-frame">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=85" alt="Researcher standing in a bright university corridor" />
            </div>
            <p className="image-note"><span>01</span> Associate Professor<br />School of Information</p>
          </div>
          <a className="scroll-note" href="#about"><span>Scroll to discover</span><i aria-hidden="true">↓</i></a>
        </section>

        <section className="about section" id="about">
          <div className="section-label"><span>01</span><p>About</p></div>
          <div className="about-content">
            <p className="lead">My work lives at the intersection of <em>people, data,</em> and <em>public life.</em></p>
            <div className="about-columns">
              <p>I am an Associate Professor at the University of California, Berkeley, where I lead the Civic Data Lab. My research combines computational methods with community-based inquiry to understand how digital systems influence participation, trust, and access.</p>
              <p>Before joining Berkeley, I was a postdoctoral fellow at MIT. I received my PhD in Information Science from Cornell University and a BA in Sociology from the University of Toronto.</p>
            </div>
            <dl className="details">
              <div><dt>Based in</dt><dd>Berkeley, California</dd></div>
              <div><dt>Affiliation</dt><dd>UC Berkeley</dd></div>
              <div><dt>Lab</dt><dd>Civic Data Lab</dd></div>
            </dl>
          </div>
        </section>

        <section className="research section dark" id="research">
          <div className="section-label"><span>02</span><p>Research</p></div>
          <div className="section-heading">
            <p className="eyebrow">Questions that guide my work</p>
            <h2>Making technology<br /><em>answerable to people.</em></h2>
          </div>
          <div className="interest-grid">
            <article><span className="number">01</span><h3>Civic technology</h3><p>How digital platforms shape participation, public services, and democratic institutions.</p></article>
            <article><span className="number">02</span><h3>Responsible AI</h3><p>Community-centered approaches to fairness, accountability, and public-interest technology.</p></article>
            <article><span className="number">03</span><h3>Social resilience</h3><p>Using network science to understand how communities respond to climate and public health crises.</p></article>
          </div>
          <div className="projects">
            <div><p className="eyebrow">Current projects</p><h3>Work in progress</h3></div>
            <article><p>2024—2027</p><h4>The Civic AI Observatory</h4><span>A multi-city study of automated decision systems in local government, funded by the NSF.</span></article>
            <article><p>2023—2026</p><h4>Signals of Resilience</h4><span>Mapping community networks and information flows during extreme weather events.</span></article>
          </div>
        </section>

        <section className="publications section" id="publications">
          <div className="section-label"><span>03</span><p>Selected publications</p></div>
          <div className="pub-header"><h2>Recent writing<br />& <em>scholarship</em></h2><a className="text-link" href="https://scholar.google.com/" target="_blank" rel="noreferrer">View Google Scholar <Arrow /></a></div>
          <div className="pub-list">
            {publications.map((pub) => (
              <a className="publication" href="https://doi.org/" target="_blank" rel="noreferrer" key={pub.title}>
                <span className="pub-year">{pub.year}</span>
                <div><p>{pub.type}</p><h3>{pub.title}</h3><span>{pub.citation}</span></div>
                <i><Arrow /></i>
              </a>
            ))}
          </div>
        </section>

        <section className="contact section" id="contact">
          <p className="eyebrow">Ideas travel further together</p>
          <h2>Let’s start a<br /><em>conversation.</em></h2>
          <p className="contact-copy">I welcome inquiries from students, researchers, journalists, and community partners.</p>
          <a className="email-link" href="mailto:maya.chen@example.edu">maya.chen@example.edu <Arrow /></a>
          <div className="socials">
            <a href="https://scholar.google.com/" target="_blank" rel="noreferrer">Google Scholar <Arrow /></a>
            <a href="https://orcid.org/" target="_blank" rel="noreferrer">ORCID <Arrow /></a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
          </div>
        </section>
      </main>
      <footer><p>© 2026 Maya Chen</p><a href="#home">Back to top ↑</a></footer>
    </>
  )
}

export default App
