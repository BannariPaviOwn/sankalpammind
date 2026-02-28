import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="logo-icon">🌱</span>
            <span className="logo-text">Sankalpam Mind & Wellness Foundation</span>
            <p className="footer-tagline">
              {t('Change begins when care reaches the roots.', 'बदलाव तब शुरू होता है जब देखभाल जड़ों तक पहुँचती है।', 'సంరక్షణ మూలాలకు చేరుకున్నప్పుడు మార్పు ప్రారంభమవుతుంది.')}
            </p>
            <div className="footer-commitment">
              <h4>{t('Our Commitment', 'हमारा प्रतिबद्धता', 'మా నిబద్ధత')}</h4>
              <p>
                {t(
                  'Strict confidentiality and data protection • Non-discriminatory and inclusive practices • Trauma-informed, culturally sensitive approaches • Safeguarding children and vulnerable individuals • Evidence-informed program delivery. Trust, safety, and dignity guide all our initiatives.',
                  'सख्त गोपनीयता और डेटा सुरक्षा • गैर-भेदभावपूर्ण और समावेशी प्रथाएं • आघात-सूचित, सांस्कृतिक रूप से संवेदनशील दृष्टिकोण।',
                  'కఠినమైన గోప్యత మరియు డేటా రక్షణ • వివక్షారహిత మరియు సమావేశ పద్ధతులు • ఆఘాత-సమాచారం, సాంస్కృతికంగా సున్నితమైన విధానాలు.'
                )}
              </p>
            </div>
          </div>
          <div className="footer-links">
            <h4>{t('Quick Links', 'त्वरित लिंक', 'త్వరిత లింకులు')}</h4>
            <Link to="/">{t('Home', 'होम', 'హోమ్')}</Link>
            <Link to="/about">{t('About Us', 'हमारे बारे में', 'మా గురించి')}</Link>
            <Link to="/initiatives">{t('Programs & Services', 'कार्यक्रम और सेवाएं', 'కార్యక్రమాలు మరియు సేవలు')}</Link>
            <Link to="/find-help">{t('Find Help', 'सहायता खोजें', 'సహాయం కనుగొనండి')}</Link>
            <Link to="/get-involved">{t('Get Involved', 'जुड़ें', 'చేరండి')}</Link>
            <Link to="/donate">{t('Donate', 'दान करें', 'దానం చేయండి')}</Link>
          </div>
          <div className="footer-involve">
            <h4>{t('Get Involved', 'जुड़ें', 'చేరండి')}</h4>
            <p>{t('Sustainable impact requires collective effort. You can:', 'टिकाऊ प्रभाव के लिए सामूहिक प्रयास की जरूरत है। आप कर सकते हैं:', 'భద్రతా ప్రభావానికి సామూహిక ప్రయత్నం అవసరం. మీరు చేయవచ్చు:')}</p>
            <ul>
              <li>{t('Support awareness initiatives', 'जागरूकता पहल का समर्थन करें', 'అవగాహన పథకాలకు మద్దతు ఇవ్వండి')}</li>
              <li>{t('Partner as a school or organization', 'स्कूल या संगठन के रूप में साझेदारी करें', 'పాఠశాల లేదా సంస్థగా భాగస్వామ్యం చేయండి')}</li>
              <li>{t('Collaborate through CSR funding', 'CSR फंडिंग के माध्यम से सहयोग करें', 'CSR నిధుల ద్వారా సహకరించండి')}</li>
              <li>{t('Volunteer your skills', 'अपने कौशल का स्वयंसेवक बनें', 'మీ నైపుణ్యాలతో స్వచ్ఛందంగా పనిచేయండి')}</li>
            </ul>
            <p className="footer-cta-line">
              {t('Together, we can normalize mental health conversations and build emotionally resilient communities across India.', 'एक साथ हम मानसिक स्वास्थ्य बातचीत को सामान्य बना सकते हैं और पूरे भारत में भावनात्मक रूप से लचीले समुदायों का निर्माण कर सकते हैं।', 'కలిసి, మనం మానసిక ఆరోగ్య సంభాషణలను సాధారణీకరించవచ్చు మరియు భారతదేశం అంతటా భావనాత్మకంగా స్థిరమైన సమాజాలను నిర్మించవచ్చు.')}
            </p>
          </div>
          <div className="footer-contact">
            <h4>{t('Contact', 'संपर्क', 'సంప్రదించండి')}</h4>
            <p>info@sankalpammindwellness.org</p>
            <p>+91 1800-XXX-XXXX</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Sankalpam Mind & Wellness Foundation. {t('All rights reserved.', 'सर्वाधिकार सुरक्षित।', 'అన్ని హక్కులు రిజర్వ్.')}</p>
        </div>
      </div>
    </footer>
  );
}
