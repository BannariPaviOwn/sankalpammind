import { useLanguage } from '../context/LanguageContext';
import PhotoPlaceholder from '../components/PhotoPlaceholder';
import { ASSETS } from '../assets';
import './Initiatives.css';
import '../components/PhotoPlaceholder.css';

interface ProgramItem {
  titleEn: string;
  titleHi: string;
  titleTe?: string;
  itemsEn: string[];
  itemsHi: string[];
  itemsTe?: string[];
  focusEn: string;
  focusHi: string;
  focusTe?: string;
  gradient: string;
}

const programs: ProgramItem[] = [
  {
    titleEn: '1. Counselling & Therapeutic Services',
    titleHi: '1. परामर्श और चिकित्सीय सेवाएं',
    titleTe: '1. సలహా మరియు చికిత్సా సేవలు',
    gradient: 'linear-gradient(135deg, #e0e7ff 0%, #fce7f3 100%)',
    focusEn: 'Focus: Healing, resilience, long-term emotional wellbeing.',
    focusHi: 'फोकस: उपचार, लचीलापन, दीर्घकालिक भावनात्मक कल्याण।',
    focusTe: 'ఫోకస్: హీలింగ్, స్థిరత్వం, దీర్ఘకాలిక భావనాత్మక క్షేమం.',
    itemsEn: [
      'Individual counselling',
      'Child & adolescent therapy',
      'Family & marital counselling',
      "Women's mental health support",
      'Trauma-informed therapy',
      'Grief & loss counselling',
      'Anxiety & stress regulation support',
      'Parenting guidance',
    ],
    itemsHi: [
      'व्यक्तिगत परामर्श',
      'बाल और किशोर चिकित्सा',
      'पारिवारिक और वैवाहिक परामर्श',
      'महिला मानसिक स्वास्थ्य सहायता',
      'आघात-सूचित चिकित्सा',
      'दुःख और नुकसान परामर्श',
      'चिंता और तनाव विनियमन सहायता',
      'पालन-पोषण मार्गदर्शन',
    ],
    itemsTe: [
      'వ్యక్తిగత సలహా',
      'బాల మరియు యువక చికిత్స',
      'కుటుంబ మరియు వైవాహిక సలహా',
      'మహిళల మానసిక ఆరోగ్య మద్దతు',
      'ఆఘాత-సమాచారం చికిత్స',
      'దుఃఖం మరియు నష్టం సలహా',
      'ఆందోళన మరియు ఒత్తిడి నియంత్రణ మద్దతు',
      'పేరెంటింగ్ మార్గదర్శకత్వం',
    ],
  },
  {
    titleEn: '2. School & College Mental Health Programs',
    titleHi: '2. स्कूल और कॉलेज मानसिक स्वास्थ्य कार्यक्रम',
    titleTe: '2. పాఠశాల మరియు కళాశాల మానసిక ఆరోగ్య కార్యక్రమాలు',
    gradient: 'linear-gradient(135deg, #fce7f3 0%, #e0e7ff 100%)',
    focusEn: 'Focus: Early intervention within education systems.',
    focusHi: 'फोकस: शिक्षा प्रणालियों के भीतर प्रारंभिक हस्तक्षेप।',
    focusTe: 'ఫోకస్: విద్యా వ్యవస్థలలో ప్రారంభ జోక్యం.',
    itemsEn: [
      'Emotional literacy curriculum',
      'Life skills & resilience training',
      'Anti-bullying initiatives',
      'Teacher mental health training',
      'Parent workshops',
      'School counselling system development',
    ],
    itemsHi: [
      'भावनात्मक साक्षरता पाठ्यक्रम',
      'जीवन कौशल और लचीलापन प्रशिक्षण',
      'धमकाने-विरोधी पहल',
      'शिक्षक मानसिक स्वास्थ्य प्रशिक्षण',
      'अभिभावक कार्यशालाएं',
      'स्कूल परामर्श प्रणाली विकास',
    ],
    itemsTe: [
      'భావనాత్మక అక్షరాస్యత పాఠ్యాంశాలు',
      'జీవన నైపుణ్యాలు మరియు స్థిరత్వ శిక్షణ',
      'బుల్లింగ్ వ్యతిరేక పథకాలు',
      'ఉపాధ్యాయ మానసిక ఆరోగ్య శిక్షణ',
      'తల్లిదండ్రుల వర్క్‌షాప్లు',
      'పాఠశాల సలహా వ్యవస్థ అభివృద్ధి',
    ],
  },
  {
    titleEn: '3. Youth & Adolescent Development',
    titleHi: '3. युवा और किशोर विकास',
    titleTe: '3. యువత మరియు కౌమార వికాసం',
    gradient: 'linear-gradient(135deg, #d1fae5 0%, #e0e7ff 100%)',
    focusEn: 'Focus: Healthy transition into adulthood.',
    focusHi: 'फोकस: वयस्कता में स्वस्थ संक्रमण।',
    focusTe: 'ఫోకస్: ప్రౌఢావస్థలోకి ఆరోగ్యకరమైన మార్పు.',
    itemsEn: [
      'Self-esteem building',
      'Exam stress management',
      'Digital wellbeing education',
      'Addiction prevention awareness',
      'Peer support initiatives',
    ],
    itemsHi: [
      'आत्म-सम्मान निर्माण',
      'परीक्षा तनाव प्रबंधन',
      'डिजिटल कल्याण शिक्षा',
      'नशा रोकथाम जागरूकता',
      'साथी सहायता पहल',
    ],
    itemsTe: [
      'స్వీయ-గౌరవం నిర్మాణం',
      'పరీక్ష ఒత్తిడి నిర్వహణ',
      'డిజిటల్ క్షేమం విద్య',
      'వ్యసన నివారణ అవగాహన',
      'సహచర మద్దతు పథకాలు',
    ],
  },
  {
    titleEn: '4. Women & Family Wellbeing',
    titleHi: '4. महिला और परिवार कल्याण',
    titleTe: '4. మహిళలు మరియు కుటుంబ క్షేమం',
    gradient: 'linear-gradient(135deg, #e0e7ff 0%, #fce7f3 100%)',
    focusEn: 'Focus: Intergenerational emotional strength.',
    focusHi: 'फोकस: पीढ़ीगत भावनात्मक मजबूती।',
    focusTe: 'ఫోకస్: తరం-తరం భావనాత్మక బలం.',
    itemsEn: [
      'Pre-marital readiness programs',
      'Parenting skill development',
      'Family communication workshops',
      'Support for working women',
      'Mother support circles',
    ],
    itemsHi: [
      'विवाह पूर्व तैयारी कार्यक्रम',
      'पालन-पोषण कौशल विकास',
      'पारिवारिक संचार कार्यशालाएं',
      'कामकाजी महिलाओं के लिए सहायता',
      'मातृ सहायता चक्र',
    ],
    itemsTe: [
      'వివాహ పూర్వ సిద్ధతా కార్యక్రమాలు',
      'పేరెంటింగ్ నైపుణ్య అభివృద్ధి',
      'కుటుంబ సంభాషణ వర్క్‌షాప్లు',
      'ఉద్యోగి మహిళలకు మద్దతు',
      'తల్లి మద్దతు వృత్తాలు',
    ],
  },
  {
    titleEn: '5. Corporate & Workplace Wellbeing',
    titleHi: '5. कॉर्पोरेट और कार्यस्थल कल्याण',
    titleTe: '5. కార్పొరేట్ మరియు పనిచోటు క్షేమం',
    gradient: 'linear-gradient(135deg, #fef3c7 0%, #e0e7ff 100%)',
    focusEn: 'Focus: Sustainable, compassionate work cultures.',
    focusHi: 'फोकस: टिकाऊ, दयालु कार्य संस्कृतियां।',
    focusTe: 'ఫోకస్: శాశ్వతమైన, దయగల పని సంస్కృతులు.',
    itemsEn: [
      'Stress and burnout prevention',
      'Emotional intelligence training',
      'Psychological safety programs',
      'Work-life integration sessions',
      'Team wellbeing frameworks',
    ],
    itemsHi: [
      'तनाव और बर्नआउट रोकथाम',
      'भावनात्मक बुद्धिमत्ता प्रशिक्षण',
      'मनोवैज्ञानिक सुरक्षा कार्यक्रम',
      'कार्य-जीवन एकीकरण सत्र',
      'टीम कल्याण ढांचे',
    ],
    itemsTe: [
      'ఒత్తిడి మరియు బర్నౌట్ నివారణ',
      'భావనాత్మక తెలివి శిక్షణ',
      'మనస్తత్వశాస్త్ర భద్రతా కార్యక్రమాలు',
      'పని-జీవిత ఏకీకరణ సెషన్లు',
      'టీమ్ క్షేమం చట్రాలు',
    ],
  },
  {
    titleEn: '6. Community Mental Health Outreach',
    titleHi: '6. समुदाय मानसिक स्वास्थ्य आउटरीच',
    titleTe: '6. సమాజ మానసిక ఆరోగ్య విస్తరణ',
    gradient: 'linear-gradient(135deg, #fce7f3 0%, #d1fae5 100%)',
    focusEn: 'Focus: Stigma reduction & early help-seeking.',
    focusHi: 'फोकस: कलंक कम करना और जल्दी मदद मांगना।',
    focusTe: 'ఫోకస్: కళంకం తగ్గించడం మరియు తొందరగా సహాయం కోరడం.',
    itemsEn: [
      'Rural mental health camps',
      'Village-level awareness drives',
      'Women & elder support groups',
      'Youth empowerment circles',
      'Volunteer training',
    ],
    itemsHi: [
      'ग्रामीण मानसिक स्वास्थ्य शिविर',
      'ग्राम स्तरीय जागरूकता अभियान',
      'महिला और वरिष्ठ सहायता समूह',
      'युवा सशक्तिकरण चक्र',
      'स्वयंसेवक प्रशिक्षण',
    ],
    itemsTe: [
      'గ్రామీణ మానసిక ఆరోగ్య శిబిరాలు',
      'గ్రామ స్థాయి అవగాహన ప్రచారాలు',
      'మహిళలు మరియు వృద్ధ మద్దతు సమూహాలు',
      'యువ సాధికారత వృత్తాలు',
      'స్వచ్ఛంద శిక్షణ',
    ],
  },
  {
    titleEn: '7. Elder Emotional Support',
    titleHi: '7. वरिष्ठ भावनात्मक सहायता',
    titleTe: '7. వృద్ధ భావనాత్మక మద్దతు',
    gradient: 'linear-gradient(135deg, #d1fae5 0%, #fef3c7 100%)',
    focusEn: 'Focus: Dignity and emotional security in later life.',
    focusHi: 'फोकस: बाद के जीवन में गरिमा और भावनात्मक सुरक्षा।',
    focusTe: 'ఫోకస్: తరువాతి జీవితంలో గౌరవం మరియు భావనాత్మక భద్రత.',
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
    itemsTe: [
      'ఒంటరితనం మరియు దుఃఖం మద్దతు సమూహాలు',
      'సంరక్షక మార్గదర్శకత్వం',
      'తరం-తరం బంధం కార్యక్రమాలు',
    ],
  },
  {
    titleEn: '8. Special Focus Areas',
    titleHi: '8. विशेष फोकस क्षेत्र',
    titleTe: '8. ప్రత్యేక ఫోకస్ ప్రాంతాలు',
    gradient: 'linear-gradient(135deg, #fef3c7 0%, #fce7f3 100%)',
    focusEn: 'Focus: Prevention & community resilience.',
    focusHi: 'फोकस: रोकथाम और समुदाय लचीलापन।',
    focusTe: 'ఫోకస్: నివారణ మరియు సమాజ స్థిరత్వం.',
    itemsEn: [
      'Trauma recovery support',
      'Suicide prevention awareness',
      'Substance use prevention',
      'Crisis response guidance',
      'Mental Health First Aid training',
    ],
    itemsHi: [
      'आघात पुनर्प्राप्ति सहायता',
      'आत्महत्या रोकथाम जागरूकता',
      'पदार्थ उपयोग रोकथाम',
      'संकट प्रतिक्रिया मार्गदर्शन',
      'मानसिक स्वास्थ्य प्रथम सहायता प्रशिक्षण',
    ],
    itemsTe: [
      'ఆఘాత పునరుద్ధరణ మద్దతు',
      'ఆత్మహత్య నివారణ అవగాహన',
      'పదార్థ వినియోగ నివారణ',
      'సంక్షోభ ప్రతిస్పందన మార్గదర్శకత్వం',
      'మానసిక ఆరోగ్య ప్రథమ సహాయ శిక్షణ',
    ],
  },
  {
    titleEn: '9. Training & Capacity Building',
    titleHi: '9. प्रशिक्षण और क्षमता निर्माण',
    titleTe: '9. శిక్షణ మరియు సామర్థ్య నిర్మాణం',
    gradient: 'linear-gradient(135deg, #e0e7ff 0%, #d1fae5 100%)',
    focusEn: 'Focus: Sustainable community-led ecosystems.',
    focusHi: 'फोकस: टिकाऊ समुदाय-नेतृत्व वाले पारिस्थितिकी तंत्र।',
    focusTe: 'ఫోకస్: శాశ్వత సమాజ-నేతృత్వ పర్యావరణ వ్యవస్థలు.',
    itemsEn: [
      'Teacher training',
      'Community leader training',
      'Volunteer development programs',
      'Mental Health Ambassador Program',
    ],
    itemsHi: [
      'शिक्षक प्रशिक्षण',
      'समुदाय नेता प्रशिक्षण',
      'स्वयंसेवक विकास कार्यक्रम',
      'मानसिक स्वास्थ्य राजदूत कार्यक्रम',
    ],
    itemsTe: [
      'ఉపాధ్యాయ శిక్షణ',
      'సమాజ నాయక శిక్షణ',
      'స్వచ్ఛంద అభివృద్ధి కార్యక్రమాలు',
      'మానసిక ఆరోగ్య రాయబారి కార్యక్రమం',
    ],
  },
  {
    titleEn: '10. Research & Advocacy (Long-Term Vision)',
    titleHi: '10. अनुसंधान और वकालत (दीर्घकालिक दृष्टि)',
    titleTe: '10. పరిశోధన మరియు వకాలతి (దీర్ఘకాలిక దృష్టి)',
    gradient: 'linear-gradient(135deg, #fce7f3 0%, #e0e7ff 100%)',
    focusEn: 'Focus: Evidence-informed expansion and systemic impact.',
    focusHi: 'फोकस: साक्ष्य-सूचित विस्तार और प्रणालीगत प्रभाव।',
    focusTe: 'ఫోకస్: సాక్ష్య-సమాచారం విస్తరణ మరియు వ్యవస్థాగత ప్రభావం.',
    itemsEn: [
      'Community mental health research',
      'Policy advocacy for rural mental health',
      'State & district-level campaigns',
      'Institutional collaborations',
    ],
    itemsHi: [
      'समुदाय मानसिक स्वास्थ्य अनुसंधान',
      'ग्रामीण मानसिक स्वास्थ्य के लिए नीति वकालत',
      'राज्य और जिला स्तरीय अभियान',
      'संस्थागत सहयोग',
    ],
    itemsTe: [
      'సమాజ మానసిక ఆరోగ్య పరిశోధన',
      'గ్రామీణ మానసిక ఆరోగ్యానికి విధాన వకాలతి',
      'రాష్ట్ర మరియు జిల్లా స్థాయి ప్రచారాలు',
      'సంస్థాగత సహకారాలు',
    ],
  },
];

