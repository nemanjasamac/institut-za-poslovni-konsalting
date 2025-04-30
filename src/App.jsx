import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import References from './components/References';
import ClientTestimonials from './components/ClientTestimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import LegalNotice from './pages/LegalNotice';
import './index.css';

// Homepage component for main landing page
const HomePage = () => (
  <>
    <Navbar />
    <Hero />
    <About />
    <Services />
    <References />
    <ClientTestimonials />
    <Contact />
    <Footer />
  </>
);

function App() {
  const [loading, setLoading] = useState(true);
  
  const finishLoading = () => {
    setLoading(false);
  };
  
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
    
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [loading]);
  
  return (
    <Router>
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen finishLoading={finishLoading} key="loading" />
        ) : null}
      </AnimatePresence>
      
      {!loading && (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/politika-privatnosti" element={<PrivacyPolicy />} />
          <Route path="/uslovi-koriscenja" element={<TermsOfUse />} />
          <Route path="/pravna-napomena" element={<LegalNotice />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
