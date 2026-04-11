import { useState } from 'react';
import { Link } from 'react-router-dom';
import './OurModel.css';

/** Place `model.jpeg` in `public/assets/model/model.jpeg` */
const MODEL_DIAGRAM_SRC = '/assets/model/model.jpeg';

const pillars = [
  {
    num: 1,
    icon: '📢',
    title: 'Preventive Awareness',
    subtitle:
      'Building informed environments through awareness and education',
    outcome: 'Reduced stigma and increased openness',
  },
  {
    num: 2,
    icon: '🔍',
    title: 'Early Identification',
    subtitle:
      'Recognizing emotional, psychological, and developmental concerns at the right stage',
    outcome: 'Early detection and timely intervention',
  },
  {
    num: 3,
    icon: '🤝',
    title: 'Support Systems',
    subtitle:
      'Providing structured pathways for counselling and psychosocial care',
    outcome: 'Reduced distress and improved coping',
  },
  {
    num: 4,
    icon: '🌱',
    title: 'Capacity Building',
    subtitle:
      'Strengthening local ecosystems through training and engagement',
    outcome: 'Sustainability and local ownership',
  },
];

const continuum = [
  'Awareness',
  'Identification',
  'Support',
  'Capacity Building',
  'Resilience',
];

const ecosystem = [
  { icon: '🏘️', title: 'Community', desc: 'Awareness and outreach' },
  { icon: '🏫', title: 'Institutional', desc: 'Schools and organizations' },
  { icon: '👩‍⚕️', title: 'Professional', desc: 'Counsellors and specialists' },
  { icon: '🏛️', title: 'System', desc: 'Alignment with government frameworks' },
];

const scalePath = [
  'Village',
  'Cluster',
  'District',
  'Multi-District',
  'State',
  'National',
];

const enablers = [
  { icon: '🧩', label: 'Modular and adaptable design' },
  { icon: '💡', label: 'Cost-effective implementation' },
  { icon: '👥', label: 'Train-the-trainer approach' },
  { icon: '🔗', label: 'Integration with public systems' },
];

const priorities = [
  { icon: '🏥', label: 'Public health systems' },
  { icon: '🎓', label: 'School and youth wellbeing' },
  { icon: '🌿', label: 'Community development' },
  { icon: '🛡️', label: 'Disaster preparedness' },
];

