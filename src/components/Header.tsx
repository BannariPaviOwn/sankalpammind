import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './Header.css';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/', labelEn: 'Home', labelHi: 'होम', labelTe: 'హోమ్' },
    { to: '/initiatives', labelEn: 'Our Programs', labelHi: 'हमारे कार्यक्रम', labelTe: 'మా కార్యక్రమాలు' },
    { to: '/get-involved', labelEn: 'Get Involved', labelHi: 'जुड़ें', labelTe: 'చేరండి' },
    { to: '/about', labelEn: 'About Us', labelHi: 'हमारे बारे में', labelTe: 'మా గురించి' },
    { to: '/find-help', labelEn: 'Find Help', labelHi: 'सहायता खोजें', labelTe: 'సహాయం కనుగొనండి' },
    { to: '/donate', labelEn: 'Contact', labelHi: 'संपर्क', labelTe: 'సంప్రదించండి' },
  ];

  return (
    <>
      <header className={`header ${menuOpen ? 'menu-open' : ''}`}>
        <div className="header-inner">
          <Link to="/" className="header-logo">
            <img
              src="/assets/logo.png"
              className="logo-image"
              alt="Sankalpam"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
          </Link>

          <nav className="header-nav">
            {navLinks.map(({ to, labelEn, labelHi, labelTe }) => (
              <Link
                key={to}
                to={to}
                className={`nav-link ${location.pathname === to ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {t(labelEn, labelHi, labelTe)}
              </Link>
            ))}
          </nav>

          <div className="header-cta">
            <Link to="/get-involved" className="btn-volunteer" onClick={() => setMenuOpen(false)}>
              {t('Volunteer Now', 'अभी स्वयंसेवक बनें', 'ఇప్పుడే స్వచ్ఛందంగా పనిచేయండి')}
            </Link>
            <Link to="/donate" className="btn-donate" onClick={() => setMenuOpen(false)}>
              {t('Donate Now', 'अभी दान करें', 'ఇప్పుడే దానం చేయండి')}
            </Link>
          </div>

          <div className="header-right">
            <div className="lang-switcher">
              {(['en', 'hi', 'te'] as const).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  className={`lang-btn ${language === lang ? 'active' : ''}`}
                  onClick={() => setLanguage(lang)}
                  aria-label={lang === 'en' ? 'English' : lang === 'hi' ? 'Hindi' : 'Telugu'}
                >
                  {lang === 'en' ? 'EN' : lang === 'hi' ? 'हि' : 'తె'}
                </button>
              ))}
            </div>
            <button
              type="button"
              className="hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>

        <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-inner">
            {navLinks.map(({ to, labelEn, labelHi, labelTe }) => (
              <Link
                key={to}
                to={to}
                className={`mobile-nav-link ${location.pathname === to ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {t(labelEn, labelHi, labelTe)}
              </Link>
            ))}
            <Link to="/get-involved" className="mobile-nav-volunteer" onClick={() => setMenuOpen(false)}>
              {t('Volunteer Now', 'अभी स्वयंसेवक बनें', 'ఇప్పుడే స్వచ్ఛందంగా పనిచేయండి')}
            </Link>
            <Link to="/donate" className="mobile-nav-donate" onClick={() => setMenuOpen(false)}>
              {t('Donate Now', 'अभी दान करें', 'ఇప్పుడే దానం చేయండి')}
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
