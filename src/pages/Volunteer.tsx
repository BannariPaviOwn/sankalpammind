import { useRef, useState } from 'react';
import { toPng } from 'html-to-image';
import QRCode from 'qrcode';
import { useLanguage } from '../context/LanguageContext';
import './Volunteer.css';

const INTEREST_OPTIONS = [
  'Community Awareness',
  'Mental Health Support',
  'Event Support',
  'Content & Social Media',
  'Fundraising',
  'Training & Workshops',
];

interface VolunteerData {
  name: string;
  email: string;
  phone: string;
  city: string;
  interest: string;
  volunteerId: string;
  issueDate: string;
  validUntil: string;
}

function generateVolunteerId() {
  const year = new Date().getFullYear();
  const random = Math.floor(10000 + Math.random() * 90000);
  return `SKM-VOL-${year}-${random}`;
}

function formatDate(date: Date) {
  return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
}

export default function Volunteer() {
  const { t } = useLanguage();
  const cardRef = useRef<HTMLDivElement>(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [interest, setInterest] = useState('');
  const [error, setError] = useState('');
  const [card, setCard] = useState<VolunteerData | null>(null);
  const [qrDataUrl, setQrDataUrl] = useState('');
  const [downloading, setDownloading] = useState(false);

  const handleGenerate = async () => {
    if (!name.trim() || !email.trim() || !phone.trim() || !city.trim() || !interest) {
      setError(
        t(
          'Please fill in all fields.',
          'कृपया सभी फ़ील्ड भरें।',
          'దయచేసి అన్ని ఫీల్డ్‌లను నింపండి.',
        ),
      );
      return;
    }
    if (!/^\d{10}$/.test(phone.replace(/\D/g, '').slice(-10))) {
      setError(
        t(
          'Enter a valid 10-digit phone number.',
          'एक मान्य 10-अंकीय फ़ोन नंबर दर्ज करें।',
          'చెల్లుబాటు అయ్యే 10 అంకెల ఫోన్ నంబర్‌ను నమోదు చేయండి.',
        ),
      );
      return;
    }

    setError('');

    const issue = new Date();
    const valid = new Date(issue);
    valid.setFullYear(valid.getFullYear() + 1);

    const data: VolunteerData = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      city: city.trim(),
      interest,
      volunteerId: generateVolunteerId(),
      issueDate: formatDate(issue),
      validUntil: formatDate(valid),
    };

    const verifyPayload = [
      'SANKALPAM Mind & Wellness Foundation',
      `Volunteer: ${data.name}`,
      `ID: ${data.volunteerId}`,
      `Valid Until: ${data.validUntil}`,
      'https://www.sankalpammind.org',
    ].join('\n');

    try {
      const qr = await QRCode.toDataURL(verifyPayload, {
        margin: 1,
        width: 240,
        color: { dark: '#4a2d82', light: '#ffffff' },
      });
      setQrDataUrl(qr);
    } catch {
      setQrDataUrl('');
    }

    setCard(data);
  };

  const handleDownload = async () => {
    if (!cardRef.current) return;
    setDownloading(true);
    try {
      const dataUrl = await toPng(cardRef.current, {
        pixelRatio: 3,
        cacheBust: true,
        backgroundColor: '#ffffff',
      });
      const link = document.createElement('a');
      link.download = `${card?.volunteerId || 'volunteer'}-sankalpam-id.png`;
      link.href = dataUrl;
      link.click();
    } catch {
      setError(
        t(
          'Could not generate the image. Please try again.',
          'छवि उत्पन्न नहीं हो सकी। कृपया पुनः प्रयास करें।',
          'చిత్రాన్ని రూపొందించలేకపోయాము. దయచేసి మళ్లీ ప్రయత్నించండి.',
        ),
      );
    } finally {
      setDownloading(false);
    }
  };

  const handleReset = () => {
    setCard(null);
    setQrDataUrl('');
    setName('');
    setEmail('');
    setPhone('');
    setCity('');
    setInterest('');
  };

  return (
    <div className="volunteer-page">
      <section className="volunteer-hero">
        <h1>{t('Become a Volunteer', 'स्वयंसेवक बनें', 'స్వచ్ఛంద సేవకుడిగా మారండి')}</h1>
        <p>
          {t(
            'Join the SANKALPAM movement. Register below to instantly generate your official volunteer ID card.',
            'SANKALPAM आंदोलन से जुड़ें। अपना आधिकारिक स्वयंसेवक आईडी कार्ड तुरंत बनाने के लिए नीचे पंजीकरण करें।',
            'SANKALPAM ఉద్యమంలో చేరండి. మీ అధికారిక వాలంటీర్ ఐడి కార్డును తక్షణమే రూపొందించడానికి క్రింద నమోదు చేసుకోండి.',
          )}
        </p>
      </section>

      <section className="volunteer-content">
        <div className="volunteer-form-col">
          <h2>{t('Volunteer Registration', 'स्वयंसेवक पंजीकरण', 'వాలంటీర్ నమోదు')}</h2>

          <div className="volunteer-fields">
            <label>
              {t('Full Name', 'पूरा नाम', 'పూర్తి పేరు')}
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder={t('Your full name', 'आपका पूरा नाम', 'మీ పూర్తి పేరు')} />
            </label>
            <label>
              {t('Email Address', 'ईमेल पता', 'ఇమెయిల్ చిరునామా')}
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
            </label>
            <label>
              {t('Phone Number', 'फ़ोन नंबर', 'ఫోన్ నంబర్')}
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="9876543210" maxLength={10} />
            </label>
            <label>
              {t('City', 'शहर', 'నగరం')}
              <input value={city} onChange={(e) => setCity(e.target.value)} placeholder={t('Your city', 'आपका शहर', 'మీ నగరం')} />
            </label>
            <label>
              {t('Area of Interest', 'रुचि का क्षेत्र', 'ఆసక్తి ఉన్న ప్రాంతం')}
              <select value={interest} onChange={(e) => setInterest(e.target.value)}>
                <option value="" disabled>
                  {t('Select an area', 'एक क्षेत्र चुनें', 'ఒక ప్రాంతాన్ని ఎంచుకోండి')}
                </option>
                {INTEREST_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </label>
          </div>

          {error && <p className="volunteer-error">{error}</p>}

          <button className="volunteer-generate-btn" onClick={handleGenerate}>
            {card
              ? t('Regenerate ID Card', 'आईडी कार्ड पुनः बनाएं', 'ఐడి కార్డును మళ్లీ రూపొందించండి')
              : t('Generate ID Card', 'आईडी कार्ड बनाएं', 'ఐడి కార్డును రూపొందించండి')}
          </button>
          {card && (
            <button className="volunteer-reset-btn" onClick={handleReset}>
              {t('Clear', 'साफ़ करें', 'క్లియర్ చేయండి')}
            </button>
          )}
        </div>

        <div className="volunteer-card-col">
          {card ? (
            <>
              <div className="id-card" ref={cardRef}>
                <div className="id-card-header">
                  <img src="/assets/logo.png" alt="Sankalpam" className="id-card-logo" crossOrigin="anonymous" />
                  <div className="id-card-org">
                    <strong>SANKALPAM</strong>
                    <span>Mind &amp; Wellness Foundation</span>
                  </div>
                </div>

                <div className="id-card-band">VOLUNTEER</div>

                <div className="id-card-body">
                  <div className="id-card-details">
                    <div className="id-row">
                      <span className="id-label">Name</span>
                      <span className="id-value">{card.name}</span>
                    </div>
                    <div className="id-row">
                      <span className="id-label">Volunteer ID</span>
                      <span className="id-value id-value--mono">{card.volunteerId}</span>
                    </div>
                    <div className="id-row">
                      <span className="id-label">Role</span>
                      <span className="id-value">{card.interest}</span>
                    </div>
                    <div className="id-row">
                      <span className="id-label">City</span>
                      <span className="id-value">{card.city}</span>
                    </div>
                    <div className="id-row">
                      <span className="id-label">Phone</span>
                      <span className="id-value">{card.phone}</span>
                    </div>
                    <div className="id-row id-row--dates">
                      <span>
                        <span className="id-label">Issued</span>
                        <span className="id-value">{card.issueDate}</span>
                      </span>
                      <span>
                        <span className="id-label">Valid Until</span>
                        <span className="id-value">{card.validUntil}</span>
                      </span>
                    </div>
                  </div>
                  {qrDataUrl && (
                    <div className="id-card-qr">
                      <img src={qrDataUrl} alt="Verification QR" />
                      <span>Scan to verify</span>
                    </div>
                  )}
                </div>

                <div className="id-card-footer">
                  <span>www.sankalpammind.org</span>
                  <span>reach@sankalpammind.org</span>
                </div>
              </div>

              <button className="volunteer-download-btn" onClick={handleDownload} disabled={downloading}>
                {downloading
                  ? t('Preparing...', 'तैयार हो रहा है...', 'సిద్ధమవుతోంది...')
                  : t('Download ID Card (PNG)', 'आईडी कार्ड डाउनलोड करें (PNG)', 'ఐడి కార్డును డౌన్‌లోడ్ చేయండి (PNG)')}
              </button>
            </>
          ) : (
            <div className="id-card-placeholder">
              <p>{t('Your volunteer ID card will appear here.', 'आपका स्वयंसेवक आईडी कार्ड यहां दिखाई देगा।', 'మీ వాలంటీర్ ఐడి కార్డు ఇక్కడ కనిపిస్తుంది.')}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
