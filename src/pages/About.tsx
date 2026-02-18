import { useLanguage } from '../context/LanguageContext';
import './About.css';

export default function About() {
  const { t } = useLanguage();

  const values = [
    { en: 'Dignity – Every individual deserves respect.', hi: 'गरिमा – हर व्यक्ति सम्मान का हकदार है।' },
    { en: 'Accessibility – Emotional support should be within reach.', hi: 'पहुंच – भावनात्मक सहायता पहुंच के भीतर होनी चाहिए।' },
    { en: 'Compassion – Care without judgement.', hi: 'करुणा – बिना निर्णय के देखभाल।' },
    { en: 'Prevention – Strength before a crisis.', hi: 'रोकथाम – संकट से पहले मजबूती।' },
    { en: 'Service – Knowledge must serve society.', hi: 'सेवा – ज्ञान समाज की सेवा करना चाहिए।' },
    { en: 'Community – Healing grows stronger together.', hi: 'समुदाय – एक साथ उपचार मजबूत होता है।' },
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>{t('About Us', 'हमारे बारे में')}</h1>
        <p className="about-hero-sub">
          {t('Who We Are', 'हम कौन हैं')}
        </p>
        <p>
          {t(
            'Sankalpam Mind & Wellness Foundation is a registered non-profit organization dedicated to integrating mental and emotional wellbeing into everyday life.',
            'संकल्पम माइंड एंड वेलनेस फाउंडेशन एक पंजीकृत गैर-लाभकारी संगठन है जो मानसिक और भावनात्मक कल्याण को रोजमर्रा की जिंदगी में एकीकृत करने के लिए समर्पित है।'
          )}
        </p>
        <p>
          {t(
            'We work from the grassroots upward — beginning in rural and semi-urban communities where stigma, limited awareness, and access barriers prevent people from seeking help.',
            'हम जमीनी स्तर से ऊपर की ओर काम करते हैं — ग्रामीण और अर्ध-शहरी समुदायों में जहां कलंक, सीमित जागरूकता और पहुंच की बाधाएं लोगों को मदद मांगने से रोकती हैं।'
          )}
        </p>
        <p>
          {t(
            'Our approach focuses on: Prevention before crisis • Early emotional education • Community-based support systems • Culturally responsive counselling • Capacity building at local levels. We believe emotional strength should begin early — in homes, schools, and communities — not only after distress becomes severe.',
            'हमारा दृष्टिकोण इस पर केंद्रित है: संकट से पहले रोकथाम • प्रारंभिक भावनात्मक शिक्षा • समुदाय-आधारित सहायता प्रणाली • सांस्कृतिक रूप से उत्तरदायी परामर्श • स्थानीय स्तर पर क्षमता निर्माण। हम मानते हैं कि भावनात्मक मजबूती जल्दी शुरू होनी चाहिए — घरों, स्कूलों और समुदायों में।'
          )}
        </p>
      </section>

      <section className="about-content">
        <div className="about-card">
          <h2>{t('Vision', 'दृष्टि')}</h2>
          <p>
            {t(
              'To build a mentally resilient India where emotional wellbeing is recognized as essential to overall health, free from stigma, and accessible to every individual — beginning at the grassroots and reaching the nation.',
              'एक मानसिक रूप से लचीला भारत बनाना जहां भावनात्मक कल्याण को समग्र स्वास्थ्य के लिए आवश्यक के रूप में मान्यता दी जाती है, कलंक से मुक्त, और हर व्यक्ति के लिए सुलभ — जमीनी स्तर से शुरू होकर राष्ट्र तक पहुंचना।'
            )}
          </p>
        </div>

        <div className="about-card">
          <h2>{t('Mission', 'मिशन')}</h2>
          <p>
            {t(
              'To strengthen individuals, families, and communities across India through affordable, preventive, and culturally grounded mental health initiatives while actively reducing stigma and expanding access to care.',
              'कलंक को सक्रिय रूप से कम करते हुए और देखभाल तक पहुंच का विस्तार करते हुए किफायती, निवारक और सांस्कृतिक रूप से आधारित मानसिक स्वास्थ्य पहलों के माध्यम से पूरे भारत में व्यक्तियों, परिवारों और समुदायों को मजबूत करना।'
            )}
          </p>
        </div>

        <div className="about-values">
          <h2>{t('Our Values', 'हमारे मूल्य')}</h2>
          <ul className="values-list">
            {values.map((v, i) => (
              <li key={i}>{t(v.en, v.hi)}</li>
            ))}
          </ul>
        </div>

        <div className="about-card founder-desk">
          <h2>{t("From the Founder's Desk", 'संस्थापक की डेस्क से')}</h2>
          <blockquote>
            {t(
              "Sankalpam begins with a simple yet powerful belief — mental wellbeing matters for every individual and for the nation. Throughout my journey, I have met individuals who are strong and capable yet silently struggling. Often, the barrier is not weakness — it is stigma, lack of awareness, or absence of safe spaces. Inspired by my father's values of service and guided by faith in God and the Universe, I see Sankalpam not merely as an initiative, but as a responsibility. We are not waiting for crisis. We are building emotional strength from the beginning. Sankalpam exists to encourage open conversations, reduce fear around seeking help, offer preventive, structured support, and strengthen families and communities from within. Healthy minds build resilient communities. Resilient communities build a strong India.",
              'संकल्पम एक सरल लेकिन शक्तिशाली विश्वास के साथ शुरू होता है — मानसिक कल्याण हर व्यक्ति और राष्ट्र के लिए मायने रखता है। मेरी यात्रा में मैंने ऐसे व्यक्तियों से मुलाकात की है जो मजबूत और सक्षम हैं लेकिन चुपचाप संघर्ष कर रहे हैं। अक्सर बाधा कमजोरी नहीं है। हम संकट का इंतजार नहीं कर रहे। हम शुरू से ही भावनात्मक मजबूती का निर्माण कर रहे हैं।'
            )}
          </blockquote>
          <p className="founder-sign">— {t('Dr. Sahithyaa Raghu', 'डॉ. साहित्या रघु')}</p>
          <p className="founder-title">{t('Founder & Managing Trustee', 'संस्थापक और प्रबंध न्यासी')}</p>
        </div>

        <div className="about-card founder-bio">
          <h2>{t('About the Founder', 'संस्थापक के बारे में')}</h2>
          <h3>{t('Dr. Sahithyaa Raghu', 'डॉ. साहित्या रघु')}</h3>
          <p className="founder-role">{t('Founder & Managing Trustee', 'संस्थापक और प्रबंध न्यासी')}</p>
          <p>
            {t(
              "Dr. Sahithyaa Raghu is a psychologist with over 17 years of multidisciplinary experience spanning clinical practice, community mental health, educational institutions, and corporate sectors. She has supported more than 20,000 individuals across age groups and has actively volunteered with NGOs focused on mental health and social wellbeing.",
              'डॉ. साहित्या रघु 17 से अधिक वर्षों के बहु-विषयक अनुभव वाली एक मनोवैज्ञानिक हैं जिसमें नैदानिक अभ्यास, समुदाय मानसिक स्वास्थ्य, शैक्षणिक संस्थान और कॉर्पोरेट क्षेत्र शामिल हैं। उन्होंने आयु समूहों में 20,000 से अधिक व्यक्तियों का समर्थन किया है।'
            )}
          </p>
          <p>
            {t(
              "She holds a Doctorate in Psychology, master's degrees in Human Rights, Counselling & Psychotherapy, and Social Work, along with qualifications in Law (LLB) and Education (B.Ed.). She has professional exposure with NIMHANS and specialized training in trauma-informed therapy through TISS.",
              'उनके पास मनोविज्ञान में डॉक्टरेट, मानव अधिकार, परामर्श और मनोचिकित्सा और सामाजिक कार्य में मास्टर डिग्री, साथ ही कानून (LLB) और शिक्षा (B.Ed.) में योग्यता है। उनके पास NIMHANS के साथ पेशेवर अनुभव और TISS के माध्यम से आघात-सूचित चिकित्सा में विशेष प्रशिक्षण है।'
            )}
          </p>
          <p>
            {t(
              "She is a State Award recipient from the Tamil Nadu State Human Rights Commission for her contribution to mental health and community wellbeing during the COVID-19 pandemic. She believes knowledge carries responsibility — and must be used in the service of society with dignity and compassion. Through Sankalpam, she envisions building sustainable, community-based mental health systems across India.",
              'वे COVID-19 महामारी के दौरान मानसिक स्वास्थ्य और समुदाय कल्याण में योगदान के लिए तमिलनाडु राज्य मानव अधिकार आयोग से राज्य पुरस्कार प्राप्तकर्ता हैं। वे मानती हैं कि ज्ञान जिम्मेदारी लेकर चलता है — और इसे गरिमा और करुणा के साथ समाज की सेवा में उपयोग किया जाना चाहिए।'
            )}
          </p>
        </div>
      </section>
    </div>
  );
}
