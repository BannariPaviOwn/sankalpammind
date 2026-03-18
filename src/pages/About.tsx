import { useLanguage } from '../context/LanguageContext';
import PhotoPlaceholder from '../components/PhotoPlaceholder';
import AwardsSection from '../components/AwardsSection';
import { ASSETS } from '../assets';
import './About.css';

export default function About() {
  const { t } = useLanguage();

  const missionPoints = [
    { en: 'Promote preventive and community-based mental healthcare', hi: 'निवारक और समुदाय-आधारित मानसिक स्वास्थ्य देखभाल को बढ़ावा देना', te: 'నివారణ మరియు సమాజ-ఆధారిత మానసిక ఆరోగ్య సంరక్షణను ప్రోత్సహించడం' },
    { en: 'Increase awareness and reduce stigma', hi: 'जागरूकता बढ़ाना और कलंक कम करना', te: 'అవగాహన పెంచడం మరియు కళంకం తగ్గించడం' },
    { en: 'Provide accessible psycho-social support in rural and underserved areas', hi: 'ग्रामीण और वंचित क्षेत्रों में सुलभ मनो-सामाजिक सहायता प्रदान करना', te: 'గ్రామీణ మరియు అల్పసేవా ప్రాంతాలలో అందుబాటు మానసిక-సామాజిక మద్దతు అందించడం' },
    { en: 'Train volunteers and community leaders in Psychological First Aid', hi: 'स्वयंसेवकों और समुदाय नेताओं को मनोवैज्ञानिक प्रथम सहायता में प्रशिक्षित करना', te: 'స్వచ్ఛంద సేవకులు మరియు సమాజ నాయకులకు మనస్తత్వశాస్త్ర ప్రథమ సహాయంలో శిక్షణ ఇవ్వడం' },
    { en: 'Strengthen families, schools, and workplaces through mental health literacy', hi: 'मानसिक स्वास्थ्य साक्षरता के माध्यम से परिवारों, स्कूलों और कार्यस्थलों को मजबूत करना', te: 'మానసిక ఆరోగ్య అక్షరాస్యత ద్వారా కుటుంబాలు, పాఠశాలలు మరియు పనిచోట్లను బలోపేతం చేయడం' },
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>🌿 {t('About Sankalpam', 'संकल्पम के बारे में', 'సంకల్పం గురించి')}</h1>
      </section>

      <section className="about-content">
        <div className="about-card story-card">
          <h2>🌱 {t('The Story Behind the Name', 'नाम के पीछे की कहानी', 'పేరు వెనుక కథ')}</h2>
          <p>
            {t(
              'SANKALPAM – Mind & Wellness Foundation was founded with a commitment to make mental wellbeing accessible, preventive, and rooted in community care. Inspired by years of working closely with individuals, families, and young people, the foundation recognizes that many emotional struggles and traumatic experiences often remain unheard and unsupported. SANKALPAM focuses on mental health awareness, counselling support, trauma preparedness, and emotional resilience through education, community programs, and collaborative initiatives to build healthier and stronger communities.',
              'संकल्पम – माइंड एंड वेलनेस फाउंडेशन की स्थापना मानसिक कल्याण को सुलभ, निवारक और समुदाय-आधारित देखभाल में निहित बनाने की प्रतिबद्धता के साथ की गई। व्यक्तियों, परिवारों और युवाओं के साथ वर्षों तक नज़दीकी काम से प्रेरित होकर, फाउंडेशन यह स्वीकार करता है कि कई भावनात्मक संघर्ष और आघातपूर्ण अनुभव अक्सर अनसुने और असमर्थित रह जाते हैं। संकल्पम मानसिक स्वास्थ्य जागरूकता, परामर्श सहायता, ट्रॉमा तैयारी और भावनात्मक लचीलापन पर केंद्रित है — शिक्षा, सामुदायिक कार्यक्रमों और सहकारी पहलों के माध्यम से — ताकि अधिक स्वस्थ और मज़बूत समुदाय बनाए जा सकें।',
              'సంకల్పం – మైండ్ & వెల్నెస్ ఫౌండేషన్ మానసిక శ్రేయస్సును అందుబాటులో, నివారణాత్మకంగా మరియు సమాజ ఆధారిత సంరక్షణలో పాతుకుపోయేలా చేయాలనే సంకల్పంతో స్థాపించబడింది. వ్యక్తులు, కుటుంబాలు మరియు యువతతో సంవత్సరాలుగా దగ్గరగా పనిచేసిన అనుభవం ద్వారా, అనేక భావోద్వేగ పోరాటాలు మరియు ఆఘాతానుభవాలు పలుమార్లు వినిపించకుండానే, మద్దతు లేకుండానే మిగిలిపోతాయని ఫౌండేషన్ గుర్తించింది. మరింత ఆరోగ్యకరమైన, బలమైన సమాజాలను నిర్మించడానికి సంస్ధ విద్య, కమ్యూనిటీ ప్రోగ్రాములు మరియు భాగస్వామ్య కార్యక్రమాల ద్వారా మానసిక ఆరోగ్య అవగాహన, కౌన్సెలింగ్ సహాయం, ట్రామా సిద్ధత మరియు భావోద్వేగ సహనంపై దృష్టి సారిస్తుంది.'
            )}
          </p>
        </div>

        <div className="about-photo-row">
          <PhotoPlaceholder src={ASSETS.about.ourStory} labelEn="Our story" labelHi="हमारी कहानी" labelTe="మా కథ" ratio="4/3" />
          <PhotoPlaceholder src={ASSETS.about.community} labelEn="Community" labelHi="समुदाय" labelTe="సమాజం" ratio="4/3" />
        </div>

        <div className="about-card">
          <h2>🌎 {t('Our Vision', 'हमारी दृष्टि', 'మా దృష్టి')}</h2>
          <p>
            {t(
              'To build a mentally resilient society where every individual — regardless of geography, gender, or income — has access to compassionate, culturally grounded psychological support.',
              'एक मानसिक रूप से लचीला समाज बनाना जहां हर व्यक्ति — भूगोल, लिंग या आय की परवाह किए बिना — दयालु, सांस्कृतिक रूप से आधारित मनोवैज्ञानिक सहायता तक पहुंच रखता हो।',
              'భౌగోళికం, లింగం లేదా ఆదాయం ఏమైనా — ప్రతి వ్యక్తికి దయగల, సాంస్కృతికంగా ఆధారిత మనస్తత్వశాస్త్ర మద్దతు అందుబాటులో ఉండే మానసికంగా స్థిరమైన సమాజాన్ని నిర్మించడం.'
            )}
          </p>
        </div>

        <div className="about-card">
          <h2>🎯 {t('Our Mission', 'हमारा मिशन', 'మా మిషన్')}</h2>
          <ul className="about-mission-list">
            {missionPoints.map((m, i) => (
              <li key={i}>{t(m.en, m.hi, m.te)}</li>
            ))}
          </ul>
        </div>

        <div className="about-card rural-card">
          <h2>🌾 {t('Why Rural Mental Health in India Matters', 'भारत में ग्रामीण मानसिक स्वास्थ्य क्यों मायने रखता है', 'భారతదేశంలో గ్రామీణ మానసిక ఆరోగ్యం ఎందుకు ముఖ్యం')}</h2>
          <p>{t('In many rural communities:', 'कई ग्रामीण समुदायों में:', 'అనేక గ్రామీణ సమాజాలలో:')}</p>
          <ul className="bullet-list">
            <li>{t('Mental health services are scarce or absent', 'मानसिक स्वास्थ्य सेवाएं दुर्लभ या अनुपस्थित हैं', 'మానసిక ఆరోగ్య సేవలు అరుదుగా లేదా లేవు')}</li>
            <li>{t('Stigma prevents early help-seeking', 'कलंक जल्दी मदद मांगने से रोकता है', 'కళంకం తొందరగా సహాయం కోరడాన్ని నిరోధిస్తుంది')}</li>
            <li>{t('Emotional distress is misunderstood as weakness or fate', 'भावनात्मक संकट को कमजोरी या भाग्य समझा जाता है', 'భావనాత్మక ఒత్తిడిని బలహీనత లేదా అదృష్టంగా తప్పుగా అర్థం చేసుకుంటారు')}</li>
            <li>{t('Women, children, and elderly silently carry psychological burdens', 'महिलाएं, बच्चे और बुजुर्ग मनोवैज्ञानिक बोझ चुपचाप ढोते हैं', 'మహిళలు, పిల్లలు మరియు వృద్ధులు మానసిక భారాన్ని నిశ్శబ్దంగా మోస్తారు')}</li>
          </ul>
          <p>{t('When mental health is neglected:', 'जब मानसिक स्वास्थ्य की उपेक्षा की जाती है:', 'మానసిక ఆరోగ్యం నిర్లక్ష్యం చేయబడినప్పుడు:')}</p>
          <ul className="bullet-list">
            <li>{t('Children struggle academically without understanding why', 'बच्चे शैक्षणिक रूप से संघर्ष करते हैं बिना समझे क्यों', 'పిల్లలు ఎందుకు అర్థం చేసుకోకుండా విద్యాపరంగా కష్టపడతారు')}</li>
            <li>{t('Families experience unresolved conflict', 'परिवार अनसुलझे संघर्ष का अनुभव करते हैं', 'కుటుంబాలు పరిష్కరించని సంఘర్షణను అనుభవిస్తాయి')}</li>
            <li>{t('Substance use and crisis behaviors increase', 'पदार्थ उपयोग और संकट व्यवहार बढ़ते हैं', 'పదార్థ వినియోగం మరియు సంక్షోభ ప్రవర్తనలు పెరుగుతాయి')}</li>
            <li>{t('Preventable distress becomes chronic suffering', 'रोकी जा सकने वाला संकट पुराने दुख में बदल जाता है', 'నివారించదగిన ఒత్తిడి దీర్ఘకాలిక బాధగా మారుతుంది')}</li>
          </ul>
          <p>
            {t(
              'Prevention, awareness, and early support can change life trajectories. SANKALPAM builds local capacity — empowering communities to recognize, respond, and support emotional wellbeing before crisis escalates.',
              'रोकथाम, जागरूकता और प्रारंभिक सहायता जीवन की दिशा बदल सकती है। संकल्पम स्थानीय क्षमता का निर्माण करता है — समुदायों को संकट बढ़ने से पहले भावनात्मक कल्याण को पहचानने, जवाब देने और समर्थन करने में सशक्त बनाता है।',
              'నివారణ, అవగాహన మరియు ప్రారంభ మద్దతు జీవిత మార్గాలను మార్చగలదు. సంకల్పం స్థానిక సామర్థ్యాన్ని నిర్మిస్తుంది — సంక్షోభం పెరగడానికి ముందు భావనాత్మక క్షేమాన్ని గుర్తించడానికి, ప్రతిస్పందించడానికి మరియు మద్దతు ఇవ్వడానికి సమాజాలను శక్తివంతం చేస్తుంది.'
            )}
          </p>
        </div>

        <div className="about-photo-row">
          <PhotoPlaceholder src={ASSETS.about.ruralOutreach} labelEn="Rural outreach" labelHi="ग्रामीण आउटरीच" labelTe="గ్రామీణ విస్తరణ" ratio="16/9" />
        </div>

        <div className="about-card founder-desk">
          <h2>👩‍⚕️ {t('About the Founder & Managing Trustee', 'संस्थापक और प्रबंध न्यासी के बारे में', 'స్థాపకుడు మరియు నిర్వహణ ధృవపత్రిపై గురించి')}</h2>
          <h3>{t('Dr. Sahithyaa Raghu', 'डॉ. साहित्या रघु', 'డా. సాహిత్య రఘు')}</h3>
          <p className="founder-roles">
            {t('Psychologist | RCI-Licensed Intervention Therapist | Trauma-Informed Practitioner | Psycho-Social Consultant | Mental Health Advocate', 'मनोवैज्ञानिक | RCI-लाइसेंस्ड इंटरवेंशन थेरेपिस्ट | आघात-सूचित चिकित्सक | मनो-सामाजिक सलाहकार | मानसिक स्वास्थ्य अधिवक्ता', 'మనస్తత్వవేత్త | RCI-లైసెన్స్ ప్రాప్త ఇంటర్వెన్షన్ థెరపిస్ట్ | ట్రామా-ఇన్ఫార్మ్డ్ ప్రాక్టిషనర్ | మానసిక-సామాజిక సలహాదారు | మానసిక ఆరోగ్య వకీలు')}
          </p>
          <p className="founder-orgs">
            {t('Founder – Dr Sahi Psychology & Wellness', 'संस्थापक – डॉ साहि साइकोलॉजी एंड वेलनेस', 'స్థాపకుడు – డా. సాహి సైకాలజీ & వెల్నెస్')}<br />
            {t('Founder & Managing Trustee – SANKALPAM Mind & Wellness Foundation', 'संस्थापक और प्रबंध न्यासी – संकल्पम माइंड एंड वेलनेस फाउंडेशन', 'స్థాపకుడు మరియు నిర్వహణ ధృవపత్రి – సంకల్పం మనస్ & వెల్నెస్ ఫౌండేషన్')}
          </p>

          <h4 className="subsection">🌿 {t('Professional Profile', 'पेशेवर प्रोफाइल', 'వృత్తిపరమైన ప్రొఫైల్')}</h4>
          <p>
            {t(
              'Dr. Sahithyaa Raghu brings over 17 years of experience in mental health practice, training, and community outreach. She has worked extensively with individuals across the lifespan — including children, adolescents, adults, and senior citizens — and across diverse sectors such as education, corporate organizations, healthcare institutions, and rural community systems. Her professional journey includes clinical exposure and engagement with National Institute of Mental Health and Neurosciences (NIMHANS), Bangalore, strengthening her foundation in evidence-based mental health practice. She is also a certified Trauma-Informed Therapist trained through the Tata Institute of Social Sciences (TISS), equipping her with advanced competencies in trauma-sensitive assessment, intervention, and systems-based resilience frameworks. Her work integrates therapy, prevention, capacity building, advocacy, and systems-level mental health initiatives — ensuring both clinical depth and community relevance.',
              'डॉ. साहित्या रघु मानसिक स्वास्थ्य अभ्यास, प्रशिक्षण और समुदाय आउटरीच में 17 से अधिक वर्षों का अनुभव लाती हैं। उन्होंने बच्चों, किशोरों, वयस्कों और वरिष्ठ नागरिकों सहित जीवन भर के व्यक्तियों के साथ और शिक्षा, कॉर्पोरेट संगठनों, स्वास्थ्य संस्थानों और ग्रामीण समुदाय प्रणालियों जैसे विविध क्षेत्रों में व्यापक रूप से काम किया है।',
              'డా. సాహిత్య రఘు మానసిక ఆరోగ్య అభ్యాసం, శిక్షణ మరియు సమాజ విస్తరణలో 17 సంవత్సరాల以上的 అనుభవాన్ని తెచ్చారు. ఆమె పిల్లలు, యువత, పెద్దలు మరియు వృద్ధులతో సహా జీవితకాలంలో వ్యక్తులతో మరియు విద్య, కార్పొరేట్ సంస్థలు, ఆరోగ్య సంస్థలు మరియు గ్రామీణ సమాజ వ్యవస్థలతో సంబంధం ఉన్న వివిధ రంగాలలో విస్తృతంగా పనిచేసారు.'
            )}
          </p>

          <h4 className="subsection">🎓 {t('Academic & Professional Background', 'शैक्षणिक और पेशेवर पृष्ठभूमि', 'విద్యాపరమైన మరియు వృత్తిపరమైన నేపథ్యం')}</h4>
          <p>
            {t(
              'Dr. Sahithyaa Raghu holds a Doctorate in Psychology along with a Master\'s degree in Counselling and Psychotherapy, an MBA in Human Resources, and a Bachelor of Laws (LLB). She is a licensed Intervention Therapist under the Rehabilitation Council of India (RCI). Her multidisciplinary academic training enables her to integrate psychological science, legal literacy, organizational systems, and socio-cultural frameworks into a holistic mental health model that works across individuals, institutions, and communities.',
              'डॉ. साहित्या रघु के पास मनोविज्ञान में डॉक्टरेट के साथ परामर्श और मनोचिकित्सा में मास्टर डिग्री, मानव संसाधन में एमबीए और कानून में स्नातक (LLB) है। वे भारतीय पुनर्वास परिषद (RCI) के तहत लाइसेंस प्राप्त इंटरवेंशन थेरेपिस्ट हैं।',
              'డా. సాహిత్య రఘు మనస్తత్వశాస్త్రంలో డాక్టరేట్, కౌన్సెలింగ్ మరియు సైకోథెరపీలో మాస్టర్స్ డిగ్రీ, హ్యూమన్ రిసోర్సెస్‌లో ఎంబిఎ మరియు న్యాయంలో బ్యాచిలర్ (LLB) కలిగి ఉన్నారు. ఆమె భారత పునరావాస మండలి (RCI) కింద లైసెన్స్ పొందిన ఇంటర్వెన్షన్ థెరపిస్ట్.'
            )}
          </p>

          <h4 className="subsection">🏆 {t('Recognitions & Awards', 'सम्मान और पुरस्कार', 'గుర్తింపులు మరియు పురస్కారాలు')}</h4>
          <p>
            {t(
              'Her sustained contribution to mental health and human dignity has received state and national recognition. She was honored with the Tamil Nadu Government Human Rights Commission – State Award (2021) for promoting human-rights-sensitive and ethical counselling practices. In 2024, she was recognized among the Top 100 Doctors in India, acknowledging her clinical excellence, leadership, and social impact. She has also received multiple awards and recognitions for her selfless service in counselling, mental health advocacy, and community wellbeing initiatives. These recognitions reflect not only professional accomplishment but long-standing dedication to accessible and compassionate care.',
              'मानसिक स्वास्थ्य और मानव गरिमा में उनके निरंतर योगदान को राज्य और राष्ट्रीय स्तर पर मान्यता मिली है। उन्हें मानव अधिकार-संवेदनशील और नैतिक परामर्श प्रथाओं को बढ़ावा देने के लिए तमिलनाडु सरकार मानव अधिकार आयोग – राज्य पुरस्कार (2021) से सम्मानित किया गया। 2024 में उन्हें भारत के शीर्ष 100 डॉक्टरों में मान्यता दी गई।',
              'మానసిక ఆరోగ్యం మరియు మానవ గౌరవంపై ఆమె నిరంతర యోగదానానికి రాష్ట్ర మరియు జాతీయ గుర్తింపు లభించింది. మానవ హక్కులు-సున్నితమైన మరియు నైతిక సలహా పద్ధతులను ప్రోత్సహించడానికి తమిళనాడు ప్రభుత్వ మానవ హక్కుల కమిషన్ – రాష్ట్ర పురస్కారం (2021)తో గౌరవించబడ్డారు. 2024లో భారతదేశంలో టాప్ 100 డాక్టర్లలో గుర్తించబడ్డారు.'
            )}
          </p>

          <div className="founder-photo">
            <PhotoPlaceholder src={ASSETS.about.founder} labelEn="Dr. Sahithyaa Raghu" labelHi="डॉ. साहित्या रघु" labelTe="డా. సాహిత్య రఘు" ratio="3/4" alt="Dr. Sahithyaa Raghu" />
          </div>

          <h4 className="subsection">🌱 {t("Founder's Message", 'संस्थापक का संदेश', 'స్థాపకుని సందేశం')}</h4>
          <blockquote>
            {t(
              'Over the years, I have met individuals carrying immense strength — and yet, silent struggles. Children misunderstood instead of supported. Women balancing families and careers without emotional safety nets. Men conditioned to suppress vulnerability. Families wanting help — but not knowing where to turn. One truth became clear: Mental health support in India often reaches people only when crisis forces it. And in many rural and underserved communities, it does not reach them at all. SANKALPAM was born from a conscious resolve — to make mental wellbeing accessible, preventive, and community-centered. Care does not always begin in a therapy room. Sometimes, it begins with one informed teacher, one trained volunteer, one aware parent. When we strengthen minds, we strengthen families. When we strengthen families, we strengthen society. With commitment, Dr. Sahithyaa Raghu',
              'वर्षों में मैंने ऐसे व्यक्तियों से मुलाकात की है जो अपार ताकत लेकर चल रहे हैं — और फिर भी चुपचाप संघर्ष कर रहे हैं। बच्चों को समर्थन के बजाय गलत समझा जाता है। महिलाएं भावनात्मक सुरक्षा जाल के बिना परिवार और करियर का संतुलन बना रही हैं। पुरुष कमजोरी दबाने के लिए अनुकूलित। परिवार मदद चाहते हैं — लेकिन पता नहीं किधर मुड़ें। एक सच साफ हो गया: भारत में मानसिक स्वास्थ्य सहायता अक्सर तभी लोगों तक पहुंचती है जब संकट मजबूर करता है। और कई ग्रामीण और वंचित समुदायों में यह उन तक पहुंचती ही नहीं। संकल्पम एक सचेत संकल्प से पैदा हुआ — मानसिक कल्याण को पहुंच योग्य, निवारक और समुदाय-केंद्रित बनाने के लिए।',
              'సంవత్సరాలుగా, అపారమైన బలాన్ని మోస్తున్న వ్యక్తులను కలిశాను — అయినప్పటికీ, నిశ్శబ్ద పోరాటాలు. పిల్లలకు మద్దతు కాకుండా తప్పుగా అర్థం చేసుకున్నారు. భావనాత్మక భద్రతా వలలు లేకుండా కుటుంబాలు మరియు వృత్తులను సమతుల్యం చేస్తున్న మహిళలు. పురుషులు దుర్బలత్వాన్ని అణచివేయడానికి అనుకూలంగా ఉన్నారు. కుటుంబాలకు సహాయం కావాలి — కానీ ఎక్కడ తిరగాలో తెలియదు. ఒక సత్యం స్పష్టమైంది: భారతదేశంలో మానసిక ఆరోగ్య మద్దతు తరచుగా సంక్షోభం బలవంతం చేసినప్పుడే ప్రజలకు చేరుతుంది. మరియు అనేక గ్రామీణ మరియు అల్పసేవా సమాజాలలో అది వారికి అస్సలు చేరదు. సంకల్పం ఒక స్పృహతో కూడిన సంకల్పం నుండి జన్మించింది — మానసిక క్షేమాన్ని అందుబాటులో, నివారణ మరియు సమాజ-కేంద్రీకృతంగా చేయడానికి. నిబద్ధతతో, డా. సాహిత్య రఘు'
            )}
          </blockquote>
        </div>

        <AwardsSection awards={ASSETS.awards} />
      </section>
    </div>
  );
}
