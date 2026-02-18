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
              {t('Mental Wellbeing for Every Home. Emotional Strength for the Nation.', 'हर घर में मानसिक कल्याण। राष्ट्र के लिए भावनात्मक मजबूती।')}
            </p>
            <div className="footer-commitment">
              <h4>{t('Our Commitment', 'हमारा प्रतिबद्धता')}</h4>
              <p>
                {t(
                  'Strict confidentiality and data protection • Non-discriminatory and inclusive practices • Trauma-informed, culturally sensitive approaches • Safeguarding children and vulnerable individuals • Evidence-informed program delivery. Trust, safety, and dignity guide all our initiatives.',
                  'सख्त गोपनीयता और डेटा सुरक्षा • गैर-भेदभावपूर्ण और समावेशी प्रथाएं • आघात-सूचित, सांस्कृतिक रूप से संवेदनशील दृष्टिकोण।'
                )}
              </p>
            </div>
          </div>
          <div className="footer-links">
            <h4>{t('Quick Links', 'त्वरित लिंक')}</h4>
            <Link to="/">{t('Home', 'होम')}</Link>
            <Link to="/about">{t('About Us', 'हमारे बारे में')}</Link>
            <Link to="/initiatives">{t('Programs & Services', 'कार्यक्रम और सेवाएं')}</Link>
            <Link to="/find-help">{t('Find Help', 'सहायता खोजें')}</Link>
            <Link to="/donate">{t('Donate', 'दान करें')}</Link>
          </div>
          <div className="footer-involve">
            <h4>{t('Get Involved', 'जुड़ें')}</h4>
            <p>{t('Sustainable impact requires collective effort. You can:', 'टिकाऊ प्रभाव के लिए सामूहिक प्रयास की जरूरत है। आप कर सकते हैं:')}</p>
            <ul>
              <li>{t('Support awareness initiatives', 'जागरूकता पहल का समर्थन करें')}</li>
              <li>{t('Partner as a school or organization', 'स्कूल या संगठन के रूप में साझेदारी करें')}</li>
              <li>{t('Collaborate through CSR funding', 'CSR फंडिंग के माध्यम से सहयोग करें')}</li>
              <li>{t('Volunteer your skills', 'अपने कौशल का स्वयंसेवक बनें')}</li>
            </ul>
            <p className="footer-cta-line">
              {t('Together, we can normalize mental health conversations and build emotionally resilient communities across India.', 'एक साथ हम मानसिक स्वास्थ्य बातचीत को सामान्य बना सकते हैं और पूरे भारत में भावनात्मक रूप से लचीले समुदायों का निर्माण कर सकते हैं।')}
            </p>
          </div>
          <div className="footer-contact">
            <h4>{t('Contact', 'संपर्क')}</h4>
            <p>info@sankalpammindwellness.org</p>
            <p>+91 1800-XXX-XXXX</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Sankalpam Mind & Wellness Foundation. {t('All rights reserved.', 'सर्वाधिकार सुरक्षित।')}</p>
        </div>
      </div>
    </footer>
  );
}