export default function OurModel() {
  const [modelDiagramVisible, setModelDiagramVisible] = useState(true);

  return (
    <div className="model-page">
      {/* ── Hero ── */}
      <section className="model-hero">
        <h1>Sankalpam Samagra Wellness Model</h1>
        <p>
          An integrated, four-pillar framework for early action, structured
          support, and sustainable wellbeing.
        </p>
      </section>

      {/* ── Model diagram: public/assets/model/model.jpeg ── */}
      {modelDiagramVisible && (
        <section
          className="model-section model-section--diagram"
          aria-labelledby="model-diagram-heading"
        >
          <div className="model-section__inner">
            <h2 id="model-diagram-heading" className="model-section__title">
              Model at a glance
            </h2>
            <p className="model-diagram__intro">
              Visual overview of the Sankalpam Samagra Wellness Model framework.
            </p>
            <figure className="model-diagram-card">
              <div className="model-diagram-card__frame">
                <img
                  src={MODEL_DIAGRAM_SRC}
                  alt="Sankalpam Samagra Wellness Model diagram"
                  loading="lazy"
                  decoding="async"
                  onError={() => setModelDiagramVisible(false)}
                />
              </div>
            </figure>
          </div>
        </section>
      )}

      {/* ── Overview ── */}
      <section
        className="model-section"
        aria-labelledby="model-overview-heading"
      >
        <div className="model-section__inner model-overview">
          <h2 id="model-overview-heading" className="model-sr-only">
            Model overview
          </h2>
          <p>
            The Sankalpam Samagra Wellness Model is a comprehensive framework
            designed to address mental health across the full continuum—from
            awareness and early identification to structured support and
            long-term resilience.
          </p>
          <p>
            It integrates mental health, physical wellbeing, and local
            engagement into a cohesive system that operates within everyday
            environments—ensuring support reaches individuals and families at the
            right time, before challenges escalate.
          </p>
        </div>
      </section>

      {/* ── Why This Model Matters ── */}
      <section className="model-section model-section--alt">
        <div className="model-section__inner model-matters">
          <h2 className="model-section__title">Why This Model Matters</h2>
          <p className="model-matters__lead">
            In many settings, mental health systems respond only after distress
            becomes severe.
          </p>
          <p className="model-matters__focus">
            This model shifts that approach by focusing on:
          </p>
          <ul className="model-matters__list">
            <li>
              Early-stage engagement rather than delayed intervention
            </li>
            <li>
              Locally embedded delivery instead of centralized access
            </li>
            <li>Structured pathways instead of fragmented support</li>
            <li>Capability building over long-term dependency</li>
          </ul>
          <p className="model-matters__closing">
            This enables consistent, sustainable impact rather than short-term or
            isolated efforts.
          </p>
        </div>
      </section>

      {/* ── Core Framework: Four Pillars ── */}
      <section className="model-section">
        <div className="model-section__inner">
          <h2 className="model-section__title">
            Core Framework: Four Pillars
          </h2>
          <div className="model-pillars-grid">
            {pillars.map((p) => (
              <div className="model-pillar-card" key={p.num}>
                <span className="model-pillar-card__number">{p.num}</span>
                <div className="model-pillar-card__icon">{p.icon}</div>
                <h3>{p.title}</h3>
                <p className="model-pillar-card__subtitle">{p.subtitle}</p>
                <span className="model-pillar-card__outcome">
                  👉 Outcome: {p.outcome}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Continuum of Care ── */}
      <section className="model-section model-section--purple">
        <div className="model-section__inner">
          <h2 className="model-section__title">Continuum of Care</h2>
          <div className="model-continuum">
            {continuum.map((step, i) => (
              <span
                key={step}
                className="model-continuum__item"
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <span className="model-continuum__step">{step}</span>
                {i < continuum.length - 1 && (
                  <span className="model-continuum__arrow">→</span>
                )}
              </span>
            ))}
          </div>
          <p className="model-continuum__note">
            A continuous cycle ensuring sustained wellbeing rather than one-time
            intervention.
          </p>
        </div>
      </section>

      {/* ── Implementation Ecosystem ── */}
      <section className="model-section model-section--dark">
        <div className="model-section__inner">
          <h2 className="model-section__title">Implementation Ecosystem</h2>
          <div className="model-ecosystem-grid">
            {ecosystem.map((e) => (
              <div className="model-ecosystem-card" key={e.title}>
                <span className="model-ecosystem-card__icon">{e.icon}</span>
                <h4>{e.title}</h4>
                <p>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Scalability Pathway ── */}
      <section className="model-section">
        <div className="model-section__inner">
          <h2 className="model-section__title">Scalability Pathway</h2>
          <div className="model-scale-path">
            {scalePath.map((node, i) => (
              <span
                key={node}
                className="model-scale-path__item"
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <span className="model-scale-path__node">{node}</span>
                {i < scalePath.length - 1 && (
                  <span className="model-scale-path__arrow">→</span>
                )}
              </span>
            ))}
          </div>
          <p className="model-scale-path__caption">
            Scaling from grassroots interventions to systemic impact
          </p>
        </div>
      </section>

      {/* ── What Enables Scale ── */}
      <section className="model-section model-section--alt">
        <div className="model-section__inner">
          <h2 className="model-section__title">What Enables Scale</h2>
          <div className="model-enables-grid">
            {enablers.map((e) => (
              <div className="model-enables-item" key={e.label}>
                <div className="model-enables-item__icon">{e.icon}</div>
                <h4>{e.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Alignment with National Priorities ── */}
      <section className="model-section model-section--purple">
        <div className="model-section__inner">
          <h2 className="model-section__title">
            Alignment with National Priorities
          </h2>
          <div className="model-priorities-grid">
            {priorities.map((p) => (
              <div className="model-priority-card" key={p.label}>
                <span className="model-priority-card__icon">{p.icon}</span>
                <h4>{p.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Outcome ── */}
      <section className="model-section model-section--dark">
        <div className="model-section__inner">
          <h2 className="model-section__title">Outcome</h2>
          <div className="model-outcomes-grid">
            <div className="model-outcome-card model-outcome-card--compact">
              <span className="model-outcome-card__icon">🛡️</span>
              <h4>Prevention before crisis</h4>
            </div>
            <div className="model-outcome-card model-outcome-card--compact">
              <span className="model-outcome-card__icon">⚙️</span>
              <h4>Systems over isolated interventions</h4>
            </div>
            <div className="model-outcome-card model-outcome-card--compact">
              <span className="model-outcome-card__icon">♻️</span>
              <h4>Sustainability over short-term outcomes</h4>
            </div>
          </div>
        </div>
      </section>

      {/* ── Closing ── */}
      <section className="model-closing">
        <p className="model-closing__text">
          The Sankalpam Samagra Wellness Model represents a shift from reactive
          care to proactive wellbeing—designed to create measurable, scalable,
          and lasting impact.
        </p>
        <Link to="/about" className="model-closing__link">
          Learn About Us →
        </Link>
      </section>
    </div>
  );
}
