import { Link } from 'react-router-dom';
import { ASSETS } from '../assets';
import './Impact.css';

interface StatCard {
  value: string;
  label: string;
  icon: string;
}

const pilotStats: StatCard[] = [
  { value: '1,000–1,500', label: 'Individuals Reached', icon: '👥' },
  { value: '500–700', label: 'Students Supported', icon: '🎓' },
  { value: '5–7', label: 'Schools Engaged', icon: '🏫' },
  { value: '200–300', label: 'Individuals Screened', icon: '🩺' },
  { value: '30–50', label: 'Individuals Trained', icon: '📋' },
];

const keyOutcomes = [
  'Increased awareness and help-seeking',
  'Improved emotional wellbeing',
  'Strengthened support systems',
  'Enhanced resilience across populations',
];

const systemImpact = [
  'Wellbeing becomes part of everyday conversations',
  'Stronger local support networks',
  'Reduced reliance on external services',
];

const measurementData = {
  quantitative: [
    'Reach, sessions, trainings, screenings',
  ],
  qualitative: [
    'Pre–post assessments',
    'Participant feedback',
    'Case studies',
  ],
};

const learningItems = [
  'Program refinement',
  'Strengthening delivery systems',
  'Evidence-based scaling',
];

const impactPhotos = [...ASSETS.impactPagePhotos];

export default function Impact() {
  return (
    <div className="imp-page">
      <section className="imp-hero">
        <div className="imp-hero-inner">
          <span className="imp-hero-badge">Impact & Outcomes</span>
          <h1>From Action to Measurable Change</h1>
          <p>
            SANKALPAM focuses on delivering clear, measurable, and sustainable
            outcomes.
          </p>
        </div>
      </section>

      <section className="imp-photos" aria-label="Impact photos">
        <div className="imp-section-inner">
          <div className="imp-photo-grid">
            {impactPhotos.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`Community wellbeing and impact — photo ${i + 1}`}
                loading="lazy"
                className={`imp-photo imp-photo--${i}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pilot Phase Targets */}
      <section className="imp-stats-section">
        <div className="imp-section-inner">
          <span className="imp-section-tag">Pilot Phase</span>
          <h2>Pilot Phase Targets (AY 2026–27)</h2>
          <div className="imp-stats-grid">
            {pilotStats.map((stat, i) => (
              <div key={i} className="imp-stat-card">
                <span className="imp-stat-icon">{stat.icon}</span>
                <span className="imp-stat-value">{stat.value}</span>
                <span className="imp-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Outcomes */}
      <section className="imp-outcomes-section">
        <div className="imp-section-inner">
          <h2>Key Outcomes</h2>
          <ul className="imp-bullets">
            {keyOutcomes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* System-Level Impact */}
      <section className="imp-system-section">
        <div className="imp-section-inner">
          <h2>System-Level Impact</h2>
          <ul className="imp-bullets">
            {systemImpact.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* How We Measure Impact */}
      <section className="imp-measure-section">
        <div className="imp-section-inner">
          <h2>How We Measure Impact</h2>
          <p className="imp-section-sub">
            Rigorous, multi-method evaluation ensures that our programs create
            meaningful, verifiable change.
          </p>
          <div className="imp-measure-grid">
            <div className="imp-measure-card imp-measure-card--quant">
              <div className="imp-measure-header">
                <span className="imp-measure-icon">📊</span>
                <h3>Quantitative</h3>
              </div>
              <ul className="imp-measure-list">
                {measurementData.quantitative.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="imp-measure-card imp-measure-card--qual">
              <div className="imp-measure-header">
                <span className="imp-measure-icon">📝</span>
                <h3>Qualitative</h3>
              </div>
              <ul className="imp-measure-list">
                {measurementData.qualitative.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Learning & Improvement */}
      <section className="imp-learning-section">
        <div className="imp-section-inner">
          <div className="imp-learning-card">
            <h2>Learning & Improvement</h2>
            <p>
              The pilot phase serves as a foundation for continuous refinement.
              Every data point and participant story shapes how we grow, adapt,
              and scale our initiatives.
            </p>
            <div className="imp-learning-items">
              {learningItems.map((item, i) => (
                <div key={i} className="imp-learning-item">
                  <span className="imp-learning-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="imp-learning-text">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="imp-cta">
        <div className="imp-cta-inner">
          <h2>Be Part of the Change</h2>
          <p>
            Your support accelerates our impact — from pilot to scale, from
            awareness to lasting wellbeing.
          </p>
          <div className="imp-cta-btns">
            <Link to="/donate" className="imp-btn imp-btn--primary">
              Donate Now
            </Link>
            <Link to="/initiatives" className="imp-btn imp-btn--outline">
              Explore Initiatives
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
