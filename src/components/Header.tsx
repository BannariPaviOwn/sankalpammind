import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './Header.css';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-icon" aria-hidden="true">🌱</span>
          <span className="logo-text">
            <span className="logo-brand">Sankalpam</span>
            <span className="logo-foundation"> Mind & Wellness</span>
          </span>
        </Link>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            {t('Home', 'होम', 'హోమ్')}
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            {t('About Us', 'हमारे बारे में', 'మా గురించి')}
          </Link>
          <Link to="/initiatives" onClick={() => setMenuOpen(false)}>
            {t('Programs & Services', 'कार्यक्रम और सेवाएं', 'కార్యక్రమాలు మరియు సేవలు')}
          </Link>
          <Link to="/find-help" onClick={() => setMenuOpen(false)}>
            {t('Find Help', 'सहायता खोजें', 'సహాయం కనుగొనండి')}
          </Link>
          <Link to="/get-involved" onClick={() => setMenuOpen(false)}>
            {t('Get Involved', 'जुड़ें', 'చేరండి')}
          </Link>
          <Link to="/donate" className="donate-btn" onClick={() => setMenuOpen(false)}>
            {t('Donate', 'दान करें', 'దానం చేయండి')}
          </Link>
        </nav>

        <div className="header-actions">
          <div className="lang-toggle">
            <button
              className={language === 'en' ? 'active' : ''}
              onClick={() => setLanguage('en')}
              aria-label="English"
            >
              EN
            </button>
            <button
              className={language === 'hi' ? 'active' : ''}
              onClick={() => setLanguage('hi')}
              aria-label="Hindi"
            >
              हिंदी
            </button>
            <button
              className={language === 'te' ? 'active' : ''}
              onClick={() => setLanguage('te')}
              aria-label="Telugu"
            >
              తెలుగు
            </button>
          </div>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
