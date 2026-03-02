import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ASSETS } from '../assets';
import './TemplatesGallery.css';

export default function TemplatesGallery() {
  const { t } = useLanguage();

  const templates = [
    { id: 1, path: '/style1', titleEn: 'Full-bleed hero', titleHi: 'पूर्ण छवि हीरो', titleTe: 'పూర్తి ఇమేజ్ హీరో', descEn: 'Image background with overlay', descHi: 'ओवरले के साथ छवि पृष्ठभूमि', descTe: 'ఓవర్లేతో ఇమేజ్ నేపథ్యం', thumb: ASSETS.home.programsServices },
    { id: 2, path: '/style2', titleEn: 'Split + card', titleHi: 'स्प्लिट + कार्ड', titleTe: 'స్ప్లిట్ + కార్డ్', descEn: 'Text left, image card right', descHi: 'बाएं टेक्स्ट, दाएं छवि कार्ड', descTe: 'ఎడమ వచనం, కుడి ఇమేజ్ కార్డ్', thumb: ASSETS.home.ourWork },
    { id: 3, path: '/style3', titleEn: 'Minimal + accent', titleHi: 'न्यूनतम + एक्सेंट', titleTe: 'కనిష్ట + యాక్సెంట్', descEn: 'Vertical bar, simple hero', descHi: 'ऊर्ध्वाधर बार, सरल हीरो', descTe: 'వర్టికల్ బార్, సాధారణ హీరో', thumb: ASSETS.home.aboutSankalpam },
    { id: 4, path: '/style4', titleEn: 'Gradient header', titleHi: 'ग्रेडिएंट हेडर', titleTe: 'గ్రేడియంట్ హెడర్', descEn: 'Purple bar, centered hero', descHi: 'बैंगनी बार, केंद्रित हीरो', descTe: 'పర్పుల్ బార్, కేంద్రీకృత హీరో', thumb: ASSETS.home.community },
    { id: 5, path: '/style5', titleEn: 'AHCT-inspired', titleHi: 'AHCT प्रेरित', titleTe: 'AHCT ప్రేరితం', descEn: 'Full layout: top bar, journey, founder, impact', descHi: 'पूर्ण लेआउट: टॉप बार, यात्रा, संस्थापक, प्रभाव', descTe: 'పూర్తి లేఅవుట్: టాప్ బార్, ప్రయాణం, స్థాపకుడు, ప్రభావం', thumb: ASSETS.home.aboutSankalpam },
  ];

  return (
    <div className="templates-gallery">
      <div className="templates-header">
        <h1>{t('Header & Hero Templates', 'हेडर और हीरो टेम्पलेट', 'హెడర్ మరియు హీరో టెంప్లేట్లు')}</h1>
        <p>{t('Choose a template to preview. When finalized, we can apply it to your home page.', 'पूर्वावलोकन के लिए एक टेम्पलेट चुनें। फाइनल होने पर, हम इसे आपके होम पेज पर लागू कर सकते हैं।', 'పూర్వవీక్షణ కోసం టెంప్లేట్ ఎంచుకోండి. ఫైనలైజ్ అయినప్పుడు, మేము దీన్ని మీ హోమ్ పేజీకి వర్తింపజేయవచ్చు.')}</p>
      </div>

      <div className="templates-grid">
        {templates.map((tmpl) => (
          <Link key={tmpl.id} to={tmpl.path} className="template-card">
            <div className="template-card-thumb">
              <img src={tmpl.thumb} alt="" />
            </div>
            <div className="template-card-body">
              <h3>{t(tmpl.titleEn, tmpl.titleHi, tmpl.titleTe)}</h3>
              <p>{t(tmpl.descEn, tmpl.descHi, tmpl.descTe)}</p>
              <span className="template-card-link">{t('Preview', 'पूर्वावलोकन', 'పూర్వవీక్షణ')} →</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="templates-footer">
        <Link to="/" className="templates-back">{t('← Back to Home', '← होम पर वापस', '← హోమ్‌కు తిరిగి')}</Link>
      </div>
    </div>
  );
}
