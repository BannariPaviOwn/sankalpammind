import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './HeaderHeroStyles.css';

export default function TemplateStyle4() {
  const { t } = useLanguage();

  return (
    <div className="template-page">
      <header className="style4-header">
        <div className="style4-header-inner">
          <div className="style4-logo-group">
            <img src="/assets/logo.png" alt="Sankalpam" className="style4-logo" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
          </div>
          <nav className="style4-nav">
            <span>{t('Home', 'होम', 'హోమ్')}</span>
            <span>{t('About', 'हमारे बारे में', 'మా గురించి')}</span>
            <span>{t('Donate', 'दान करें', 'దానం చేయండి')}</span>
          </nav>
        </div>
      </header>

      <section className="style4-hero">
        <div className="style4-hero-inner">
          <p className="template-label">{t('Template 4', 'टेम्पलेट 4', 'టెంప్లేట్ 4')}</p>
          <h1>
            {t(
              'Mental wellbeing is not a luxury.',
              'मानसिक कल्याण विलासिता नहीं है।',
              'మానసిక క్షేమం విలాసవంతమైనది కాదు.'
            )}
          </h1>
          <p>
            {t(
              'Purple gradient header with centered hero. Strong brand presence — great for mission-driven messaging.',
              'केंद्रित हीरो के साथ बैंगनी ग्रेडिएंट हेडर। मजबूत ब्रांड उपस्थिति — मिशन-संचालित संदेश के लिए बढ़िया।',
              'కేంద్రీకృత హీరోతో పర్పుల్ గ్రేడియంట్ హెడర్. బలమైన బ్రాండ్ ఉపస్థితి — మిషన్-నడిచే సందేశాలకు గొప్పది.'
            )}
          </p>
          <Link to="/templates" style={{ color: '#6366f1', marginTop: '1rem', display: 'inline-block' }}>
            ← {t('Back to templates', 'टेम्पलेट पर वापस', 'టెంప్లేట్లకు తిరిగి')}
          </Link>
        </div>
      </section>
    </div>
  );
}
