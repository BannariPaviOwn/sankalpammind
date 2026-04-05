import { Link } from 'react-router-dom';
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
  {
    title: 'Increased Awareness & Help-Seeking',
    desc: 'Communities become more informed about mental wellbeing, leading to earlier and more confident help-seeking behavior.',
    icon: '💡',
  },
  {
    title: 'Improved Emotional Wellbeing',
    desc: 'Students, families, and individuals develop stronger emotional regulation and coping capacities.',
    icon: '💚',
  },
  {
    title: 'Strengthened Support Systems',
    desc: 'Local volunteers, teachers, and caregivers are equipped to provide first-level emotional support.',
    icon: '🤝',
  },
  {
    title: 'Enhanced Resilience Across Populations',
    desc: 'Trauma preparedness and crisis-readiness reduce the long-term impact of distressing events.',
    icon: '🛡️',
  },
];

const systemImpact = [
  {
    title: 'Wellbeing in Everyday Conversations',
    desc: 'Mental health becomes a normal, destigmatized part of community dialogue — not confined to clinical settings.',
    icon: '💬',
  },
  {
    title: 'Stronger Local Support Networks',
    desc: 'Trained community members form the first layer of care, reducing dependency on centralized services.',
    icon: '🌐',
  },
  {
    title: 'Reduced Reliance on External Services',
    desc: 'Empowered communities can identify, respond, and support wellbeing locally before crises escalate.',
    icon: '🏡',
  },
];

const measurementData = {
  quantitative: [
    'Total individuals reached across initiatives',
    'Number of sessions and workshops conducted',
    'Training programs and participants',
    'Screening camps and referrals processed',
  ],
  qualitative: [
    'Pre- and post-intervention assessments',
    'Participant feedback and satisfaction surveys',
    'In-depth case studies and narrative analysis',
  ],
};

const learningItems = [
  'Program refinement based on evidence and feedback',
  'Strengthening delivery systems and training quality',
  'Evidence-based scaling to new regions and populations',
];

export default function Impact() {
  return (
    <div className="imp-page">
      <section className="imp-hero">
        <div className="imp-hero-inner">
          <span className="imp-hero-badge">Impact & Outcomes</span>
          <h1>From Action to Measurable Change</h1>
          <p>
            Tracking real progress — from pilot-phase targets to long-term
            systemic transformation in mental wellbeing.
          </p>
        </div>
      </section>

      {/* Pilot Phase Targets */}
      <section className="imp-stats-section">
        <div className="imp-section-inner">
          <span className="imp-section-tag">Pilot Phase</span>
          <h2>Pilot Phase Targets (AY 2026–27)</h2>
          <p className="imp-section-sub">
            Our first-year goals establish the foundation for sustainable,
            evidence-based mental wellbeing programs.
          </p>
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
          <h2>Key Outcomes We're Working Toward</h2>
          <div className="imp-outcomes-grid">
            {keyOutcomes.map((outcome, i) => (
              <div key={i} className="imp-outcome-card">
                <span className="imp-outcome-icon">{outcome.icon}</span>
                <h3>{outcome.title}</h3>
                <p>{outcome.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System-Level Impact */}
      <section className="imp-system-section">
        <div className="imp-section-inner">
          <h2>System-Level Impact</h2>
          <p className="imp-section-sub">
            Beyond individual outcomes — creating lasting change in how
            communities understand, support, and sustain mental wellbeing.
          </p>
          <div className="imp-system-grid">
            {systemImpact.map((item, i) => (
              <div key={i} className="imp-system-card">
                <span className="imp-system-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
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
