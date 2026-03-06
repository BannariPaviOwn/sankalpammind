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

      {/* Our Journey – clean layout */}
      <section className="home-journey">
        <div className="home-journey-inner">
          <div className="home-journey-header">
            <span className="home-journey-badge">{t('About Us', 'हमारे बारे में', 'మా గురించి')}</span>
            <h2 className="home-section-title home-journey-title">{t('Our Journey', 'हमारी यात्रा', 'మా ప్రయాణం')}</h2>
            <p className="home-journey-lead">
              {t(
                'SANKALPAM Mind & Wellness Foundation exists to make emotional wellbeing simple, safe, and reachable. Through counselling, community outreach, and training, we empower villages, schools, and families.',
                'संकल्पम माइंड एंड वेलनेस फाउंडेशन भावनात्मक कल्याण को सरल, सुरक्षित और पहुंच के भीतर बनाने के लिए मौजूद है। परामर्श, समुदाय आउटरीच और प्रशिक्षण के माध्यम से हम गाँवों, स्कूलों और परिवारों को सशक्त बनाते हैं।',
                'సంకల్పం మనస్ & వెల్నెస్ ఫౌండేషన్ భావనాత్మక క్షేమాన్ని సరళంగా, సురక్షితంగా మరియు అందుబాటులో ఉంచడానికి ఉంది. సలహా, సమాజ విస్తరణ మరియు శిక్షణ ద్వారా మేము గ్రామాలు, పాఠశాలలు మరియు కుటుంబాలను శక్తివంతం చేస్తాము.'
              )}
            </p>
          </div>

          <div className="home-journey-cards-row">
            <div className="home-vision-card">
              <span className="home-journey-card-num">01</span>
              <h3>{t('Vision', 'दृष्टि', 'దృష్టి')}</h3>
              <p>{t('To build a mentally resilient society where every individual has access to compassionate, culturally grounded psychological support.', 'एक मानसिक रूप से लचीला समाज बनाना जहां हर व्यक्ति को दयालु, सांस्कृतिक रूप से आधारित मनोवैज्ञानिक सहायता मिले।', 'ప్రతి వ్యక్తికి దయగల, సాంస్కృతికంగా ఆధారిత మనస్తత్వశాస్త్ర మద్దతు అందుబాటులో ఉండే మానసికంగా స్థిరమైన సమాజాన్ని నిర్మించడం.')}</p>
            </div>
            <div className="home-mission-card">
              <span className="home-journey-card-num">02</span>
              <h3>{t('Mission', 'मिशन', 'మిషన్')}</h3>
              <p>{t('To promote preventive, community-based mental healthcare and empower volunteers, schools, and families through awareness and training.', 'निवारक, समुदाय-आधारित मानसिक स्वास्थ्य देखभाल को बढ़ावा देना और जागरूकता और प्रशिक्षण के माध्यम से स्वयंसेवकों, स्कूलों और परिवारों को सशक्त बनाना।', 'నివారణ, సమాజ-ఆధారిత మానసిక ఆరోగ్య సంరక్షణను ప్రోత్సహించడం మరియు అవగాహన మరియు శిక్షణ ద్వారా స్వచ్ఛంద సేవకులు, పాఠశాలలు మరియు కుటుంబాలను శక్తివంతం చేయడం.')}</p>
            </div>
          </div>

          <div className="home-journey-images-wrap">
            <h4 className="home-journey-gallery-label">{t('Moments from our journey', 'हमारी यात्रा के पल', 'మా ప్రయాణం నుండి క్షణాలు')}</h4>
            <div className="home-journey-images">
              <div className="home-journey-img-card">
                <img src={ASSETS.home.ourWork} alt="" />
              </div>
              <div className="home-journey-img-card home-journey-img-featured">
                <img src={ASSETS.home.community} alt="" />
              </div>
              <div className="home-journey-img-card">
                <img src={ASSETS.home.programs} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Desk – AHCT-style */}
      <section className="home-founder">
        <div className="home-founder-inner">
          <div className="home-founder-photo">
            <img src={ASSETS.about.founder2} alt="Dr. Sahithyaa Raghu" />
          </div>
          <div className="home-founder-text">
            <h2 className="home-founder-title">{t("Founder's Desk", 'संस्थापक का डेस्क', 'స్థాపకుని డెస్క్')}</h2>
            <div className="home-founder-quote-wrap">
              <span className="home-founder-quote-open">"</span>
              <blockquote>
                <p>
                  {t(
                    'Through my work, I have witnessed the silent emotional struggles many individuals and families carry without timely support. SANKALPAM was founded to make mental wellbeing accessible, preventive, and rooted in community care.',
                    'Through my work, I have witnessed the silent emotional struggles many individuals and families carry without timely support. SANKALPAM was founded to make mental wellbeing accessible, preventive, and rooted in community care.'
                  )}
                </p>
                <p>
                  {t(
                    'Our vision is to build a society where every individual feels supported, understood, and empowered to live with strength and dignity.',
                    'Our vision is to build a society where every individual feels supported, understood, and empowered to live with strength and dignity.'
                  )}
                </p>
              </blockquote>
              <span className="home-founder-quote-close">"</span>
            </div>
            <p className="home-founder-name">Dr. Sahithyaa Raghu</p>
            <p className="home-founder-role">{t('Managing Trustee', 'प्रबंध न्यासी', 'నిర్వహణ ధృవపత్రి')}</p>
            <p className="home-founder-org">{t('SANKALPAM Mind & Wellness Foundation', 'संकल्पम माइंड एंड वेलनेस फाउंडेशन', 'సంకల్పం మనస్ & వెల్నెస్ ఫౌండేషన్')}</p>
            <div className="home-founder-social">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
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
