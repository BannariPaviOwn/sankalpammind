import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './TextCarousel.css';

interface CarouselItem {
  id: number;
  en: string;
  hi: string;
  author?: string;
  date?: string;
}

const carouselItems: CarouselItem[] = [
  {
    id: 1,
    en: "Therapy teaches us how to regulate rather than externalise. And that's exactly why every therapist needs a therapist.",
    hi: "चिकित्सा हमें सिखाती है कि कैसे बाहर निकालने के बजाय नियंत्रित करें। और इसीलिए हर चिकित्सक को एक चिकित्सक की जरूरत होती है।",
    author: 'Ruhi',
    date: 'July 2025',
  },
  {
    id: 2,
    en: "Before therapy became my language, sukoon was my compass. I chased it in motion and in stillness.",
    hi: "चिकित्सा मेरी भाषा बनने से पहले, सुकून मेरा कम्पास था। मैंने इसे गति और शांति दोनों में खोजा।",
    author: 'Ananya',
    date: 'June 2025',
  },
  {
    id: 3,
    en: "No life should be lost due to mental illness. Together we can build a society that supports everyone on their mental health journey.",
    hi: "मानसिक बीमारी के कारण कोई जीवन नहीं खोना चाहिए। एक साथ हम एक ऐसा समाज बना सकते हैं जो सभी को उनकी मानसिक स्वास्थ्य यात्रा में सहायता करे।",
    author: 'Sankalpam',
    date: 'Our Mission',
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
                {t(i.en, i.hi)}
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
