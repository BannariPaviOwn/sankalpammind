import { useLanguage } from '../context/LanguageContext';
import DonationForm from '../components/DonationForm';
import './Donate.css';

export default function Donate() {
  const { t } = useLanguage();

  return (
    <div className="donate-page">
      <section className="donate-hero">
        <h1>{t('Donate', 'दान करें')}</h1>
        <p>
          {t(
            'Your donation helps us provide mental health support to those who need it most. Every contribution makes a difference.',
            'आपका दान हमें उन लोगों को मानसिक स्वास्थ्य सहायता प्रदान करने में मदद करता है जिन्हें इसकी सबसे अधिक आवश्यकता है। हर योगदान से फर्क पड़ता है।'
          )}
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
        </div>
      </section>
    </div>
  );
}
