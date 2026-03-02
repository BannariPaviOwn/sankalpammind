import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ASSETS } from '../assets';
import './HeaderHeroStyles.css';

export default function TemplateStyle1() {
  const { t } = useLanguage();

  return (
    <div className="template-page">
      <header className="style1-header">
        <div className="style1-header-inner">
          <div className="style1-logo-group">
            <img src="/assets/logo.png" alt="Sankalpam" className="style1-logo" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            <span className="style1-subbrand">{t('Mind & Wellness Foundation', 'माइंड एंड वेलनेस फाउंडेशन', 'మనస్ & వెల్నెస్ ఫౌండేషన్')}</span>
          </div>
          <nav className="style1-nav">
            <span>{t('Home', 'होम', 'హోమ్')}</span>
            <span>{t('About', 'हमारे बारे में', 'మా గురించి')}</span>
            <span>{t('Programs', 'कार्यक्रम', 'కార్యక్రమాలు')}</span>
            <span>{t('Contact', 'संपर्क', 'సంప్రదించండి')}</span>
          </nav>
          <button type="button" className="style1-donate">{t('Donate', 'दान करें', 'దానం చేయండి')}</button>
        </div>
      </header>

      <section className="style1-hero">
        <div className="style1-hero-overlay" />
        <img src={ASSETS.home.programsServices} alt="" className="style1-hero-bg" />
        <div className="style1-hero-content">
          <p className="template-label">{t('Template 1', 'टेम्पलेट 1', 'టెంప్లేట్ 1')}</p>
          <h1>
            {t(
              'Because emotional wellbeing should reach every village, every school, every home.',
              'क्योंकि भावनात्मक कल्याण हर गाँव, हर स्कूल, हर घर तक पहुँचना चाहिए।',
              'ఎందుకంటే భావనాత్మక క్షేమం ప్రతి గ్రామం, ప్రతి పాఠశాల, ప్రతి ఇంటికి చేరాలి.'
            )}
          </h1>
          <p>
            {t(
              'Full-bleed image hero with dark overlay. Bold, impactful — ideal for campaign and landing pages.',
              'डार्क ओवरले के साथ पूर्ण-चौड़ाई छवि हीरो। बोल्ड, प्रभावशाली — कैंपेन और लैंडिंग पेज के लिए आदर्श।',
              'డార్క్ ఓవర్లేతో పూర్తి వెడల్పు ఇమేజ్ హీరో. బోల్డ్, ప్రభావశాలి — ప్రచారం మరియు ల్యాండింగ్ పేజీలకు అనువైనది.'
            )}
          </p>
          <Link to="/templates" style={{ color: '#facc15', marginTop: '1rem', display: 'inline-block' }}>
            ← {t('Back to templates', 'टेम्पलेट पर वापस', 'టెంప్లేట్లకు తిరిగి')}
          </Link>
        </div>
      </section>
    </div>
  );
}
