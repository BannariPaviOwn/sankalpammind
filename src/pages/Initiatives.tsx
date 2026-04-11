import { Link } from 'react-router-dom';
import { ASSETS } from '../assets';
import './Initiatives.css';

interface Intervention {
  text: string;
}

interface InitiativeGalleryItem {
  src: string;
  alt: string;
}

interface Initiative {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  interventions: Intervention[];
  reaches?: string[];
  outcomes: string[];
  image?: string;
  imageAlt?: string;
  /** Multiple photos in the initiative header (e.g. MANORAKSHA) */
  gallery?: InitiativeGalleryItem[];
  specialFocus?: {
    title: string;
    description: string;
    items: string[];
    focusHighlight?: string;
  };
  icon: string;
}

const initiatives: Initiative[] = [
  {
    id: 'manodaya',
    number: '1',
    title: 'MANODAYA',
    tagline: 'Community Wellbeing',
    description:
      'Bringing mental wellbeing into everyday life. MANODAYA focuses on strengthening awareness and support systems within rural and semi-urban populations where access remains limited.',
    interventions: [
      { text: 'Awareness sessions and group engagement' },
      { text: 'Family wellbeing education' },
      { text: 'Support circles and guided discussions' },
      { text: 'Workplace and informal sector outreach' },
    ],
    reaches: [
      'Communities, families, and caregivers',
      'Informal workforce groups',
      'Local leaders and volunteers',
    ],
    outcomes: [
      'Increased awareness and reduced stigma',
      'Improved help-seeking behavior',
      'Strengthened local support systems',
    ],
    gallery: ASSETS.initiatives.manodayaGallery.map((src, i) => ({
      src,
      alt: `MANODAYA — community wellbeing and outreach (${i + 1} of 2)`,
    })),
    icon: '🌱',
  },
  {
    id: 'manoshiksha',
    number: '2',
    title: 'MANOSHIKSHA',
    tagline: 'School & Youth Mental Health',
    description:
      'Building emotional resilience within education systems. MANOSHIKSHA works with schools to create supportive environments for students, teachers, and families.',
    interventions: [
      { text: 'School mental health programs' },
      { text: 'Emotional intelligence and life skills training' },
      { text: 'Academic stress support' },
      { text: 'Teacher and parent sensitization' },
    ],
    reaches: [
      'Students, teachers, and school staff',
      'Parents and caregivers',
    ],
    outcomes: [
      'Improved emotional regulation among students',
      'Reduced stress and anxiety indicators',
      'Increased teacher capacity to identify concerns',
    ],
    gallery: ASSETS.initiatives.manoshikshaGallery.map((src, i) => ({
      src,
      alt: `MANOSHIKSHA — school and youth mental health (${i + 1} of 3)`,
    })),
    specialFocus: {
      title: 'Special Focus: Inclusive Development (Pilot)',
      description:
        'Supporting children with developmental and learning needs through:',
      items: [
        'Individualized learning support',
        'Therapy and skill-building interventions',
        'Parent training and counselling',
      ],
      focusHighlight:
        '👉 Focus: Early intervention and inclusive development',
    },
    icon: '📚',
  },
  {
    id: 'manoraksha',
    number: '3',
    title: 'MANORAKSHA',
    tagline: 'Trauma Preparedness & Support',
    description:
      'Strengthening readiness to respond during distress. MANORAKSHA equips individuals and institutions to manage emotional challenges during crises and emergencies.',
    interventions: [
      { text: 'Trauma awareness programs' },
      { text: 'Psychological First Aid (PFA) training' },
      { text: 'Crisis support and counselling' },
      { text: 'Resilience-building sessions' },
    ],
    reaches: [
      'Community members and volunteers',
      'Teachers and frontline workers',
    ],
    outcomes: [
      'Increased preparedness',
      'Faster emotional stabilization',
      'Reduced long-term trauma impact',
    ],
    gallery: ASSETS.initiatives.manorakshaGallery.map((src, i, arr) => ({
      src,
      alt: `MANORAKSHA — trauma preparedness and community support (${i + 1} of ${arr.length})`,
    })),
    icon: '🛡️',
  },
];

const initiativesPagePhotos = ASSETS.initiatives.inititativesGallery;

