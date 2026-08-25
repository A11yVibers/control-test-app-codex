const Arrow = () => <span aria-hidden="true">↗</span>

const interests = [
  ['01', 'Algorithmic Publics', 'How ranking systems shape civic attention, participation, and the stories communities tell about themselves.'],
  ['02', 'Responsible AI', 'Designing transparent, accountable data systems that work for—and with—the people they affect.'],
  ['03', 'Digital Methods', 'Combining network analysis, interviews, and participatory research to study life across platforms.'],
]

const projects = [
  { status: 'Active · 2024–27', title: 'The Civic Signals Lab', text: 'A multi-city study of how local communities interpret and respond to algorithmically curated public information.', tags: ['NSF funded', 'Mixed methods'] },
  { status: 'Fieldwork · 2025–26', title: 'Auditing in the Open', text: 'Co-designing practical algorithm audit tools with journalists, librarians, and civic technology practitioners.', tags: ['Participatory design', 'Open source'] },
]

const publications = [
  { year: '2025', title: 'Whose signal counts? Community expertise in algorithmic audits', cite: 'Chen, M. & Okafor, L. · New Media & Society, 27(4)', type: 'Journal article' },
  { year: '2024', title: 'Seeing the feed: A field guide to public-interest recommender research', cite: 'Chen, M., Torres, J. & Banerjee, S. · CSCW 2024', type: 'Conference paper' },
  { year: '2023', title: 'Beyond transparency: Designing for meaningful algorithmic accountability', cite: 'Chen, M. · Information, Communication & Society, 26(9)', type: 'Journal article' },
]

function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Maya Chen, home">MC<span>.</span></a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a><a href="#research">Research</a><a href="#publications">Publications</a><a className="nav-cta" href="#contact">Let's talk</a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Computational social scientist · Berkeley, CA</p>
            <h1 id="hero-title">Dr. Maya<br /><em>Chen</em></h1>
            <p className="hero-intro">I study how algorithms shape public life—and how communities can shape them back.</p>
            <div className="hero-actions"><a className="button primary" href="#research">Explore my research <Arrow /></a><a className="text-link" href="mailto:maya.chen@example.edu">maya.chen@example.edu <Arrow /></a></div>
          </div>
          <div className="portrait-wrap">
            <div className="portrait-frame"><img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=85" alt="Dr. Maya Chen seated in a bright office" /></div>
            <p className="image-note">Associate Professor<br />School of Information</p>
          </div>
          <p className="scroll-note" aria-hidden="true">Scroll to discover <span>↓</span></p>
        </section>

        <section className="section about" id="about" aria-labelledby="about-title">
          <div><p className="section-kicker">01 / About</p><h2 id="about-title">Making complex systems <em>legible</em>.</h2></div>
          <div className="about-copy"><p className="lead">My work sits at the intersection of technology, society, and public interest.</p><p>I’m an Associate Professor at the University of California, Berkeley, where I lead the Civic Signals Lab. My research examines the everyday politics of algorithmic systems: who builds them, whose knowledge they encode, and how people negotiate their effects.</p><p>Before joining Berkeley, I was a postdoctoral fellow at the Data & Society Research Institute. I hold a PhD in Communication from Northwestern University and an MSc in Social Science of the Internet from Oxford.</p><a className="text-link" href="#contact">More about my background <Arrow /></a></div>
        </section>

        <section className="section research" id="research" aria-labelledby="research-title">
          <div className="section-heading"><p className="section-kicker">02 / Research</p><h2 id="research-title">Questions I’m<br /><em>thinking through</em>.</h2><p>I use computational and qualitative methods to understand—and reimagine—our relationship with data-driven systems.</p></div>
          <div className="interest-list">{interests.map(([num, title, text]) => <article className="interest" key={num}><span>{num}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
          <div className="projects-header"><h3>Current projects</h3><p>Work in progress, in collaboration with thoughtful people.</p></div>
          <div className="project-grid">{projects.map((p) => <article className="project-card" key={p.title}><p className="status"><span></span>{p.status}</p><h3>{p.title}</h3><p>{p.text}</p><ul aria-label="Project details">{p.tags.map(t => <li key={t}>{t}</li>)}</ul></article>)}</div>
        </section>

        <section className="section publications" id="publications" aria-labelledby="pub-title">
          <div className="section-heading compact"><p className="section-kicker">03 / Selected publications</p><h2 id="pub-title">Ideas in<br /><em>circulation</em>.</h2></div>
          <div className="pub-list">{publications.map((p) => <article className="publication" key={p.title}><p className="pub-year">{p.year}</p><div><p className="pub-type">{p.type}</p><h3>{p.title}</h3><p>{p.cite}</p></div><a href="https://scholar.google.com/" target="_blank" rel="noreferrer" aria-label={`View ${p.title} on Google Scholar`}><Arrow /></a></article>)}</div>
          <a className="button outline" href="https://scholar.google.com/" target="_blank" rel="noreferrer">View all on Google Scholar <Arrow /></a>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <p className="section-kicker">04 / Contact</p><h2 id="contact-title">Let’s compare<br /><em>notes.</em></h2><p>I welcome conversations with researchers, practitioners, journalists, and community organizations working toward more accountable technology.</p>
          <a className="email" href="mailto:maya.chen@example.edu">maya.chen@example.edu <Arrow /></a>
          <div className="socials" aria-label="Professional profiles"><a href="https://scholar.google.com/" target="_blank" rel="noreferrer">Google Scholar <Arrow /></a><a href="https://orcid.org/" target="_blank" rel="noreferrer">ORCID <Arrow /></a><a href="https://github.com/" target="_blank" rel="noreferrer">GitHub <Arrow /></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a></div>
        </section>
      </main>
      <footer><p>© {new Date().getFullYear()} Maya Chen</p><p>Research in service of the public.</p><a href="#home">Back to top ↑</a></footer>
    </>
  )
}

export default App
