import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ASSETS } from '../assets';
import './HeaderHeroStyles.css';

export default function TemplateStyle2() {
  const { t } = useLanguage();

  return (
    <div className="template-page">
      <header className="style2-header">
        <div className="style2-header-inner">
          <div className="style2-logo-group">
            <img src="/assets/logo.png" alt="Sankalpam" className="style2-logo" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
          </div>
          <nav className="style2-nav">
            <span>{t('About', 'हमारे बारे में', 'మా గురించి')}</span>
            <span>{t('Services', 'सेवाएं', 'సేవలు')}</span>
            <span>{t('Impact', 'प्रभाव', 'ప్రభావం')}</span>
            <span>{t('Resources', 'संसाधन', 'వనరులు')}</span>
          </nav>
        </div>
      </header>

      <section className="style2-hero">
        <div className="style2-hero-left">
          <p className="template-label">{t('Template 2', 'टेम्पलेट 2', 'టెంప్లేట్ 2')}</p>
          <h1>
            {t(
              'Healthy minds build healthy communities.',
              'स्वस्थ मन स्वस्थ समुदाय बनाते हैं।',
              'ఆరోగ్యకరమైన మనస్సులు ఆరోగ్యకరమైన సమాజాలను నిర్మిస్తాయి.'
            )}
          </h1>
          <p>
            {t(
              'White header + split hero with image card. Clean, professional — works well for information and service pages.',
              'सफेद हेडर + छवि कार्ड के साथ स्प्लिट हीरो। साफ, पेशेवर — सूचना और सेवा पृष्ठों के लिए अच्छा काम करता है।',
              'వైట్ హెడర్ + ఇమేజ్ కార్డ్‌తో స్ప్లిట్ హీరో. క్లీన్, ప్రొఫెషనల్ — సమాచారం మరియు సేవా పేజీలకు బాగా పనిచేస్తుంది.'
            )}
          </p>
          <Link to="/templates" style={{ color: '#6366f1', marginTop: '1rem', display: 'inline-block' }}>
            ← {t('Back to templates', 'टेम्पलेट पर वापस', 'టెంప్లేట్లకు తిరిగి')}
          </Link>
        </div>
        <div className="style2-hero-right">
          <div className="style2-card">
            <img src={ASSETS.home.ourWork} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}