export default function Initiatives() {
  return (
    <div className="ini-page">
      <section className="ini-hero">
        <div className="ini-hero-inner">
          <span className="ini-hero-badge">Our Work</span>
          <h1>Our Flagship Initiatives</h1>
          <p>
            SANKALPAM operates through a set of structured initiatives designed
            to address key dimensions of mental health and wellbeing across
            communities, schools, and crisis contexts.
          </p>
        </div>
      </section>

      {initiativesPagePhotos.length > 0 && (
        <section
          className="ini-page-photos"
          aria-labelledby="ini-page-photos-heading"
        >
          <div className="ini-page-photos-inner">
            <h2 id="ini-page-photos-heading" className="ini-page-photos-title">
              Initiatives in action
            </h2>
            <p className="ini-page-photos-lead">
              Snapshots from programmes across communities, schools, and crisis
              readiness work.
            </p>
            <div className="ini-page-photos-grid" role="list">
              {initiativesPagePhotos.map((src, i) => (
                <figure
                  key={src}
                  className="ini-page-photos-card"
                  role="listitem"
                >
                  <div className="ini-page-photos-frame">
                    <img
                      src={src}
                      alt={`SANKALPAM flagship initiatives — programme moment (${i + 1} of ${initiativesPagePhotos.length})`}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {initiatives.map((ini, idx) => (
        <section
          key={ini.id}
          className={`ini-block ${idx % 2 === 1 ? 'ini-block--alt' : ''}`}
        >
          <div className="ini-block-inner">
            <div className={`ini-block-header ini-block-header--${ini.id}`}>
              <span className="ini-number">{ini.number}.</span>
              <div className={`ini-icon ini-icon--${ini.id}`}>{ini.icon}</div>
              <h2 className="ini-title">{ini.title}</h2>
              <span className="ini-tagline">— {ini.tagline}</span>
              {ini.gallery && ini.gallery.length > 0 ? (
                <div
                  className={`ini-photo-grid ini-photo-grid--${ini.id}`}
                >
                  {ini.gallery.map((item) => (
                    <div
                      key={item.src}
                      className={`ini-photo ini-photo--${ini.id}`}
                    >
                      <img
                        src={item.src}
                        alt={item.alt}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                ini.image && (
                  <div className={`ini-photo ini-photo--${ini.id}`}>
                    <img
                      src={ini.image}
                      alt={ini.imageAlt ?? ''}
                      loading="lazy"
                    />
                  </div>
                )
              )}
              <div
                className={`ini-block-motif ini-block-motif--${ini.id}`}
                aria-hidden="true"
              />
            </div>

            <div className="ini-block-body">
              <p className="ini-desc">{ini.description}</p>

              <div className="ini-columns">
                <div className="ini-col">
                  <h3>Key Interventions</h3>
                  <ul className="ini-list ini-list--interventions">
                    {ini.interventions.map((item, i) => (
                      <li key={i}>{item.text}</li>
                    ))}
                  </ul>
                </div>

                {ini.reaches && (
                  <div className="ini-col">
                    <h3>Who It Reaches</h3>
                    <ul className="ini-list ini-list--reaches">
                      {ini.reaches.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="ini-col">
                  <h3>Expected Outcomes</h3>
                  <ul className="ini-list ini-list--outcomes">
                    {ini.outcomes.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {ini.specialFocus && (
                <div className="ini-special">
                  <h4>{ini.specialFocus.title}</h4>
                  <p>{ini.specialFocus.description}</p>
                  <ul className="ini-list ini-list--special">
                    {ini.specialFocus.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  {ini.specialFocus.focusHighlight && (
                    <p className="ini-special__focus">
                      {ini.specialFocus.focusHighlight}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      <section className="ini-connected">
        <div className="ini-connected-inner">
          <h2>How These Initiatives Work Together</h2>
          <p>
            Each initiative addresses a distinct need while functioning as part
            of a unified system:
          </p>
          <ul className="ini-together-list">
            <li>
              <strong>MANODAYA</strong> builds awareness and engagement
            </li>
            <li>
              <strong>MANOSHIKSHA</strong> enables early support in schools
            </li>
            <li>
              <strong>MANORAKSHA</strong> strengthens crisis preparedness and
              psychological support
            </li>
          </ul>
          <p className="ini-connected__closing">
            Together, they create a continuous and connected approach to
            wellbeing.
          </p>
        </div>
      </section>

      <section className="ini-cta">
        <div className="ini-cta-inner">
          <h2>Ready to Make a Difference?</h2>
          <p>
            Support our initiatives or volunteer your time — every action
            strengthens the ecosystem of care.
          </p>
          <div className="ini-cta-btns">
            <Link to="/get-involved" className="ini-btn ini-btn--primary">
              Get Involved
            </Link>
            <Link to="/impact" className="ini-btn ini-btn--outline">
              See Our Impact
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
