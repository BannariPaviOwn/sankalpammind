import { Link } from 'react-router-dom';
import { ASSETS } from '../assets';
import './CSRPartnerships.css';

const whoWeWorkWith = [
  'Government & district administration',
  'CSR and corporate organizations',
  'Schools & educational institutions',
  'Healthcare providers',
  'NGOs & community organizations',
];

const partnershipModels = [
  'District-level implementation',
  'School mental health programs',
  'Community outreach models',
  'Training & capacity building',
];

const valueForPartners = [
  'Measurable social impact',
  'Scalable models',
  'Alignment with ESG & SDG goals',
  'Transparent reporting',
];

const whatWeOffer = [
  'Program design & implementation',
  'Monitoring & evaluation frameworks',
  'Capacity building modules',
  'Advisory & consulting',
];

const complianceItems = [
  'Utilization reports',
  'Impact reports',
  'Documentation & case insights',
];

const partnerPhotos = [
  ASSETS.home.ourWork,
  ASSETS.initiatives.programsAction,
  ASSETS.getInvolved.partners,
];

export default function CSRPartnerships() {
  return (
    <div className="csr-page">
      <section className="csr-hero">
        <h1>Partner With Purpose</h1>
        <p>
          SANKALPAM collaborates with institutions to design and implement
          scalable wellbeing systems.
        </p>
      </section>

      <section className="csr-photos" aria-label="Partnership photos">
        <div className="csr-section csr-section--photos">
          <div className="csr-photo-grid">
            {partnerPhotos.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={i === 0 ? 'Community outreach' : 'Partnership activity'}
                loading="lazy"
                className={`csr-photo csr-photo--${i}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="csr-section">
        <h2 className="csr-section-title">Who We Work With</h2>
        <ul className="csr-bullets">
          {whoWeWorkWith.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Partnership Models */}
      <section className="csr-section csr-section--alt">
        <div className="csr-section" style={{ padding: 0 }}>
          <h2 className="csr-section-title">Partnership Models</h2>
          <ul className="csr-bullets">
            {partnershipModels.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Value for Partners */}
      <section className="csr-section">
        <h2 className="csr-section-title">Value for Partners</h2>
        <ul className="csr-bullets">
          {valueForPartners.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {/* What We Offer */}
      <section className="csr-section csr-section--alt">
        <div className="csr-section" style={{ padding: 0 }}>
          <h2 className="csr-section-title">What We Offer</h2>
          <ul className="csr-bullets">
            {whatWeOffer.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Compliance & Reporting */}
      <section className="csr-section">
        <h2 className="csr-section-title">Compliance & Reporting</h2>
        <ul className="csr-list">
          {complianceItems.map((label) => (
            <li key={label}>
              <span className="csr-list-bullet" />
              {label}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="csr-cta">
        <h2>Partner with us to build sustainable wellbeing systems</h2>
        <p>
          👉 Partner with us to build sustainable wellbeing systems
        </p>
        <Link to="/contact" className="csr-cta-btn">
          Get In Touch
        </Link>
      </section>
    </div>
  );
}
