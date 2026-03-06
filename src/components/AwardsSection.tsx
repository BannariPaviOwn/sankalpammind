import './AwardsSection.css';

export interface AwardItem {
  image: string;
  description: string;
}

interface AwardsSectionProps {
  awards: readonly AwardItem[];
}

export default function AwardsSection({ awards }: AwardsSectionProps) {
  if (!awards.length) return null;

  return (
    <section className="awards-section">
      <div className="awards-section-inner">
        <h2 className="awards-section-title">
          🏆 Awards & Recognitions
        </h2>
        <p className="awards-section-subtitle">
          Honoring excellence in mental health advocacy and community wellbeing
        </p>
        <div className="awards-scroll-container">
          <div className="awards-row">
            {awards.map(({ image, description }, idx) => (
              <div key={idx} className="award-card">
                <div className="award-card-top">
                  <img
                    src={image}
                    alt={description}
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
                <div className="award-card-bottom">
                  <span className="award-card-label">{description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
