import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './DonateResult.css';

export default function DonateResult() {
  const [searchParams] = useSearchParams();
  const { t } = useLanguage();
  const orderId = searchParams.get('order_id');
  const legacyStatus = searchParams.get('status');
  const [status, setStatus] = useState<'loading' | 'success' | 'failed'>(
    orderId ? 'loading' : legacyStatus === 'success' ? 'success' : 'failed',
  );

  useEffect(() => {
    if (!orderId) return;

    const id = orderId;
    let cancelled = false;

    async function verifyPayment() {
      try {
        const res = await fetch(`/api/order-status?order_id=${encodeURIComponent(id)}`);
        if (!res.ok) throw new Error('status fetch failed');
        const data = await res.json();
        if (!cancelled) {
          setStatus(data.status === 'success' ? 'success' : 'failed');
        }
      } catch {
        if (!cancelled) setStatus('failed');
      }
    }

    verifyPayment();
    return () => {
      cancelled = true;
    };
  }, [orderId]);

  const isSuccess = status === 'success';
  const isLoading = status === 'loading';

  useEffect(() => {
    if (isLoading) return;
    document.title = isSuccess
      ? t('Donation Successful', 'दान सफल', 'దానం విజయవంతం')
      : t('Payment Failed', 'भुगतान विफल', 'చెల్లింపు విఫలమైంది');
  }, [isSuccess, isLoading, t]);

  return (
    <div className="donate-result-page">
      <div className={`donate-result-card ${isLoading ? 'loading' : isSuccess ? 'success' : 'failed'}`}>
        {isLoading ? (
          <>
            <span className="result-icon">…</span>
            <h1>{t('Verifying payment...', 'भुगतान सत्यापित हो रहा है...', 'చెల్లింపు ధృవీకరిస్తోంది...')}</h1>
            <p>{t('Please wait while we confirm your donation.', 'कृपया प्रतीक्षा करें जब तक हम आपके दान की पुष्टि करते हैं।', 'మీ దానాన్ని నిర్ధారించే వరకు దయచేసి వేచి ఉండండి.')}</p>
          </>
        ) : (
          <>
            <span className="result-icon">{isSuccess ? '✓' : '✕'}</span>
            <h1>
              {isSuccess
                ? t('Thank you for your donation!', 'आपके दान के लिए धन्यवाद!', 'మీ దానానికి ధన్యవాదాలు!')
                : t('Payment Failed', 'भुगतान विफल', 'చెల్లింపు విఫలమైంది')}
            </h1>
            {isSuccess && orderId && (
              <p className="result-order-id">
                {t('Reference', 'संदर्भ', 'సూచన')}: {orderId}
              </p>
            )}
            <p>
              {isSuccess
                ? t(
                    'Your gift helps us bring mental health support to those who need it most — every life is precious as gold.',
                    'आपका योगदान हमें उन लोगों तक मानसिक स्वास्थ्य सहायता पहुंचाने में मदद करता है — हर जीवन सोने जैसा कीमती है।',
                    'మీ బహుమతి అవసరమైన వారికి మానసిక ఆరోగ్య మద్దతును తీసుకువెళ్లడంలో మాకు సహాయపడుతుంది — ప్రతి జీవితం బంగారంలా విలువైనది.',
                  )
                : t(
                    'Your payment could not be completed. Please try again.',
                    'आपका भुगतान पूरा नहीं हो सका। कृपया पुनः प्रयास करें।',
                    'మీ చెల్లింపు పూర్తి కాలేదు. దయచేసి మళ్లీ ప్రయత్నించండి.',
                  )}
            </p>
            <div className="result-actions">
              <Link to="/donate" className="result-cta">
                {isSuccess ? t('Donate Again', 'फिर से दान करें', 'మళ్లీ దానం చేయండి') : t('Try Again', 'पुनः प्रयास करें', 'మళ్లీ ప్రయత్నించండి')}
              </Link>
              <Link to="/" className="result-cta-outline">
                {t('Back to Home', 'होम पर वापस', 'హోమ్‌కు తిరిగి వెళ్లండి')}
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
