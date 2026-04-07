import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo-link">
              <img
                src="/assets/logo.png"
                className="footer-logo-img"
                alt="Sankalpam"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            </Link>
            <p className="footer-tagline">
              SANKALPAM is not just an organization—
              <br />
              it is a movement to bring mental and holistic wellbeing to every
              community that needs it most.
            </p>
            <p className="footer-location">
              Starting from Andhra Pradesh. Expanding across India.<br />
              Driven by intent. Measured by impact.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/our-model">Our Model</Link>
            <Link to="/initiatives">Initiatives</Link>
            <Link to="/impact">Impact</Link>
            <Link to="/csr-partnerships">CSR & Partnerships</Link>
            <Link to="/leadership">Leadership</Link>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <p>
              <a href="tel:9962881006">9962881006</a>
            </p>
            <p>
              <a href="mailto:reach@sankalpammind.org">reach@sankalpammind.org</a>
            </p>
            <p>
              <a href="https://www.sankalpammind.org" target="_blank" rel="noopener noreferrer">
                www.sankalpammind.org
              </a>
            </p>
            <div className="footer-location-block">
              <p><strong>Head Office:</strong> Andhra Pradesh</p>
              <p><strong>Operations:</strong> Rural & semi-urban regions</p>
            </div>
          </div>

          <div className="footer-cta-col">
            <h4>Get Involved</h4>
            <p>Every conversation can lead to an impact.</p>
            <Link to="/contact" className="footer-cta-btn">Partner With Us</Link>
            <Link to="/contact" className="footer-cta-btn footer-cta-outline">Volunteer</Link>
            <div className="footer-reg">
              <p>Reg No: Book No. 4, Doc No. 2/2026</p>
              <p>PAN: ABOTS0991D</p>
              <p>12A & 80G: In Process</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SANKALPAM Mind & Wellness Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
