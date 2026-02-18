import { useLanguage } from '../context/LanguageContext';
import DonationForm from '../components/DonationForm';
import './Donate.css';

export default function Donate() {
  const { t } = useLanguage();

  return (
    <div className="donate-page">
      <section className="donate-hero">
        <h1>{t('Support Our Work', 'हमारे काम का समर्थन करें')}</h1>
        <p className="donate-payment-note">
          {t('Donate Now — Secure Payment | UPI | Bank Transfer | CSR Partnerships', 'दान करें — सुरक्षित भुगतान | UPI | बैंक ट्रांसफर | CSR साझेदारी')}
        </p>
        <p>
          {t(
            'Emotional wellness becomes sustainable when communities participate in strengthening it. Your support enables us to:',
            'भावनात्मक कल्याण तब टिकाऊ होता है जब समुदाय इसे मजबूत करने में भाग लेते हैं। आपका समर्थन हमें सक्षम बनाता है:'
          )}
        </p>
        <ul className="donate-hero-list">
          <li>{t('Expand grassroots mental health awareness', 'जमीनी स्तर पर मानसिक स्वास्थ्य जागरूकता का विस्तार करना')}</li>
          <li>{t('Deliver structured emotional support services', 'संरचित भावनात्मक सहायता सेवाएं प्रदान करना')}</li>
          <li>{t('Train educators and community leaders', 'शिक्षकों और समुदाय नेताओं को प्रशिक्षित करना')}</li>
          <li>{t('Reduce stigma in rural and semi-urban regions', 'ग्रामीण और अर्ध-शहरी क्षेत्रों में कलंक कम करना')}</li>
          <li>{t('Build scalable community-based systems', 'मापनीय समुदाय-आधारित प्रणालियों का निर्माण करना')}</li>
        </ul>
        <p className="donate-hero-note">
          {t('Every contribution expands access and strengthens resilience.', 'हर योगदान पहुंच का विस्तार करता है और लचीलापन मजबूत करता है।')}
        </p>
      </section>

      <section className="donate-content">
        <div className="donate-main">
          <DonationForm />
        </div>
        <div className="donate-sidebar">
          <div className="impact-box test-tip">
            <h3>{t('Test Payment Failure', 'टेस्ट भुगतान विफलता')}</h3>
            <p className="tip-text">
              {t('Use OTP "1" or "12" (less than 4 digits) to simulate payment failure in test mode.', 'टेस्ट मोड में भुगतान विफलता का अनुकरण करने के लिए OTP "1" या "12" (4 अंक से कम) उपयोग करें।')}
            </p>
          </div>
          <div className="impact-box">
            <h3>{t('Your Impact', 'आपका प्रभाव')}</h3>
            <ul>
              <li>₹500 — {t('Provides counselling support for 1 person', '1 व्यक्ति को परामर्श सहायता')}</li>
              <li>₹1000 — {t('Funds a community awareness session', 'समुदाय जागरूकता सत्र के लिए धन')}</li>
              <li>₹5000 — {t('Supports rural program outreach', 'ग्रामीण कार्यक्रम आउटरीच का समर्थन')}</li>
            </ul>
          </div>
          <p className="donate-csr">
            {t('For CSR and institutional partnerships, contact us directly.', 'CSR और संस्थागत साझेदारी के लिए, हमसे सीधे संपर्क करें।')}
          </p>
        </div>
      </section>
    </div>
  );
}
