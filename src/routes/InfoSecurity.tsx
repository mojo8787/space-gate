
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const InfoSecurity: React.FC = () => {
  return (
    <div className="bg-space-dark min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-cairo font-bold text-white mb-8 text-center">
            أمن <span className="text-highlight-yellow">المعلومات</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto text-center">
            قريبًا سيتم إضافة نفق الواقع المعزز الذي يوضح طبقات الحماية المتعددة
          </p>

          <div className="space-card max-w-3xl mx-auto p-10 text-center">
            <div className="text-5xl text-highlight-yellow mb-6">🛡️</div>
            <h2 className="text-2xl font-cairo font-bold text-white mb-4">
              الصفحة قيد التطوير
            </h2>
            <p className="text-gray-300">
              يرجى العودة قريبًا لاستكشاف حلولنا المتكاملة في مجال أمن المعلومات
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default InfoSecurity;
