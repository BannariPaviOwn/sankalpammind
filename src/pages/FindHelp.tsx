import { useLanguage } from '../context/LanguageContext';
import './FindHelp.css';

export default function FindHelp() {
  const { t } = useLanguage();

  const helplines = [
    { name: 'Sankalpam Helpline', number: '1800-XXX-XXXX' },
    { name: 'National Helpline', number: '1800-599-0019' },
    { name: 'iCall', number: '022-25521111' },
  ];

  return (
    <div className="find-help-page">
      <section className="find-help-hero">
        <h1>{t('Find Help', 'सहायता खोजें', 'సహాయం కనుగొనండి')}</h1>
        <p>
          {t(
            'You are not alone. Reach out to speak with a mental health professional or call a helpline.',
            'आप अकेले नहीं हैं। मानसिक स्वास्थ्य पेशेवर से बात करने या हेल्पलाइन पर कॉल करने के लिए संपर्क करें।',
            'మీరు ఒంటరిగా లేరు. మానసిక ఆరోగ్య నిపుణుడితో మాట్లాడడానికి లేదా హెల్ప్‌లైన్‌కు కాల్ చేయడానికి సంప్రదించండి.'
          )}
        </p>
      </section>

      <section className="find-help-content">
        <div className="help-card-large">
          <span className="help-icon">🎧</span>
          <h2>{t('Speak to an Expert', 'विशेषज्ञ से बात करें', 'నిపుణుడితో మాట్లాడండి')}</h2>
          <p>{t('Find a Therapist', 'थेरेपिस्ट खोजें', 'చికిత్సకుడిని కనుగొనండి')}</p>
          <p className="help-note">
            {t('Connect with certified mental health professionals in your area.', 'अपने क्षेत्र में प्रमाणित मानसिक स्वास्थ्य पेशेवरों से जुड़ें।', 'మీ ప్రాంతంలో ధృవపత్రం పొందిన మానసిక ఆరోగ్య నిపుణులతో కనెక్ట్ అవ్వండి.')}
          </p>
        </div>

        <div className="helplines-section">
          <h2>#YouAreNotAlone</h2>
          <h3>{t('Helplines', 'हेल्पलाइन', 'హెల్ప్‌లైన్లు')}</h3>
          <div className="helplines-list">
            {helplines.map((h, i) => (
              <div key={i} className="helpline-item">
                <span className="helpline-name">{h.name}</span>
                <a href={`tel:${h.number}`} className="helpline-number">{h.number}</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
