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
            <span className="logo-text">Sankalpam Mind & Wellness</span>
            <p className="footer-tagline">
              {t('Building a healthier, more resilient society.', 'एक स्वस्थ, अधिक लचीला समाज बनाना।')}
            </p>
          </div>
          <div className="footer-links">
            <h4>{t('Quick Links', 'त्वरित लिंक')}</h4>
            <Link to="/">{t('Home', 'होम')}</Link>
            <Link to="/about">{t('About Us', 'हमारे बारे में')}</Link>
            <Link to="/initiatives">{t('Initiatives', 'पहल')}</Link>
            <Link to="/find-help">{t('Find Help', 'सहायता खोजें')}</Link>
            <Link to="/donate">{t('Donate', 'दान करें')}</Link>
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
