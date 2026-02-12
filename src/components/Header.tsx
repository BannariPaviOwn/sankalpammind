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
          <span className="logo-icon">🌱</span>
          <span className="logo-text">Sankalpam Mind & Wellness</span>
        </Link>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            {t('Home', 'होम')}
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            {t('About Us', 'हमारे बारे में')}
          </Link>
          <Link to="/initiatives" onClick={() => setMenuOpen(false)}>
            {t('Initiatives', 'पहल')}
          </Link>
          <Link to="/find-help" onClick={() => setMenuOpen(false)}>
            {t('Find Help', 'सहायता खोजें')}
          </Link>
          <Link to="/donate" className="donate-btn" onClick={() => setMenuOpen(false)}>
            {t('Donate', 'दान करें')}
          </Link>
        </nav>

        <div className="header-actions">
          <div className="lang-toggle">
            <button
              className={language === 'en' ? 'active' : ''}
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
            <button
              className={language === 'hi' ? 'active' : ''}
              onClick={() => setLanguage('hi')}
            >
              हिंदी
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
