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
    {
      to: '/',
      labelEn: 'Home',
      labelHi: 'होम',
      labelTe: 'హోమ్',
      labelTa: 'முகப்பு',
      labelMl: 'ഹോം',
    },
    {
      to: '/initiatives',
      labelEn: 'Our Programs',
      labelHi: 'हमारे कार्यक्रम',
      labelTe: 'మా కార్యక్రమాలు',
      labelTa: 'எங்கள் நிகழ்ச்சிகள்',
      labelMl: 'ഞങ്ങളുടെ പരിപാടികൾ',
    },
    {
      to: '/get-involved',
      labelEn: 'Get Involved',
      labelHi: 'जुड़ें',
      labelTe: 'చేరండి',
      labelTa: 'எங்களுடன் இணையவும்',
      labelMl: 'ഞങ്ങളോടൊപ്പം ചേർക്കുക',
    },
    {
      to: '/about',
      labelEn: 'About Us',
      labelHi: 'हमारे बारे में',
      labelTe: 'మా గురించి',
      labelTa: 'எங்களை பற்றி',
      labelMl: 'ഞങ്ങളെ കുറിച്ച്',
    },
    {
      to: '/find-help',
      labelEn: 'Find Help',
      labelHi: 'सहायता खोजें',
      labelTe: 'సహాయం కనుగొనండి',
      labelTa: 'உதவி தேடுங்கள்',
      labelMl: 'സഹായം കണ്ടെത്തുക',
    },
    {
      to: '/donate',
      labelEn: 'Contact',
      labelHi: 'संपर्क',
      labelTe: 'సంప్రదించండి',
      labelTa: 'தொடர்பு',
      labelMl: 'ബന്ധപ്പെടുക',
    },
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
            {navLinks.map(({ to, labelEn, labelHi, labelTe, labelTa, labelMl }) => (
              <Link
                key={to}
                to={to}
                className={`nav-link ${location.pathname === to ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {t(labelEn, labelHi, labelTe, labelTa, labelMl)}
              </Link>
            ))}
          </nav>

          <div className="header-cta">
            <Link to="/get-involved" className="btn-volunteer" onClick={() => setMenuOpen(false)}>
              {t(
                'Volunteer Now',
                'अभी स्वयंसेवक बनें',
                'ఇప్పుడే స్వచ్ఛందంగా పనిచేయండి',
                'தன்னார்வமாகச் சேருங்கள்',
                'സ്വयंസേവകനാവുക'
              )}
            </Link>
            <Link to="/donate" className="btn-donate" onClick={() => setMenuOpen(false)}>
              {t(
                'Donate Now',
                'अभी दान करें',
                'ఇప్పుడే దానం చేయండి',
                'இப்போது நன்கொடை அளிக்கவும்',
                'ഇപ്പോൾ സംഭാവന ചെയ്യുക'
              )}
            </Link>
          </div>

          <div className="header-right">
            {/* Language dropdown – temporarily hidden */}
            {false && (
              <div className="lang-switcher">
                <select
                  className="lang-select"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as any)}
                  aria-label="Select language"
                >
                  <option value="en">English</option>
                  <option value="hi">हिन्दी (Hindi)</option>
                  <option value="te">తెలుగు (Telugu)</option>
                  <option value="ta">தமிழ் (Tamil)</option>
                  <option value="ml">മലയാളം (Malayalam)</option>
                </select>
              </div>
            )}
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

        <div
          className={`mobile-nav ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="mobile-nav-inner" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-nav-top">
              <span className="mobile-nav-title">{t('Menu', 'मेनू', 'మెను', 'மெனு', 'മെനു')}</span>
              <button
                type="button"
                className="mobile-nav-close"
                onClick={() => setMenuOpen(false)}
                aria-label={t('Close menu', 'मेनू बंद करें', 'మెను మూసివేయండి', 'மெனுவை மூடவும்', 'മെനു അടയ്ക്കുക')}
              >
                ✕
              </button>
            </div>
            {navLinks.map(({ to, labelEn, labelHi, labelTe, labelTa, labelMl }) => (
              <Link
                key={to}
                to={to}
                className={`mobile-nav-link ${location.pathname === to ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {t(labelEn, labelHi, labelTe, labelTa, labelMl)}
              </Link>
            ))}
            <Link to="/get-involved" className="mobile-nav-volunteer" onClick={() => setMenuOpen(false)}>
              {t(
                'Volunteer Now',
                'अभी स्वयंसेवक बनें',
                'ఇప్పుడే స్వచ్ఛందంగా పనిచేయండి',
                'தன்னார்வமாகச் சேருங்கள்',
                'സ്വयंസേവകനാവുക'
              )}
            </Link>
            <Link to="/donate" className="mobile-nav-donate" onClick={() => setMenuOpen(false)}>
              {t(
                'Donate Now',
                'अभी दान करें',
                'ఇప్పుడే దానం చేయండి',
                'இப்போது நன்கொடை அளிக்கவும்',
                'ഇപ്പോൾ സംഭാവന ചെയ്യുക'
              )}
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
