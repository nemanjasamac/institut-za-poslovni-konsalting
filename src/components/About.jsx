import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function About() {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    const vmControls = useAnimation();
    const [vmRef, vmInView] = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    const founderControls = useAnimation();
    const [founderRef, founderInView] = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
        if (vmInView) {
            vmControls.start('visible');
        }
        if (founderInView) {
            founderControls.start('visible');
        }
    }, [controls, inView, vmControls, vmInView, founderControls, founderInView]);

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

    const scaleIn = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const slideInLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const slideInRight = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section id="o-nama" className="relative py-16 md:py-20 overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-[#1A2B4C]/5 to-transparent rounded-bl-[100px] z-0"></div>
            <div className="absolute top-1/3 left-10 w-40 h-40 border border-[#1A2B4C]/10 rounded-full opacity-30"></div>
            <div className="absolute bottom-1/4 right-20 w-20 h-20 border border-[#1A2B4C]/10 rounded-full opacity-30"></div>

            <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <div className="inline-block mb-3">
                        <div className="h-1 w-12 bg-[#1A2B4C] rounded-full mb-2 mx-auto"></div>
                        <div className="h-1 w-24 bg-[#1A2B4C] rounded-full mx-auto"></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1A2B4C] mb-5">O Nama</h2>
                    <p className="text-gray-600 text-lg md:text-xl">
                        Profesionalni pristup poslovnom konsaltingu uz strateško savetovanje i individualna rešenja
                    </p>
                </motion.div>

                <motion.div 
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={staggerContainer}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center"
                >
                    <motion.div variants={slideInLeft} className="relative">
                        <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-2xl">
                            <img 
                                src="/assets/images/avatar2.jpg" 
                                alt="Saša Stefanović - Institut za poslovni konsalting" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -top-5 -left-5 w-24 h-24 bg-[#1A2B4C]/10 rounded-lg hidden md:block"></div>
                        <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-[#1A2B4C]/10 rounded-lg hidden md:block"></div>

                        <motion.div 
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { 
                                    opacity: 1, 
                                    y: 0,
                                    transition: { 
                                        delay: 0.3,
                                        duration: 0.6 
                                    }
                                }
                            }}
                            className="absolute -bottom-8 left-8 bg-white shadow-xl rounded-lg p-4 md:p-6 flex items-center justify-center"
                        >
                            <div className="text-center">
                                <span className="block text-3xl md:text-4xl font-bold text-[#1A2B4C]">15+</span>
                                <span className="text-gray-600 text-sm uppercase tracking-wider">Godina iskustva</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div variants={slideInRight} className="space-y-6">
                        <h3 className="text-2xl md:text-3xl font-semibold text-[#1A2B4C]">
                            Vaš pouzdan partner za poslovno savetovanje
                        </h3>

                        <p className="text-gray-700 leading-relaxed">
                            <strong>Institut za poslovni konsalting</strong> je specijalizovana konsultantska firma koju vodi
                            Saša Stefanović, iskusni konsultant sa dugogodišnjim iskustvom u pružanju strateških poslovnih
                            rešenja i ekspertize u oblasti nekretnina. Sa više od 15 godina rada u ovoj oblasti, Saša
                            pruža klijentima stručnu podršku u prevazilaženju poslovnih izazova i ostvarivanju održivog rasta.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            Metodologija rada zasnovana je na dubokom razumevanju tržišta, temeljnoj analizi i
                            personalizovanom pristupu svakom klijentu. Kroz kombinaciju stručnosti, inovacija i
                            posvećenosti izvrsnosti, Institut osigurava da klijenti dobiju najbolje moguće rezultate
                            prilagođene njihovim specifičnim potrebama.
                        </p>

                        <motion.div 
                            variants={staggerContainer}
                            className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4"
                        >
                            <motion.div variants={fadeInUp} className="flex items-start space-x-3">
                                <div className="bg-[#1A2B4C]/10 p-3 rounded-md mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#1A2B4C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-medium text-[#1A2B4C]">Profesionalni pristup</h4>
                                    <p className="text-sm text-gray-600 mt-1">Dokazano iskustvo i rezultati</p>
                                </div>
                            </motion.div>

                            <motion.div variants={fadeInUp} className="flex items-start space-x-3">
                                <div className="bg-[#1A2B4C]/10 p-3 rounded-md mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#1A2B4C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-medium text-[#1A2B4C]">Merljivi rezultati</h4>
                                    <p className="text-sm text-gray-600 mt-1">Fokus na poslovnom rastu</p>
                                </div>
                            </motion.div>

                            <motion.div variants={fadeInUp} className="flex items-start space-x-3">
                                <div className="bg-[#1A2B4C]/10 p-3 rounded-md mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#1A2B4C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-medium text-[#1A2B4C]">Inovativni pristup</h4>
                                    <p className="text-sm text-gray-600 mt-1">Savremene metodologije</p>
                                </div>
                            </motion.div>

                            <motion.div variants={fadeInUp} className="flex items-start space-x-3">
                                <div className="bg-[#1A2B4C]/10 p-3 rounded-md mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#1A2B4C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-medium text-[#1A2B4C]">Diskrecija i poverenje</h4>
                                    <p className="text-sm text-gray-600 mt-1">Zaštita poslovnih interesa</p>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="pt-6">
                            <a href="#usluge" className="inline-flex items-center group text-[#1A2B4C] font-medium">
                                <span>Istražite usluge</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </motion.div>
                    </motion.div>
                </motion.div>

                <motion.div 
                    ref={vmRef}
                    initial="hidden"
                    animate={vmControls}
                    variants={staggerContainer}
                    className="mt-32"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-16">
                        <motion.div 
                            variants={scaleIn}
                            className="bg-gradient-to-br from-[#1A2B4C] to-[#2A3B5C] rounded-xl p-8 md:p-10 text-white shadow-xl transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                        >
                            <div className="mb-6 inline-block p-4 bg-white/10 rounded-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Vizija</h3>
                            <p className="text-white/90 leading-relaxed">
                                Biti prepoznat kao vodeći autoritet za poslovno savetovanje u oblasti nekretnina i strateškog
                                planiranja, kroz pružanje kvalitetnih i inovativnih rešenja prilagođenih savremenim
                                poslovnim izazovima. Moja vizija je da svojim radom doprinosim stvaranju uspešnijih i
                                održivijih biznisa.
                            </p>
                        </motion.div>

                        <motion.div 
                            variants={scaleIn}
                            className="bg-gray-50 rounded-xl p-8 md:p-10 border border-gray-200 shadow-xl transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                        >
                            <div className="mb-6 inline-block p-4 bg-[#1A2B4C]/10 rounded-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#1A2B4C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-[#1A2B4C]">Misija</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Pružanje vrhunskih konsalting usluga koje omogućavaju klijentima da donesu informisane
                                odluke, prevaziđu poslovne izazove i ostvare dugoročni uspeh. Kroz stručnost,
                                posvećenost i integritet, radim na stvaranju trajne vrednosti i merljivih rezultata
                                za svaku organizaciju i pojedinca sa kojima sarađujem.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div 
                    ref={founderRef}
                    initial="hidden"
                    animate={founderControls}
                    variants={staggerContainer}
                    className="mt-32"
                >
                    <motion.div variants={fadeInUp} className="text-center mb-14">
                        <h3 className="text-3xl font-bold text-[#1A2B4C] mb-4">O osnivaču</h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Saznajte više o osnivaču i vodećem konsultantu Instituta za poslovni konsalting
                        </p>
                    </motion.div>

                    <div className="flex flex-col items-center">
                        <motion.div 
                            variants={scaleIn}
                            className="w-full max-w-3xl rounded-xl shadow-xl overflow-hidden"
                        >
                            <div className="md:flex">
                                <div className="md:w-2/5">
                                    <img 
                                        src="/assets/images/avatar.jpeg" 
                                        alt="Saša Stefanović - Osnivač" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-8 md:w-3/5">
                                    <div className="uppercase text-[#1A2B4C]/70 text-xs font-semibold tracking-wide mb-1">Osnivač i direktor</div>
                                    <h4 className="text-2xl font-bold text-[#1A2B4C]">Saša Stefanović</h4>
                                    <p className="text-gray-500 mt-1 text-sm">MBA, Poslovni konsultant</p>

                                    <div className="h-px w-12 bg-gray-200 my-4"></div>

                                    <p className="text-gray-700 mb-4">
                                        Sa više od 15 godina iskustva u oblasti poslovnog savetovanja, Saša je ekspert za strateški
                                        razvoj i poslovno restrukturiranje. Njegova stručnost u oblasti nekretnina i investicionog
                                        savetovanja doprinela je uspešnoj realizaciji brojnih projekata za klijente različitih profila.
                                    </p>
                                    <p className="text-gray-700">
                                        Saša poseduje MBA iz oblasti poslovnog upravljanja i kontinuirano se usavršava kroz praćenje
                                        najnovijih trendova i praksi u oblasti poslovnog konsaltinga.
                                    </p>

                                    <motion.div 
                                        variants={{
                                            hidden: { opacity: 0 },
                                            visible: {
                                                opacity: 1,
                                                transition: {
                                                    staggerChildren: 0.1,
                                                    delayChildren: 0.3
                                                }
                                            }
                                        }}
                                        className="flex space-x-3 mt-6"
                                    >
                                        <motion.a 
                                            variants={{
                                                hidden: { scale: 0, opacity: 0 },
                                                visible: { scale: 1, opacity: 1 }
                                            }}
                                            href="https://www.linkedin.com/in/sa%C5%A1a-stefanovi%C4%87-95a0281b/" 
                                            className="p-2 bg-[#1A2B4C]/10 rounded-full hover:bg-[#1A2B4C]/20 transition-colors"
                                        >
                                            <svg className="h-4 w-4 text-[#1A2B4C]" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                        </motion.a>
                                        <motion.a 
                                            variants={{
                                                hidden: { scale: 0, opacity: 0 },
                                                visible: { scale: 1, opacity: 1 }
                                            }}
                                            href="#" 
                                            className="p-2 bg-[#1A2B4C]/10 rounded-full hover:bg-[#1A2B4C]/20 transition-colors"
                                        >
                                            <svg className="h-4 w-4 text-[#1A2B4C]" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                            </svg>
                                        </motion.a>
                                        <motion.a 
                                            variants={{
                                                hidden: { scale: 0, opacity: 0 },
                                                visible: { scale: 1, opacity: 1 }
                                            }}
                                            href="mailto:stefanovic.sasa@gmail.com" 
                                            className="p-2 bg-[#1A2B4C]/10 rounded-full hover:bg-[#1A2B4C]/20 transition-colors"
                                        >
                                            <svg className="h-4 w-4 text-[#1A2B4C]" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                                            </svg>
                                        </motion.a>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div 
                            variants={fadeInUp}
                            className="mt-16 text-center"
                        >
                            <a
                                href="#usluge"
                                className="inline-block bg-[#1A2B4C] hover:bg-opacity-90 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                            >
                                Saznajte više o uslugama
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default About;