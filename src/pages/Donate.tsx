import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import DonationForm from '../components/DonationForm';
import './Donate.css';

export default function Donate() {
  const { t } = useLanguage();

  return (
    <div className="donate-page">
      <section className="donate-hero">
        <h1>{t('Support Our Work', 'हमारे काम का समर्थन करें', 'మా పనికి మద్దతు ఇవ్వండి')}</h1>
        <p className="donate-payment-note">
          {t('Donate Now — Secure Payment | UPI | Bank Transfer | CSR Partnerships', 'दान करें — सुरक्षित भुगतान | UPI | बैंक ट्रांसफर | CSR साझेदारी', 'ఇప్పుడే దానం చేయండి — సురక్షిత చెల్లింపు | UPI | బ్యాంక్ ట్రాన్స్ఫర్ | CSR భాగస్వామ్యాలు')}
        </p>
        <p>
          {t(
            'Emotional wellness becomes sustainable when communities participate in strengthening it. Your support enables us to:',
            'भावनात्मक कल्याण तब टिकाऊ होता है जब समुदाय इसे मजबूत करने में भाग लेते हैं। आपका समर्थन हमें सक्षम बनाता है:',
            'సమాజాలు దాన్ని బలోపేతం చేయడంలో పాల్గొన్నప్పుడు భావనాత్మక క్షేమం శాశ్వతమవుతుంది. మీ మద్దతు మాకు సాధ్యం చేస్తుంది:'
          )}
        </p>
        <ul className="donate-hero-list">
          <li>{t('Expand grassroots mental health awareness', 'जमीनी स्तर पर मानसिक स्वास्थ्य जागरूकता का विस्तार करना', 'స్థానిక మానసిక ఆరోగ్య అవగాహనను విస్తరించడం')}</li>
          <li>{t('Deliver structured emotional support services', 'संरचित भावनात్మक सहायता सेवाएं प्रदान करना', 'నిర్మాణాత్మక భావనాత్మక మద్దతు సేవలను అందించడం')}</li>
          <li>{t('Train educators and community leaders', 'शिक्षकों और समुदाय नेताओं को प्रशिक्षित करना', 'విద్యావేత్తలు మరియు సమాజ నాయకులకు శిక్షణ ఇవ్వడం')}</li>
          <li>{t('Reduce stigma in rural and semi-urban regions', 'ग्रामीण और अर्ध-शहरी क्षेत्रों में कलंक कम करना', 'గ్రామీణ మరియు అర్ధ-నగర ప్రాంతాలలో కళంకాన్ని తగ్గించడం')}</li>
          <li>{t('Build scalable community-based systems', 'मापनीय समुदाय-आधारित प्रणालियों का निर्माण करना', 'స్కేలబుల్ సమాజ-ఆధారిత వ్యవస్థలను నిర్మించడం')}</li>
        </ul>
        <p className="donate-hero-note">
          {t('Every contribution expands access and strengthens resilience.', 'हर योगदान पहुंच का विस्तार करता है और लचीलापन मजबूत करता है।', 'ప్రతి యోగదానం ప్రవేశాన్ని విస్తరిస్తుంది మరియు స్థిరత్వాన్ని బలోపేతం చేస్తుంది.')}
        </p>
      </section>

      <section className="donate-content">
        <div className="donate-main">
          <DonationForm />
        </div>
        <div className="donate-sidebar">
          <div className="impact-box test-tip">
            <h3>{t('Secure Payments', 'सुरक्षित भुगतान', 'సురక్షిత చెల్లింపులు')}</h3>
            <p className="tip-text">
              {t('Payments are processed securely via Cashfree. UPI, cards, and net banking are supported.', 'भुगतान Cashfree के माध्यम से सुरक्षित रूप से संसाधित होते हैं। UPI, कार्ड और नेट बैंकिंग समर्थित हैं।', 'చెల్లింపులు Cashfree ద్వారా సురక్షితంగా ప్రాసెస్ అవుతాయి. UPI, కార్డులు మరియు నెట్ బ్యాంకింగ్ మద్దతు ఉంది.')}
            </p>
          </div>
          <div className="impact-box">
            <h3>{t('Your Impact', 'आपका प्रभाव', 'మీ ప్రభావం')}</h3>
            <ul>
              <li>₹500 — {t('Provides counselling support for 1 person', '1 व्यक्ति को परामर्श सहायता', '1 వ్యక్తికి సలహా మద్దతు')}</li>
              <li>₹1000 — {t('Funds a community awareness session', 'समुदाय जागरूकता सत्र के लिए धन', 'సమాజ అవగాహన సెషన్‌కు నిధులు')}</li>
              <li>₹5000 — {t('Supports rural program outreach', 'ग्रामीण कार्यक्रम आउटरीच का समर्थन', 'గ్రామీణ కార్యక్రమ విస్తరణకు మద్దతు')}</li>
            </ul>
          </div>
          <div className="donate-volunteer">
            <h3>{t('Not able to donate? Volunteer!', 'दान नहीं कर सकते? स्वयंसेवक बनें!', 'దానం చేయలేకపోతున్నారా? స్వచ్ఛందంగా పనిచేయండి!')}</h3>
            <p>
              {t(
                'Your time and skills can change lives too. Join us as a volunteer and support mental wellness in your community.',
                'आपका समय और कौशल भी जीवन बदल सकता है। स्वयंसेवक के रूप में हमसे जुड़ें और अपने समुदाय में मानसिक कल्याण का समर्थन करें।',
                'మీ సమయం మరియు నైపుణ్యాలు కూడా జీవితాలను మార్చగలవు. స్వచ్ఛంద సేవకుడిగా మాతో చేరండి మరియు మీ సమాజంలో మానసిక క్షేమానికి మద్దతు ఇవ్వండి.',
              )}
            </p>
            <Link to="/volunteer" className="donate-volunteer-btn">
              {t('Volunteer With Us', 'हमारे साथ स्वयंसेवक बनें', 'మాతో స్వచ్ఛందంగా పనిచేయండి')}
            </Link>
          </div>
          <p className="donate-csr">
            {t('For CSR and institutional partnerships, contact us directly.', 'CSR और संस्थागत साझेदारी के लिए, हमसे सीधे संपर्क करें।', 'CSR మరియు సంస్థాగత భాగస్వామ్యాల కోసం, మమ్మల్ని నేరుగా సంప్రదించండి.')}
          </p>
        </div>
      </section>
    </div>
  );
}
