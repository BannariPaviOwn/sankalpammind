import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './TextCarousel.css';

interface CarouselItem {
  id: number;
  en: string;
  hi: string;
  te: string;
  author?: string;
  date?: string;
}

const carouselItems: CarouselItem[] = [
  {
    id: 1,
    en: "Care does not always begin in a therapy room. Sometimes, it begins with one informed teacher, one trained volunteer, one aware parent. When we strengthen minds, we strengthen families. When we strengthen families, we strengthen society.",
    hi: "देखभाल हमेशा थेरेपी कक्ष में शुरू नहीं होती। कभी-कभी यह एक जानकार शिक्षक, एक प्रशिक्षित स्वयंसेवक, एक जागरूक अभिभावक से शुरू होती है। जब हम दिमाग को मजबूत करते हैं, हम परिवारों को मजबूत करते हैं। जब हम परिवारों को मजबूत करते हैं, हम समाज को मजबूत करते हैं।",
    te: "సంరక్షణ ఎల్లప్పుడూ థెరపీ గదిలో ప్రారంభం కాదు. కొన్నిసార్లు ఒక తెలివైన ఉపాధ్యాయుడు, ఒక శిక్షణ పొందిన స్వచ్ఛంద సేవకుడు, ఒక అవగాహన ఉన్న తల్లిదండ్రులతో ప్రారంభమవుతుంది. మనం మనస్సులను బలోపేతం చేసినప్పుడు, కుటుంబాలను బలోపేతం చేస్తాము. కుటుంబాలను బలోపేతం చేసినప్పుడు సమాజాన్ని బలోపేతం చేస్తాము.",
    author: 'Dr. Sahithyaa Raghu',
    date: 'Founder & Managing Trustee',
  },
  {
    id: 2,
    en: "Change begins when care reaches the roots. SANKALPAM was born from a conscious resolve — to make mental wellbeing accessible, preventive, and community-centered.",
    hi: "बदलाव तब शुरू होता है जब देखभाल जड़ों तक पहुँचती है। संकल्पम एक सचेत संकल्प से पैदा हुआ — मानसिक कल्याण को पहुंच योग्य, निवारक और समुदाय-केंद्रित बनाने के लिए।",
    te: "సంరక్షణ మూలాలకు చేరుకున్నప్పుడు మార్పు ప్రారంభమవుతుంది. సంకల్పం ఒక స్పృహతో కూడిన సంకల్పం నుండి జన్మించింది — మానసిక క్షేమాన్ని అందుబాటులో, నివారణ మరియు సమాజ-కేంద్రీకృతంగా చేయడానికి.",
    author: 'Sankalpam',
    date: 'Our Mission',
  },
  {
    id: 3,
    en: "When emotional wellbeing begins at the roots, lasting social change becomes possible. We believe in building a mentally resilient society where every individual has access to compassionate, culturally grounded support.",
    hi: "जब भावनात्मक कल्याण जड़ों से शुरू होता है, टिकाऊ सामाजिक बदलाव संभव हो जाता है। हम एक मानसिक रूप से लचीला समाज बनाने में विश्वास करते हैं जहां हर व्यक्ति को दयालु, सांस्कृतिक रूप से आधारित सहायता मिले।",
    te: "భావనాత్మక క్షేమం మూలాల వద్ద ప్రారంభమైనప్పుడు, శాశ్వత సామాజిక మార్పు సాధ్యమవుతుంది. ప్రతి వ్యక్తికి దయగల, సాంస్కృతికంగా ఆధారిత మద్దతు అందుబాటులో ఉండే మానసికంగా స్థిరమైన సమాజాన్ని నిర్మించడంపై మేము నమ్మకం.",
    author: 'Sankalpam',
    date: 'Our Vision',
  },
];

export default function TextCarousel() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % carouselItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="text-carousel-section">
      <div className="carousel-container">
        <div className="carousel-wrapper">
          {carouselItems.map((i, idx) => (
            <div
              key={i.id}
              className={`carousel-item ${idx === activeIndex ? 'active' : ''}`}
            >
              <blockquote className="carousel-quote">
                {t(i.en, i.hi, i.te)}
              </blockquote>
              {(i.author || i.date) && (
                <div className="carousel-meta">
                  {i.date && <span className="carousel-date">{i.date}</span>}
                  {i.author && <span className="carousel-author">— {i.author}</span>}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="carousel-dots">
          {carouselItems.map((_, idx) => (
            <button
              key={idx}
              className={`dot ${idx === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
