import React, { useState, useEffect } from 'react';
import { scrollToElement } from '../utils/scrollUtils';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      const sections = ['o-nama', 'usluge', 'reference', 'iskustva-klijenata', 'kontakt'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveItem(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setActiveItem(id);
    setMobileMenuOpen(false);
    scrollToElement(id); // 80px offset to account for the navbar height
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg py-2' 
          : 'bg-[#1A2B4C]/70 backdrop-blur-sm py-3'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="flex items-center justify-between lg:grid lg:grid-cols-3 lg:items-center">
          <div className="flex items-center">
            <div className={`transition-all duration-500 ${scrolled ? 'scale-95' : 'scale-100'}`}>
              <a href="/" className="flex items-center">
                <div className="flex items-center">
                  <svg 
                    width="40" 
                    height="40" 
                    viewBox="0 0 100 100" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className={scrolled ? "text-[#1A2B4C]" : "text-white"}
                  >
                    <path d="M20 20H80V26H20V20Z" fill="currentColor"/>
                    <path d="M16 26H84V32H16V26Z" fill="currentColor"/>
                    
                    <rect x="24" y="32" width="8" height="48" fill="currentColor"/>
                    <rect x="38" y="32" width="8" height="48" fill="currentColor"/>
                    <rect x="52" y="32" width="8" height="48" fill="currentColor"/>
                    <rect x="66" y="32" width="8" height="48" fill="currentColor"/>
                  </svg>
                </div>
                <div className={`hidden md:block h-8 mx-3 w-px transition-opacity duration-500 ${
                  scrolled ? 'bg-gray-300 opacity-100' : 'bg-white/70 opacity-100'
                }`}></div>
                <span className={`hidden md:inline font-medium text-base transition-all duration-500 ${
                  scrolled ? 'text-gray-600 opacity-100' : 'text-white opacity-100'
                }`}>
                  Institut za poslovni konsalting
                </span>
              </a>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <div className="flex space-x-4 xl:space-x-8">
              {[
                { name: 'O nama', id: 'o-nama' },
                { name: 'Usluge', id: 'usluge' },
                { name: 'Reference', id: 'reference' },
                { name: 'Iskustva klijenata', id: 'iskustva-klijenata' }, 
                { name: 'Kontakt', id: 'kontakt' }
              ].map((item) => (
                <div key={item.id} className="group relative whitespace-nowrap">
                  <a 
                    href={`#${item.id}`}
                    onClick={(e) => handleLinkClick(e, item.id)}
                    className={`relative font-medium transition-colors duration-300 px-1 xl:px-2 py-1 ${
                      activeItem === item.id
                        ? scrolled ? 'text-[#1A2B4C]' : 'text-white'
                        : scrolled ? 'text-gray-600 hover:text-[#1A2B4C]' : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {item.name}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 transform origin-left transition-transform duration-300 ${
                      activeItem === item.id
                        ? scrolled ? 'bg-[#1A2B4C] scale-x-100' : 'bg-white scale-x-100'
                        : scrolled ? 'bg-[#1A2B4C] scale-x-0 group-hover:scale-x-100' : 'bg-white scale-x-0 group-hover:scale-x-100'
                    }`}></span>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-end">
            <a href="#kontakt" onClick={(e) => handleLinkClick(e, 'kontakt')} className="hidden lg:block">
              <button className={`hidden lg:block transition-all duration-300 px-4 xl:px-5 py-2 rounded-md whitespace-nowrap ${
                scrolled
                  ? 'bg-[#1A2B4C] text-white hover:bg-opacity-90'
                  : 'bg-white text-[#1A2B4C] hover:bg-white/90'
              }`}>
                Konsultacije
              </button>
            </a>
            
            <button 
              className={`lg:hidden transition-colors duration-300 p-2 ${
                scrolled ? 'text-[#1A2B4C]' : 'text-white'
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center relative">
                <span className={`block w-5 h-0.5 transition-all duration-300 ${
                  mobileMenuOpen 
                    ? 'absolute rotate-45' 
                    : 'mb-1'
                } ${scrolled ? 'bg-[#1A2B4C]' : 'bg-white'}`}></span>
                <span className={`block w-5 h-0.5 transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : 'mb-1'
                } ${scrolled ? 'bg-[#1A2B4C]' : 'bg-white'}`}></span>
                <span className={`block w-5 h-0.5 transition-all duration-300 ${
                  mobileMenuOpen 
                    ? 'absolute -rotate-45' 
                    : ''
                } ${scrolled ? 'bg-[#1A2B4C]' : 'bg-white'}`}></span>
              </div>
            </button>
          </div>
        </div>
        
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
          mobileMenuOpen 
            ? 'max-h-[400px] opacity-100 pt-4 pb-3' 
            : 'max-h-0 opacity-0'
        }`}>
          <div className="flex flex-col space-y-3">
            {[
              { name: 'O nama', id: 'o-nama' },
              { name: 'Usluge', id: 'usluge' },
              { name: 'Reference', id: 'reference' },
              { name: 'Iskustva klijenata', id: 'iskustva-klijenata' }, 
              { name: 'Kontakt', id: 'kontakt' }
            ].map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                className={`text-lg font-medium transition-colors duration-300 ${
                  activeItem === item.id
                    ? scrolled ? 'text-[#1A2B4C] border-l-2 border-[#1A2B4C] pl-3' : 'text-white border-l-2 border-white pl-3'
                    : scrolled ? 'text-gray-600 hover:text-[#1A2B4C] pl-3' : 'text-white/90 hover:text-white pl-3'
                }`}
                onClick={(e) => handleLinkClick(e, item.id)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-2">
              <a href="#kontakt" onClick={(e) => handleLinkClick(e, 'kontakt')} className="block lg:hidden">
                <button className={`transition-all duration-300 w-full px-5 py-2 rounded-md ${
                  scrolled
                    ? 'bg-[#1A2B4C] text-white hover:bg-opacity-90'
                    : 'bg-white text-[#1A2B4C] hover:bg-white/90'
                }`}>
                  Konsultacije
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;