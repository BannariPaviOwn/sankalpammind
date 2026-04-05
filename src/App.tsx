import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import OurModel from './pages/OurModel';
import Initiatives from './pages/Initiatives';
import Impact from './pages/Impact';
import CSRPartnerships from './pages/CSRPartnerships';
import Leadership from './pages/Leadership';
import Contact from './pages/Contact';
import './App.css';

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-model" element={<OurModel />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/csr-partnerships" element={<CSRPartnerships />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
