import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ASSETS } from '../assets';
import './TemplateAHCT.css';

export default function TemplateAHCT() {
  const { t } = useLanguage();

  const flagshipPrograms = [
    {
      titleEn: 'Counselling & Therapeutic Services',
      titleHi: 'परामर्श और चिकित्सीय सेवाएं',
      titleTe: 'సలహా మరియు చికిత్సా సేవలు',
      descEn: 'Individual, child, family and trauma-informed therapy.',
      descHi: 'व्यक्तिगत, बाल, परिवार और आघात-सूचित चिकित्सा।',
      descTe: 'వ్యక్తిగత, బాల, కుటుంబ మరియు ఆఘాత-సమాచారం చికిత్స.',
    },
    {
      titleEn: 'School & College Mental Health',
      titleHi: 'स्कूल और कॉलेज मानसिक स्वास्थ्य',
      titleTe: 'పాఠశాల మరియు కళాశాల మానసిక ఆరోగ్యం',
      descEn: 'Early intervention within education systems.',
      descHi: 'शिक्षा प्रणालियों के भीतर प्रारंभिक हस्तक्षेप।',
      descTe: 'విద్యా వ్యవస్థలలో ప్రారంభ జోక్యం.',
    },
    {
      titleEn: 'Community Outreach & Training',
      titleHi: 'समुदाय आउटरीच और प्रशिक्षण',
      titleTe: 'సమాజ విస్తరణ మరియు శిక్షణ',
      descEn: 'Psychological First Aid, volunteer training.',
      descHi: 'मनोवैज्ञानिक प्रथम सहायता, स्वयंसेवक प्रशिक्षण।',
      descTe: 'మనస్తత్వశాస్త్ర ప్రథమ సహాయం, స్వచ్ఛంద శిక్షణ.',
    },
  ];

  const impactStats = [
    { num: '50+', labelEn: 'Sessions conducted', labelHi: 'आयोजित सत्र', labelTe: 'ఆరంభించిన సెషన్లు' },
    { num: '15+', labelEn: 'Schools reached', labelHi: 'पहुंचे स्कूल', labelTe: 'చేరిన పాఠశాలలు' },
    { num: '1000+', labelEn: 'Lives impacted', labelHi: 'प्रभावित जीवन', labelTe: 'ప్రభావితమైన జీవితాలు' },
  ];

  return (
    <div className="ahct-template">
      {/* Top bar */}
      <div className="ahct-topbar">
        <div className="ahct-topbar-inner">
          <span className="ahct-topbar-email">info@sankalpammindwellness.org</span>
          <div className="ahct-topbar-social">
            <span aria-hidden>📘</span>
            <span aria-hidden>▶</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="ahct-header">
        <div className="ahct-header-inner">
          <Link to="/" className="ahct-logo">
            <img src="/assets/logo.png" alt="Sankalpam" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
          </Link>
          <nav className="ahct-nav">
            <Link to="/">{t('Home', 'होम', 'హోమ్')}</Link>
            <Link to="/initiatives">{t('Our Programs', 'हमारे कार्यक्रम', 'మా కార్యక్రమాలు')}</Link>
            <Link to="/get-involved">{t('Get Involved', 'जुड़ें', 'చేరండి')}</Link>
            <Link to="/about">{t('About Us', 'हमारे बारे में', 'మా గురించి')}</Link>
            <Link to="/find-help">{t('Find Help', 'सहायता खोजें', 'సహాయం కనుగొనండి')}</Link>
            <Link to="/donate">{t('Contact', 'संपर्क', 'సంప్రదించండి')}</Link>
          </nav>
          <div className="ahct-header-cta">
            <Link to="/get-involved" className="ahct-btn-outline">{t('Volunteer Now', 'अभी स्वयंसेवक बनें', 'ఇప్పుడే స్వచ్ఛందంగా పనిచేయండి')}</Link>
            <Link to="/donate" className="ahct-btn-primary">{t('Donate Now', 'अभी दान करें', 'ఇప్పుడే దానం చేయండి')}</Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="ahct-hero">
        <div className="ahct-hero-inner">
          <h1 className="ahct-hero-tagline">
            {t('Change begins when care reaches the roots.', 'बदलाव तब शुरू होता है जब देखभाल जड़ों तक पहुँचती है।', 'సంరక్షణ మూలాలకు చేరుకున్నప్పుడు మార్పు ప్రారంభమవుతుంది.')}
          </h1>
          <p className="ahct-hero-sub">
            {t(
              'From villages and schools to everyday life, we nurture emotional wellbeing, deliver support, and empower communities to lead change.',
              'गाँवों और स्कूलों से रोजमर्रा की जिंदगी तक, हम भावनात्मक कल्याण को पोषित करते हैं, सहायता प्रदान करते हैं और समुदायों को बदलाव की अगुवाई करने में सशक्त बनाते हैं।',
              'గ్రామాలు మరియు పాఠశాలల నుండి రోజువారీ జీవితం వరకు, మేము భావనాత్మక క్షేమాన్ని పోషిస్తాము, మద్దతు అందిస్తాము మరియు సమాజాలను మార్పును నడిపించడానికి శక్తివంతం చేస్తాము.'
            )}
          </p>
          <Link to="/initiatives" className="ahct-hero-cta">{t('Explore Programs', 'कार्यक्रम देखें', 'కార్యక్రమాలు అన్వేషించండి')}</Link>
        </div>
      </section>

      {/* Our Journey */}
      <section className="ahct-journey">
        <div className="ahct-journey-inner">
          <h2 className="ahct-section-title">{t('Our Journey', 'हमारी यात्रा', 'మా ప్రయాణం')}</h2>
          <div className="ahct-journey-grid">
            <div className="ahct-journey-text">
              <p>
                {t(
                  'SANKALPAM Mind & Wellness Foundation exists to make emotional wellbeing simple, safe, and reachable. Through counselling, community outreach, and training, we empower villages, schools, and families. Our journey is a testament to the power of consistent vision and purposeful action — and we are only getting started.',
                  'संकल्पम माइंड एंड वेलनेस फाउंडेशन भावनात्मक कल्याण को सरल, सुरक्षित और पहुंच के भीतर बनाने के लिए मौजूद है। परामर्श, समुदाय आउटरीच और प्रशिक्षण के माध्यम से हम गाँवों, स्कूलों और परिवारों को सशक्त बनाते हैं।',
                  'సంకల్పం మనస్ & వెల్నెస్ ఫౌండేషన్ భావనాత్మక క్షేమాన్ని సరళంగా, సురక్షితంగా మరియు అందుబాటులో ఉంచడానికి ఉంది. సలహా, సమాజ విస్తరణ మరియు శిక్షణ ద్వారా మేము గ్రామాలు, పాఠశాలలు మరియు కుటుంబాలను శక్తివంతం చేస్తాము.'
                )}
              </p>
              <div className="ahct-journey-images">
                <img src={ASSETS.home.ourWork} alt="" />
                <img src={ASSETS.home.community} alt="" />
                <img src={ASSETS.home.programs} alt="" />
              </div>
            </div>
            <div className="ahct-journey-cards">
              <div className="ahct-vision-card">
                <h3>{t('Vision', 'दृष्टि', 'దృష్టి')}</h3>
                <p>{t('To build a mentally resilient society where every individual has access to compassionate, culturally grounded psychological support.', 'एक मानसिक रूप से लचीला समाज बनाना जहां हर व्यक्ति को दयालु, सांस्कृतिक रूप से आधारित मनोवैज्ञानिक सहायता मिले।', 'ప్రతి వ్యక్తికి దయగల, సాంస్కృతికంగా ఆధారిత మనస్తత్వశాస్త్ర మద్దతు అందుబాటులో ఉండే మానసికంగా స్థిరమైన సమాజాన్ని నిర్మించడం.')}</p>
              </div>
              <div className="ahct-mission-card">
                <h3>{t('Mission', 'मिशन', 'మిషన్')}</h3>
                <p>{t('To promote preventive, community-based mental healthcare and empower volunteers, schools, and families through awareness and training.', 'निवारक, समुदाय-आधारित मानसिक स्वास्थ्य देखभाल को बढ़ावा देना और जागरूकता और प्रशिक्षण के माध्यम से स्वयंसेवकों, स्कूलों और परिवारों को सशक्त बनाना।', 'నివారణ, సమాజ-ఆధారిత మానసిక ఆరోగ్య సంరక్షణను ప్రోత్సహించడం మరియు అవగాహన మరియు శిక్షణ ద్వారా స్వచ్ఛంద సేవకులు, పాఠశాలలు మరియు కుటుంబాలను శక్తివంతం చేయడం.')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Desk */}
      <section className="ahct-founder">
        <div className="ahct-founder-inner">
          <div className="ahct-founder-photo">
            <img src={ASSETS.about.founder} alt="Dr. Sahithyaa Raghu" />
          </div>
          <div className="ahct-founder-text">
            <h2>{t("Founder's Desk", 'संस्थापक का डेस्क', 'స్థాపకుని డెస్క్')}</h2>
            <blockquote>
              {t(
                'When we strengthen minds, we strengthen families. When we strengthen families, we strengthen society. Care does not always begin in a therapy room — sometimes it begins with one informed teacher, one trained volunteer, one aware parent.',
                'जब हम दिमाग को मजबूत करते हैं, हम परिवारों को मजबूत करते हैं। जब हम परिवारों को मजबूत करते हैं, हम समाज को मजबूत करते हैं। देखभाल हमेशा थेरेपी कक्ष में शुरू नहीं होती — कभी-कभी यह एक जानकार शिक्षक, एक प्रशिक्षित स्वयंसेवक, एक जागरूक अभिभावक से शुरू होती है।',
                'మనం మనస్సులను బలోపేతం చేసినప్పుడు, కుటుంబాలను బలోపేతం చేస్తాము. కుటుంబాలను బలోపేతం చేసినప్పుడు సమాజాన్ని బలోపేతం చేస్తాము. సంరక్షణ ఎల్లప్పుడూ థెరపీ గదిలో ప్రారంభం కాదు — కొన్నిసార్లు ఒక తెలివైన ఉపాధ్యాయుడు, ఒక శిక్షణ పొందిన స్వచ్ఛంద సేవకుడు, ఒక అవగాహన ఉన్న తల్లిదండ్రులతో ప్రారంభమవుతుంది.'
              )}
            </blockquote>
            <p className="ahct-founder-name">Dr. Sahithyaa Raghu</p>
            <p className="ahct-founder-role">{t('Managing Trustee, Sankalpam Mind & Wellness Foundation', 'प्रबंध न्यासी, संकल्पम माइंड एंड वेलनेस फाउंडेशन', 'నిర్వహణ ధృవపత్రి, సంకల్పం మనస్ & వెల్నెస్ ఫౌండేషన్')}</p>
          </div>
        </div>
      </section>

      {/* Flagship Programs */}
      <section className="ahct-programs">
        <div className="ahct-programs-inner">
          <h2 className="ahct-section-title">{t('Flagship Programs', 'मुख्य कार्यक्रम', 'ముఖ్య కార్యక్రమాలు')}</h2>
          <div className="ahct-programs-grid">
            {flagshipPrograms.map((prog, i) => (
              <div key={i} className="ahct-program-card">
                <h3>{t(prog.titleEn, prog.titleHi, prog.titleTe)}</h3>
                <p>{t(prog.descEn, prog.descHi, prog.descTe)}</p>
                <Link to="/initiatives">{t('Know More', 'और जानें', 'మరింత తెలుసుకోండి')}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="ahct-impact">
        <div className="ahct-impact-inner">
          <h2 className="ahct-section-title">{t('Our Impact', 'हमारा प्रभाव', 'మా ప్రభావం')}</h2>
          <div className="ahct-impact-grid">
            {impactStats.map((stat, i) => (
              <div key={i} className="ahct-impact-stat">
                <span className="ahct-impact-num">{stat.num}</span>
                <span className="ahct-impact-label">{t(stat.labelEn, stat.labelHi, stat.labelTe)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="ahct-quote">
        <blockquote>
          {t('"The future belongs to those who believe in the beauty of their dreams."', '"भविष्य उनका है जो अपने सपनों की सुंदरता में विश्वास करते हैं।"', '"భవిష్యత్తు తమ కలల సౌందర్యంపై విశ్వసించేవారిది."')}
        </blockquote>
        <cite>— Eleanor Roosevelt</cite>
      </section>

      {/* Back link */}
      <div className="ahct-back">
        <Link to="/templates">← {t('Back to templates', 'टेम्पलेट पर वापस', 'టెంప్లేట్లకు తిరిగి')}</Link>
      </div>
    </div>
  );
}
