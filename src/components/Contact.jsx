import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        policyAccepted: false
    });

    const [focusedField, setFocusedField] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const headerControls = useAnimation();
    const formControls = useAnimation();
    const infoControls = useAnimation();

    const [headerRef, headerInView] = useInView({ threshold: 0.2, triggerOnce: true });
    const [formRef, formInView] = useInView({ threshold: 0.1, triggerOnce: true });
    const [infoRef, infoInView] = useInView({ threshold: 0.1, triggerOnce: true });

    useEffect(() => {
        if (headerInView) headerControls.start('visible');
        if (formInView) formControls.start('visible');
        if (infoInView) infoControls.start('visible');
    }, [headerControls, headerInView, formControls, formInView, infoControls, infoInView]);

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleFocus = (field) => {
        setFocusedField(field);
    };

    const handleBlur = () => {
        setFocusedField(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        await new Promise(resolve => setTimeout(resolve, 1500));

        setSubmitting(false);
        setSubmitted(true);

        setTimeout(() => {
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
                policyAccepted: false
            });
            setSubmitted(false);
        }, 5000);
    };

    return (
        <section id="kontakt" className="relative py-16 md:py-24 overflow-hidden bg-white">
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-gray-50 to-transparent opacity-70"></div>
            <div className="absolute top-40 right-0 w-80 h-80 rounded-full bg-[#1A2B4C]/5 blur-3xl"></div>
            <div className="absolute bottom-40 left-0 w-80 h-80 rounded-full bg-[#1A2B4C]/5 blur-3xl"></div>
            <div className="absolute top-1/3 left-20 w-40 h-40 border border-[#1A2B4C]/10 rounded-full opacity-20"></div>
            <div className="absolute bottom-1/4 right-20 w-20 h-20 border border-[#1A2B4C]/10 rounded-full opacity-20"></div>

            <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
                <motion.div
                    ref={headerRef}
                    initial="hidden"
                    animate={headerControls}
                    variants={staggerContainer}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <motion.div variants={fadeInUp} className="inline-block mb-3">
                        <div className="h-1 w-12 bg-[#1A2B4C] rounded-full mb-2 mx-auto"></div>
                        <div className="h-1 w-24 bg-[#1A2B4C] rounded-full mx-auto"></div>
                    </motion.div>
                    <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-[#1A2B4C] mb-5">
                        Kontaktirajte nas
                    </motion.h2>
                    <motion.p variants={fadeInUp} className="text-gray-600 text-lg md:text-xl">
                        Spremni smo da odgovorimo na sva Vaša pitanja i zakazujemo konsultacije
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                    <motion.div
                        ref={formRef}
                        initial="hidden"
                        animate={formControls}
                        variants={staggerContainer}
                        className="lg:col-span-2"
                    >
                        <motion.div
                            variants={fadeInUp}
                            className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
                        >
                            <div className="p-6 md:p-8">
                                <h3 className="text-2xl font-bold text-[#1A2B4C] mb-6">Pošaljite upit</h3>

                                {submitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
                                    >
                                        <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
                                            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h4 className="text-xl font-semibold text-green-800 mb-2">Poruka uspešno poslata</h4>
                                        <p className="text-green-700">Hvala Vam na upitu. Kontaktiraćemo Vas u najkraćem mogućem roku.</p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <motion.div variants={fadeInUp}>
                                                <label
                                                    htmlFor="name"
                                                    className={`block text-sm font-medium mb-2 transition-colors duration-300 ${focusedField === 'name' ? 'text-[#1A2B4C]' : 'text-gray-600'
                                                        }`}
                                                >
                                                    Ime i prezime
                                                </label>
                                                <div className={`relative rounded-md shadow-sm border transition-colors duration-300 ${focusedField === 'name' ? 'border-[#1A2B4C]' : 'border-gray-300'
                                                    }`}>
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        onFocus={() => handleFocus('name')}
                                                        onBlur={handleBlur}
                                                        className="block w-full px-4 py-3 rounded-md focus:outline-none"
                                                        placeholder="Vaše ime i prezime"
                                                        required
                                                    />
                                                </div>
                                            </motion.div>

                                            <motion.div variants={fadeInUp}>
                                                <label
                                                    htmlFor="email"
                                                    className={`block text-sm font-medium mb-2 transition-colors duration-300 ${focusedField === 'email' ? 'text-[#1A2B4C]' : 'text-gray-600'
                                                        }`}
                                                >
                                                    Email adresa
                                                </label>
                                                <div className={`relative rounded-md shadow-sm border transition-colors duration-300 ${focusedField === 'email' ? 'border-[#1A2B4C]' : 'border-gray-300'
                                                    }`}>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        onFocus={() => handleFocus('email')}
                                                        onBlur={handleBlur}
                                                        className="block w-full px-4 py-3 rounded-md focus:outline-none"
                                                        placeholder="vasa.adresa@email.com"
                                                        required
                                                    />
                                                </div>
                                            </motion.div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <motion.div variants={fadeInUp}>
                                                <label
                                                    htmlFor="phone"
                                                    className={`block text-sm font-medium mb-2 transition-colors duration-300 ${focusedField === 'phone' ? 'text-[#1A2B4C]' : 'text-gray-600'
                                                        }`}
                                                >
                                                    Telefon <span className="text-gray-400 text-xs">(opcionalno)</span>
                                                </label>
                                                <div className={`relative rounded-md shadow-sm border transition-colors duration-300 ${focusedField === 'phone' ? 'border-[#1A2B4C]' : 'border-gray-300'
                                                    }`}>
                                                    <input
                                                        type="tel"
                                                        id="phone"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        onFocus={() => handleFocus('phone')}
                                                        onBlur={handleBlur}
                                                        className="block w-full px-4 py-3 rounded-md focus:outline-none"
                                                        placeholder="+381 XX XXX XXXX"
                                                    />
                                                </div>
                                            </motion.div>

                                            <motion.div variants={fadeInUp}>
                                                <label
                                                    htmlFor="subject"
                                                    className={`block text-sm font-medium mb-2 transition-colors duration-300 ${focusedField === 'subject' ? 'text-[#1A2B4C]' : 'text-gray-600'
                                                        }`}
                                                >
                                                    Tema
                                                </label>
                                                <div className={`relative rounded-md shadow-sm border transition-colors duration-300 ${focusedField === 'subject' ? 'border-[#1A2B4C]' : 'border-gray-300'
                                                    }`}>
                                                    <select
                                                        id="subject"
                                                        name="subject"
                                                        value={formData.subject}
                                                        onChange={handleChange}
                                                        onFocus={() => handleFocus('subject')}
                                                        onBlur={handleBlur}
                                                        className="block w-full px-4 py-3 rounded-md focus:outline-none appearance-none bg-white"
                                                        required
                                                    >
                                                        <option value="" disabled>Odaberite temu</option>
                                                        <option value="konsultacije">Zakazivanje konsultacija</option>
                                                        <option value="saradnja">Poslovna saradnja</option>
                                                        <option value="usluge">Upit za usluge</option>
                                                        <option value="ostalo">Ostalo</option>
                                                    </select>
                                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
                                                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </div>

                                        <motion.div variants={fadeInUp}>
                                            <label
                                                htmlFor="message"
                                                className={`block text-sm font-medium mb-2 transition-colors duration-300 ${focusedField === 'message' ? 'text-[#1A2B4C]' : 'text-gray-600'
                                                    }`}
                                            >
                                                Poruka
                                            </label>
                                            <div className={`relative rounded-md shadow-sm border transition-colors duration-300 ${focusedField === 'message' ? 'border-[#1A2B4C]' : 'border-gray-300'
                                                }`}>
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    onFocus={() => handleFocus('message')}
                                                    onBlur={handleBlur}
                                                    rows={5}
                                                    className="block w-full px-4 py-3 rounded-md focus:outline-none"
                                                    placeholder="Opišite čime možemo da Vam pomognemo..."
                                                    required
                                                ></textarea>
                                            </div>
                                        </motion.div>

                                        <motion.div variants={fadeInUp} className="flex items-start">
                                            <div className="flex items-center h-5">
                                                <input
                                                    id="policyAccepted"
                                                    name="policyAccepted"
                                                    type="checkbox"
                                                    checked={formData.policyAccepted}
                                                    onChange={handleChange}
                                                    className="h-5 w-5 text-[#1A2B4C] focus:ring-[#1A2B4C] rounded"
                                                    required
                                                />
                                            </div>
                                            <label htmlFor="policyAccepted" className="ml-2 block text-sm text-gray-600">
                                                Slažem se sa <a href="#" className="text-[#1A2B4C] hover:underline">politikom privatnosti</a> i obradom podataka u svrhu odgovora na upit
                                            </label>
                                        </motion.div>

                                        <motion.div variants={fadeInUp} className="flex justify-end">
                                            <button
                                                type="submit"
                                                disabled={submitting}
                                                className={`inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#1A2B4C] hover:bg-opacity-90 focus:outline-none transition-all duration-300 ${submitting ? 'opacity-70 cursor-not-allowed' : ''
                                                    }`}
                                            >
                                                {submitting ? (
                                                    <>
                                                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                        </svg>
                                                        Slanje...
                                                    </>
                                                ) : 'Pošaljite poruku'}
                                            </button>
                                        </motion.div>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        ref={infoRef}
                        initial="hidden"
                        animate={infoControls}
                        variants={staggerContainer}
                        className="lg:col-span-1"
                    >
                        <motion.div variants={fadeInUp} className="bg-[#1A2B4C] text-white rounded-xl shadow-lg overflow-hidden h-full">
                            <div className="p-6 md:p-8">
                                <h3 className="text-2xl font-bold mb-6">Kontakt informacije</h3>

                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-white/80 text-sm font-medium">Telefon</h4>
                                            <p className="mt-1">
                                                <a href="tel:+381112345678" className="text-white hover:underline transition-colors">+381 11 234 5678</a>
                                            </p>
                                            <p className="mt-1">
                                                <a href="tel:+381631234567" className="text-white hover:underline transition-colors">+381 63 123 4567</a>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-white/80 text-sm font-medium">Email</h4>
                                            <p className="mt-1">
                                                <a href="mailto:info@institut-konsalting.rs" className="text-white hover:underline transition-colors">info@institut-konsalting.rs</a>
                                            </p>
                                            <p className="mt-1">
                                                <a href="mailto:konsultacije@institut-konsalting.rs" className="text-white hover:underline transition-colors">konsultacije@institut-konsalting.rs</a>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-white/80 text-sm font-medium">Adresa</h4>
                                            <address className="mt-1 not-italic">
                                                Brankova 16<br />
                                                11000 Beograd, Srbija
                                            </address>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-white/80 text-sm font-medium">Radno vreme</h4>
                                            <p className="mt-1">Ponedeljak - Petak: 9:00 - 17:00</p>
                                            <p className="mt-1">Vikend: Zatvoreno</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-8 border-t border-white/20">
                                    <h4 className="font-semibold mb-4">Povežite se sa nama</h4>
                                    <div className="flex space-x-4">
                                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                            </svg>
                                        </a>
                                        <a href="https://www.linkedin.com/in/sa%C5%A1a-stefanovi%C4%87-95a0281b/" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                        </a>
                                        <a href="https://www.facebook.com/sasa.stefanovic.946179" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: { delay: 0.6, duration: 0.6 }
                    }}
                    className="mt-16 lg:mt-24"
                >
                    <div className="h-96 w-full rounded-xl overflow-hidden bg-gray-100 shadow-lg relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000.6723876415723!2d20.45476439783521!3d44.814863286305695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aad5a8baf5f%3A0xd18b9b98772920aa!2z0JHRgNCw0L3QutC-0LLQsCAxNiwg0JHQtdC-0LPRgNCw0LQgMTEwMDA!5e0!3m2!1ssr!2srs!4v1745970138376!5m2!1ssr!2srs" width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Lokacija Institut za poslovni konsalting"
                        ></iframe>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Contact;