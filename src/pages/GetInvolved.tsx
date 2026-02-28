import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import PhotoPlaceholder from '../components/PhotoPlaceholder';
import { ASSETS } from '../assets';
import './GetInvolved.css';

export default function GetInvolved() {
  const { t } = useLanguage();

  return (
    <div className="get-involved-page">
      <section className="get-involved-hero">
        <h1>{t('Get Involved', 'जुड़ें', 'చేరండి')}</h1>
        <p>
          {t(
            'Mental health grows stronger when communities take ownership.',
            'मानसिक स्वास्थ्य तब मजबूत होता है जब समुदाय स्वामित्व लेते हैं।',
            'సమాజాలు యాజమాన్యం తీసుకున్నప్పుడు మానసిక ఆరోగ్యం బలంగా పెరుగుతుంది.'
          )}
        </p>
      </section>

      <section className="volunteer-section">
        <h2>🤝 {t('Volunteer With Us', 'हमारे साथ स्वयंसेवक बनें', 'మాతో స్వచ్ఛందంగా పనిచేయండి')}</h2>
        <p className="section-intro">
          {t('Our Model: Train-the-Trainer', 'हमारा मॉडल: ट्रेन-द-ट्रेनर', 'మా మోడల్: ట్రెయిన్-ది-ట్రెయినర్')}
        </p>
        <ul className="bullet-list">
          <li>{t('Train volunteers in foundational mental health awareness', 'स्वयंसेवकों को मूलभूत मानसिक स्वास्थ्य जागरूकता में प्रशिक्षित करना', 'స్వచ్ఛంద సేవకులకు మౌలిక మానసిక ఆరోగ్య అవగాహనలో శిక్షణ ఇవ్వడం')}</li>
          <li>{t('Equip them with Psychological First Aid skills', 'उन्हें मनोवैज्ञानिक प्रथम सहायता कौशल से लैस करना', 'వారికి మనస్తత్వశాస్త్ర ప్రథమ సహాయ నైపుణ్యాలతో సజ్జీకరించడం')}</li>
          <li>{t('Provide structured materials', 'संरचित सामग्री प्रदान करना', 'నిర్మాణాత్మక సామగ్రి అందించడం')}</li>
          <li>{t('Offer mentorship & supervision', 'सलाहकार और पर्यवेक्षण प्रदान करना', 'మార్గదర్శకత్వం మరియు పర్యవేక్షణ అందించడం')}</li>
          <li>{t('Enable them to conduct sessions locally', 'उन्हें स्थानीय स्तर पर सत्र आयोजित करने में सक्षम बनाना', 'వారు స్థానికంగా సెషన్లు నిర్వహించడానికి వీలు కల్పించడం')}</li>
        </ul>
        <p className="section-note">
          {t('This ensures knowledge continues — even after we step back.', 'इससे ज्ञान जारी रहता है — हमारे हटने के बाद भी।', 'ఇది జ్ఞానం కొనసాగుతుందని నిర్ధారిస్తుంది — మేము వెనుకకు వెళ్లిన తర్వాత కూడా.')}
        </p>

        <h3>{t('Who Can Volunteer?', 'कौन स्वयंसेवक बन सकता है?', 'ఎవరు స్వచ్ఛందంగా పనిచేయవచ్చు?')}</h3>
        <ul className="bullet-list">
          <li>{t('Psychology & Social Work students', 'मनोविज्ञान और सामाजिक कार्य के छात्र', 'మనస్తత్వశాస్త్రం మరియు సామాజిక కార్యం విద్యార్థులు')}</li>
          <li>{t('Teachers & educators', 'शिक्षक और शिक्षाविद', 'ఉపాధ్యాయులు మరియు విద్యావేత్తలు')}</li>
          <li>{t('Healthcare workers', 'स्वास्थ्य कर्मी', 'ఆరోగ్య కార్మికులు')}</li>
          <li>{t('Corporate professionals', 'कॉर्पोरेट पेशेवर', 'కార్పొరేట్ నిపుణులు')}</li>
          <li>{t('Community leaders', 'समुदाय नेता', 'సమాజ నాయకులు')}</li>
          <li>{t('Anyone committed to mental wellbeing', 'मानसिक कल्याण के प्रति प्रतिबद्ध कोई भी', 'మానసిక క్షేమానికి నిబద్ధత ఉన్న ఎవరైనా')}</li>
        </ul>
        <p className="section-note">
          {t('No clinical background required — only commitment.', 'कोई नैदानिक पृष्ठभूमि की आवश्यकता नहीं — केवल प्रतिबद्धता।', 'క్లినికల్ నేపథ్యం అవసరం లేదు — నిబద్ధత మాత్రమే.')}
        </p>

        <div className="photo-row">
          <PhotoPlaceholder src={ASSETS.getInvolved.volunteers} labelEn="Volunteers" labelHi="स्वयंसेवक" labelTe="స్వచ్ఛంద సేవకులు" ratio="16/9" />
          <PhotoPlaceholder src={ASSETS.getInvolved.training} labelEn="Training" labelHi="प्रशिक्षण" labelTe="శిక్షణ" ratio="16/9" />
        </div>
      </section>

      <section className="partner-section">
        <h2>🤝 {t('Partner With Us', 'हमारे साथ साझेदारी करें', 'మాతో భాగస్వామ్యం చేయండి')}</h2>
        <p className="section-intro">
          {t('We collaborate with:', 'हम सहयोग करते हैं:', 'మేము సహకరిస్తాము:')}
        </p>
        <ul className="partner-icons">
          <li>🏫 {t('Schools', 'स्कूल', 'పాఠశాలలు')}</li>
          <li>🏢 {t('CSR & Corporates', 'CSR और कॉर्पोरेट', 'CSR మరియు కార్పొరేట్')}</li>
          <li>🌾 {t('NGOs', 'एनजीओ', 'ఎన్జీఓలు')}</li>
          <li>🏥 {t('Healthcare Institutions', 'स्वास्थ्य संस्थान', 'ఆరోగ్య సంస్థలు')}</li>
        </ul>

        <h3>{t('Why Partner With Us?', 'हमारे साथ क्यों साझेदारी करें?', 'మాతో ఎందుకు భాగస్వామ్యం చేయాలి?')}</h3>
        <ul className="bullet-list">
          <li>{t('Prevention-focused', 'रोकथाम-केंद्रित', 'నివారణ-కేంద్రీకృతం')}</li>
          <li>{t('Community-centered', 'समुदाय-केंद्रित', 'సమాజ-కేంద్రీకృతం')}</li>
          <li>{t('Professionally guided', 'पेशेवर रूप से निर्देशित', 'వృత్తిపరమైనంగా మార్గదర్శకత్వం')}</li>
          <li>{t('Ethically governed', 'नैतिक रूप से शासित', 'నైతికంగా పాలించబడుతుంది')}</li>
          <li>{t('Transparent & impact-driven', 'पारदर्शी और प्रभाव-संचालित', 'పారదర్శకం మరియు ప్రభావ-చోదితం')}</li>
        </ul>

        <div className="approach-box">
          <h3>🌿 {t('Our Approach', 'हमारा दृष्टिकोण', 'మా విధానం')}</h3>
          <p>
            {t('Preventive. Life-span focused. Community-centered. Culturally grounded. Ethically governed.', 'निवारक। जीवन-स्पैन केंद्रित। समुदाय-केंद्रित। सांस्कृतिक रूप से आधारित। नैतिक रूप से शासित।', 'నివారణ. జీవిత-వ్యాప్తి కేంద్రీకృతం. సమాజ-కేంద్రీకృతం. సాంస్కృతికంగా ఆధారితం. నైతికంగా పాలించబడుతుంది.')}
          </p>
        </div>

        <div className="work-with-us">
          <h3>📩 {t('Work With Us', 'हमारे साथ काम करें', 'మాతో పనిచేయండి')}</h3>
          <p>
            {t(
              'Whether you are an individual seeking support, a school nurturing young minds, a corporate building safer workplaces, or a community leader strengthening your village — we invite you to collaborate. Because when care reaches the roots, change becomes sustainable.',
              'चाहे आप सहायता चाहने वाले व्यक्ति हों, युवा मन को पोषण देने वाला स्कूल, सुरक्षित कार्यस्थल बनाने वाला कॉर्पोरेट, या अपने गाँव को मजबूत करने वाले समुदाय नेता — हम आपको सहयोग के लिए आमंत्रित करते हैं। क्योंकि जब देखभाल जड़ों तक पहुँचती है, बदलाव टिकाऊ हो जाता है।',
              'మీరు మద్దతు కోరుతున్న వ్యక్తి అయినా, యువ మనస్సులను పోషించే పాఠశాల అయినా, సురక్షిత పనిచోట్లను నిర్మిస్తున్న కార్పొరేట్ అయినా, లేదా మీ గ్రామాన్ని బలోపేతం చేస్తున్న సమాజ నాయకుడు అయినా — మేము మిమ్మల్ని సహకరించడానికి ఆహ్వానిస్తున్నాము. ఎందుకంటే సంరక్షణ మూలాలకు చేరుకున్నప్పుడు మార్పు శాశ్వతమవుతుంది.'
            )}
          </p>
          <Link to="/donate" className="btn-involved">
            {t('Support Our Mission', 'हमारे मिशन का समर्थन करें', 'మా మిషన్‌కు మద్దతు ఇవ్వండి')}
          </Link>
        </div>

        <div className="photo-row">
          <PhotoPlaceholder src={ASSETS.getInvolved.partners} labelEn="Partners" labelHi="साझेदार" labelTe="భాగస్వాములు" ratio="4/3" />
          <PhotoPlaceholder src={ASSETS.getInvolved.community} labelEn="Community" labelHi="समुदाय" labelTe="సమాజం" ratio="4/3" />
          <PhotoPlaceholder src={ASSETS.getInvolved.impact} labelEn="Impact" labelHi="प्रभाव" labelTe="ప్రభావం" ratio="4/3" />
        </div>
      </section>
    </div>
  );
}
