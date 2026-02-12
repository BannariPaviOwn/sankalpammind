import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import './App.css';

function AppContent() {
  const { language } = useLanguage();

  useEffect(() => {
    if (language === 'hi') {
      document.body.classList.add('hindi');
    } else {
      document.body.classList.remove('hindi');
    }
  }, [language]);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/find-help" element={<FindHelp />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/donate/result" element={<DonateResult />} />
        </Routes>
      </main>
      <Footer />
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
