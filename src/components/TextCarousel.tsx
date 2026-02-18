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
    en: "Sankalpam begins with a simple yet powerful belief — mental wellbeing matters for every individual and for the nation. We are not waiting for crisis. We are building emotional strength from the beginning.",
    hi: "संकल्पम एक सरल लेकिन शक्तिशाली विश्वास के साथ शुरू होता है — मानसिक कल्याण हर व्यक्ति और राष्ट्र के लिए मायने रखता है। हम संकट का इंतजार नहीं कर रहे। हम शुरू से ही भावनात्मक मजबूती का निर्माण कर रहे हैं।",
    author: 'Dr. Sahithyaa Raghu',
    date: 'Founder & Managing Trustee',
  },
  {
    id: 2,
    en: "Often, the barrier is not weakness — it is stigma, lack of awareness, or absence of safe spaces. We exist to encourage open conversations, reduce fear around seeking help, and strengthen families and communities from within.",
    hi: "अक्सर, बाधा कमजोरी नहीं है — यह कलंक, जागरूकता की कमी, या सुरक्षित स्थानों की अनुपस्थिति है। हम खुले संवाद को प्रोत्साहित करने, सहायता मांगने के डर को कम करने और परिवारों और समुदायों को भीतर से मजबूत करने के लिए मौजूद हैं।",
    author: 'Sankalpam',
    date: 'Our Commitment',
  },
  {
    id: 3,
    en: "Healthy minds build stable homes. Stable homes build strong communities. Strong communities build a resilient India.",
    hi: "स्वस्थ दिमाग स्थिर घर बनाते हैं। स्थिर घर मजबूत समुदाय बनाते हैं। मजबूत समुदाय एक लचीला भारत बनाते हैं।",
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
