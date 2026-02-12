import { useLanguage } from '../context/LanguageContext';
import './Initiatives.css';

export default function Initiatives() {
  const { t } = useLanguage();

  const initiatives = [
    {
      titleEn: 'Rural Program',
      titleHi: 'ग्रामीण कार्यक्रम',
      descEn: 'Community Mental Health Program (CMHP) improving mental healthcare in rural geographies with holistic approach.',
      descHi: 'समुदाय मानसिक स्वास्थ्य कार्यक्रम (CMHP) समग्र दृष्टिकोण के साथ ग्रामीण क्षेत्रों में मानसिक स्वास्थ्य देखभाल में सुधार।',
      gradient: 'linear-gradient(135deg, #e0e7ff 0%, #fce7f3 100%)',
    },
    {
      titleEn: 'Corporate Program',
      titleHi: 'कॉर्पोरेट कार्यक्रम',
      descEn: 'Mental well-being programs for organizations to build healthier, more resilient workplaces.',
      descHi: 'संगठनों के लिए स्वस्थ और अधिक लचीला कार्यस्थल बनाने के लिए मानसिक कल्याण कार्यक्रम।',
      gradient: 'linear-gradient(135deg, #fef3c7 0%, #e0e7ff 100%)',
    },
    {
      titleEn: 'Research',
      titleHi: 'अनुसंधान',
      descEn: 'Evidence-based research to advance mental health understanding and treatment in India.',
      descHi: 'भारत में मानसिक स्वास्थ्य समझ और उपचार को आगे बढ़ाने के लिए साक्ष्य-आधारित अनुसंधान।',
      gradient: 'linear-gradient(135deg, #d1fae5 0%, #e0e7ff 100%)',
    },
    {
      titleEn: 'Campaigns',
      titleHi: 'अभियान',
      descEn: 'Awareness campaigns to destigmatize mental illness and encourage help-seeking behaviour.',
      descHi: 'मानसिक बीमारी को कलंक से मुक्त करने और सहायता मांगने वाले व्यवहार को प्रोत्साहित करने के लिए जागरूकता अभियान।',
      gradient: 'linear-gradient(135deg, #fce7f3 0%, #e0e7ff 100%)',
    },
  ];

  return (
    <div className="initiatives-page">
      <section className="initiatives-hero">
        <h1>{t('Our Initiatives', 'हमारी पहल')}</h1>
        <p>
          {t(
            'We run various programs to bring mental health support to communities across India.',
            'हम भारत भर के समुदायों में मानसिक स्वास्थ्य सहायता लाने के लिए विभिन्न कार्यक्रम चलाते हैं।'
          )}
        </p>
      </section>

      <section className="initiatives-grid">
        {initiatives.map((init, i) => (
          <div
            key={i}
            className="initiative-card"
            style={{ background: init.gradient } as React.CSSProperties}
          >
            <h3>{t(init.titleEn, init.titleHi)}</h3>
            <p>{t(init.descEn, init.descHi)}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
