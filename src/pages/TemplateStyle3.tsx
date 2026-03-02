import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './HeaderHeroStyles.css';

export default function TemplateStyle3() {
  const { t } = useLanguage();

  return (
    <div className="template-page">
      <header className="style3-header">
        <div className="style3-header-inner">
          <div className="style3-logo-stack">
            <img src="/assets/logo.png" alt="Sankalpam" className="style3-logo" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            <span className="style3-subbrand">{t('Mind & Wellness Foundation', 'माइंड एंड वेलनेस फाउंडेशन', 'మనస్ & వెల్నెస్ ఫౌండేషన్')}</span>
          </div>
          <nav className="style3-nav">
            <span>{t('Programs', 'कार्यक्रम', 'కార్యక్రమాలు')}</span>
            <span>{t('Get Involved', 'जुड़ें', 'చేరండి')}</span>
            <span>{t('Find Help', 'सहायता खोजें', 'సహాయం కనుగొనండి')}</span>
          </nav>
        </div>
      </header>

      <section className="style3-hero">
        <div className="style3-hero-inner">
          <div className="style3-accent" />
          <div className="style3-text">
            <p className="template-label">{t('Template 3', 'टेम्पलेट 3', 'టెంప్లేట్ 3')}</p>
            <h1>
              {t(
                'Change begins when care reaches the roots.',
                'बदलाव तब शुरू होता है जब देखभाल जड़ों तक पहुँचती है।',
                'సంరక్షణ మూలాలకు చేరుకున్నప్పుడు మార్పు ప్రారంభమవుతుంది.'
              )}
            </h1>
            <p>
              {t(
                'Minimal header with vertical accent bar. Simple, elegant — lets content sections below carry the story.',
                'ऊर्ध्वाधर एक्सेंट बार के साथ न्यूनतम हेडर। सरल, सुंदर — नीचे के कंटेंट सेक्शन को कहानी बताने देता है।',
                'వర్టికల్ యాక్సెంట్ బార్‌తో కనిష్ట హెడర్. సాధారణం, సొగసైనది — క్రింద ఉన్న కంటెంట్ విభాగాలను కథ చెప్పడానికి అనుమతిస్తుంది.'
              )}
            </p>
            <Link to="/templates" style={{ color: '#6366f1', marginTop: '1rem', display: 'inline-block' }}>
              ← {t('Back to templates', 'टेम्पलेट पर वापस', 'టెంప్లేట్లకు తిరిగి')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
