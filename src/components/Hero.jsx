import React from 'react';

function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#1A2B4C]/70 via-[#1A2B4C]/50 to-[#1A2B4C]/70 z-10"></div>
      
      <video 
        className="absolute inset-0 object-cover w-full h-full"
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="/assets/videos/business-background.mp4" type="video/mp4" />
        <img 
          src="/assets/images/business-meeting.jpg" 
          alt="Poslovna atmosfera" 
          className="absolute inset-0 object-cover w-full h-full" 
        />
      </video>
      
      <div className="absolute inset-0 bg-[url('/assets/images/pattern.png')] opacity-10 z-10"></div>
      
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 md:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6 opacity-90 transform transition-all duration-1000 animate-fadeIn">
            <div className="inline-block bg-white px-5 py-2 rounded-md shadow-lg">
              <span className="font-bold text-[#1A2B4C] text-3xl tracking-wide">IPK</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-slideUp">
            Institut za poslovni konsalting
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto animate-fadeIn">
            <span className="font-light">Vaš pouzdani partner za</span> <span className="font-medium">strateško poslovno savetovanje</span> <span className="font-light">i</span> <span className="font-medium">konsalting u oblasti nekretnina</span>
          </p>
          
          <div className="hidden md:flex justify-center gap-8 mb-12 mt-2 animate-fadeIn delay-300">
            <div className="text-center">
              <p className="text-white/90 text-4xl font-bold">15+</p>
              <p className="text-white/70 text-sm uppercase tracking-wider">Godina iskustva</p>
            </div>
            <div className="text-center">
              <p className="text-white/90 text-4xl font-bold">200+</p>
              <p className="text-white/70 text-sm uppercase tracking-wider">Zadovoljnih klijenata</p>
            </div>
            <div className="text-center">
              <p className="text-white/90 text-4xl font-bold">100%</p>
              <p className="text-white/70 text-sm uppercase tracking-wider">Posvećenost</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 animate-fadeIn delay-500">
            <a 
              href="#o-nama" 
              className="bg-white hover:bg-opacity-95 text-[#1A2B4C] px-8 py-4 rounded-md font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Saznajte više
            </a>
            <a 
              href="#kontakt" 
              className="bg-transparent hover:bg-white/20 border-2 border-white text-white px-8 py-4 rounded-md font-medium text-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              Kontaktirajte nas
            </a>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center">
              <p className="text-white/70 text-sm mb-2 tracking-wider">Saznajte više</p>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-[15%] left-[10%] w-32 h-32 border border-white/10 rounded-full z-10 opacity-50"></div>
      <div className="absolute bottom-[20%] right-[15%] w-48 h-48 border border-white/10 rounded-full z-10 opacity-50"></div>
    </div>
  );
}

export default Hero;