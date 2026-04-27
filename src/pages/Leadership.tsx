import { ASSETS } from '../assets';
import './Leadership.css';

const founderWorkSpans = [
  'Children, adolescents, adults, and families',
  'Educational institutions and corporate systems',
  'Rural and community-based mental health programs',
  'Volunteering with multiple NGOs',
];

const professionalExposure = [
  '10+ certifications in mental health, therapeutic practices, and geriatric care.',
  'Clinical and research exposure with NIMHANS, Bengaluru',
  'Certified Parenting Coach',
  'Certified Trauma-Informed Practitioner (TISS – TTT)',
  'Experience across clinical, institutional, and community settings',
];

const recognitionBullets = [
  'Tamil Nadu State Human Rights Commission Award (2021)',
  'Recognized among the Top 100 Doctors in India (2024)',
  'Received 10+ recognitions for contributions to mental health and community wellbeing',
];

interface BoardMember {
  name: string;
  lines: string[];
  role: string;
  photo: string;
}

const boardMembers: BoardMember[] = [
  {
    name: 'Mr. Divakar Babu',
    lines: [
      'Trustee – SANKALPAM Mind & Wellness Foundation',
      'Managing Director, Sri Shiva Balaji Enterprises',
    ],
    role: 'Brings expertise in business leadership, strategic planning, and organizational management, supporting institutional growth and partnerships.',
    photo: ASSETS.leadership.trusteePhotos[0],
  },
  {
    name: 'Mr. Sai Raghu Prasad',
    lines: [
      'Trustee – SANKALPAM Mind & Wellness Foundation',
      'Naturopathist | Licensed Acupressure Therapist',
    ],
    role: 'Provides expertise in holistic and alternative health systems, supporting SANKALPAM’s integrated wellbeing approach.',
    photo: ASSETS.leadership.trusteePhotos[1],
  },
];

const advisoryBoard = [
  {
    name: 'Dr. Balagurunath',
    title: 'Founder & Principal – Vani Educational Society',
    desc: 'Supports educational program design and institutional collaboration.',
    accent: '#7044C4',
  },
  {
    name: 'Dr. Mayur',
    title: 'Neurologist, PES Hospital, Kuppam',
    desc: 'Provides clinical expertise in neurological and mental health integration.',
    accent: '#2563eb',
  },
  {
    name: 'Dr. Sowmya',
    title: 'Child Psychiatrist, PES Hospital, Kuppam',
    desc: 'Supports child and adolescent mental health and early intervention programs.',
    accent: '#0d9488',
  },
  {
    name: 'Dr. Chandra Teja',
    title: 'MBBS | Physician',
    desc: 'Supports integration of physical and mental health in outreach programs.',
    accent: '#e84c3d',
  },
];

const governanceKeyElements = [
  'Clearly defined roles and responsibilities',
  'Professional oversight of program implementation',
  'Ethical guidelines for counselling and outreach',
  'Financial accountability and compliance systems',
];

const accountabilityItems = [
  'Structured program planning and execution',
  'Periodic monitoring and evaluation',
  'Transparent reporting to partners and stakeholders',
  'Responsible and efficient use of resources',
];

const governancePhotos = ASSETS.leadership.governanceGallery;

