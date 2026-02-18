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
          <div className="hero-title-block">
            <h1 className="hero-title">
              <span className="hero-title-main">{t('SANKALPAM', 'संकल्पम')}</span>
            </h1>
            <span className="hero-title-divider" aria-hidden="true"></span>
            <p className="hero-subtitle">
              {t('Mind & Wellness Foundation', 'माइंड एंड वेलनेस फाउंडेशन')}
            </p>
          </div>
          <p className="hero-tagline">
            {t('Mental Wellbeing for Every Home. Emotional Strength for the Nation.', 'हर घर में मानसिक कल्याण। राष्ट्र के लिए भावनात्मक मजबूती।')}
          </p>
          <p className="hero-section-label">
            {t('HOME', 'होम')}
          </p>
          <h2 className="hero-heading">
            {t('Because Mental Wellbeing Is Not a Luxury', 'क्योंकि मानसिक कल्याण विलासिता नहीं है')}
          </h2>
          <p className="hero-desc">
            {t(
              'Mental health is not only important during a crisis. It shapes everyday life — in homes, schools, workplaces, and communities.',
              'मानसिक स्वास्थ्य केवल संकट के दौरान महत्वपूर्ण नहीं है। यह रोजमर्रा की जिंदगी को आकार देता है — घरों, स्कूलों, कार्यस्थलों और समुदायों में।'
            )}
          </p>
          <p className="hero-desc">
            {t(
              'Sankalpam Mind & Wellness Foundation is a prevention-focused, community-centered non-profit organization working to make mental and emotional wellbeing:',
              'संकल्पम माइंड एंड वेलनेस फाउंडेशन एक रोकथाम-केंद्रित, समुदाय-केंद्रित गैर-लाभकारी संगठन है जो मानसिक और भावनात्मक कल्याण को बनाने के लिए काम कर रहा है:'
            )}
          </p>
          <div className="hero-cta">
            <Link to="/donate" className="btn btn-primary">
              {t('Support Mental Wellbeing', 'मानसिक कल्याण का समर्थन करें')}
            </Link>
            <Link to="/about" className="btn btn-secondary">
              {t('Partner with Us', 'हमारे साथ साझेदारी करें')}
            </Link>
          </div>
        </div>
      </section>

      <section className="pillars">
        <h2 className="section-heading">
          {t('When individuals understand their emotions and develop resilience:', 'जब व्यक्ति अपनी भावनाओं को समझते हैं और लचीलापन विकसित करते हैं:')}
        </h2>
        <div className="pillars-grid">
          <div className="pillar-card pillar-1">
            <span className="pillar-icon">✨</span>
            <h3>{t('Simple', 'सरल')}</h3>
            <p>
              {t(
                'Easy-to-understand support and resources for everyone.',
                'सभी के लिए समझने में आसान सहायता और संसाधन।'
              )}
            </p>
          </div>
          <div className="pillar-card pillar-2">
            <span className="pillar-icon">💚</span>
            <h3>{t('Affordable', 'सस्ती')}</h3>
            <p>
              {t(
                'Mental and emotional support within reach of every community.',
                'हर समुदाय की पहुंच में मानसिक और भावनात्मक सहायता।'
              )}
            </p>
          </div>
          <div className="pillar-card pillar-3">
            <span className="pillar-icon">🌍</span>
            <h3>{t('Culturally sensitive', 'सांस्कृतिक रूप से संवेदनशील')}</h3>
            <p>
              {t(
                'Care that respects local values, language, and context.',
                'ऐसी देखभाल जो स्थानीय मूल्यों, भाषा और संदर्भ का सम्मान करती है।'
              )}
            </p>
          </div>
          <div className="pillar-card pillar-4">
            <span className="pillar-icon">🌱</span>
            <h3>{t('Accessible', 'पहुंच योग्य')}</h3>
            <p>
              {t(
                'Especially in underserved and rural communities.',
                'विशेष रूप से वंचित और ग्रामीण समुदायों में।'
              )}
            </p>
          </div>
        </div>
        <p className="pillars-footer">
          {t(
            'Families become stronger. Children grow with confidence. Relationships improve. Communities become healthier.',
            'परिवार मजबूत होते हैं। बच्चे आत्मविश्वास के साथ बढ़ते हैं। रिश्ते बेहतर होते हैं। समुदाय स्वस्थ होते हैं।'
          )}
        </p>
        <p className="pillars-tagline">
          {t(
            'Healthy minds build stable homes. Stable homes build strong communities. Strong communities build a resilient India.',
            'स्वस्थ दिमाग स्थिर घर बनाते हैं। स्थिर घर मजबूत समुदाय बनाते हैं। मजबूत समुदाय एक लचीला भारत बनाते हैं।'
          )}
        </p>
      </section>

      <TextCarousel />

      <ImageTextSection
        image=""
        imagePosition="left"
        titleEn="Who We Are"
        titleHi="हम कौन हैं"
        contentEn="Sankalpam Mind & Wellness Foundation is a registered non-profit dedicated to integrating mental and emotional wellbeing into everyday life. We work from the grassroots upward — in rural and semi-urban communities where stigma, limited awareness, and access barriers prevent people from seeking help. Our approach focuses on prevention before crisis, early emotional education, community-based support, culturally responsive counselling, and capacity building at local levels."
        contentHi="संकल्पम माइंड एंड वेलनेस फाउंडेशन एक पंजीकृत गैर-लाभकारी संगठन है जो मानसिक और भावनात्मक कल्याण को रोजमर्रा की जिंदगी में एकीकृत करने के लिए समर्पित है।"
        gradient="linear-gradient(135deg, #e0e7ff 0%, #fce7f3 100%)"
        ctaEn="About Us"
        ctaHi="हमारे बारे में"
        ctaLink="/about"
      />

      <ImageTextSection
        image=""
        imagePosition="right"
        titleEn="Our Programs & Services"
        titleHi="हमारे कार्यक्रम और सेवाएं"
        contentEn="We operate across individual, institutional, and community levels — from counselling and therapeutic services, school and college mental health programs, community outreach, corporate wellbeing, women and family initiatives, youth development, elder support, to training, research, and advocacy."
        contentHi="हम व्यक्तिगत, संस्थागत और समुदाय स्तर पर काम करते हैं — परामर्श और चिकित्सीय सेवाओं, स्कूल और कॉलेज मानसिक स्वास्थ्य कार्यक्रमों, समुदाय आउटरीच, कॉर्पोरेट कल्याण से लेकर प्रशिक्षण और अनुसंधान तक।"
        gradient="linear-gradient(135deg, #fef3c7 0%, #e0e7ff 100%)"
        ctaEn="View Programs"
        ctaHi="कार्यक्रम देखें"
        ctaLink="/initiatives"
      />

      <section className="cta-banner">
        <h2>{t('Healthy minds build resilient communities. Resilient communities build a strong India.', 'स्वस्थ दिमाग लचीले समुदाय बनाते हैं। लचीले समुदाय एक मजबूत भारत बनाते हैं।')}</h2>
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
          <Link to="/find-help" className="help-card">
            <span className="help-icon">📞</span>
            <h3>{t('Helplines', 'हेल्पलाइन')}</h3>
            <p>#YouAreNotAlone</p>
          </Link>
        </div>
      </section>
    </>
  );
}
