import { ASSETS } from '../assets';
import './Leadership.css';

const boardOfTrustees = [
  {
    name: 'Mr. Divakar Babu',
    title: 'Managing Director',
    role: 'Leads strategic planning and organizational architecture. His focus on sustainable growth ensures SANKALPAM\'s initiatives are both impactful and enduring.',
  },
  {
    name: 'Mr. Sai Raghu Prasad',
    title: 'Holistic Health',
    role: 'An expert in holistic health, he bridges the gap between modern clinical models and traditional wellness practices, ensuring a balanced approach to healing.',
  },
];

const advisoryBoard = [
  {
    name: 'Dr. Balagurunath',
    tag: 'SENIOR CONSULTANT',
    desc: 'Expert in Public Health systems with Evidence-Based Strategies.',
    accent: '#7044C4',
  },
  {
    name: 'Dr. Mayur',
    tag: 'CLINICAL SPECIALIST',
    desc: 'Advances in behavioural sciences and Psychometric Administration.',
    accent: '#2563eb',
  },
  {
    name: 'Dr. Sowmya',
    tag: 'PREVENTIVE WELLNESS',
    desc: 'Specialist in child development and early intervention Practices.',
    accent: '#0d9488',
  },
  {
    name: 'Dr. Chandra Teja',
    tag: 'OPERATIONAL HEALTH',
    desc: 'Expert in Rural Medical Expert and Emergency Response System.',
    accent: '#e84c3d',
  },
];

const governanceItems = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Transparency First',
    desc: 'Financial audit trails and real-time project tracking ensure that every rupee spent is accounted for and impactful.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>
      </svg>
    ),
    title: 'Accountability Structures',
    desc: 'Internal review boards oversee programme compliance, integrity, and clinical standards in all field operations.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Data-Driven Integrity',
    desc: 'Rigorous impact monitoring allows us to pivot strategies based on evidence, establishing clinical standards.',
  },
];

export default function Leadership() {
  return (
    <div className="leadership-page">
      {/* Hero - Split Layout */}
      <section className="lead-hero">
        <div className="lead-hero-inner">
          <div className="lead-hero-text">
            <span className="lead-hero-badge">LEADERSHIP & GOVERNANCE</span>
            <h1>
              Guided by<br />
              Expertise,<br />
              Driven by<br />
              Impact.
            </h1>
            <p>
              SANKALPAM is built on a foundation of clinical excellence,
              field experience, and systems thinking. Our leadership
              ensures every initiative is rooted in evidence-based
              practices and compassionate delivery.
            </p>
          </div>
          <div className="lead-hero-visual">
            <div className="lead-hero-img-wrap">
              <img
                src={ASSETS.home.aboutSankalpam}
                alt="SANKALPAM"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
              <div className="lead-hero-logo-overlay">
                <img src="/assets/logo.png" alt="SANKALPAM Logo" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder - A Legacy of Clinical Compassion */}
      <section className="lead-founder">
        <div className="lead-founder-inner">
          <h2 className="lead-founder-title">A Legacy of Clinical Compassion</h2>
          <div className="lead-founder-grid">
            <div className="lead-founder-photo-col">
              <div className="lead-founder-photo-wrap">
                <img src={ASSETS.about.founder2} alt="Dr. Sahithyaa Raghu" />
              </div>
              <div className="lead-founder-name-block">
                <h3>Dr. Sahithyaa Raghu</h3>
                <p>Founder & Managing Trustee</p>
              </div>
            </div>
            <div className="lead-founder-info-col">
              <p className="lead-founder-bio">
                With over 17 years of extensive experience in mental health and community
                development, Dr. Sahithyaa Raghu is an RCI-Licensed Psychologist dedicated to
                systemic change. Her journey is defined by a deep-rooted commitment to rehabilitative
                sciences and social welfare.
              </p>
              <div className="lead-founder-credentials">
                <div className="lead-cred-column">
                  <h4>Academic Excellence</h4>
                  <ul>
                    <li>Doctorate in Psychology</li>
                    <li>Master of Business Administration (MBA)</li>
                    <li>Bachelor of Laws (LLB)</li>
                    <li>Criminology Therapy Research & TDS</li>
                  </ul>
                </div>
                <div className="lead-cred-column">
                  <h4>Recognitions</h4>
                  <ul>
                    <li>Excellence in Social Work Award (2021)</li>
                    <li>Healthcare Leadership Catalyst Award</li>
                    <li>Published Researcher in Clinical Journals</li>
                  </ul>
                </div>
              </div>
              <p className="lead-founder-vision">
                Her vision for SANKALPAM transcends traditional charity, focusing instead on "systemic
                thinking" — developing sustainable frameworks that address the root causes of health
                and social disparities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Trustees */}
      <section className="lead-board">
        <div className="lead-board-inner">
          <h2 className="lead-board-title">
            Board of <span className="lead-underline">Trustees</span>
          </h2>
          <div className="lead-board-grid">
            {boardOfTrustees.map((member) => (
              <div key={member.name} className="lead-board-card">
                <div className="lead-board-avatar">
                  <span>{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <div className="lead-board-info">
                  <h3>{member.name}</h3>
                  <span className="lead-board-member-title">{member.title}</span>
                  <p>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="lead-advisory">
        <div className="lead-advisory-inner">
          <div className="lead-advisory-header">
            <h2>Advisory Board</h2>
            <p className="lead-advisory-sub">The scientific pillars of our organization</p>
          </div>
          <div className="lead-advisory-grid">
            {advisoryBoard.map((member) => (
              <div
                key={member.name}
                className="lead-advisory-card"
                style={{ '--card-accent': member.accent } as React.CSSProperties}
              >
                  <div className="lead-advisory-accent" />
                <h3>{member.name}</h3>
                <span className="lead-advisory-tag">{member.tag}</span>
                <p>{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance + Registration */}
      <section className="lead-governance">
        <div className="lead-governance-inner">
          <div className="lead-governance-left">
            <h2>Governance Framework</h2>
            <div className="lead-gov-items">
              {governanceItems.map((item) => (
                <div key={item.title} className="lead-gov-item">
                  <div className="lead-gov-icon">{item.icon}</div>
                  <div className="lead-gov-text">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lead-governance-right">
            <div className="lead-reg-card">
              <h3>Registration & Compliance</h3>
              <div className="lead-reg-badges">
                <div className="lead-reg-badge">
                  <span className="lead-reg-label">TRUST REGISTRATION</span>
                  <strong>Registered Trust</strong>
                </div>
                <div className="lead-reg-badge">
                  <span className="lead-reg-label">TAX STATUS</span>
                  <strong>PAN Verified</strong>
                </div>
                <div className="lead-reg-badge">
                  <span className="lead-reg-label">TAX EXEMPTION</span>
                  <strong>12A & 80G Certified</strong>
                </div>
                <div className="lead-reg-badge">
                  <span className="lead-reg-label">INTEGRITY</span>
                  <strong>MCA Compliant</strong>
                </div>
              </div>
              <a href="#" className="lead-reg-download">
                Download Annual Report 2025
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
