import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div id="o-nama" className="min-h-screen bg-white p-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-[#1A2B4C] mb-4">O nama</h2>
          <p className="text-gray-600">Ovaj sadržaj će biti dodat kasnije...</p>
        </div>
      </div>
      <div id="usluge" className="min-h-screen bg-gray-50 p-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-[#1A2B4C] mb-4">Usluge</h2>
          <p className="text-gray-600">Ovaj sadržaj će biti dodat kasnije...</p>
        </div>
      </div>
      <div id="reference" className="min-h-screen bg-white p-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-[#1A2B4C] mb-4">Reference</h2>
          <p className="text-gray-600">Ovaj sadržaj će biti dodat kasnije...</p>
        </div>
      </div>
      <div id="iskustva-klijenata" className="min-h-screen bg-gray-50 p-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-[#1A2B4C] mb-4">Iskustva klijenata</h2>
          <p className="text-gray-600">Ovaj sadržaj će biti dodat kasnije...</p>
        </div>
      </div>
      <div id="kontakt" className="min-h-screen bg-white p-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-[#1A2B4C] mb-4">Kontakt</h2>
          <p className="text-gray-600">Ovaj sadržaj će biti dodat kasnije...</p>
        </div>
      </div>
    </>
  );
}

export default App;