export default function Leadership() {
  const awards = ASSETS.awards ?? [];

  return (
    <div className="leadership-page">
      <section className="lead-hero">
        <div className="lead-hero-inner">
          <div className="lead-hero-text">
            <span className="lead-hero-badge">7. LEADERSHIP &amp; GOVERNANCE</span>
            <h1>Leadership &amp; Governance</h1>
            <p>
              Leadership combines clinical expertise, field experience, and systems
              thinking to ensure scalable and ethical impact.
            </p>
            <p>
              SANKALPAM is led by professionals with deep experience in mental health,
              community systems, and institutional engagement, ensuring that all
              programs are ethically grounded, evidence-informed, and impact-driven.
            </p>
          </div>
          <div className="lead-hero-visual">
            <div className="lead-hero-img-wrap">
              <img
                src={ASSETS.leadership.pageHero}
                alt="Leadership and community engagement — SANKALPAM in action"
                loading="eager"
                decoding="async"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="lead-founder">
        <div className="lead-founder-inner">
          <h2 className="lead-founder-section-title">Founder &amp; Managing Trustee</h2>
          <div className="lead-founder-grid">
            <div className="lead-founder-photo-col">
              <div className="lead-founder-photo-wrap">
                <img src={ASSETS.about.founder2} alt="Dr. Sahithyaa Raghu" />
              </div>
              <div className="lead-founder-name-block">
                <h3>Dr. Sahithyaa Raghu</h3>
                <p className="lead-founder-credentials-line">
                  Psychologist | RCI-Licensed Early Intervention Therapist |
                  Trauma-Informed Practitioner | Psycho-Social Consultant | Mental
                  Health Advocate | Certified Parenting Expert | Trainer | Speaker
                </p>
              </div>
            </div>
            <div className="lead-founder-info-col">
              <p className="lead-founder-bio lead-founder-bio--lead">
                Dr. Sahithyaa Raghu brings over 17+ years of experience across diverse
                domains, including mental health practice, training, and community
                outreach.
              </p>
              <p className="lead-founder-subhead">Her work spans:</p>
              <ul className="lead-founder-list">
                {founderWorkSpans.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="lead-founder-bio">
                She integrates clinical expertise, preventive approaches, and systems
                thinking to build scalable and sustainable wellbeing models.
              </p>

              <h4 className="lead-founder-block-title">Academic &amp; Professional Background</h4>
              <p className="lead-founder-academic">
                Doctorate in Psychology | MSc Counselling &amp; Psychotherapy | Masters
                in Social work | MBA (HR) | LLB | B.Ed. | RCI-Licensed PG Dip in Early
                Intervention | PG Dip in Human Rights – (Women &amp; Child Rights) |
                Dip in Montessori |
              </p>

              <h4 className="lead-founder-block-title">Professional Exposure &amp; Training</h4>
              <ul className="lead-founder-list">
                {professionalExposure.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {governancePhotos.length > 0 && (
        <section
          className="lead-governance-gallery"
          aria-labelledby="lead-governance-gallery-heading"
        >
          <div className="lead-governance-gallery-inner">
            <header className="lead-governance-gallery-header">
              <p className="lead-governance-gallery-kicker">
                <span className="lead-governance-gallery-kicker-dot" aria-hidden="true" />
                On the ground
              </p>
              <h2 id="lead-governance-gallery-heading" className="lead-governance-gallery-title">
                Leadership &amp; Governance
                <span className="lead-governance-gallery-title-accent">In Action</span>
              </h2>
              <p className="lead-governance-gallery-lead">
                Programmes, community moments, and institutional work—real scenes
                from how SANKALPAM leads with care and clarity.
              </p>
            </header>
            <div
              className="lead-governance-gallery-masonry"
              role="list"
            >
              {governancePhotos.map((src, i) => (
                <figure
                  key={src}
                  className="lead-governance-gallery-card"
                  role="listitem"
                >
                  <div className="lead-governance-gallery-img-wrap">
                    <img
                      src={src}
                      alt={`SANKALPAM leadership and community engagement (${i + 1} of ${governancePhotos.length})`}
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

      <section className="lead-awards">
        <div className="lead-awards-inner">
          <div className="lead-awards-header">
            <h2>Recognitions &amp; Awards (Pictures)</h2>
            <ul className="lead-awards-intro-list">
              {recognitionBullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {awards.length > 0 && (
            <div className="lead-awards-grid">
              {awards.map((a) => (
                <figure key={a.image} className="lead-award-card">
                  <div className="lead-award-img-wrap">
                    <img src={a.image} alt={a.description} loading="lazy" />
                  </div>
                  <figcaption className="lead-award-caption">{a.description}</figcaption>
                </figure>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="lead-board">
        <div className="lead-board-inner">
          <h2 className="lead-board-title">
            Board of <span className="lead-underline">Trustees</span>
          </h2>
          <p className="lead-board-intro">
            SANKALPAM is governed by a Board of Trustees responsible for strategic
            direction, oversight, and institutional integrity.
          </p>
          <div className="lead-board-grid">
            {boardMembers.map((member) => (
              <div key={member.name} className="lead-board-card">
                <div className="lead-board-avatar">
                  <img
                    src={member.photo}
                    alt={`${member.name} trustee portrait`}
                    loading="lazy"
                  />
                </div>
                <div className="lead-board-info">
                  <h3>{member.name}</h3>
                  {member.lines.map((line) => (
                    <p key={line} className="lead-board-line">
                      {line}
                    </p>
                  ))}
                  <p className="lead-board-role">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="lead-advisory">
        <div className="lead-advisory-inner">
          <div className="lead-advisory-header">
            <h2>Advisory Board</h2>
            <p className="lead-advisory-sub">
              SANKALPAM is supported by an advisory panel providing clinical, academic,
              and strategic guidance.
            </p>
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
                <span className="lead-advisory-title-line">{member.title}</span>
                <p>{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="lead-governance">
        <div className="lead-governance-inner">
          <div className="lead-governance-left">
            <h2>Governance Framework</h2>
            <p className="lead-governance-lead">
              SANKALPAM follows a structured governance model to ensure transparency,
              accountability, and program integrity.
            </p>

            <h3 className="lead-governance-subhead">Key Governance Elements</h3>
            <ul className="lead-governance-list">
              {governanceKeyElements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h3 className="lead-governance-subhead">Accountability &amp; Transparency</h3>
            <p className="lead-governance-we">We are committed to:</p>
            <ul className="lead-governance-list">
              {accountabilityItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="lead-governance-right">
            <div className="lead-reg-card">
              <h3>Registration &amp; Compliance</h3>
              <p className="lead-reg-intro">
                SANKALPAM is a legally registered trust in India and operates in
                compliance with applicable regulations.
              </p>
              <ul className="lead-reg-details">
                <li>
                  <span className="lead-reg-k">Registration Number</span>
                  <span className="lead-reg-v">
                    As per Book No. 4 and Document No. 2 / 2026
                  </span>
                </li>
                <li>
                  <span className="lead-reg-k">PAN</span>
                  <span className="lead-reg-v">ABOTS0991D</span>
                </li>
                <li>
                  <span className="lead-reg-k">12A &amp; 80G</span>
                  <span className="lead-reg-v">In Process</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
