import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function ClientTestimonials() {
    const headerControls = useAnimation();
    const [headerRef, headerInView] = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    const testimonialsControls = useAnimation();
    const [testimonialsRef, testimonialsInView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    useEffect(() => {
        if (headerInView) {
            headerControls.start('visible');
        }
        if (testimonialsInView) {
            testimonialsControls.start('visible');
        }
    }, [headerControls, headerInView, testimonialsControls, testimonialsInView]);

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
                staggerChildren: 0.15
            }
        }
    };

    const getInitials = (name) => {
        return name
            .split(' ')
            .map(word => word[0])
            .join('')
            .substring(0, 2)
            .toUpperCase();
    };

    const getAvatarColor = (name) => {
        const colors = [
            'bg-blue-600',
            'bg-indigo-600',
            'bg-purple-600',
            'bg-pink-600',
            'bg-red-600',
            'bg-orange-600',
            'bg-amber-600',
            'bg-yellow-600',
            'bg-lime-600',
            'bg-green-600',
            'bg-emerald-600',
            'bg-teal-600',
            'bg-cyan-600',
            'bg-sky-600'
        ];
        
        const hash = name.split('').reduce((acc, char) => {
            return acc + char.charCodeAt(0);
        }, 0);
        
        return colors[hash % colors.length];
    };

    // Using the 5 testimonials you already have
    const testimonials = [
        {
            id: 1,
            name: "Milan Petrović",
            role: "Direktor, Stambena Zadruga 'Novi Dom'",
            company: "Stambena Zadruga 'Novi Dom'",
            testimonial: "Saradnja sa Institutom za poslovni konsalting nam je omogućila da prevaziđemo izazove na tržištu nekretnina i postavimo jasnu strategiju za budući rast. Sašin pristup i ekspertiza su bili ključni za naš uspeh.",
            rating: 5
        },
        {
            id: 2,
            name: "Ana Marković",
            role: "Finansijski direktor, Eksluziv Promet",
            company: "Eksluziv Promet d.o.o.",
            testimonial: "Institut za poslovni konsalting je pružio izuzetno vredne uvide u optimizaciju naših finansijskih procesa. Zahvaljujući njihovim savetima, uspeli smo da značajno smanjimo troškove i povećamo profitabilnost našeg poslovanja.",
            rating: 5
        },
        {
            id: 3,
            name: "Nikola Jovanović",
            role: "Vlasnik, JN Properties",
            company: "JN Properties",
            testimonial: "Saša je pokazao izuzetno razumevanje specifičnosti tržišta luksuznih nekretnina. Njegova analiza tržišnih trendova i preporuke za pozicioniranje našeg brenda bili su tačni i izuzetno korisni. Drago mi je što smo imali priliku da sarađujemo.",
            rating: 4
        },
        {
            id: 5,
            name: "Marko Kovačević",
            role: "CEO, BelTech Solutions",
            company: "BelTech Solutions",
            testimonial: "Saradnja sa Institutom za poslovni konsalting je premašila naša očekivanja. Njihov strateški pristup poslovanju i dublji uvid u tržište pomogli su nam da donesemo ključne odluke u pravom trenutku. Preporučujem ih svima koji traže profesionalnog konsultanta.",
            rating: 5
        },
        {
            id: 6,
            name: "Tamara Perić",
            role: "Marketing direktor, Urban Living",
            company: "Urban Living d.o.o.",
            testimonial: "Zahvaljujući stručnim savetima Instituta za poslovni konsalting uspeli smo da redefinišemo našu marketinšku strategiju i pozicioniramo se kao lider na tržištu nekretnina srednjeg segmenta. Rezultati su bili vidljivi već u prvom kvartalu nakon implementacije.",
            rating: 4
        },
    ];

    const generateStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <svg 
                key={i} 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-4 w-4 ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`} 
                viewBox="0 0 20 20" 
                fill="currentColor"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ));
    };

    return (
        <section id="iskustva-klijenata" className="relative py-16 md:py-24 overflow-hidden bg-gray-50">
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
            <div className="absolute top-40 left-10 w-64 h-64 rounded-full bg-[#1A2B4C]/5 blur-3xl"></div>
            <div className="absolute bottom-40 right-10 w-64 h-64 rounded-full bg-[#1A2B4C]/5 blur-3xl"></div>
            <div className="absolute top-1/4 right-20 w-32 h-32 border border-[#1A2B4C]/10 rounded-full opacity-30"></div>
            <div className="absolute bottom-1/3 left-20 w-16 h-16 border border-[#1A2B4C]/10 rounded-full opacity-30"></div>
            
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
                        Iskustva klijenata
                    </motion.h2>
                    <motion.p variants={fadeInUp} className="text-gray-600 text-lg md:text-xl">
                        Pogledajte šta naši klijenti kažu o saradnji sa nama
                    </motion.p>
                </motion.div>

                <motion.div 
                    ref={testimonialsRef}
                    initial="hidden"
                    animate={testimonialsControls}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                >
                    {testimonials.map((testimonial) => (
                        <motion.div
                            key={testimonial.id}
                            variants={fadeInUp}
                            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 relative flex flex-col h-full border border-gray-100"
                        >
                            <div className="mb-6">
                                <svg className="h-8 w-8 text-[#1A2B4C]/20" fill="currentColor" viewBox="0 0 32 32">
                                    <path d="M10 8v6c0 6.2-4.4 11.7-10 14l-.8-1.6C3.7 24.1 6 20.3 6 16H0V8h10zm18 0v6c0 6.2-4.4 11.7-10 14l-.8-1.6C21.7 24.1 24 20.3 24 16h-6V8h10z" />
                                </svg>
                            </div>
                            <p className="text-gray-700 flex-grow mb-6 leading-relaxed">
                                "{testimonial.testimonial}"
                            </p>
                            <div className="flex mb-4">
                                {generateStars(testimonial.rating)}
                            </div>
                            <div className="flex items-center">
                                <div className={`w-12 h-12 rounded-full overflow-hidden mr-4 flex items-center justify-center text-white font-bold ${getAvatarColor(testimonial.name)}`}>
                                    {getInitials(testimonial.name)}
                                </div>
                                <div>
                                    <p className="font-semibold text-[#1A2B4C]">{testimonial.name}</p>
                                    <p className="text-sm text-gray-600">{testimonial.role}</p>
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
                            delay: 0.4,
                            duration: 0.6
                        }
                    }}
                    className="mt-20 text-center"
                >
                    <div className="max-w-3xl mx-auto bg-white rounded-xl p-8 md:p-12 shadow-xl border border-gray-200">
                        <h3 className="text-2xl md:text-3xl font-bold text-[#1A2B4C] mb-4">
                            Želite da podelite Vaše iskustvo?
                        </h3>
                        <p className="text-gray-700 mb-8">
                            Vaše mišljenje nam je važno. Podelite Vaše iskustvo sa našim uslugama i pomozite nam da budemo još bolji.
                        </p>
                        <a 
                            href="#kontakt" 
                            className="inline-block bg-[#1A2B4C] hover:bg-opacity-90 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                        >
                            Pošaljite utisak
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default ClientTestimonials;