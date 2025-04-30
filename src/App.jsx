import React, { useState, useEffect } from 'react';
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
import './index.css';

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
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen finishLoading={finishLoading} key="loading" />
        ) : null}
      </AnimatePresence>
      
      {!loading && (
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
      )}
    </>
  );
}

export default App;
