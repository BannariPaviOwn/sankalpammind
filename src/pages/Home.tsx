import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import TextCarousel from '../components/TextCarousel';
import ImageTextSection from '../components/ImageTextSection';
import './Home.css';

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-gradient hero-gradient-1"></div>
          <div className="hero-gradient hero-gradient-2"></div>
          <div className="hero-gradient hero-gradient-3"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            {t('Sankalpam Mind & Wellness Foundation', 'संकल्पम माइंड एंड वेलनेस फाउंडेशन')}
          </h1>
          <p className="hero-subtitle">
            {t('Mental Health Foundation', 'मानसिक स्वास्थ्य फाउंडेशन')}
          </p>
          <p className="hero-desc">
            {t(
              'Awareness • Accessibility • Affordability. Building a society that supports everyone on their mental health journey.',
              'जागरूकता • पहुंच • सामर्थ्य। एक ऐसा समाज बनाना जो सभी को उनकी मानसिक स्वास्थ्य यात्रा में समर्थन दे।'
            )}
          </p>
          <div className="hero-cta">
            <Link to="/find-help" className="btn btn-primary">
              {t('Find Help', 'सहायता खोजें')}
            </Link>
            <Link to="/donate" className="btn btn-secondary">
              {t('Donate', 'दान करें')}
            </Link>
          </div>
        </div>
      </section>

      <section className="pillars">
        <h2 className="section-heading">{t('Our Pillars', 'हमारे स्तंभ')}</h2>
        <div className="pillars-grid">
          <div className="pillar-card pillar-1">
            <span className="pillar-icon">💡</span>
            <h3>{t('Awareness', 'जागरूकता')}</h3>
            <p>
              {t(
                'Sharing credible mental health information and encouraging help-seeking behaviour.',
                'विश्वसनीय मानसिक स्वास्थ्य जानकारी साझा करना और सहायता मांगने को प्रोत्साहित करना।'
              )}
            </p>
          </div>
          <div className="pillar-card pillar-2">
            <span className="pillar-icon">🌍</span>
            <h3>{t('Accessibility', 'पहुंच')}</h3>
            <p>
              {t(
                'Bring mental healthcare to disadvantaged communities in remote locations.',
                'दूरदराज के क्षेत्रों में वंचित समुदायों तक मानसिक स्वास्थ्य सेवाएं पहुंचाना।'
              )}
            </p>
          </div>
          <div className="pillar-card pillar-3">
            <span className="pillar-icon">💚</span>
            <h3>{t('Affordability', 'सामर्थ्य')}</h3>
            <p>
              {t(
                'Livelihood support and improving the affordability of mental health services.',
                'आजीविका सहायता और मानसिक स्वास्थ्य सेवाओं की सामर्थ्य में सुधार।'
              )}
            </p>
          </div>
        </div>
      </section>

      <TextCarousel />

      <ImageTextSection
        image=""
        imagePosition="left"
        titleEn="Rural Community Program"
        titleHi="ग्रामीण समुदाय कार्यक्रम"
        contentEn="Our Community Mental Health Program (CMHP) launched in 2016 to strengthen the mental healthcare ecosystem in rural geographies. The program drives clinical improvement, socio-economic progress, and community ownership to ensure holistic mental health care for persons with mental illness and their caregivers."
        contentHi="हमारा समुदाय मानसिक स्वास्थ्य कार्यक्रम (CMHP) 2016 में ग्रामीण क्षेत्रों में मानसिक स्वास्थ्य देखभाल पारिस्थितिकी तंत्र को मजबूत करने के लिए शुरू किया गया था।"
        gradient="linear-gradient(135deg, #e0e7ff 0%, #fce7f3 100%)"
        ctaEn="View Details"
        ctaHi="विवरण देखें"
        ctaLink="/initiatives"
      />

      <ImageTextSection
        image=""
        imagePosition="right"
        titleEn="Corporate Well-being Program"
        titleHi="कॉर्पोरेट कल्याण कार्यक्रम"
        contentEn="Our Corporate Mental Well-being Program helps organizations prioritize mental health to build healthier, more resilient workplaces. We offer data-driven insights, expert recommendations, and customized roadmaps for meaningful initiatives."
        contentHi="हमारा कॉर्पोरेट मानसिक कल्याण कार्यक्रम संगठनों को स्वस्थ और अधिक लचीला कार्यस्थल बनाने के लिए मानसिक स्वास्थ्य को प्राथमिकता देने में मदद करता है।"
        gradient="linear-gradient(135deg, #fef3c7 0%, #e0e7ff 100%)"
        ctaEn="Learn More"
        ctaHi="और जानें"
        ctaLink="/initiatives"
      />

      <section className="cta-banner">
        <h2>{t('"NO LIFE SHOULD BE LOST DUE TO MENTAL ILLNESS"', '"मानसिक बीमारी के कारण कोई जीवन नहीं खोना चाहिए"')}</h2>
        <Link to="/donate" className="btn btn-donate">
          {t('Support Our Mission', 'हमारे मिशन का समर्थन करें')}
        </Link>
      </section>

      <section className="help-section">
        <div className="help-cards">
          <Link to="/find-help" className="help-card">
            <span className="help-icon">🎧</span>
            <h3>{t('Speak to an Expert', 'विशेषज्ञ से बात करें')}</h3>
            <p>{t('Find a Therapist', 'थेरेपिस्ट खोजें')}</p>
          </Link>
          <Link to="/helplines" className="help-card">
            <span className="help-icon">📞</span>
            <h3>{t('Helplines', 'हेल्पलाइन')}</h3>
            <p>#YouAreNotAlone</p>
          </Link>
        </div>
      </section>
    </>
  );
}
