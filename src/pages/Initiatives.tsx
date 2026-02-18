import { useLanguage } from '../context/LanguageContext';
import './Initiatives.css';

interface ProgramItem {
  titleEn: string;
  titleHi: string;
  itemsEn: string[];
  itemsHi: string[];
  gradient: string;
}

const programs: ProgramItem[] = [
  {
    titleEn: '1. Counselling & Therapeutic Services',
    titleHi: '1. परामर्श और चिकित्सीय सेवाएं',
    gradient: 'linear-gradient(135deg, #e0e7ff 0%, #fce7f3 100%)',
    itemsEn: [
      'Individual counselling',
      'Child & adolescent therapy',
      'Family and marital counselling',
      "Women's mental health support",
      'Trauma-informed therapy',
      'Grief and loss support',
      'Anxiety, stress, and emotional regulation support',
      'Parenting guidance',
      'Online and in-person sessions',
    ],
    itemsHi: [
      'व्यक्तिगत परामर्श',
      'बाल और किशोर चिकित्सा',
      'पारिवारिक और वैवाहिक परामर्श',
      'महिला मानसिक स्वास्थ्य सहायता',
      'आघात-सूचित चिकित्सा',
      'दुःख और नुकसान सहायता',
      'चिंता, तनाव और भावनात्मक विनियमन सहायता',
      'पालन-पोषण मार्गदर्शन',
      'ऑनलाइन और व्यक्तिगत सत्र',
    ],
  },
  {
    titleEn: '2. School & College Mental Health Programs',
    titleHi: '2. स्कूल और कॉलेज मानसिक स्वास्थ्य कार्यक्रम',
    gradient: 'linear-gradient(135deg, #fce7f3 0%, #e0e7ff 100%)',
    itemsEn: [
      'Emotional literacy curriculum',
      'Life skills and resilience training',
      'Anti-bullying programs',
      'Adolescent mental health awareness',
      'Career guidance with emotional preparedness',
      'Teacher mental health training',
      'Parent workshops',
      'School counselling system development',
    ],
    itemsHi: [
      'भावनात्मक साक्षरता पाठ्यक्रम',
      'जीवन कौशल और लचीलापन प्रशिक्षण',
      'धमकाने-विरोधी कार्यक्रम',
      'किशोर मानसिक स्वास्थ्य जागरूकता',
      'भावनात्मक तैयारी के साथ करियर मार्गदर्शन',
      'शिक्षक मानसिक स्वास्थ्य प्रशिक्षण',
      'अभिभावक कार्यशालाएं',
      'स्कूल परामर्श प्रणाली विकास',
    ],
  },
  {
    titleEn: '3. Community Mental Health Outreach',
    titleHi: '3. समुदाय मानसिक स्वास्थ्य आउटरीच',
    gradient: 'linear-gradient(135deg, #d1fae5 0%, #e0e7ff 100%)',
    itemsEn: [
      'Rural mental health camps',
      'Village-level awareness drives',
      'Women and elder support groups',
      'Youth empowerment circles',
      'Community volunteer training',
      'Emotional wellbeing sessions at grassroots level',
    ],
    itemsHi: [
      'ग्रामीण मानसिक स्वास्थ्य शिविर',
      'ग्राम स्तरीय जागरूकता अभियान',
      'महिला और वरिष्ठ सहायता समूह',
      'युवा सशक्तिकरण चक्र',
      'समुदाय स्वयंसेवक प्रशिक्षण',
      'जमीनी स्तर पर भावनात्मक कल्याण सत्र',
    ],
  },
  {
    titleEn: '4. Corporate & Workplace Wellbeing',
    titleHi: '4. कॉर्पोरेट और कार्यस्थल कल्याण',
    gradient: 'linear-gradient(135deg, #fef3c7 0%, #e0e7ff 100%)',
    itemsEn: [
      'Stress and burnout prevention workshops',
      'Emotional intelligence training',
      'Leadership and psychological safety programs',
      'Employee Assistance support',
      'Work-life integration sessions',
      'Team wellbeing frameworks',
    ],
    itemsHi: [
      'तनाव और बर्नआउट रोकथाम कार्यशालाएं',
      'भावनात्मक बुद्धिमत्ता प्रशिक्षण',
      'नेतृत्व और मनोवैज्ञानिक सुरक्षा कार्यक्रम',
      'कर्मचारी सहायता सहायता',
      'कार्य-जीवन एकीकरण सत्र',
      'टीम कल्याण ढांचे',
    ],
  },
  {
    titleEn: "5. Women & Family Wellbeing Initiatives",
    titleHi: '5. महिला और परिवार कल्याण पहल',
    gradient: 'linear-gradient(135deg, #e0e7ff 0%, #fce7f3 100%)',
    itemsEn: [
      'Pre-marital readiness programs',
      'Parenting skill development',
      'Family communication workshops',
      'Support for working women',
      'Domestic conflict guidance',
      'Mother support circles',
    ],
    itemsHi: [
      'विवाह पूर्व तैयारी कार्यक्रम',
      'पालन-पोषण कौशल विकास',
      'पारिवारिक संचार कार्यशालाएं',
      'कामकाजी महिलाओं के लिए सहायता',
      'घरेलू संघर्ष मार्गदर्शन',
      'मातृ सहायता चक्र',
    ],
  },
  {
    titleEn: '6. Youth & Adolescent Development',
    titleHi: '6. युवा और किशोर विकास',
    gradient: 'linear-gradient(135deg, #fce7f3 0%, #d1fae5 100%)',
    itemsEn: [
      'Self-esteem building programs',
      'Exam stress management',
      'Digital wellbeing education',
      'Addiction prevention awareness',
      'Peer support initiatives',
      'Goal setting and resilience workshops',
    ],
    itemsHi: [
      'आत्म-सम्मान निर्माण कार्यक्रम',
      'परीक्षा तनाव प्रबंधन',
      'डिजिटल कल्याण शिक्षा',
      'नशा रोकथाम जागरूकता',
      'साथी सहायता पहल',
      'लक्ष्य निर्धारण और लचीलापन कार्यशालाएं',
    ],
  },
  {
    titleEn: '7. Elder Emotional Support',
    titleHi: '7. वरिष्ठ भावनात्मक सहायता',
    gradient: 'linear-gradient(135deg, #d1fae5 0%, #fef3c7 100%)',
    itemsEn: [
      'Loneliness and grief support groups',
      'Caregiver guidance',
      'Intergenerational bonding programs',
    ],
    itemsHi: [
      'अकेलापन और दुःख सहायता समूह',
      'देखभाल करने वाले मार्गदर्शन',
      'पीढ़ीगत बंधन कार्यक्रम',
    ],
  },
  {
    titleEn: '8. Special Focus Areas',
    titleHi: '8. विशेष फोकस क्षेत्र',
    gradient: 'linear-gradient(135deg, #fef3c7 0%, #fce7f3 100%)',
    itemsEn: [
      'Trauma recovery support',
      'Suicide prevention awareness',
      'Substance use prevention',
      'Crisis response guidance',
      'Mental Health First-Aid training',
      'Stigma reduction campaigns',
    ],
    itemsHi: [
      'आघात पुनर्प्राप्ति सहायता',
      'आत्महत्या रोकथाम जागरूकता',
      'पदार्थ उपयोग रोकथाम',
      'संकट प्रतिक्रिया मार्गदर्शन',
      'मानसिक स्वास्थ्य प्रथम-सहायता प्रशिक्षण',
      'कलंक कम करने के अभियान',
    ],
  },
  {
    titleEn: '9. Training & Capacity Building',
    titleHi: '9. प्रशिक्षण और क्षमता निर्माण',
    gradient: 'linear-gradient(135deg, #e0e7ff 0%, #d1fae5 100%)',
    itemsEn: [
      'Teacher and school staff training',
      'Community leader training',
      'Volunteer development programs',
      'Basic counselling skills training',
      'Mental Health Ambassador Program',
    ],
    itemsHi: [
      'शिक्षक और स्कूल कर्मचारी प्रशिक्षण',
      'समुदाय नेता प्रशिक्षण',
      'स्वयंसेवक विकास कार्यक्रम',
      'बुनियादी परामर्श कौशल प्रशिक्षण',
      'मानसिक स्वास्थ्य राजदूत कार्यक्रम',
    ],
  },
  {
    titleEn: '10. Research & Advocacy (Long-Term Vision)',
    titleHi: '10. अनुसंधान और वकालत (दीर्घकालिक दृष्टि)',
    gradient: 'linear-gradient(135deg, #fce7f3 0%, #e0e7ff 100%)',
    itemsEn: [
      'Community mental health research',
      'Policy advocacy for rural mental health',
      'District and state-level awareness campaigns',
      'Institutional and NGO collaborations',
    ],
    itemsHi: [
      'समुदाय मानसिक स्वास्थ्य अनुसंधान',
      'ग्रामीण मानसिक स्वास्थ्य के लिए नीति वकालत',
      'जिला और राज्य स्तरीय जागरूकता अभियान',
      'संस्थागत और एनजीओ सहयोग',
    ],
  },
];

export default function Initiatives() {
  const { t } = useLanguage();

  return (
    <div className="initiatives-page">
      <section className="initiatives-hero">
        <h1>{t('Our Programs & Services', 'हमारे कार्यक्रम और सेवाएं')}</h1>
        <p>
          {t(
            'We operate across individual, institutional, and community levels.',
            'हम व्यक्तिगत, संस्थागत और समुदाय स्तर पर काम करते हैं।'
          )}
        </p>
      </section>

      <section className="initiatives-grid">
        {programs.map((prog, i) => (
          <div
            key={i}
            className="initiative-card"
            style={{ background: prog.gradient } as React.CSSProperties}
          >
            <h3>{t(prog.titleEn, prog.titleHi)}</h3>
            <ul className="initiative-list">
              {prog.itemsEn.map((item, j) => (
                <li key={j}>{t(item, prog.itemsHi[j] || item)}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}
