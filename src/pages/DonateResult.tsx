import { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './DonateResult.css';

export default function DonateResult() {
  const [searchParams] = useSearchParams();
  const { t } = useLanguage();
  const status = searchParams.get('status') || 'failed';

  const isSuccess = status === 'success';

  useEffect(() => {
    document.title = isSuccess
      ? t('Donation Successful', 'दान सफल')
      : t('Payment Failed', 'भुगतान विफल');
  }, [isSuccess, t]);

  return (
    <div className="donate-result-page">
      <div className={`donate-result-card ${isSuccess ? 'success' : 'failed'}`}>
        <span className="result-icon">{isSuccess ? '✓' : '✕'}</span>
        <h1>
          {isSuccess
            ? t('Thank you for your donation!', 'आपके दान के लिए धन्यवाद!')
            : t('Payment Failed', 'भुगतान विफल')}
        </h1>
        <p>
          {isSuccess
            ? t('Your generous contribution will help us bring mental health support to those who need it.', 'आपका उदार योगदान हमें उन लोगों तक मानसिक स्वास्थ्य सहायता पहुंचाने में मदद करेगा।')
            : t('Your payment could not be completed. Please try again.', 'आपका भुगतान पूरा नहीं हो सका। कृपया पुनः प्रयास करें।')}
        </p>
        <Link to="/donate" className="result-cta">
          {isSuccess ? t('Donate Again', 'फिर से दान करें') : t('Try Again', 'पुनः प्रयास करें')}
        </Link>
      </div>
    </div>
  );
}
