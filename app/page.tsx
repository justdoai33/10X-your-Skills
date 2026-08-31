import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteContent } from '@/data/content';

export default function Home() {
  return (
    <div className="page-container">
      <Header />

      <main className="main-content">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-inner">
            <div className="hero-content">
              <h1 className="hero-title" style={{ fontSize: 'var(--font-size-4xl)', marginBottom: 'var(--space-md)' }}>
                {siteContent.hero.heading}
              </h1>
              <p className="hero-subtitle" style={{ fontSize: 'var(--font-size-xl)', marginBottom: 'var(--space-xl)' }}>
                {siteContent.hero.subheading}
              </p>
              <p className="hero-description" style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--space-xl)' }}>
                {siteContent.hero.body}
              </p>
              <div className="text-center">
                <Link href="/apply/" className="btn-primary">
                  Apply now →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What is A2A Section */}
        <section className="section">
          <div className="container-narrow text-center">
            <h2 className="section-title" style={{ marginBottom: 'var(--space-md)' }}>
              {siteContent.whatIsA2A.heading}
            </h2>
            <p style={{ fontSize: 'var(--font-size-lg)', lineHeight: 'var(--line-height-relaxed)', color: 'var(--color-text)' }}>
              {siteContent.whatIsA2A.body}
            </p>
          </div>
        </section>

        {/* Opportunity Section */}
        <section style={{ background: '#1a1a1a', color: 'var(--color-white)', padding: 'var(--space-2xl) var(--space-md)' }}>
          <div className="container-narrow text-center">
            <h2 style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 700, marginBottom: 'var(--space-lg)' }}>
              {siteContent.opportunity.heading}
            </h2>
            <p style={{ fontSize: 'var(--font-size-lg)', lineHeight: 'var(--line-height-relaxed)', marginBottom: 'var(--space-2xl)', opacity: 0.9 }}>
              {siteContent.opportunity.body}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-xl)', maxWidth: '32rem', margin: '0 auto' }}>
              {siteContent.opportunity.stats.map((stat, index) => (
                <div key={index}>
                  <div style={{ fontSize: 'var(--font-size-4xl)', fontWeight: 700, marginBottom: 'var(--space-xs)', color: 'var(--color-accent)' }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: 'var(--font-size-base)', fontWeight: 600, marginBottom: '2px' }}>{stat.label}</div>
                  <div style={{ fontSize: 'var(--font-size-sm)', opacity: 0.7 }}>{stat.sublabel}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">{siteContent.projects.title}</h2>
              <p className="card-text" style={{ textAlign: 'center', maxWidth: '48rem', margin: '0 auto' }}>
                {siteContent.projects.subtitle}
              </p>
            </div>

            <div className="card-grid">
              {siteContent.projects.items.map((project) => (
                <div key={project.id} className="project-card">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-tagline">{project.tagline}</p>

                  <p className="project-description">{project.description}</p>

                  <div className="project-why">
                    <div className="project-why-label">Why it's A2A:</div>
                    <p>{project.whyA2A}</p>
                  </div>

                  <div className="project-delivers">
                    <div className="project-delivers-label">What you'll build:</div>
                    <ul className="project-list">
                      {project.delivers.map((item, i) => (
                        <li key={i} className="project-list-item">
                          <span className="project-bullet">→</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Opportunity section */}
            <div className="section section-dark" style={{ marginTop: '4rem', padding: '3rem 2rem', borderRadius: 'var(--radius-xl)' }}>
              <div style={{ maxWidth: '48rem', margin: '0 auto', textAlign: 'center' }}>
                <h3 className="section-title" style={{ fontSize: 'var(--font-size-3xl)', marginBottom: 'var(--space-lg)' }}>
                  {siteContent.projects.opportunityTitle}
                </h3>
                <p style={{ fontSize: 'var(--font-size-lg)', lineHeight: 'var(--line-height-relaxed)', marginBottom: 'var(--space-2xl)' }}>
                  {siteContent.projects.opportunityBody}
                </p>
              </div>

              <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
                <p style={{ fontSize: 'var(--font-size-base)', textAlign: 'center', marginBottom: 'var(--space-lg)', opacity: 0.9 }}>
                  The artifacts:
                </p>
                <div className="card-grid card-grid-3">
                  {siteContent.projects.artifacts.map((item, index) => (
                    <div key={index} className="card-dark">
                      <div className="check-icon">✓</div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Section */}
        <section className="section section-alt">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">{siteContent.why.title}</h2>
              <p className="section-tagline">{siteContent.why.tagline}</p>
            </div>

            <div className="card-grid card-grid-3">
              {siteContent.why.points.map((point, index) => (
                <div key={index} className="card">
                  <h3 className="card-title">{point.title}</h3>
                  <p className="card-text">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Roles Section */}
        <section id="roles" className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">{siteContent.roles.title}</h2>
              <p className="card-text">{siteContent.roles.description}</p>
            </div>

            <div className="card-grid card-grid-2">
              {siteContent.roles.cards.map((role) => (
                <div key={role.id} className="role-card">
                  <h3 className="role-title">{role.title}</h3>
                  <p className="role-tagline">{role.tagline}</p>

                  <div className="role-section">
                    <div className="role-section-title">WHAT YOU'LL OWN</div>
                    <ul className="skill-list">
                      {role.responsibilities.map((responsibility, i) => (
                        <li key={i} className="skill-item">
                          <span className="skill-bullet">•</span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{
                    background: 'var(--color-bg-alt)',
                    padding: 'var(--space-md)',
                    borderRadius: 'var(--radius-md)',
                    marginTop: 'var(--space-md)',
                    marginBottom: 'var(--space-md)',
                    fontSize: 'var(--font-size-sm)',
                    borderLeft: '3px solid var(--color-primary)'
                  }}>
                    <strong>What you'll showcase:</strong> {role.whatYoullShow}
                  </div>

                  <div className="role-fit">
                    <div className="fit-item">
                      <span className="fit-label fit-label-good">Good fit: </span>
                      <span className="fit-text">{role.goodFit}</span>
                    </div>
                    <div className="fit-item">
                      <span className="fit-label fit-label-not">Not good fit: </span>
                      <span className="fit-text">{role.notGoodFit}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center" style={{ marginTop: '3rem' }}>
              <Link href="/apply/" className="btn-primary">
                Apply now →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="section section-alt">
          <div className="container-narrow">
            <h2 className="section-title text-center">
              {siteContent.faq.title}
            </h2>

            <div className="flex-list">
              {siteContent.faq.items.map((item, index) => (
                <div key={index} className="faq-item">
                  <h3 className="faq-question">{item.question}</h3>
                  <p className="faq-answer">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
