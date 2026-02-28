import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './ImageTextSection.css';

interface ImageTextSectionProps {
  image: string;
  titleEn: string;
  titleHi: string;
  titleTe?: string;
  contentEn: string;
  contentHi: string;
  contentTe?: string;
  imagePosition: 'left' | 'right';
  gradient?: string;
  ctaEn?: string;
  ctaHi?: string;
  ctaTe?: string;
  ctaLink?: string;
}

export default function ImageTextSection({
  image,
  titleEn,
  titleHi,
  titleTe,
  contentEn,
  contentHi,
  contentTe,
  imagePosition,
  gradient = 'var(--gradient-peace)',
  ctaEn,
  ctaHi,
  ctaTe,
  ctaLink,
}: ImageTextSectionProps) {
  const { t } = useLanguage();
  const [imgError, setImgError] = useState(false);
  const showImage = image && image.trim() !== '' && !imgError;

  return (
    <section
      className={`image-text-section ${imagePosition}`}
      style={{ '--section-gradient': gradient } as React.CSSProperties}
    >
      <div className="section-container">
        <div className="section-image">
          <div className="image-placeholder">
            {showImage ? (
              <img src={image!} alt={t(titleEn, titleHi, titleTe)} loading="lazy" onError={() => setImgError(true)} />
            ) : (
              <div
                className="placeholder-content"
                title={t('Add your photo here', 'यहाँ अपनी फोटो जोड़ें', 'ఇక్కడ మీ ఫోటోను జోడించండి')}
              >
                <span className="placeholder-icon">📷</span>
                <span>{t('Photo', 'फोटो', 'ఫోటో')}</span>
              </div>
            )}
          </div>
        </div>
        <div className="section-content">
          <h2 className="section-title">{t(titleEn, titleHi, titleTe)}</h2>
          <p className="section-text">{t(contentEn, contentHi, contentTe)}</p>
          {ctaEn && ctaLink && (
            ctaLink.startsWith('/') ? (
              <Link to={ctaLink} className="section-cta">
                {t(ctaEn, ctaHi || ctaEn, ctaTe)}
              </Link>
            ) : (
              <a href={ctaLink} className="section-cta" target="_blank" rel="noopener noreferrer">
                {t(ctaEn, ctaHi || ctaEn, ctaTe)}
              </a>
            )
          )}
        </div>
      </div>
    </section>
  );
}
