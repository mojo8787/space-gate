
import React, { useState, useEffect } from "react";
import { Shield, ShieldOff } from "lucide-react";

interface SecurityCounterProps {
  className?: string;
}

const SecurityCounter: React.FC<SecurityCounterProps> = ({ className }) => {
  const [blockedAttacks, setBlockedAttacks] = useState(32567);
  const [lastAttackTime, setLastAttackTime] = useState(new Date());
  const [isAttacking, setIsAttacking] = useState(false);

  useEffect(() => {
    // Generate a random attack every 3-8 seconds
    const attackInterval = setInterval(() => {
      const shouldAttack = Math.random() > 0.3; // 70% chance of attack
      
      if (shouldAttack) {
        setIsAttacking(true);
        setBlockedAttacks(prev => prev + Math.floor(Math.random() * 3) + 1);
        setLastAttackTime(new Date());
        
        // Reset attack state after animation
        setTimeout(() => {
          setIsAttacking(false);
        }, 800);
      }
    }, Math.random() * 5000 + 3000);

    return () => clearInterval(attackInterval);
  }, []);

  // Format the time as HH:MM:SS
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('ar-IQ');
  };

  return (
    <div className={`${className} space-card text-center`}>
      <div className="flex justify-center mb-2">
        {isAttacking ? (
          <ShieldOff 
            size={40} 
            className="text-highlight-yellow animate-pulse yellow-glow"
          />
        ) : (
          <Shield 
            size={40} 
            className="text-highlight-turquoise neo-glow"
          />
        )}
      </div>
      
      <h3 className="text-2xl font-cairo mb-3 text-white">عداد الهجمات السيبرانية</h3>
      
      <div className="text-4xl font-bold font-cairo mb-2 text-highlight-turquoise">
        {blockedAttacks.toLocaleString('ar-IQ')}
      </div>
      
      <div className="text-sm text-gray-300">
        <p>آخر محاولة اختراق: <span className="text-highlight-yellow">{formatTime(lastAttackTime)}</span></p>
        <p className="mt-1 text-xs">جميع المحاولات تم صدها بنجاح</p>
      </div>
      
      <div className={`mt-3 h-1.5 bg-gray-700 rounded-full overflow-hidden transition-all duration-300 ${isAttacking ? "neo-glow" : ""}`}>
        <div 
          className={`h-full ${isAttacking ? "bg-highlight-yellow" : "bg-highlight-turquoise"} rounded-full transition-all duration-300`} 
          style={{ width: isAttacking ? "100%" : "85%" }}
        ></div>
      </div>
    </div>
  );
};

export default SecurityCounter;
