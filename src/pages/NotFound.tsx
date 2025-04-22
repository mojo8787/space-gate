
import React from "react";
import { Link } from "react-router-dom";
import { Satellite, Home } from "lucide-react";
import Navbar from "../components/Navbar";

const NotFound: React.FC = () => {
  return (
    <div className="bg-space-dark min-h-screen">
      <Navbar />
      
      <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <Satellite size={80} className="text-highlight-turquoise mb-6 animate-float neo-glow p-4 rounded-full" />
        
        <h1 className="text-6xl md:text-8xl font-cairo font-bold text-white mb-6">404</h1>
        
        <h2 className="text-2xl md:text-4xl font-cairo font-bold text-highlight-pink mb-8">
          الصفحة غير موجودة
        </h2>
        
        <p className="text-xl text-gray-300 mb-10 max-w-md">
          يبدو أن الإحداثيات التي تبحث عنها غير موجودة في نظامنا الكوني
        </p>
        
        <Link to="/" className="button-primary flex items-center">
          <Home size={20} className="ml-2" />
          العودة إلى القاعدة الرئيسية
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
