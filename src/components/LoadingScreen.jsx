import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function LoadingScreen({ finishLoading }) {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      finishLoading();
    }, 2400);
    
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.floor(Math.random() * 10) + 5;
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 200);
    
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [finishLoading]);
  
  const containerVariants = {
    initial: { opacity: 1 },
    exit: { 
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };
  
  const logoVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };
  
  const progressVariants = {
    initial: { width: "0%" },
    animate: { 
      width: `${progress}%`,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };
  
  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };
  
  return (
    <motion.div 
      className="fixed inset-0 bg-[#1A2B4C] flex flex-col items-center justify-center z-50"
      variants={containerVariants}
      initial="initial"
      exit="exit"
    >
      <div className="w-full max-w-md px-4">
        <motion.div 
          className="flex flex-col items-center justify-center"
          variants={logoVariants}
          initial="initial"
          animate="animate"
        >
          <div className="p-5 rounded-xl  flex items-center justify-center">
            <img 
              src="/logo.png" 
              alt="IPK Logo" 
              className="h-72 w-auto"
            />
          </div>
        </motion.div>
        
        <div className="w-full bg-white/10 h-1 rounded-full  mb-3 overflow-hidden">
          <motion.div 
            className="bg-white h-full rounded-full"
            variants={progressVariants}
            initial="initial"
            animate="animate"
          ></motion.div>
        </div>
        
        <div className="flex justify-between items-center text-sm text-white/70">
          <span>Učitavanje resursa</span>
          <span>{progress}%</span>
        </div>
      </div>
      
      <div className="absolute top-1/4 left-[10%] w-32 h-32 border border-white/10 rounded-full opacity-30"></div>
      <div className="absolute bottom-1/3 right-[15%] w-48 h-48 border border-white/10 rounded-full opacity-30"></div>
      <div className="absolute bottom-1/4 left-[20%] w-16 h-16 border border-white/10 rounded-full opacity-30"></div>
    </motion.div>
  );
}

export default LoadingScreen;