import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import TextCarousel from '../components/TextCarousel';
import ImageTextSection from '../components/ImageTextSection';
import PhotoPlaceholder from '../components/PhotoPlaceholder';
import { ASSETS } from '../assets';
import './Home.css';

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

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero – AHCT-style blue gradient */}
      <section className="home-hero">
        <div className="home-hero-inner">
          <h1 className="home-hero-tagline">
            {t('Healthy Minds Build Healthy Communities', 'स्वस्थ मन स्वस्थ समुदाय बनाते हैं', 'ఆరోగ్యకరమైన మనస్సులు ఆరోగ్యకరమైన సమాజాలను నిర్మిస్తాయి')}
          </h1>
          <p className="home-hero-sub">
            {t(
              'We make emotional wellbeing simple, safe, and reachable — in villages, schools, and everyday life.',
              'हम भावनात्मक कल्याण को सरल, सुरक्षित और पहुंच के भीतर बनाते हैं — गाँवों, स्कूलों और रोजमर्रा की जिंदगी में।',
              'మేము భావనాత్మక క్షేమాన్ని సరళంగా, సురక్షితంగా మరియు అందుబాటులో చేస్తాము — గ్రామాలు, పాఠశాలలు మరియు రోజువారీ జీవితంలో.'
            )}
          </p>
          <div className="home-hero-cta">
            <Link to="/donate" className="home-hero-btn">
              {t('Support Our Mission', 'हमारे मिशन का समर्थन करें', 'మా మిషన్‌కు మద్దతు ఇవ్వండి')}
            </Link>
            <Link to="/initiatives" className="home-hero-btn-outline">
              {t('Explore Programs', 'कार्यक्रम देखें', 'కార్యక్రమాలు అన్వేషించండి')}
            </Link>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="home-journey">
        <div className="home-journey-inner">
          <h2 className="home-section-title">{t('Our Journey', 'हमारी यात्रा', 'మా ప్రయాణం')}</h2>
          <div className="home-journey-grid">
            <div className="home-journey-text">
              <p>
                {t(
                  'SANKALPAM Mind & Wellness Foundation exists to make emotional wellbeing simple, safe, and reachable. Through counselling, community outreach, and training, we empower villages, schools, and families. Our journey is a testament to the power of consistent vision and purposeful action — and we are only getting started.',
                  'संकल्पम माइंड एंड वेलनेस फाउंडेशन भावनात्मक कल्याण को सरल, सुरक्षित और पहुंच के भीतर बनाने के लिए मौजूद है। परामर्श, समुदाय आउटरीच और प्रशिक्षण के माध्यम से हम गाँवों, स्कूलों और परिवारों को सशक्त बनाते हैं।',
                  'సంకల్పం మనస్ & వెల్నెస్ ఫౌండేషన్ భావనాత్మక క్షేమాన్ని సరళంగా, సురక్షితంగా మరియు అందుబాటులో ఉంచడానికి ఉంది. సలహా, సమాజ విస్తరణ మరియు శిక్షణ ద్వారా మేము గ్రామాలు, పాఠశాలలు మరియు కుటుంబాలను శక్తివంతం చేస్తాము.'
                )}
              </p>
              <div className="home-journey-images">
                <img src={ASSETS.home.ourWork} alt="" />
                <img src={ASSETS.home.community} alt="" />
                <img src={ASSETS.home.programs} alt="" />
              </div>
            </div>
            <div className="home-journey-cards">
              <div className="home-vision-card">
                <h3>{t('Vision', 'दृष्टि', 'దృష్టి')}</h3>
                <p>{t('To build a mentally resilient society where every individual has access to compassionate, culturally grounded psychological support.', 'एक मानसिक रूप से लचीला समाज बनाना जहां हर व्यक्ति को दयालु, सांस्कृतिक रूप से आधारित मनोवैज्ञानिक सहायता मिले।', 'ప్రతి వ్యక్తికి దయగల, సాంస్కృతికంగా ఆధారిత మనస్తత్వశాస్త్ర మద్దతు అందుబాటులో ఉండే మానసికంగా స్థిరమైన సమాజాన్ని నిర్మించడం.')}</p>
              </div>
              <div className="home-mission-card">
                <h3>{t('Mission', 'मिशन', 'మిషన్')}</h3>
                <p>{t('To promote preventive, community-based mental healthcare and empower volunteers, schools, and families through awareness and training.', 'निवारक, समुदाय-आधारित मानसिक स्वास्थ्य देखभाल को बढ़ावा देना और जागरूकता और प्रशिक्षण के माध्यम से स्वयंसेवकों, स्कूलों और परिवारों को सशक्त बनाना।', 'నివారణ, సమాజ-ఆధారిత మానసిక ఆరోగ్య సంరక్షణను ప్రోత్సహించడం మరియు అవగాహన మరియు శిక్షణ ద్వారా స్వచ్ఛంద సేవకులు, పాఠశాలలు మరియు కుటుంబాలను శక్తివంతం చేయడం.')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Desk */}
      <section className="home-founder">
        <div className="home-founder-inner">
          <div className="home-founder-photo">
            <img src={ASSETS.about.founder} alt="Dr. Sahithyaa Raghu" />
          </div>
          <div className="home-founder-text">
            <h2>{t("Founder's Desk", 'संस्थापक का डेस्क', 'స్థాపకుని డెస్క్')}</h2>
            <blockquote>
              {t(
                'When we strengthen minds, we strengthen families. When we strengthen families, we strengthen society. Care does not always begin in a therapy room — sometimes it begins with one informed teacher, one trained volunteer, one aware parent.',
                'जब हम दिमाग को मजबूत करते हैं, हम परिवारों को मजबूत करते हैं। जब हम परिवारों को मजबूत करते हैं, हम समाज को मजबूत करते हैं। देखभाल हमेशा थेरेपी कक्ष में शुरू नहीं होती — कभी-कभी यह एक जानकार शिक्षक, एक प्रशिक्षित स्वयंसेवक, एक जागरूक अभिभावक से शुरू होती है।',
                'మనం మనస్సులను బలోపేతం చేసినప్పుడు, కుటుంబాలను బలోపేతం చేస్తాము. కుటుంబాలను బలోపేతం చేసినప్పుడు సమాజాన్ని బలోపేతం చేస్తాము. సంరక్షణ ఎల్లప్పుడూ థెరపీ గదిలో ప్రారంభం కాదు — కొన్నిసార్లు ఒక తెలివైన ఉపాధ్యాయుడు, ఒక శిక్షణ పొందిన స్వచ్ఛంద సేవకుడు, ఒక అవగాహన ఉన్న తల్లిదండ్రులతో ప్రారంభమవుతుంది.'
              )}
            </blockquote>
            <p className="home-founder-name">Dr. Sahithyaa Raghu</p>
            <p className="home-founder-role">{t('Managing Trustee, Sankalpam Mind & Wellness Foundation', 'प्रबंध न्यासी, संकल्पम माइंड एंड वेलनेस फाउंडेशन', 'నిర్వహణ ధృవపత్రి, సంకల్పం మనస్ & వెల్నెస్ ఫౌండేషన్')}</p>
          </div>
        </div>
      </section>

      {/* Flagship Programs */}
      <section className="home-programs">
        <div className="home-programs-inner">
          <h2 className="home-section-title">{t('Flagship Programs', 'मुख्य कार्यक्रम', 'ముఖ్య కార్యక్రమాలు')}</h2>
          <div className="home-programs-grid">
            {flagshipPrograms.map((prog, i) => (
              <div key={i} className="home-program-card">
                <h3>{t(prog.titleEn, prog.titleHi, prog.titleTe)}</h3>
                <p>{t(prog.descEn, prog.descHi, prog.descTe)}</p>
                <Link to="/initiatives">{t('Know More', 'और जानें', 'మరింత తెలుసుకోండి')}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="home-impact">
        <div className="home-impact-inner">
          <h2 className="home-section-title home-section-title-light">{t('Our Impact', 'हमारा प्रभाव', 'మా ప్రభావం')}</h2>
          <div className="home-impact-grid">
            {impactStats.map((stat, i) => (
              <div key={i} className="home-impact-stat">
                <span className="home-impact-num">{stat.num}</span>
                <span className="home-impact-label">{t(stat.labelEn, stat.labelHi, stat.labelTe)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TextCarousel />

      <ImageTextSection
        image={ASSETS.home.aboutSankalpam}
        imagePosition="left"
        titleEn="About Sankalpam"
        titleHi="संकल्पम के बारे में"
        titleTe="సంకల్పం గురించి"
        contentEn="SANKALPAM means a conscious intention — a deep commitment to act with purpose. The foundation was born from a simple yet urgent realization: mental health support often reaches people too late, and rarely reaches rural and underserved communities at all. We bridge that gap — from stigma to strength, from crisis response to prevention, from urban privilege to community access."
        contentHi="संकल्पम का अर्थ है एक सचेत इरादा — उद्देश्य के साथ कार्य करने की गहरी प्रतिबद्धता। फाउंडेशन एक सरल लेकिन जरूरी अनुभव से पैदा हुआ: मानसिक स्वास्थ्य सहायता अक्सर लोगों तक बहुत देर से पहुंचती है, और ग्रामीण और वंचित समुदायों तक शायद ही कभी पहुंचती है।"
        contentTe="సంకల్పం అంటే ఒక స్పృహతో కూడిన ఉద్దేశ్యం — ఉద్దేశ్యంతో పనిచేయడానికి లోతైన నిబద్ధత. ఫౌండేషన్ ఒక సాధారణమైన కానీ అత్యవసరమైన అవగాహన నుండి జన్మించింది: మానసిక ఆరోగ్య మద్దతు తరచుగా ప్రజలకు చాలా ఆలస్యంగా చేరుతుంది, మరియు గ్రామీణ మరియు అల్పసేవా సమాజాలకు అరుదుగా చేరుతుంది. మేము ఆ ఖాళీను పూరిస్తాము."
        gradient="linear-gradient(135deg, #ddd6fe 0%, #ede8f8 100%)"
        ctaEn="About Us"
        ctaHi="हमारे बारे में"
        ctaTe="మా గురించి"
        ctaLink="/about"
      />

      <section className="photo-section">
        <h2 className="section-heading">{t('Moments from the field', 'मैदान से पल', 'మైదానం నుండి క్షణాలు')}</h2>
        <div className="photo-gallery">
          {ASSETS.home.gallery.map((src, i) => (
            <PhotoPlaceholder
              key={i}
              src={src}
              labelEn={`Photo ${i + 1}`}
              labelHi={`फोटो ${i + 1}`}
              labelTe={`ఫోటో ${i + 1}`}
              ratio="4/3"
            />
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="home-quote">
        <blockquote>
          {t('"When care reaches the roots, change becomes sustainable."', '"जब देखभाल जड़ों तक पहुँचती है, बदलाव टिकाऊ हो जाता है।"', '"సంరక్షణ మూలాలకు చేరుకున్నప్పుడు, మార్పు శాశ్వతమవుతుంది."')}
        </blockquote>
      </section>

      <section className="cta-banner">
        <h2>{t('Join us in building healthier communities.', 'स्वस्थ समुदाय बनाने में हमसे जुड़ें।', 'ఆరోగ్యకరమైన సమాజాలను నిర్మించడంలో మమ్మల్ని చేరండి.')}</h2>
        <div className="cta-banner-btns">
          <Link to="/donate" className="btn btn-donate">
            {t('Support Our Mission', 'हमारे मिशन का समर्थन करें', 'మా మిషన్‌కు మద్దతు ఇవ్వండి')}
          </Link>
          <Link to="/get-involved" className="btn btn-donate-outline">
            {t('Get Involved', 'जुड़ें', 'చేరండి')}
          </Link>
        </div>
      </section>

      <section className="help-section">
        <div className="help-cards">
          <Link to="/find-help" className="help-card">
            <span className="help-icon">🎧</span>
            <h3>{t('Speak to an Expert', 'विशेषज्ञ से बात करें', 'నిపుణుడితో మాట్లాడండి')}</h3>
            <p>{t('Find a Therapist', 'थेरेपिस्ट खोजें', 'చికిత్సకుడిని కనుగొనండి')}</p>
          </Link>
          <Link to="/find-help" className="help-card">
            <span className="help-icon">📞</span>
            <h3>{t('Helplines', 'हेल्पलाइन', 'హెల్ప్‌లైన్లు')}</h3>
            <p>#YouAreNotAlone</p>
          </Link>
        </div>
      </section>
    </>
  );
}
