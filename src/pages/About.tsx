import { useLanguage } from '../context/LanguageContext';
import './About.css';

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>{t('About Us', 'हमारे बारे में')}</h1>
        <p>
          {t(
            'Sankalpam Mind & Wellness Foundation is dedicated to transforming mental health care in India through awareness, accessibility, and affordability.',
            'संकल्पम माइंड एंड वेलनेस फाउंडेशन जागरूकता, पहुंच और सामर्थ्य के माध्यम से भारत में मानसिक स्वास्थ्य देखभाल को बदलने के लिए समर्पित है।'
          )}
        </p>
      </section>

      <section className="about-content">
        <div className="about-card">
          <h2>{t('Our Mission', 'हमारा मिशन')}</h2>
          <p>
            {t(
              'To build a society that supports individuals on their mental health journeys. No life should be lost due to mental illness.',
              'एक ऐसा समाज बनाना जो व्यक्तियों को उनकी मानसिक स्वास्थ्य यात्रा में समर्थन दे। मानसिक बीमारी के कारण कोई जीवन नहीं खोना चाहिए।'
            )}
          </p>
        </div>

        <div className="about-card">
          <h2>{t('Our Vision', 'हमारी दृष्टि')}</h2>
          <p>
            {t(
              'A India where mental health care is accessible, affordable, and stigma-free for everyone, regardless of their background or location.',
              'एक भारत जहाँ मानसिक स्वास्थ्य देखभाल सभी के लिए पहुंच योग्य, सस्ती और कलंक-मुक्त हो, चाहे उनकी पृष्ठभूमि या स्थान कुछ भी हो।'
            )}
          </p>
        </div>
      </section>
    </div>
  );
}
