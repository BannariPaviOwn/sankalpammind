import { Link } from 'react-router-dom';
import './About.css';

export default function About() {
  return (
    <div className="about-page">
      {/* ── Who We Are ── */}
      <section className="about-hero">
        <h1>Who We Are</h1>
        <div className="about-hero__body">
          <p>
            SANKALPAM is a mental health and wellbeing foundation focused on
            reaching underserved populations across rural and semi-urban India.
          </p>
          <p>
            It builds structured and integrated care approaches that combine
            mental health, physical wellbeing, and local engagement—ensuring
            support reaches individuals and families at the right time, before
            challenges intensify.
          </p>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="about-section">
        <div className="about-section__inner about-story">
          <h2 className="about-section__title">Our Story</h2>
          <p>
            SANKALPAM was founded with a clear purpose—to bring wellbeing within
            reach and embed it into everyday environments.
          </p>
          <p>
            Years of working with individuals, families, and young people
            revealed a consistent reality: many emotional struggles remain
            unheard, misunderstood, or unsupported.
          </p>
          <p>
            SANKALPAM was created to bridge this gap by bringing care closer to
            where people live, learn, and work.
          </p>
        </div>
      </section>

      {/* ── Why This Work Matters ── */}
      <section className="about-section about-section--alt">
        <div className="about-section__inner">
          <h2 className="about-section__title">Why This Work Matters</h2>

          <div className="about-why-grid">
            <div className="about-why-card">
              <p className="about-why-card__intro">
                In many rural and semi-urban regions:
              </p>
              <ul>
                <li>Mental health services are limited or unavailable</li>
                <li>Social stigma discourages help-seeking</li>
                <li>
                  Emotional distress is often misunderstood or overlooked
                </li>
                <li>
                  Women, children, and the elderly carry silent psychological
                  burdens
                </li>
              </ul>
            </div>

            <div className="about-why-card">
              <h3>What Happens Without Support</h3>
              <ul>
                <li>Children face academic and emotional challenges</li>
                <li>Families struggle with unresolved conflicts</li>
                <li>
                  Maladaptive coping patterns increase, including substance use
                </li>
                <li>
                  Preventable concerns evolve into long-term conditions
                </li>
              </ul>
            </div>
          </div>

          <div className="about-callout">
            Timely awareness and appropriate support can significantly alter
            life trajectories—this is where SANKALPAM intervenes.
          </div>
        </div>
      </section>

      {/* ── Our Approach ── */}
      <section className="about-section">
        <div className="about-section__inner">
          <h2 className="about-section__title">Our Approach</h2>
          <p className="about-approach-intro">
            SANKALPAM follows a structured and locally embedded approach that
            focuses on:
          </p>
          <ul className="about-approach-list">
            <li>
              <span className="about-approach-icon">🛡️</span>
              Prevention before crisis
            </li>
            <li>
              <span className="about-approach-icon">🌿</span>
              Local capability over dependency
            </li>
            <li>
              <span className="about-approach-icon">🤝</span>
              Integration of mental and physical wellbeing
            </li>
            <li>
              <span className="about-approach-icon">📈</span>
              Scalable and adaptable systems
            </li>
          </ul>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section className="about-section about-section--purple">
        <div className="about-section__inner">
          <h2 className="about-section__title">Vision &amp; Mission</h2>

          <div className="about-vm-grid">
            <div className="about-vm-card about-vm-card--vision">
              <span className="about-vm-card__icon">🌅</span>
              <h3>Vision</h3>
              <p>
                A resilient and emotionally empowered society where wellbeing is
                within reach and integrated into everyday life.
              </p>
            </div>

            <div className="about-vm-card about-vm-card--mission">
              <span className="about-vm-card__icon">🎯</span>
              <h3>Mission</h3>
              <p>
                To design and implement structured approaches that:
              </p>
              <ul className="about-mission-items">
                <li>Promote awareness and reduce stigma</li>
                <li>Enable timely identification through screening</li>
                <li>Provide psychosocial support</li>
                <li>Strengthen children, families, and support systems</li>
                <li>
                  Build local capacity through training and Psychological First
                  Aid
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Principles ── */}
      <section className="about-section">
        <div className="about-section__inner">
          <h2 className="about-section__title">Core Principles</h2>

          <div className="about-principles-grid">
            <div className="about-principle-card about-principle-card--compact">
              <div className="about-principle-card__icon">🌍</div>
              <h4>Accessibility &amp; inclusivity</h4>
            </div>

            <div className="about-principle-card about-principle-card--compact">
              <div className="about-principle-card__icon">🤝</div>
              <h4>Participation &amp; shared ownership</h4>
            </div>

            <div className="about-principle-card about-principle-card--compact">
              <div className="about-principle-card__icon">♻️</div>
              <h4>Sustainability &amp; scale</h4>
            </div>

            <div className="about-principle-card about-principle-card--compact">
              <div className="about-principle-card__icon">⚖️</div>
              <h4>Ethical and evidence-informed care</h4>
            </div>
          </div>
        </div>
      </section>

      {/* ── Institutional Alignment ── */}
      <section className="about-section about-section--alt">
        <div className="about-section__inner">
          <h2 className="about-section__title">Institutional Alignment</h2>
          <div className="about-alignment-box">
            <div className="about-alignment-box__icon">🏛️</div>
            <p>
              SANKALPAM aligns with public health, education, and community
              development systems, enabling integration with government and
              institutional frameworks.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="about-cta">
        <h2>Learn How We Work</h2>
        <p>
          Explore the Sankalpam Samagra Wellness Model—our structured framework
          for sustainable community wellbeing.
        </p>
        <Link to="/our-model" className="about-cta__link">
          Explore Our Model →
        </Link>
      </section>
    </div>
  );
}
