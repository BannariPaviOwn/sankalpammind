import { Link } from 'react-router-dom';
import { ASSETS } from '../assets';
import './Home.css';

/** Replaces primary hero collage image; filename has spaces/parens — encode for URL */
const HERO_BRAND_IMAGE_SRC = `/assets/about/${encodeURIComponent('sahiwellness-33.jpg (1).jpeg')}`;

export default function Home() {
  return (
    <div className="home">
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-text">
            <div className="hero-brand">
              <h1 className="hero-title">SANKALPAM</h1>
            </div>
            <p className="hero-subtitle">
              Building Community-Based Mental Health &amp; Wellbeing Systems for
              Rural and Semi-Urban India
            </p>
            <p className="hero-body">
              Where care reaches communities before crisis does.
            </p>
            <p className="hero-body">
              Because no child, family, or individual should struggle without
              support.
            </p>
            <p className="hero-body">
              SANKALPAM is a community-driven initiative that makes mental and
              physical wellbeing accessible, preventive, and integrated into
              everyday life.
            </p>
            <div className="hero-ctas">
              <Link to="/contact" className="btn-orange">Partner With Us</Link>
              <Link to="/initiatives" className="btn-outline-purple">Explore Programs</Link>
            </div>
          </div>
          <div className="hero-images">
            <div className="hero-collage">
              <div className="collage-main collage-main--brand">
                <img
                  src={HERO_BRAND_IMAGE_SRC}
                  alt=""
                  className="collage-brand-img"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            </div>
            <div className="hero-stat-badge">
              <span className="stat-number">80%</span>
              <span className="stat-text">of mental health needs in rural India remain unmet</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ── */}
      <section className="vm-section">
        <div className="container">
          <div className="vm-grid">
            <div className="vm-card vm-vision">
              <div className="vm-icon-wrap">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7044C4" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
              </div>
              <h3>Our Vision</h3>
              <p>
                A resilient society where wellbeing is accessible, preventive,
                and part of everyday life — reaching every rural and semi-urban
                community across India.
              </p>
            </div>
            <div className="vm-card vm-mission">
              <div className="vm-icon-wrap">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <h3>Our Mission</h3>
              <p>
                To build scalable, community-based systems for awareness, early
                identification, support, and resilience — delivering structured
                care and long-term impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUNDER'S DESK ── */}
      <section className="founder-section">
        <div className="container">
          <div className="founder-grid">
            <div className="founder-photo-wrap">
              <img src={ASSETS.about.founder2} alt="Dr. Sahithyaa Raghu" className="founder-photo" />
            </div>
            <div className="founder-content">
              <h2 className="founder-title">Founders Desk</h2>
              <div className="founder-quote-wrap">
                <span className="quote-mark quote-open">"</span>
                <blockquote>
                  <p>
                    I have witnessed children, individuals, and families silently
                    navigating emotional struggles without timely support.
                  </p>
                  <p>
                    SANKALPAM was founded to change this by making mental wellbeing
                    accessible, preventive, and rooted within communities.
                  </p>
                  <p>
                    We envision a future where systems of care ensure that every
                    individual feels supported, understood, and empowered to live
                    with strength and dignity.
                  </p>
                </blockquote>
                <span className="quote-mark quote-close">"</span>
              </div>
              <div className="founder-info">
                <p className="founder-name">Dr Sahithyaa Raghu</p>
                <p className="founder-role">Founder and Managing Trustee</p>
              </div>
              <div className="founder-social">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY THIS WORK MATTERS ── */}
      <section className="why-section">
        <div className="container">
          <h2 className="section-title">Why This Work Matters</h2>
          <h3 className="why-headline">Mental Wellbeing Cannot Be a Privilege</h3>
          <p className="section-lead">
            Across rural and semi-urban India, mental health challenges often remain unseen
            and unaddressed. Limited access, stigma, and delayed intervention result in support
            being sought only at advanced stages.
          </p>
          <p className="why-leads-to">This leads to:</p>
          <div className="why-cards">
            <div className="why-card">
              <div className="why-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
              </div>
              <h4>Increased emotional and psychological burden</h4>
            </div>
            <div className="why-card">
              <div className="why-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h4>Delayed help-seeking</h4>
            </div>
            <div className="why-card">
              <div className="why-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h4>Strain within families</h4>
            </div>
            <div className="why-card">
              <div className="why-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              </div>
              <h4>Escalation into crisis</h4>
            </div>
          </div>

          <div className="why-stories">
            <p className="why-stories-intro">Behind every unmet need is a lived experience —</p>
            <div className="why-stories-grid">
              <div className="why-story">
                <div className="why-story-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                </div>
                <p>A child struggling silently in school</p>
              </div>
              <div className="why-story">
                <div className="why-story-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                </div>
                <p>A caregiver managing stress without support</p>
              </div>
              <div className="why-story">
                <div className="why-story-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z"/></svg>
                </div>
                <p>A population where care is still out of reach</p>
              </div>
            </div>
            <p className="why-stories-closing">
              SANKALPAM works to address this gap — at the right time, in the right places,
              and in meaningful ways.
            </p>
          </div>
        </div>
      </section>

      {/* ── SAMAGRA WELLNESS MODEL ── */}
      <section className="model-section">
        <div className="container">
          <span className="model-badge">OUR MODEL</span>
          <h2 className="section-title">Sankalpam Samagra Wellness Model</h2>
          <p className="section-lead">
            A four-pillar framework that enables timely support, structured care,
            and long-term resilience. This model integrates mental and physical
            wellbeing through a locally embedded approach, ensuring individuals and
            families receive support before challenges intensify.
          </p>

          {/* Why This Model Matters */}
          <div className="model-why">
            <h3>Why This Model Matters</h3>
            <p className="model-why-intro">
              Conventional systems often respond only after distress becomes severe.
              SANKALPAM shifts the approach toward:
            </p>
            <div className="model-shifts">
              <div className="model-shift">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                <span>Timely support rather than delayed response</span>
              </div>
              <div className="model-shift">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                <span>Locally anchored care instead of centralized services</span>
              </div>
              <div className="model-shift">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                <span>Early recognition over late diagnosis</span>
              </div>
              <div className="model-shift">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                <span>Capability building over dependency</span>
              </div>
            </div>
          </div>

          {/* Four Pillars */}
          <h3 className="pillar-heading">Core Framework: Four Interconnected Pillars</h3>
          <div className="pillar-grid">
            <div className="pillar-card">
              <span className="pillar-num">01</span>
              <h4>Awareness & Sensitization</h4>
              <p>Building understanding and reducing stigma</p>
              <div className="pillar-outcome">
                <span>Outcome:</span> Increased awareness and acceptance
              </div>
            </div>
            <div className="pillar-card">
              <span className="pillar-num">02</span>
              <h4>Identification & Screening</h4>
              <p>Recognizing concerns at the right stage</p>
              <div className="pillar-outcome">
                <span>Outcome:</span> Timely detection and intervention
              </div>
            </div>
            <div className="pillar-card">
              <span className="pillar-num">03</span>
              <h4>Care & Support Systems</h4>
              <p>Providing counselling and structured support</p>
              <div className="pillar-outcome">
                <span>Outcome:</span> Reduced distress and improved coping
              </div>
            </div>
            <div className="pillar-card">
              <span className="pillar-num">04</span>
              <h4>Capacity Building</h4>
              <p>Strengthening local capability for sustainability</p>
              <div className="pillar-outcome">
                <span>Outcome:</span> Long-term resilience and ownership
              </div>
            </div>
          </div>

          {/* Continuum of Care */}
          <div className="model-continuum">
            <h3>How the Model Works <span>(Continuum of Care)</span></h3>
            <div className="continuum-flow">
              <div className="continuum-step">Awareness</div>
              <div className="continuum-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </div>
              <div className="continuum-step">Identification</div>
              <div className="continuum-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </div>
              <div className="continuum-step">Support</div>
              <div className="continuum-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </div>
              <div className="continuum-step">Capacity Building</div>
              <div className="continuum-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </div>
              <div className="continuum-step continuum-step--final">Community Resilience</div>
            </div>
            <p className="continuum-note">
              This creates a continuous cycle of care, rather than isolated interventions.
            </p>
          </div>

          {/* Designed for Scale */}
          <div className="model-scale">
            <h3>Designed for Scale</h3>
            <p>The Sankalpam Samagra Wellness Model is built to expand systematically:</p>
            <div className="scale-flow">
              <span className="scale-step">Pilot</span>
              <span className="scale-dot" />
              <span className="scale-step">District</span>
              <span className="scale-dot" />
              <span className="scale-step">Multi-district</span>
              <span className="scale-dot" />
              <span className="scale-step">State</span>
              <span className="scale-dot" />
              <span className="scale-step scale-step--final">National</span>
            </div>
          </div>

          <div className="model-cta">
            <Link to="/our-model" className="link-arrow">Learn more about our model →</Link>
          </div>
        </div>
      </section>

      {/* ── FLAGSHIP INITIATIVES ── */}
      <section className="initiatives-section">
        <div className="container">
          <h2 className="section-title">Our Flagship Initiatives</h2>
          <p className="section-lead">
            Structured interventions designed for measurable impact across
            populations and institutions.
          </p>
          <div className="initiative-grid">
            <div className="initiative-card">
              <div className="initiative-img">
                <img src={ASSETS.home.community} alt="MANODAYA" />
              </div>
              <div className="initiative-body">
                <h3 className="initiative-headline">
                  <span className="initiative-headline__name">MANODAYA</span>
                  <span className="initiative-headline__sep"> – </span>
                  <span className="initiative-headline__rest">
                    <span className="initiative-headline__theme">
                      Community Wellbeing{' '}
                    </span>
                    <span className="initiative-headline__paren">
                      (Awakening of the mind)
                    </span>
                  </span>
                </h3>
                <p className="initiative-lead">
                  Integrating mental wellbeing into everyday life.
                </p>
              </div>
            </div>
            <div className="initiative-card">
              <div className="initiative-img">
                <img src={ASSETS.home.programs} alt="MANOSHIKSHA" />
              </div>
              <div className="initiative-body">
                <h3 className="initiative-headline">
                  <span className="initiative-headline__name">MANOSHIKSHA</span>
                  <span className="initiative-headline__sep"> – </span>
                  <span className="initiative-headline__rest">
                    <span className="initiative-headline__theme">
                      School &amp; Youth Mental Health{' '}
                    </span>
                    <span className="initiative-headline__paren">
                      (Education of the mind)
                    </span>
                  </span>
                </h3>
                <p className="initiative-lead">
                  Strengthening emotional resilience within education systems.
                </p>
              </div>
            </div>
            <div className="initiative-card">
              <div className="initiative-img">
                <img src={ASSETS.home.ourWork} alt="MANORAKSHA" />
              </div>
              <div className="initiative-body">
                <h3 className="initiative-headline">
                  <span className="initiative-headline__name">MANORAKSHA</span>
                  <span className="initiative-headline__sep"> – </span>
                  <span className="initiative-headline__rest">
                    <span className="initiative-headline__theme">
                      Trauma Preparedness &amp; Psychological Support{' '}
                    </span>
                    <span className="initiative-headline__paren">
                      (Protection of the mind)
                    </span>
                  </span>
                </h3>
                <p className="initiative-lead">
                  Equipping individuals to respond during distress and crisis.
                </p>
              </div>
            </div>
          </div>
          <div className="model-cta">
            <Link to="/initiatives" className="link-arrow">View all initiatives →</Link>
          </div>
        </div>
      </section>

      {/* ── IMPACT TARGETS ── */}
      <section className="impact-section">
        <div className="container">
          <div className="impact-header">
            <span className="impact-badge">AY 2026–27 | PILOT PHASE</span>
            <h2>Impact Targets</h2>
            <p>
              As part of our pilot-year implementation, SANKALPAM is committed to the
              following minimum delivery targets:
            </p>
          </div>
          <div className="impact-grid">
            <div className="impact-stat">
              <span className="impact-num">1000–1500</span>
              <span className="impact-label">Direct Beneficiaries</span>
            </div>
            <div className="impact-stat">
              <span className="impact-num">3000+</span>
              <span className="impact-label">Indirect Community Reach</span>
            </div>
            <div className="impact-stat">
              <span className="impact-num">500–700</span>
              <span className="impact-label">Students Supported</span>
            </div>
            <div className="impact-stat">
              <span className="impact-num">5–7</span>
              <span className="impact-label">Schools Engaged</span>
            </div>
            <div className="impact-stat">
              <span className="impact-num">200–300</span>
              <span className="impact-label">Individuals Screened</span>
            </div>
            <div className="impact-stat">
              <span className="impact-num">30–50</span>
              <span className="impact-label">Individuals Trained</span>
            </div>
          </div>
          <p className="impact-tagline">
            Focused implementation. Measurable outcomes. Designed for scale.
          </p>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="cta-section">
        <div className="container">
          <h2>Partner With SANKALPAM</h2>
          <p>We are not building programs. We are building systems that last.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn-orange btn-lg">Partner With Us</Link>
            <Link to="/contact" className="btn-outline-white btn-lg">Volunteer</Link>
            <Link to="/contact" className="btn-outline-white btn-lg">Collaborate</Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER STATEMENT ── */}
      <section className="closing-section">
        <div className="container">
          <p className="closing-label">Our Purpose</p>
          <h2 className="closing-headline">
            Not just an organization.<br />
            <span>A movement.</span>
          </h2>
          <p className="closing-body">
            Bringing mental and holistic wellbeing to every community
            that needs it most.
          </p>
          <div className="closing-pills">
            <div className="closing-pill">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z"/></svg>
              <span>Starting from Andhra Pradesh</span>
            </div>
            <div className="closing-pill">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              <span>Expanding across India</span>
            </div>
            <div className="closing-pill">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              <span>Driven by intent. Measured by impact.</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
