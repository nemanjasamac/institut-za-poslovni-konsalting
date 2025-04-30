import React from 'react';
import { motion } from 'framer-motion';
import { scrollToElement } from '../utils/scrollUtils';

function Footer() {
    const currentYear = new Date().getFullYear();

    const handleScrollToTop = (e) => {
        e.preventDefault();
        
        setTimeout(() => {
            const heroElement = document.getElementById('hero');
            if (heroElement) {
                scrollToElement('hero', 0, 800); 
            } else {
                const startPosition = window.pageYOffset;
                const duration = 800;
                const startTime = performance.now();
                
                const ease = (t) => {
                    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
                };
                
                const animateScroll = (currentTime) => {
                    const timeElapsed = currentTime - startTime;
                    const progress = Math.min(timeElapsed / duration, 1);
                    const easeProgress = ease(progress);
                    
                    window.scrollTo(0, startPosition * (1 - easeProgress));
                    
                    if (timeElapsed < duration) {
                        requestAnimationFrame(animateScroll);
                    }
                };
                
                requestAnimationFrame(animateScroll);
            }
        }, 10);
    };

    const handleNavLinkClick = (e, id) => {
        e.preventDefault();
        scrollToElement(id, 80);
    };

    return (
        <footer className="bg-[#0F1A2F] text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <div className="absolute top-40 left-10 w-40 h-40 rounded-full bg-white/5 blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-white/5 blur-3xl"></div>
            
            <div className="container mx-auto px-4 md:px-8 lg:px-12 pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
                    <div className="space-y-4">
                        <div className="flex items-center mb-6">
                            <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                                <path d="M14 20H86V25H14V20Z" fill="currentColor" opacity="0.9"/>
                                <path d="M10 25H90V32H10V25Z" fill="currentColor"/>
                                
                                <rect x="18" y="32" width="10" height="48" fill="currentColor"/>
                                <rect x="36" y="32" width="10" height="38" fill="currentColor"/>
                                <rect x="54" y="32" width="10" height="28" fill="currentColor"/>
                                <rect x="72" y="32" width="10" height="18" fill="currentColor"/>
                            </svg>
                            <h2 className="text-xl font-bold ml-3">Institut za poslovni konsalting</h2>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Pružamo profesionalne konsultantske usluge u oblasti finansija, nekretnina, strateškog planiranja i poslovnog razvoja. Sa više od 15 godina iskustva, naš tim stručnjaka je posvećen pronalaženju optimalnih rešenja za Vaše poslovne izazove.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <span className="sr-only">Twitter</span>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/sa%C5%A1a-stefanovi%C4%87-95a0281b/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <span className="sr-only">LinkedIn</span>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                            <a href="https://www.facebook.com/sasa.stefanovic.946179" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <span className="sr-only">Facebook</span>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-white/10">O nama</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <a href="#o-nama" onClick={(e) => handleNavLinkClick(e, 'o-nama')} className="hover:text-white transition-colors">Naša priča</a>
                            </li>
                            <li>
                                <a href="#o-nama" onClick={(e) => handleNavLinkClick(e, 'o-nama')} className="hover:text-white transition-colors">Misija i vizija</a>
                            </li>
                            <li>
                                <a href="#reference" onClick={(e) => handleNavLinkClick(e, 'reference')} className="hover:text-white transition-colors">Reference</a>
                            </li>
                            <li>
                                <a href="#iskustva-klijenata" onClick={(e) => handleNavLinkClick(e, 'iskustva-klijenata')} className="hover:text-white transition-colors">Iskustva klijenata</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-white/10">Usluge</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <a href="#usluge" onClick={(e) => handleNavLinkClick(e, 'usluge')} className="hover:text-white transition-colors">Poslovno savetovanje</a>
                            </li>
                            <li>
                                <a href="#usluge" onClick={(e) => handleNavLinkClick(e, 'usluge')} className="hover:text-white transition-colors">Konsalting u oblasti nekretnina</a>
                            </li>
                            <li>
                                <a href="#usluge" onClick={(e) => handleNavLinkClick(e, 'usluge')} className="hover:text-white transition-colors">Finansijski konsalting</a>
                            </li>
                            <li>
                                <a href="#usluge" onClick={(e) => handleNavLinkClick(e, 'usluge')} className="hover:text-white transition-colors">Strateške analize</a>
                            </li>
                            <li>
                                <a href="#usluge" onClick={(e) => handleNavLinkClick(e, 'usluge')} className="hover:text-white transition-colors">Projektni menadžment</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-white/10">Kontakt</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex">
                                <svg className="w-5 h-5 mr-3 text-gray-500 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="leading-relaxed">
                                    Brankova 16<br />
                                    11000 Beograd, Srbija
                                </span>
                            </li>
                            <li className="flex">
                                <svg className="w-5 h-5 mr-3 text-gray-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>
                                    <a href="mailto:info@institut-konsalting.rs" className="hover:text-white transition-colors">info@institut-konsalting.rs</a>
                                </span>
                            </li>
                            <li className="flex">
                                <svg className="w-5 h-5 mr-3 text-gray-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>
                                    <a href="tel:+381112345678" className="hover:text-white transition-colors">+381 11 234 5678</a>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 mt-10 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-gray-400 text-sm mb-4 md:mb-0">
                            © {currentYear} Institut za poslovni konsalting. Sva prava zadržana.
                        </div>
                        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-400">
                            <a href="#" className="hover:text-white transition-colors">Politika privatnosti</a>
                            <a href="#" className="hover:text-white transition-colors">Uslovi korišćenja</a>
                            <a href="#" className="hover:text-white transition-colors">Pravna napomena</a>
                            <a href="#" className="hover:text-white transition-colors">Mapa sajta</a>
                        </div>
                    </div>
                </div>

                <motion.div 
                    className="fixed bottom-6 right-6 z-50"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <button 
                        onClick={handleScrollToTop}
                        className="bg-[#1A2B4C] hover:bg-[#2A3B5C] text-white p-3 rounded-full shadow-lg transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                        <span className="sr-only">Nazad na vrh</span>
                    </button>
                </motion.div>
            </div>
        </footer>
    );
}

export default Footer;