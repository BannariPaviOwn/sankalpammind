import { useState } from 'react';
import { useRazorpay } from 'react-razorpay';
import type { RazorpayOrderOptions } from 'react-razorpay';
import { useLanguage } from '../context/LanguageContext';
import './DonationForm.css';

const PRESET_AMOUNTS = [500, 1000, 2500, 5000, 10000];

export default function DonationForm() {
  const { t, language } = useLanguage();
  const { Razorpay, isLoading: razorpayLoading } = useRazorpay();
  const [amount, setAmount] = useState<number | ''>(1000);
  const [customAmount, setCustomAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error'>('success');
  const [loading, setLoading] = useState(false);

  const donationAmount = customAmount ? Number(customAmount) : (amount || 0);

  const showError = (text: string) => {
    setMessageType('error');
    setMessage(text);
  };

  const showSuccess = (text: string) => {
    setMessageType('success');
    setMessage(text);
  };
  const amountInPaise = donationAmount * 100;

  const donateBtnLabel = language === 'hi' ? 'दान करें ₹' : language === 'te' ? 'దానం చేయండి ₹' : 'Donate ₹';

  const handleDonate = async () => {
    if (donationAmount < 10) {
      showError(t('Minimum donation is ₹10', 'न्यूनतम दान ₹10 है', 'కనిష్ట దానం ₹10'));
      return;
    }
    if (!name.trim() || !email.trim()) {
      showError(t('Please fill in your name and email', 'कृपया अपना नाम और ईमेल भरें', 'దయచేసి మీ పేరు మరియు ఇమెయిల్ నింపండి'));
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const orderResponse = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: amountInPaise,
          currency: 'INR',
          receipt: `donation_${Date.now()}`,
          notes: { name, email },
        }),
      }).catch(() => null);

      let orderId: string | null = null;

      if (orderResponse?.ok) {
        const data = await orderResponse.json();
        orderId = data.orderId;
      }

      if (!orderId || !orderId.startsWith('order_')) {
        let errorMsg = t(
          'Backend unavailable. Start the server (npm run server) and add Razorpay keys.',
          'बैकएंड उपलब्ध नहीं। सर्वर (npm run server) शुरू करें और Razorpay कुंजी जोड़ें।',
          'బ్యాకెండ్ అందుబాటులో లేదు. సర్వర్ (npm run server) ప్రారంభించండి మరియు Razorpay కీలను జోడించండి.'
        );
        if (orderResponse && !orderResponse.ok) {
          const err = await orderResponse.json().catch(() => ({}));
          if (err.error) errorMsg = t('Order creation failed. Please try again.', 'ऑर्डर बनाने में विफल। कृपया पुनः प्रयास करें।', 'ఆర్డర్ సృష్టి విఫలమైంది. దయచేసి మళ్లీ ప్రయత్నించండి.');
        }
        showError(errorMsg);
        setLoading(false);
        return;
      }

      const razorpayKey = import.meta.env.VITE_RAZORPAY_KEY || 'rzp_test_placeholder';
      const callbackUrl = `${window.location.origin}/api/payment-callback?frontend=${encodeURIComponent(window.location.origin)}`;

      const options: RazorpayOrderOptions = {
        key: razorpayKey,
        amount: amountInPaise,
        currency: 'INR',
        name: 'Sankalpam Mind & Wellness Foundation',
        order_id: orderId,
        description: t('Donation to support mental health', 'मानसिक स्वास्थ्य को समर्थन देने के लिए दान', 'మానసిక ఆరోగ్యానికి మద్దతు ఇవ్వడానికి దానం'),
        prefill: { name, email },
        callback_url: callbackUrl,
        redirect: true,
        handler: () => {
          showSuccess(t('Thank you for your generous donation!', 'आपके उदार दान के लिए धन्यवाद!', 'మీ ఉదార దానానికి ధన్యవాదాలు!'));
          setAmount(1000);
          setCustomAmount('');
        },
      };

      if (!razorpayLoading && Razorpay) {
        const razorpay = new Razorpay(options);
        razorpay.on('payment.failed', () => {
          showError(t('Payment failed. Please try again.', 'भुगतान विफल। कृपया पुनः प्रयास करें।', 'చెల్లింపు విఫలమైంది. దయచేసి మళ్లీ ప్రయత్నించండి.'));
        });
        razorpay.open();
      } else {
        showError(t('Payment gateway is loading. Please try again.', 'पेमेंट गेटवे लोड हो रहा है। कृपया पुनः प्रयास करें।', 'చెల్లింపు గేట్‌వే లోడ్ అవుతోంది. దయచేసి మళ్లీ ప్రయత్నించండి.'));
      }
    } catch (err) {
      showError(t('Something went wrong. Please try again.', 'कुछ गलत हो गया। कृपया पुनः प्रयास करें।', 'ఏదో తప్పు జరిగింది. దయచేసి మళ్లీ ప్రయత్నించండి.'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="donation-form">
      <h3 className="donation-title">{t('Make a Donation', 'दान करें', 'దానం చేయండి')}</h3>
      <p className="donation-subtitle">
        {t('Your contribution helps us bring mental health support to those who need it most.', 'आपका योगदान हमें उन लोगों तक मानसिक स्वास्थ्य सहायता पहुंचाने में मदद करता है।', 'మీ యోగదానం అవసరమైన వారికి మానసిక ఆరోగ్య మద్దతును తీసుకువెళ్లడంలో మాకు సహాయపడుతుంది.')}
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
          min={10}
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
      </div>

      <button
        className="donate-submit"
        onClick={handleDonate}
        disabled={loading || donationAmount < 10}
      >
        {loading
          ? t('Processing...', 'प्रोसेस हो रहा है...', 'ప్రాసెస్ అవుతోంది...')
          : donateBtnLabel + donationAmount}
      </button>

      {message && <p className={`donation-message ${messageType}`}>{message}</p>}
    </div>
  );
}
