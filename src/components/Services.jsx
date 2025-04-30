import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Services() {
    const headerControls = useAnimation();
    const [headerRef, headerInView] = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    const cardsControls = useAnimation();
    const [cardsRef, cardsInView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    useEffect(() => {
        if (headerInView) {
            headerControls.start('visible');
        }
        if (cardsInView) {
            cardsControls.start('visible');
        }
    }, [headerControls, headerInView, cardsControls, cardsInView]);

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

    const staggerCards = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const services = [
        {
            id: 1,
            title: "Poslovni konsalting",
            description: "Saveti i strategije za unapređenje poslovanja i organizacione efikasnosti.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            features: ["Analiza poslovnih procesa", "Razvoj poslovnih strategija", "Optimizacija performansi"]
        },
        {
            id: 2,
            title: "Finansijsko savetovanje",
            description: "Analiza finansijskih tokova, budžetiranje i optimizacija troškova.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            features: ["Analiza finansijskih izveštaja", "Budžetiranje i planiranje", "Smanjenje troškova"]
        },
        {
            id: 3,
            title: "Obuke i treninzi",
            description: "Edukacija zaposlenih kroz radionice i seminare za razvoj veština.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
            features: ["Razvoj liderskih veština", "Timski rad i komunikacija", "Specijalizovane obuke"]
        },
        {
            id: 4,
            title: "Strateško planiranje",
            description: "Izrada dugoročnih planova za rast i razvoj preduzeća.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
            ),
            features: ["Definisanje vizije i misije", "Dugoročni razvojni ciljevi", "Implementacija strategija"]
        },
        {
            id: 5,
            title: "Analiza tržišta",
            description: "Istraživanje tržišta radi identifikacije prilika i pretnji.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
            ),
            features: ["Analiza konkurencije", "Istraživanje tržišnih trendova", "Identifikacija prilika"]
        },
        {
            id: 6,
            title: "Upravljanje projektima",
            description: "Planiranje, implementacija i nadzor nad poslovnim projektima.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
            ),
            features: ["Planiranje projekata", "Upravljanje resursima", "Praćenje i evaluacija"]
        },
    ];

    return (
        <section id="usluge" className="relative py-16 md:py-20 bg-gray-50 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
            <div className="absolute top-40 right-10 w-64 h-64 rounded-full bg-[#1A2B4C]/5 blur-3xl"></div>
            <div className="absolute bottom-40 left-10 w-64 h-64 rounded-full bg-[#1A2B4C]/5 blur-3xl"></div>
            
            <div className="container mx-auto px-4 md:px-8 lg:px-12 relative">
                <motion.div 
                    ref={headerRef}
                    initial="hidden"
                    animate={headerControls}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { 
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                    className="max-w-3xl mx-auto text-center mb-20"
                >
                    <motion.div variants={fadeInUp} className="inline-block mb-3">
                        <div className="h-1 w-12 bg-[#1A2B4C] rounded-full mb-2 mx-auto"></div>
                        <div className="h-1 w-24 bg-[#1A2B4C] rounded-full mx-auto"></div>
                    </motion.div>
                    <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-[#1A2B4C] mb-5">
                        Naše Usluge
                    </motion.h2>
                    <motion.p variants={fadeInUp} className="text-gray-600 text-lg md:text-xl">
                        Sveobuhvatna rešenja prilagođena specifičnim potrebama vašeg poslovanja
                    </motion.p>
                </motion.div>
                
                <motion.div 
                    ref={cardsRef}
                    initial="hidden"
                    animate={cardsControls}
                    variants={staggerCards}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service) => (
                        <motion.div 
                            key={service.id} 
                            variants={cardVariant}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            className="bg-white rounded-xl shadow-xl overflow-hidden group"
                        >
                            <div className="bg-gradient-to-r from-[#1A2B4C] to-[#2A3B5C] p-6 relative overflow-hidden">
                                <div className="relative z-10">
                                    <div className="bg-white/20 p-3 inline-block rounded-lg">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mt-4">{service.title}</h3>
                                </div>
                                <div className="absolute -right-6 -bottom-10 w-24 h-24 rounded-full bg-white/5"></div>
                                <div className="absolute -right-2 -bottom-16 w-16 h-16 rounded-full bg-white/10"></div>
                            </div>
                            
                            <div className="p-6">
                                <p className="text-gray-600 mb-6">{service.description}</p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, index) => (
                                        <li key={index} className="flex items-center text-gray-700">
                                            <svg className="h-4 w-4 text-[#1A2B4C] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                
                                <div className="mt-8 flex justify-end">
                                    <a 
                                        href="#kontakt" 
                                        className="inline-flex items-center text-sm font-medium text-[#1A2B4C] transition-all duration-300 group-hover:text-[#2A3B5C]"
                                    >
                                        <span>Saznajte više</span>
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            className="h-4 w-4 ml-2 transform transition-transform group-hover:translate-x-1" 
                                            fill="none" 
                                            viewBox="0 0 24 24" 
                                            stroke="currentColor"
                                        >
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
                        transition: {
                            delay: 0.6,
                            duration: 0.6
                        }
                    }}
                    className="mt-20 text-center"
                >
                    <div className="max-w-3xl mx-auto bg-gradient-to-r from-[#1A2B4C] to-[#2A3B5C] rounded-xl p-8 md:p-12 shadow-xl">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Spremni ste da unapredite svoje poslovanje?
                        </h3>
                        <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                            Zakažite besplatnu konsultaciju i saznajte kako naše usluge mogu pomoći u dostizanju vaših poslovnih ciljeva.
                        </p>
                        <a 
                            href="#kontakt" 
                            className="inline-block bg-white hover:bg-gray-50 text-[#1A2B4C] px-8 py-3 rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                        >
                            Kontaktirajte nas
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Services;