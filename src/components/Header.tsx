import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/our-model', label: 'Our Model' },
  { to: '/initiatives', label: 'Initiatives' },
  { to: '/impact', label: 'Impact' },
  { to: '/csr-partnerships', label: 'CSR & Partnerships' },
  { to: '/leadership', label: 'Leadership & Governance' },
  { to: '/contact', label: 'Contact Us' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header ${menuOpen ? 'menu-open' : ''} ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-inner">
        <Link to="/" className="header-logo" onClick={() => setMenuOpen(false)}>
          <img
            src="/assets/logo.png"
            className="logo-image"
            alt="Sankalpam"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
        </Link>

        <nav className="header-nav">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`nav-link ${location.pathname === to ? 'active' : ''}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="header-cta">
          <Link to="/contact" className="btn-partner">Partner With Us</Link>
        </div>

        <button
          type="button"
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
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
            <span className="mobile-nav-title">Menu</span>
            <button type="button" className="mobile-nav-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">✕</button>
          </div>
          {navLinks.map(({ to, label }) => (
            <Link key={to} to={to} className={`mobile-nav-link ${location.pathname === to ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>
              {label}
            </Link>
          ))}
          <Link to="/contact" className="mobile-nav-cta" onClick={() => setMenuOpen(false)}>Partner With Us</Link>
        </div>
      </div>
    </header>
  );
}
