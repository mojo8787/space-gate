
import React from "react";
import { Satellite, Shield, Database, Globe, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-space-darker pt-16 pb-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-highlight-turquoise/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-highlight-pink/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/a0e36fe8-0c93-4ad7-9211-b4b1d91e85fb.png" 
                alt="Space Gate Logo" 
                className="h-10 w-10 ml-2" 
              />
              <h3 className="text-xl font-cairo font-bold text-white">بوابة الفضاء</h3>
            </div>
            <p className="text-gray-400 mb-6">
              شركة تكنولوجيا عراقية متخصصة في إدارة البنية التحتية الرقمية وحمايتها باستخدام أحدث تقنيات إنترنت الأشياء والأمن السيبراني.
            </p>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-cairo font-bold text-white mb-6">روابط سريعة</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/iot-solutions" className="text-gray-400 hover:text-highlight-turquoise transition-colors flex items-center">
                  <Satellite size={16} className="ml-2" />
                  <span>حلول IoT</span>
                </Link>
              </li>
              <li>
                <Link to="/info-security" className="text-gray-400 hover:text-highlight-turquoise transition-colors flex items-center">
                  <Shield size={16} className="ml-2" />
                  <span>أمن المعلومات</span>
                </Link>
              </li>
              <li>
                <Link to="/ems" className="text-gray-400 hover:text-highlight-turquoise transition-colors flex items-center">
                  <Database size={16} className="ml-2" />
                  <span>نظام إدارة المؤسسة</span>
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-400 hover:text-highlight-turquoise transition-colors flex items-center">
                  <Globe size={16} className="ml-2" />
                  <span>دراسات حالة</span>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Contact */}
          <div>
            <h3 className="text-lg font-cairo font-bold text-white mb-6">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="text-gray-400 flex items-center">
                <MapPin size={16} className="ml-2 text-highlight-turquoise" />
                <span>بغداد، العراق</span>
              </li>
              <li className="text-gray-400 flex items-center">
                <Phone size={16} className="ml-2 text-highlight-turquoise" />
                <span>+964 123 456 7890</span>
              </li>
              <li className="text-gray-400 flex items-center">
                <Mail size={16} className="ml-2 text-highlight-turquoise" />
                <span>info@spacegate.iq</span>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-cairo font-bold text-white mb-6">النشرة الإخبارية</h3>
            <p className="text-gray-400 mb-4">
              اشترك للحصول على آخر التحديثات والأخبار في مجال التكنولوجيا والأمن السيبراني
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="bg-gray-800 text-white px-4 py-2 rounded-r-lg focus:outline-none focus:ring-1 focus:ring-highlight-turquoise w-full"
              />
              <button
                type="submit"
                className="bg-highlight-turquoise text-space-dark font-bold px-4 py-2 rounded-l-lg"
              >
                اشترك
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} بوابة الفضاء - جميع الحقوق محفوظة
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                الشروط والأحكام
              </a>
              <span className="text-gray-600">|</span>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                سياسة الخصوصية
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
