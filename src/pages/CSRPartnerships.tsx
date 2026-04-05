import { Link } from 'react-router-dom';
import './CSRPartnerships.css';

const whoWeWorkWith = [
  { icon: '🏛️', title: 'Government & District Administration', desc: 'Collaborating with local and state-level bodies for district-wide mental health implementation.' },
  { icon: '🏢', title: 'CSR & Corporate Organizations', desc: 'Partnering with corporates to align social responsibility with mental wellbeing outcomes.' },
  { icon: '🏫', title: 'Schools & Educational Institutions', desc: 'Embedding mental health awareness and psycho-social support within school ecosystems.' },
  { icon: '🏥', title: 'Healthcare Providers', desc: 'Integrating mental health into primary and community healthcare delivery systems.' },
  { icon: '🤝', title: 'NGOs & Community Organizations', desc: 'Building grassroots partnerships for sustainable community-based mental health programs.' },
];

const partnershipModels = [
  { icon: '📍', title: 'District-Level Implementation', desc: 'Scalable models deployed across entire districts with measurable outcomes.' },
  { icon: '📚', title: 'School Mental Health Programs', desc: 'Structured programs for students, teachers, and parents focused on emotional resilience.' },
  { icon: '🌾', title: 'Community Outreach Models', desc: 'Grassroots engagement through awareness camps, PFA training, and support groups.' },
  { icon: '🎓', title: 'Training & Capacity Building', desc: 'Equipping frontline workers, educators, and volunteers with mental health skills.' },
];

const valueForPartners = [
  { icon: '📊', title: 'Measurable Social Impact', desc: 'Data-driven outcomes with clear indicators of community wellbeing improvement.' },
  { icon: '🔄', title: 'Scalable Models', desc: 'Programs designed for replication and scaling across geographies and demographics.' },
  { icon: '🎯', title: 'Alignment with ESG & SDG Goals', desc: 'Programs mapped to UN SDG 3 (Good Health) and ESG frameworks for responsible investment.' },
  { icon: '📋', title: 'Transparent Reporting', desc: 'Regular utilization, impact, and documentation reports shared with all stakeholders.' },
];

const whatWeOffer = [
  { icon: '🛠️', title: 'Program Design & Implementation', desc: 'End-to-end design, planning, and execution of mental health and wellbeing programs.' },
  { icon: '📈', title: 'Monitoring & Evaluation Frameworks', desc: 'Robust M&E systems to track progress, measure impact, and ensure accountability.' },
  { icon: '🧩', title: 'Capacity Building Modules', desc: 'Customized training modules for organizations, teams, and community groups.' },
  { icon: '💡', title: 'Advisory & Consulting', desc: 'Expert guidance on mental health strategy, policy integration, and program sustainability.' },
];

const complianceItems = [
  { icon: '📄', label: 'Utilization Reports' },
  { icon: '📊', label: 'Impact Reports' },
  { icon: '📁', label: 'Documentation & Case Insights' },
];

export default function CSRPartnerships() {
  return (
    <div className="csr-page">
      <section className="csr-hero">
        <h1>Partner With Purpose</h1>
        <p>
          SANKALPAM collaborates with institutions to design and implement scalable
          wellbeing systems that create lasting impact in communities.
        </p>
      </section>

      {/* Who We Work With */}
      <section className="csr-section">
        <h2 className="csr-section-title">Who We Work With</h2>
        <p className="csr-section-subtitle">
          We engage with a wide range of stakeholders committed to building healthier communities.
        </p>
        <div className="csr-cards">
          {whoWeWorkWith.map((item) => (
            <div key={item.title} className="csr-card csr-card--purple">
              <div className="csr-card-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partnership Models */}
      <section className="csr-section csr-section--alt">
        <div className="csr-section" style={{ padding: 0 }}>
          <h2 className="csr-section-title">Partnership Models</h2>
          <p className="csr-section-subtitle">
            Flexible engagement models tailored to your organization's goals and community needs.
          </p>
          <div className="csr-cards">
            {partnershipModels.map((item) => (
              <div key={item.title} className="csr-card csr-card--orange">
                <div className="csr-card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value for Partners */}
      <section className="csr-section">
        <h2 className="csr-section-title">Value for Partners</h2>
        <p className="csr-section-subtitle">
          Our programs are designed to deliver real, measurable value aligned with global standards.
        </p>
        <div className="csr-cards">
          {valueForPartners.map((item) => (
            <div key={item.title} className="csr-card csr-card--purple">
              <div className="csr-card-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What We Offer */}
      <section className="csr-section csr-section--alt">
        <div className="csr-section" style={{ padding: 0 }}>
          <h2 className="csr-section-title">What We Offer</h2>
          <p className="csr-section-subtitle">
            Comprehensive support from conceptualization to execution and beyond.
          </p>
          <div className="csr-cards">
            {whatWeOffer.map((item) => (
              <div key={item.title} className="csr-card csr-card--orange">
                <div className="csr-card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Reporting */}
      <section className="csr-section">
        <h2 className="csr-section-title">Compliance & Reporting</h2>
        <p className="csr-section-subtitle">
          We ensure full transparency with structured reporting for every engagement.
        </p>
        <ul className="csr-list">
          {complianceItems.map((item) => (
            <li key={item.label}>
              <span className="csr-list-bullet" />
              {item.icon} {item.label}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="csr-cta">
        <h2>Partner with us to build sustainable wellbeing systems</h2>
        <p>
          Let's collaborate to create mental health programs that are scalable,
          measurable, and rooted in community care.
        </p>
        <Link to="/contact" className="csr-cta-btn">
          Get In Touch
        </Link>
      </section>
    </div>
  );
}
