import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

function LegalPage({ title, children }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    document.title = `${title} | Institut za poslovni konsalting`;
    
    return () => {
      document.title = "Institut za poslovni konsalting | Poslovno savetovanje i strategije";
    };
  }, [title]);

  return (
    <>
      <Navbar />
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white shadow-md rounded-xl p-8 md:p-12">
              <h1 className="text-3xl md:text-4xl font-bold text-[#1A2B4C] mb-8">{title}</h1>
              <div className="prose prose-lg max-w-none text-gray-700">
                {children}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LegalPage;