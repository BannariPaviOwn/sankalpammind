import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import TextCarousel from '../components/TextCarousel';
import ImageTextSection from '../components/ImageTextSection';
import PhotoPlaceholder from '../components/PhotoPlaceholder';
import { ASSETS } from '../assets';
import './Home.css';

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-gradient hero-gradient-1"></div>
          <div className="hero-gradient hero-gradient-2"></div>
          <div className="hero-gradient hero-gradient-3"></div>
        </div>
        <div className="hero-content">
          <div className="hero-title-block">
            <h1 className="hero-title">
              <span className="hero-title-main">{t('SANKALPAM', 'संकल्पम', 'సంకల్పం')}</span>
            </h1>
            <span className="hero-title-divider" aria-hidden="true"></span>
            <p className="hero-subtitle">
              {t('Mind & Wellness Foundation', 'माइंड एंड वेलनेस फाउंडेशन', 'మనస్ & వెల్నెస్ ఫౌండేషన్')}
            </p>
          </div>
          <p className="hero-tagline">
            {t('Change begins when care reaches the roots.', 'बदलाव तब शुरू होता है जब देखभाल जड़ों तक पहुँचती है।', 'సంరక్షణ మూలాలకు చేరుకున్నప్పుడు మార్పు ప్రారంభమవుతుంది.')}
          </p>
          <p className="hero-tagline-sub">
            {t('Community Mental Health | Emotional Wellbeing | Rural Outreach', 'समुदाय मानसिक स्वास्थ्य | भावनात्मक कल्याण | ग्रामीण आउटरीच', 'సమాజ మానసిక ఆరోగ్యం | భావనాత్మక క్షేమం | గ్రామీణ విస్తరణ')}
          </p>
          <p className="hero-section-label">{t('HOME', 'होम', 'హోమ్')}</p>
          <h2 className="hero-heading">
            {t('Because Mental Wellbeing Is Not a Luxury', 'क्योंकि मानसिक कल्याण विलासिता नहीं है', 'ఎందుకంటే మానసిక క్షేమం విలాసవంతమైనది కాదు')}
          </h2>
          <p className="hero-desc">
            {t(
              'Behind every strong face, there may be an untold story. Behind every silence, a struggle unseen.',
              'हर मजबूत चेहरे के पीछे एक अनकही कहानी हो सकती है। हर चुप्पी के पीछे एक अनदेखा संघर्ष।',
              'ప్రతి బలమైన ముఖం వెనుక చెప్పని కథ ఉండవచ్చు. ప్రతి నిశ్శబ్దం వెనుక కనిపించని పోరాటం.'
            )}
          </p>
          <p className="hero-desc">
            {t(
              'Mental health is woven into everyday life — in the way children learn, in the way couples communicate, in the way communities respond to hardship, in the way individuals carry hope.',
              'मानसिक स्वास्थ्य रोजमर्रा की जिंदगी में बुना हुआ है — जिस तरह बच्चे सीखते हैं, जिस तरह जोड़े संवाद करते हैं, जिस तरह समुदाय कठिनाई का जवाब देते हैं, जिस तरह व्यक्ति उम्मीद लेकर चलते हैं।',
              'మానసిక ఆరోగ్యం రోజువారీ జీవితంలో నేసబడింది — పిల్లలు ఎలా నేర్చుకుంటారు, జంటలు ఎలా సంభాషిస్తారు, సమాజం ఎలా కష్టానికి ప్రతిస్పందిస్తుంది, వ్యక్తులు ఎలా ఆశను మోస్తారు.'
            )}
          </p>
          <p className="hero-desc">
            {t(
              'SANKALPAM Mind & Wellness Foundation exists to make emotional wellbeing simple, safe, and reachable — not only during crisis, but in everyday life.',
              'संकल्पम माइंड एंड वेलनेस फाउंडेशन भावनात्मक कल्याण को सरल, सुरक्षित और पहुंच के भीतर बनाने के लिए मौजूद है — न केवल संकट के दौरान, बल्कि रोजमर्रा की जिंदगी में।',
              'సంకల్పం మనస్ & వెల్నెస్ ఫౌండేషన్ భావనాత్మక క్షేమాన్ని సరళంగా, సురక్షితంగా మరియు అందుబాటులో ఉంచడానికి ఉంది — సంక్షోభ సమయంలో మాత్రమే కాకుండా రోజువారీ జీవితంలో కూడా.'
            )}
          </p>
          <div className="hero-cta">
            <Link to="/donate" className="btn btn-primary">
              {t('Support Mental Wellbeing', 'मानसिक कल्याण का समर्थन करें', 'మానసిక క్షేమానికి మద్దతు ఇవ్వండి')}
            </Link>
            <Link to="/about" className="btn btn-secondary">
              {t('Partner with Us', 'हमारे साथ साझेदारी करें', 'మాతో భాగస్వామ్యం చేయండి')}
            </Link>
          </div>
        </div>
      </section>

      {/* Hero photo strip placeholder */}
      <section className="photo-strip">
        <div className="photo-strip-inner">
          <PhotoPlaceholder src={ASSETS.home.ourWork} labelEn="Our work" labelHi="हमारा काम" labelTe="మా పని" ratio="16/9" />
          <PhotoPlaceholder src={ASSETS.home.community} labelEn="Community" labelHi="समुदाय" labelTe="సమాజం" ratio="16/9" />
          <PhotoPlaceholder src={ASSETS.home.programs} labelEn="Programs" labelHi="कार्यक्रम" labelTe="కార్యక్రమాలు" ratio="16/9" />
        </div>
      </section>

      <section className="pillars">
        <h2 className="section-heading">
          🌿 {t('Our Impact Pillars', 'हमारे प्रभाव स्तंभ', 'మా ప్రభావ స్తంభాలు')}
        </h2>
        <div className="pillars-grid">
          <div className="pillar-card pillar-1">
            <span className="pillar-icon">1️⃣</span>
            <h3>{t('Community Access', 'समुदाय पहुंच', 'సమాజ ప్రవేశం')}</h3>
            <p>
              {t(
                'Bringing mental health support beyond clinics into villages, schools, and underserved communities.',
                'ग्रामीण इलाकों, स्कूलों और वंचित समुदायों में क्लीनिकों के बाहर मानसिक स्वास्थ्य सहायता पहुंचाना।',
                'గ్రామాలు, పాఠశాలలు మరియు అల్పసేవా సమాజాలకు క్లినిక్లకు మించి మానసిక ఆరోగ్య మద్దతును తీసుకువెళ్లడం.'
              )}
            </p>
          </div>
          <div className="pillar-card pillar-2">
            <span className="pillar-icon">2️⃣</span>
            <h3>{t('Early Intervention for Children & Youth', 'बच्चों और युवाओं के लिए प्रारंभिक हस्तक्षेप', 'పిల్లలు మరియు యువతకు ప్రారంభ జోక్యం')}</h3>
            <p>
              {t(
                'Strengthening emotional foundations through screening, guidance, and skill-building programs.',
                'स्क्रीनिंग, मार्गदर्शन और कौशल निर्माण कार्यक्रमों के माध्यम से भावनात्मक नींव को मजबूत करना।',
                'స్క్రీనింగ్, మార్గదర్శకత్వం మరియు నైపుణ్య నిర్మాణ కార్యక్రమాల ద్వారా భావనాత్మక పునాదులను బలోపేతం చేయడం.'
              )}
            </p>
          </div>
          <div className="pillar-card pillar-3">
            <span className="pillar-icon">3️⃣</span>
            <h3>{t('Women & Family Wellbeing', 'महिला और परिवार कल्याण', 'మహిళలు మరియు కుటుంబ క్షేమం')}</h3>
            <p>
              {t(
                'Supporting caregivers, working women, and families to build emotionally healthy homes.',
                'देखभाल करने वालों, कामकाजी महिलाओं और परिवारों को भावनात्मक रूप से स्वस्थ घर बनाने में सहायता करना।',
                'సంరక్షకులు, ఉద్యోగి మహిళలు మరియు కుటుంబాలకు భావనాత్మకంగా ఆరోగ్యకరమైన ఇళ్లను నిర్మించడంలో మద్దతు ఇవ్వడం.'
              )}
            </p>
          </div>
          <div className="pillar-card pillar-4">
            <span className="pillar-icon">4️⃣</span>
            <h3>{t('Capacity Building & Volunteer Leadership', 'क्षमता निर्माण और स्वयंसेवक नेतृत्व', 'సామర్థ్య నిర్మాణం మరియు స్వచ్ఛంద నాయకత్వం')}</h3>
            <p>
              {t(
                'Training grassroots volunteers and partners to create sustainable community mental health networks.',
                'टिकाऊ समुदाय मानसिक स्वास्थ्य नेटवर्क बनाने के लिए जमीनी स्तर के स्वयंसेवकों और भागीदारों को प्रशिक्षण देना।',
                'భద్రతా సమాజ మానసిక ఆరోగ్య నెట్‌వర్క్‌లను సృష్టించడానికి స్థానిక స్వచ్ఛంద సేవకులు మరియు భాగస్వాములకు శిక్షణ ఇవ్వడం.'
              )}
            </p>
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
        gradient="linear-gradient(135deg, #e0e7ff 0%, #fce7f3 100%)"
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

      <ImageTextSection
        image={ASSETS.home.programsServices}
        imagePosition="right"
        titleEn="Our Programs & Services"
        titleHi="हमारे कार्यक्रम और सेवाएं"
        titleTe="మా కార్యక్రమాలు మరియు సేవలు"
        contentEn="We operate across individual, institutional, and community levels — ensuring mental wellbeing is preventive, accessible, and culturally grounded. From counselling and therapeutic services to school programs, youth development, women and family wellbeing, corporate wellness, community outreach, and training."
        contentHi="हम व्यक्तिगत, संस्थागत और समुदाय स्तर पर काम करते हैं — यह सुनिश्चित करते हुए कि मानसिक कल्याण निवारक, पहुंच योग्य और सांस्कृतिक रूप से आधारित हो।"
        contentTe="మేము వ్యక్తిగత, సంస్థాగత మరియు సమాజ స్థాయిలలో పనిచేస్తాము — మానసిక క్షేమం నివారణ, అందుబాటు మరియు సాంస్కృతికంగా ఆధారితంగా ఉండేలా నిర్ధారిస్తాము."
        gradient="linear-gradient(135deg, #fef3c7 0%, #e0e7ff 100%)"
        ctaEn="View Programs"
        ctaHi="कार्यक्रम देखें"
        ctaTe="కార్యక్రమాలు చూడండి"
        ctaLink="/initiatives"
      />

      <section className="cta-banner">
        <h2>{t('When care reaches the roots, change becomes sustainable.', 'जब देखभाल जड़ों तक पहुँचती है, बदलाव टिकाऊ हो जाता है।', 'సంరక్షణ మూలాలకు చేరుకున్నప్పుడు, మార్పు శాశ్వతమవుతుంది.')}</h2>
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
