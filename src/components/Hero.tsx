import React, { useRef, useEffect } from 'react';
import SpaceScene from './SpaceScene';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      const heroElement = heroRef.current;
      const translateY = scrollPosition * 0.4; // Parallax effect

      heroElement.style.transform = `translateY(${translateY}px)`;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div className="relative min-h-screen overflow-hidden">
      {/* Space scene background */}
      <SpaceScene className="absolute inset-0 z-0" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-space-darker/50 via-transparent to-space-dark z-10"></div>
      
      {/* Content */}
      <div ref={heroRef} className="relative z-20 container mx-auto px-4 pt-40 pb-20 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-cairo text-center font-bold mb-6">
          <span className="block">إبداع عراقي… لإدارة المباني الذكية</span>
          <span className="block mt-2 bg-gradient-to-r from-highlight-turquoise to-highlight-pink text-transparent bg-clip-text">
            من قلب بغداد
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl text-center">
          بوابة فضائيّة تحمي البِنَى التحتيّة الرقميّة في العراق وتديرها بذكاء الأشياء
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="button-primary animate-float">ابدأ الرحلة</button>
          <button className="button-outline">اطلب عرضاً توضيحياً</button>
        </div>
        
        <div className="mt-28 flex flex-col items-center">
          <div className="w-6 h-16 border-2 border-white/30 rounded-full relative">
            <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-highlight-turquoise rounded-full animate-bounce"></div>
          </div>
          <span className="mt-4 text-sm text-white/60">اسحب للاستكشاف</span>
        </div>
      </div>
    </div>;
};

export default Hero;
