import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import './Contact.css';

const workWithItems = [
  'Government bodies and district administration',
  'CSR and corporate organizations',
  'Schools and educational institutions',
  'Healthcare Providers',
  'NGOs and community-based organizations',
];

const inquiryTypes = [
  'Partnership / CSR',
  'School Program',
  'Community Program',
  'Training / Workshops',
  'General Inquiry',
  'Volunteering',
];

interface FormState {
  name: string;
  organization: string;
  email: string;
  phone: string;
  inquiryType: string;
  message: string;
}

const initialForm: FormState = {
  name: '',
  organization: '',
  email: '',
  phone: '',
  inquiryType: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1>Get in Touch</h1>
        <p>
          Whether you are looking to collaborate, partner, or learn more about our work,
          we welcome you to connect with us.
        </p>
        <p className="contact-hero__sub">
          SANKALPAM – Mind &amp; Wellness Foundation is committed to building meaningful
          partnerships and expanding access to wellbeing across communities.
        </p>
      </section>

      {/* Work With Us */}
      <section className="contact-section">
        <h2 className="contact-section-title">Work With Us</h2>
        <p className="contact-section-subtitle">
          We collaborate with:
        </p>
        <div className="work-with-tags">
          {workWithItems.map((item) => (
            <span key={item} className="work-with-tag">{item}</span>
          ))}
        </div>
        <div className="contact-callout">
          👉 If you are interested in implementing programs or partnering with us, we would be glad to connect.
        </div>
      </section>

      {/* Contact Details */}
      <section className="contact-section contact-section--alt">
        <div className="contact-section" style={{ padding: 0 }}>
          <h2 className="contact-section-title">Contact Details</h2>
          <p className="contact-section-subtitle" />
          <div className="contact-info-grid">
            <div className="contact-info-card">
              <div className="contact-info-icon">📞</div>
              <h3>Phone & Email</h3>
              <div className="contact-detail">
                📱 <a href="tel:9962881006">9962881006</a>
              </div>
              <div className="contact-detail">
                ✉️ <a href="mailto:reach@sankalpammind.org">reach@sankalpammind.org</a>
              </div>
              <div className="contact-detail">
                🌐 <a href="https://www.sankalpammind.org" target="_blank" rel="noopener noreferrer">www.sankalpammind.org</a>
              </div>
            </div>

            <div className="contact-info-card contact-info-card--orange">
              <div className="contact-info-icon">📍</div>
              <h3>Location</h3>
              <div className="contact-detail">
                🏢 <span><strong>Head Office:</strong> Andhra Pradesh (Pilot Implementation Region)</span>
              </div>
              <div className="contact-detail">
                🗺️ <span><strong>Operational Areas:</strong> Rural and semi-urban regions (expanding across India)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-section">
        <h2 className="contact-section-title">Send Us a Message</h2>
        <p className="contact-section-subtitle">
          (For website form section)
        </p>

        <div className="contact-form-wrapper">
          {submitted ? (
            <div className="form-success">
              <div className="form-success-icon">✅</div>
              <h3>Thank you for reaching out!</h3>
              <p>
                We have received your message and will get back to you shortly.
                Together, let's build systems that make wellbeing accessible.
              </p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="organization">
                    Organization <span className="optional">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={form.organization}
                    onChange={handleChange}
                    placeholder="Your organization"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="inquiryType">Type of Inquiry</label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={form.inquiryType}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select an inquiry type</option>
                  {inquiryTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can work together..."
                  required
                />
              </div>

              <button type="submit" className="form-submit-btn">
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Closing */}
      <section className="contact-closing">
        <div className="closing-inner">
          <div className="closing-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </div>
          <h3>Every conversation can lead to an impact.</h3>
          <p>Let's build systems that make wellbeing accessible — together.</p>
          <div className="closing-dots">
            <span /><span /><span />
          </div>
        </div>
      </section>
    </div>
  );
}