export default function Initiatives() {
  const { t } = useLanguage();

  return (
    <div className="initiatives-page">
      <section className="initiatives-hero">
        <h1>{t('Our Programs & Services', 'हमारे कार्यक्रम और सेवाएं', 'మా కార్యక్రమాలు మరియు సేవలు')}</h1>
        <p>
          {t(
            'Supporting Individuals, Institutions & Communities. We operate across individual, institutional, and community levels — ensuring mental wellbeing is preventive, accessible, and culturally grounded.',
            'व्यक्तियों, संस्थानों और समुदायों का समर्थन। हम व्यक्तिगत, संस्थागत और समुदाय स्तर पर काम करते हैं — यह सुनिश्चित करते हुए कि मानसिक कल्याण निवारक, पहुंच योग्य और सांस्कृतिक रूप से आधारित हो।',
            'వ్యక్తులు, సంస్థలు మరియు సమాజాలకు మద్దతు. మేము వ్యక్తిగత, సంస్థాగత మరియు సమాజ స్థాయిలలో పనిచేస్తాము — మానసిక క్షేమం నివారణ, అందుబాటు మరియు సాంస్కృతికంగా ఆధారితంగా ఉండేలా నిర్ధారిస్తాము.'
          )}
        </p>
      </section>

      <section className="initiatives-photo">
        <div className="initiatives-photo-inner">
          <PhotoPlaceholder src={ASSETS.initiatives.programsAction} labelEn="Programs in action" labelHi="कार्यक्रम अभियान में" labelTe="కార్యక్రమాలు చర్యలో" ratio="16/9" />
          <PhotoPlaceholder src={ASSETS.initiatives.sessions} labelEn="Sessions" labelHi="सत्र" labelTe="సెషన్లు" ratio="16/9" />
        </div>
      </section>

      <section className="initiatives-grid">
        {programs.map((prog, i) => (
          <div
            key={i}
            className="initiative-card"
            style={{ background: prog.gradient } as React.CSSProperties}
          >
            <h3>{t(prog.titleEn, prog.titleHi, prog.titleTe)}</h3>
            <ul className="initiative-list">
              {prog.itemsEn.map((item, j) => (
                <li key={j}>{t(item, prog.itemsHi[j] || item, prog.itemsTe?.[j])}</li>
              ))}
            </ul>
            <p className="initiative-focus">{t(prog.focusEn, prog.focusHi, prog.focusTe)}</p>
          </div>
        ))}
      </section>

      <section className="initiatives-photo initiatives-photo-bottom">
        <div className="photo-gallery">
          {ASSETS.initiatives.gallery.map((src, i) => (
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
    </div>
  );
}
