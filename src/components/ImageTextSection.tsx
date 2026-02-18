import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './ImageTextSection.css';

interface ImageTextSectionProps {
  image: string;
  titleEn: string;
  titleHi: string;
  contentEn: string;
  contentHi: string;
  imagePosition: 'left' | 'right';
  gradient?: string;
  ctaEn?: string;
  ctaHi?: string;
  ctaLink?: string;
}

export default function ImageTextSection({
  image,
  titleEn,
  titleHi,
  contentEn,
  contentHi,
  imagePosition,
  gradient = 'var(--gradient-peace)',
  ctaEn,
  ctaHi,
  ctaLink,
}: ImageTextSectionProps) {
  const { t } = useLanguage();

  return (
    <section
      className={`image-text-section ${imagePosition}`}
      style={{ '--section-gradient': gradient } as React.CSSProperties}
    >
      <div className="section-container">
        <div className="section-image">
          <div className="image-placeholder">
            {image.startsWith('http') ? (
              <img src={image} alt={t(titleEn, titleHi)} />
            ) : (
              <div className="placeholder-content">
                <span className="placeholder-icon">🌿</span>
                <span>{t('Wellness', 'कल्याण')}</span>
              </div>
            )}
          </div>
        </div>
        <div className="section-content">
          <h2 className="section-title">{t(titleEn, titleHi)}</h2>
          <p className="section-text">{t(contentEn, contentHi)}</p>
          {ctaEn && ctaLink && (
            ctaLink.startsWith('/') ? (
              <Link to={ctaLink} className="section-cta">
                {t(ctaEn, ctaHi || ctaEn)}
              </Link>
            ) : (
              <a href={ctaLink} className="section-cta" target="_blank" rel="noopener noreferrer">
                {t(ctaEn, ctaHi || ctaEn)}
              </a>
            )
          )}
        </div>
      </div>
    </section>
  );
}
