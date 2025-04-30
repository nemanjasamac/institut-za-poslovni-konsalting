import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function References() {
    const headerControls = useAnimation();
    const [headerRef, headerInView] = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    const referencesControls = useAnimation();
    const [referencesRef, referencesInView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    useEffect(() => {
        if (headerInView) {
            headerControls.start('visible');
        }
        if (referencesInView) {
            referencesControls.start('visible');
        }
    }, [headerControls, headerInView, referencesControls, referencesInView]);

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const references = [
        {
            id: 1,
            name: "Klaster Nekretnine",
            description: "Klaster Nekretnine je nevladino i neprofitno udruženje koje okuplja pravna lica radi unapređenja i razvoja tržišta nepokretnosti u Srbiji. Njihova misija je profesionalizacija sektora nekretnina kroz edukaciju, standardizaciju i saradnju među članovima.",
            type: "Udruženje Klaster nekretnine",
            logoSrc: "/assets/images/logos/klaster-nekretnine-logo.png",
            link: "https://www.klasternekretnine.rs/"
        },
        {
            id: 2,
            name: "Kadena Properties",
            description: "Kadena Properties je agencija za nekretnine sa sedištem u Beogradu, specijalizovana za prodaju i izdavanje luksuznih nekretnina. Pružaju personalizovane usluge klijentima, fokusirajući se na ekskluzivne rezidencijalne i komercijalne objekte.",
            type: "Srbija Nekretnine",
            logoSrc: "/assets/images/logos/kadena-logo.jpg",
            link: "https://kadenaproperties.com/"
        },
        {
            id: 3,
            name: "CBRE Serbia",
            description: "CBRE Serbia je deo globalne kompanije CBRE, lidera u oblasti komercijalnih nekretnina. U Srbiji nude širok spektar usluga, uključujući posredovanje u prodaji i zakupu, procenu vrednosti nekretnina, upravljanje imovinom i investiciono savetovanje.",
            type: "Globalna kompanija",
            logoSrc: "/assets/images/logos/cbre-logo.jpeg",
            link: "https://www.cbre.rs/"
        },
        {
            id: 4,
            name: "Coreside d.o.o.",
            description: "Coreside d.o.o. je konsultantska firma specijalizovana za promet i procenu različitih vrsta nekretnina. Njihove usluge obuhvataju zakup i prodaju stambenih, poslovnih, maloprodajnih i industrijskih nekretnina, izradu studija izvodljivosti, biznis planova, kao i upravljanje investicijama i projektima.",
            type: "Konsultantska firma",
            logoSrc: "/assets/images/logos/coreside-logo.jpeg",
            link: "https://www.coreside.rs/"
        },
        {
            id: 5,
            name: "Eurostan Nekretnine",
            description: "Eurostan Nekretnine je agencija sa sedištem u Beogradu, specijalizovana za kupoprodaju i izdavanje stanova, kuća, lokala i drugih nepokretnosti. Poznati su po efikasnom pristupu i bogatom portfoliju nekretnina u različitim delovima grada.",
            type: "Agencija za nekretnine",
            logoSrc: "/assets/images/logos/eurostan-logo.jpeg",
            link: "https://www.eurostannekretnine.com/"
        },
        {
            id: 6,
            name: "Nekretnine Gavrilović",
            description: "Nekretnine Gavrilović je agencija sa sedištem u Beogradu, koja nudi širok spektar usluga u oblasti nekretnina, uključujući prodaju i izdavanje stanova, kuća, lokala i placeva. Ističu se profesionalnim pristupom i detaljnom analizom tržišta.",
            type: "Agencija za nekretnine",
            logoSrc: "/assets/images/logos/gavrilovic-logo.jpg",
            link: "https://nekretninegavrilovic.rs/"
        },
    ];

    return (
        <section id="reference" className="relative py-16 md:py-20 overflow-hidden bg-white">
            <div className="absolute top-1/4 right-10 w-40 h-40 border border-[#1A2B4C]/10 rounded-full opacity-30"></div>
            <div className="absolute bottom-1/3 left-20 w-20 h-20 border border-[#1A2B4C]/10 rounded-full opacity-30"></div>
            
            <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
                <motion.div 
                    ref={headerRef}
                    initial="hidden"
                    animate={headerControls}
                    variants={staggerContainer}
                    className="max-w-3xl mx-auto text-center mb-20"
                >
                    <motion.div variants={fadeInUp} className="inline-block mb-3">
                        <div className="h-1 w-12 bg-[#1A2B4C] rounded-full mb-2 mx-auto"></div>
                        <div className="h-1 w-24 bg-[#1A2B4C] rounded-full mx-auto"></div>
                    </motion.div>
                    <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-[#1A2B4C] mb-5">
                        Reference
                    </motion.h2>
                    <motion.p variants={fadeInUp} className="text-gray-600 text-lg md:text-xl">
                        Saradnja sa vodećim kompanijama iz sektora nekretnina i poslovnog konsaltinga
                    </motion.p>
                </motion.div>

                <motion.div 
                    ref={referencesRef}
                    initial="hidden"
                    animate={referencesControls}
                    variants={staggerContainer}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-10"
                >
                    {references.map((reference) => (
                        <motion.div
                            key={reference.id}
                            variants={fadeInUp}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
                        >
                            <div className="md:flex">
                                <div className="md:w-2/5 bg-gray-50 p-6 flex items-center justify-center">
                                    <div className="w-full max-w-[180px] h-[90px] relative flex items-center justify-center">
                                        <a href={reference.link} target="_blank" rel="noopener noreferrer">
                                            <img 
                                                src={reference.logoSrc} 
                                                alt={`${reference.name} logo`}
                                                className="max-w-full max-h-full object-contain"
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div className="p-6 md:w-3/5 md:pl-8">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <span className="text-xs font-semibold uppercase tracking-wider text-[#1A2B4C]/70">{reference.type}</span>
                                            <h3 className="text-xl font-bold text-[#1A2B4C]">{reference.name}</h3>
                                        </div>
                                        <div className="hidden md:block">
                                            <a 
                                                href={reference.link} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="bg-[#1A2B4C]/5 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 block"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#1A2B4C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-3">{reference.description}</p>
                                    <a 
                                        href={reference.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-sm font-medium text-[#1A2B4C] hover:text-[#2A3B5C] transition-colors"
                                    >
                                        <span>Više informacija</span>
                                        <svg className="h-4 w-4 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div 
                    variants={fadeInUp}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ 
                        opacity: 1, 
                        y: 0,
                        transition: { delay: 0.4, duration: 0.6 }
                    }}
                    className="max-w-4xl mx-auto mt-16 bg-gray-50 rounded-xl p-8 md:p-12 shadow-md relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-24 h-24 bg-[#1A2B4C]/10 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
                    <div className="absolute top-0 right-0 w-16 h-16 bg-[#1A2B4C]/5 translate-x-1/3 -translate-y-1/3 rounded-full"></div>
                    
                    <div className="text-[#1A2B4C] mb-6">
                        <svg className="h-8 w-8 opacity-20" fill="currentColor" viewBox="0 0 32 32">
                            <path d="M10 8v6c0 6.2-4.4 11.7-10 14l-.8-1.6C3.7 24.1 6 20.3 6 16H0V8h10zm18 0v6c0 6.2-4.4 11.7-10 14l-.8-1.6C21.7 24.1 24 20.3 24 16h-6V8h10z" />
                        </svg>
                    </div>
                    <blockquote className="text-xl md:text-2xl font-light text-gray-700 italic mb-6">
                        Institut za poslovni konsalting je značajno doprineo razvoju naše strategije u sektoru nekretnina. Profesionalnost, stručnost i posvećenost detaljima čine ih izuzetnim poslovnim partnerom.
                    </blockquote>
                    <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-[#1A2B4C]/10 flex items-center justify-center text-[#1A2B4C] font-bold">
                            ML
                        </div>
                        <div className="ml-4">
                            <p className="font-semibold text-[#1A2B4C]">Nenad Djordjevic</p>
                            <p className="text-sm text-gray-600">Zastupnik, Klaster Nekretnine</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    variants={fadeInUp}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                        opacity: 1, 
                        y: 0,
                        transition: { delay: 0.6, duration: 0.6 }
                    }}
                    className="text-center mt-16"
                >
                    <a 
                        href="#iskustva-klijenata" 
                        className="inline-flex items-center group px-6 py-3 border-2 border-[#1A2B4C] text-[#1A2B4C] rounded-md hover:bg-[#1A2B4C] hover:text-white transition-all duration-300 font-medium"
                    >
                        <span>Pogledajte sva iskustva klijenata</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

export default References;