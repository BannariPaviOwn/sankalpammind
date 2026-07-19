import { useState } from 'react';
import { load } from '@cashfreepayments/cashfree-js';
import { useLanguage } from '../context/LanguageContext';
import './DonationForm.css';

const PRESET_AMOUNTS = [500, 1000, 2500, 5000, 10000];

export default function DonationForm() {
  const { t, language } = useLanguage();
  const [amount, setAmount] = useState<number | ''>(1000);
  const [customAmount, setCustomAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error'>('success');
  const [loading, setLoading] = useState(false);

  const donationAmount = customAmount ? Number(customAmount) : (amount || 0);

  const showError = (text: string) => {
    setMessageType('error');
    setMessage(text);
  };

  const donateBtnLabel = language === 'hi' ? 'दान करें ₹' : language === 'te' ? 'దానం చేయండి ₹' : 'Donate ₹';

  const handleDonate = async () => {
    if (donationAmount < 1) {
      showError(t('Minimum donation is ₹1', 'न्यूनतम दान ₹1 है', 'కనిష్ట దానం ₹1'));
      return;
    }
    if (!name.trim() || !email.trim() || !phone.trim()) {
      showError(
        t(
          'Please fill in your name, email, and phone number',
          'कृपया अपना नाम, ईमेल और फ़ोन नंबर भरें',
          'దయచేసి మీ పేరు, ఇమెయిల్ మరియు ఫోన్ నంబర్ నింపండి',
        ),
      );
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const orderResponse = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: donationAmount,
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
        }),
      });

      if (!orderResponse.ok) {
        const err = await orderResponse.json().catch(() => ({}));
        const fallback = t(
          'Backend unavailable. Start the server (npm run server) and add Cashfree keys.',
          'बैकएंड उपलब्ध नहीं। सर्वर (npm run server) शुरू करें और Cashfree कुंजी जोड़ें।',
          'బ్యాకెండ్ అందుబాటులో లేదు. సర్వర్ (npm run server) ప్రారంభించండి మరియు Cashfree కీలను జోడించండి.',
        );
        showError(err.error || fallback);
        return;
      }

      const { paymentSessionId } = await orderResponse.json();
      if (!paymentSessionId) {
        showError(t('Order creation failed. Please try again.', 'ऑर्डर बनाने में विफल। कृपया पुनः प्रयास करें।', 'ఆర్డర్ సృష్టి విఫలమైంది. దయచేసి మళ్లీ ప్రయత్నించండి.'));
        return;
      }

      const mode = import.meta.env.VITE_CASHFREE_MODE === 'production' ? 'production' : 'sandbox';
      const cashfree = await load({ mode });
      if (!cashfree) {
        showError(t('Payment gateway failed to load. Please try again.', 'पेमेंट गेटवे लोड नहीं हो सका। कृपया पुनः प्रयास करें।', 'చెల్లింపు గేట్‌వే లోడ్ కాలేదు. దయచేసి మళ్లీ ప్రయత్నించండి.'));
        return;
      }

      await cashfree.checkout({
        paymentSessionId,
        redirectTarget: '_self',
      });
    } catch {
      showError(t('Something went wrong. Please try again.', 'कुछ गलत हो गया। कृपया पुनः प्रयास करें।', 'ఏదో తప్పు జరిగింది. దయచేసి మళ్లీ ప్రయత్నించండి.'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="donation-form">
      <h3 className="donation-title">{t('Make a Donation', 'दान करें', 'దానం చేయండి')}</h3>
      <p className="donation-subtitle">
        {t(
          'Your contribution helps us bring mental health support to those who need it most.',
          'आपका योगदान हमें उन लोगों तक मानसिक स्वास्थ्य सहायता पहुंचाने में मदद करता है।',
          'మీ యోగదానం అవసరమైన వారికి మానసిక ఆరోగ్య మద్దతును తీసుకువెళ్లడంలో మాకు సహాయపడుతుంది.',
        )}
      </p>

      <div className="donation-amounts">
        {PRESET_AMOUNTS.map((amt) => (
          <button
            key={amt}
            type="button"
            className={`amount-btn ${!customAmount && amount === amt ? 'active' : ''}`}
            onClick={() => {
              setAmount(amt);
              setCustomAmount('');
            }}
          >
            ₹{amt}
          </button>
        ))}
      </div>

      <div className="custom-amount">
        <label>{t('Or enter custom amount (₹)', 'या अपनी राशि दर्ज करें (₹)', 'లేదా ఇష్టానుసారం మొత్తం నమోదు చేయండి (₹)')}</label>
        <input
          type="number"
          placeholder="1000"
          value={customAmount}
          onChange={(e) => {
            setCustomAmount(e.target.value);
            setAmount('');
          }}
          min={1}
        />
      </div>

      <div className="donation-fields">
        <input
          type="text"
          placeholder={t('Your Name', 'आपका नाम', 'మీ పేరు')}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder={t('Email Address', 'ईमेल पता', 'ఇమెయిల్ చిరునామా')}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          placeholder={t('Phone Number', 'फ़ोन नंबर', 'ఫోన్ నంబర్')}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          maxLength={10}
        />
      </div>

      <button
        className="donate-submit"
        onClick={handleDonate}
        disabled={loading || donationAmount < 1}
      >
        {loading
          ? t('Processing...', 'प्रोसेस हो रहा है...', 'ప్రాసెస్ అవుతోంది...')
          : donateBtnLabel + donationAmount}
      </button>

      {message && <p className={`donation-message ${messageType}`}>{message}</p>}
    </div>
  );
}
