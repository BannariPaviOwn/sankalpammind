import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './PhotoPlaceholder.css';

interface PhotoPlaceholderProps {
  src?: string;
  labelEn?: string;
  labelHi?: string;
  labelTe?: string;
  ratio?: '4/3' | '16/9' | '1/1' | '3/4';
  className?: string;
  alt?: string;
}

export default function PhotoPlaceholder({
  src,
  labelEn = 'Photo',
  labelHi = 'फोटो',
  labelTe = 'ఫోటో',
  ratio = '4/3',
  className = '',
  alt,
}: PhotoPlaceholderProps) {
  const { t } = useLanguage();
  const [imgError, setImgError] = useState(false);
  const showPlaceholder = !src || imgError;

  if (src && !showPlaceholder) {
    return (
      <div
        className={`photo-placeholder photo-placeholder--img photo-placeholder--${ratio.replace('/', '-')} ${className}`}
        style={{ aspectRatio: ratio } as React.CSSProperties}
      >
        <img
          src={src}
          alt={alt || t(labelEn, labelHi, labelTe)}
          loading="lazy"
          onError={() => setImgError(true)}
        />
      </div>
    );
  }

  return (
    <div
      className={`photo-placeholder photo-placeholder--${ratio.replace('/', '-')} ${className}`}
      style={{ aspectRatio: ratio } as React.CSSProperties}
      title={t('Add your photo here', 'यहाँ अपनी फोटो जोड़ें', 'ఇక్కడ మీ ఫోటోను జోడించండి')}
    >
      <span className="photo-placeholder-icon">📷</span>
      <span className="photo-placeholder-label">{t(labelEn, labelHi, labelTe)}</span>
    </div>
  );
}
