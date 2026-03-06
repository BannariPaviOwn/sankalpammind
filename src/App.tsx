import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Initiatives from './pages/Initiatives';
import FindHelp from './pages/FindHelp';
import Donate from './pages/Donate';
import DonateResult from './pages/DonateResult';
import GetInvolved from './pages/GetInvolved';
import TemplatesGallery from './pages/TemplatesGallery';
import TemplateStyle1 from './pages/TemplateStyle1';
import TemplateStyle2 from './pages/TemplateStyle2';
import TemplateStyle3 from './pages/TemplateStyle3';
import TemplateStyle4 from './pages/TemplateStyle4';
import TemplateAHCT from './pages/TemplateAHCT';
import './App.css';

const FULLPAGE_PREVIEW_ROUTES = ['/style1', '/style2', '/style3', '/style4', '/style5'];

function AppContent() {
  const { language } = useLanguage();
  const location = useLocation();
  const isTemplateFullPage = FULLPAGE_PREVIEW_ROUTES.includes(location.pathname);

  useEffect(() => {
    document.body.classList.remove('hindi', 'telugu', 'tamil', 'malayalam');
    if (language === 'hi') document.body.classList.add('hindi');
    else if (language === 'te') document.body.classList.add('telugu');
    else if (language === 'ta') document.body.classList.add('tamil');
    else if (language === 'ml') document.body.classList.add('malayalam');
  }, [language]);

  return (
    <>
      {!isTemplateFullPage && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/find-help" element={<FindHelp />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/donate/result" element={<DonateResult />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/templates" element={<TemplatesGallery />} />
          <Route path="/style1" element={<TemplateStyle1 />} />
          <Route path="/style2" element={<TemplateStyle2 />} />
          <Route path="/style3" element={<TemplateStyle3 />} />
          <Route path="/style4" element={<TemplateStyle4 />} />
          <Route path="/style5" element={<TemplateAHCT />} />
        </Routes>
      </main>
      {!isTemplateFullPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
